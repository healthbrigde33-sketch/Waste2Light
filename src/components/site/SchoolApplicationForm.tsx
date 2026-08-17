import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const fieldClass =
  "mt-2 w-full rounded-sm border border-hairline bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand focus:ring-1 focus:ring-brand";

const labelClass = "text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground";

export function SchoolApplicationForm({ className }: { className?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      school_name: String(data.get("school_name") ?? "").trim(),
      contact_name: String(data.get("contact_name") ?? "").trim(),
      role: String(data.get("role") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim() || null,
      location: String(data.get("location") ?? "").trim(),
      student_count: String(data.get("student_count") ?? "").trim() || null,
      notes: String(data.get("notes") ?? "").trim() || null,
    };

    if (
      !payload.school_name ||
      !payload.contact_name ||
      !payload.role ||
      !payload.email ||
      !payload.location
    ) {
      toast.error("Please complete the required fields.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("school_applications").insert(payload);
    setSubmitting(false);

    if (error) {
      toast.error("Your application could not be sent. Please try again.");
      return;
    }

    form.reset();
    setDone(true);
    toast.success("Application received.");
  }

  if (done) {
    return (
      <div className={cn("rounded-sm border border-brand/40 bg-brand/5 p-8", className)}>
        <h3 className="font-display text-xl font-bold tracking-tight">Application received.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thank you. We have your school's details and will follow up by email to discuss setting up
          a Green Energy Corner.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 text-sm font-medium text-brand underline underline-offset-4"
        >
          Submit another school
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="sch-name">
            School name
          </label>
          <input id="sch-name" name="school_name" required className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="sch-location">
            Location
          </label>
          <input
            id="sch-location"
            name="location"
            required
            placeholder="City, state or region"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="sch-contact">
            Contact person
          </label>
          <input
            id="sch-contact"
            name="contact_name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="sch-role">
            Role
          </label>
          <input
            id="sch-role"
            name="role"
            required
            placeholder="Principal, STEM coordinator, teacher"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="sch-email">
            Email
          </label>
          <input
            id="sch-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="sch-phone">
            Phone (optional)
          </label>
          <input id="sch-phone" name="phone" type="tel" className={fieldClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="sch-students">
          Approximate number of students (optional)
        </label>
        <input id="sch-students" name="student_count" className={fieldClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="sch-notes">
          Anything else we should know (optional)
        </label>
        <textarea id="sch-notes" name="notes" rows={4} className={cn(fieldClass, "resize-y")} />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-brand/90 disabled:opacity-60"
      >
        {submitting ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <ArrowRight className="size-4" aria-hidden="true" />
        )}
        {submitting ? "Sending" : "Submit application"}
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Submitting this form starts a conversation; it does not create an agreement. Details are
        used only to respond to your school.
      </p>
    </form>
  );
}
