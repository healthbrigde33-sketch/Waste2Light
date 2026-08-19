import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { enquiryPayloadSchema, schoolApplicationPayloadSchema } from "@/lib/form-schemas";

type NotifyPayload = {
  form: "Contact enquiry" | "School application";
  subject: string;
  fields: Record<string, string | null | undefined>;
};

async function notify(payload: NotifyPayload) {
  const url = process.env["FORM_NOTIFY_WEBHOOK_URL"];
  if (!url) {
    console.warn("[notify] FORM_NOTIFY_WEBHOOK_URL not configured; skipping notification");
    return;
  }
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 5000);
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) console.error("[notify] webhook responded", res.status);
  } catch (error) {
    console.error("[notify] webhook failed", error);
  }
}

function serverSupabase() {
  const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
  return createClient<Database>(process.env["SUPABASE_URL"]!, key, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => enquiryPayloadSchema.parse(input))
  .handler(async ({ data }) => {
    const supabase = serverSupabase();
    const { error } = await supabase.from("contact_enquiries").insert(data);
    if (error) {
      console.error("[enquiry] insert failed", error.message);
      throw new Error("Could not save enquiry");
    }

    await notify({
      form: "Contact enquiry",
      subject: `New enquiry from ${data.name} (${data.enquiry_type})`,
      fields: {
        Name: data.name,
        Email: data.email,
        Organisation: data.organisation,
        Type: data.enquiry_type,
        Message: data.message,
      },
    });

    return { ok: true } as const;
  });

export const submitSchoolApplication = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => schoolApplicationPayloadSchema.parse(input))
  .handler(async ({ data }) => {
    const supabase = serverSupabase();
    const { error } = await supabase.from("school_applications").insert(data);
    if (error) {
      console.error("[school application] insert failed", error.message);
      throw new Error("Could not save application");
    }

    await notify({
      form: "School application",
      subject: `New school application: ${data.school_name}`,
      fields: {
        School: data.school_name,
        Location: data.location,
        Contact: data.contact_name,
        Role: data.role,
        Email: data.email,
        Phone: data.phone,
        Students: data.student_count,
        Notes: data.notes,
      },
    });

    return { ok: true } as const;
  });
