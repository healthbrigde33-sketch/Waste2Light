import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const enquiryTypes = [
  "School enquiry",
  "Organisation or sponsor",
  "Technology partner",
  "Collaboration",
  "General",
];

const fieldClass =
  "mt-2 w-full rounded-sm border border-hairline bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand focus:ring-1 focus:ring-brand";

const labelClass = "text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground";

export function EnquiryForm({ className }: { className?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      organisation: String(data.get("organisation") ?? "").trim() || null,
      enquiry_type: String(data.get("enquiry_type") ?? "General"),
      message: String(data.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Please complete your name, email and message.");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("contact_enquiries").insert(payload);
    setSubmitting(false);

    if (error) {
      toast.error("Your message could not be sent. Please try again.");
      return;
    }

    form.reset();
    setDone(true);
    toast.success("Message received. We'll be in touch.");
  }

  if (done) {
    return (
      <div className={cn("rounded-sm border border-brand/40 bg-brand/5 p-8", className)}>
        <h3 className="font-display text-xl font-bold tracking-tight">Message received.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thank you for reaching out to Waste2Light. We have your enquiry and will respond to the
          email address you provided.
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 text-sm font-medium text-brand underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="enq-name">
            Your name
          </label>
          <input id="enq-name" name="name" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="enq-email">
            Email
          </label>
          <input
            id="enq-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="enq-org">
            School or organisation
          </label>
          <input id="enq-org" name="organisation" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="enq-type">
            Type of enquiry
          </label>
          <select id="enq-type" name="enquiry_type" defaultValue="General" className={fieldClass}>
            {enquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="enq-message">
          Message
        </label>
        <textarea
          id="enq-message"
          name="message"
          rows={5}
          required
          className={cn(fieldClass, "resize-y")}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-brand/90 disabled:opacity-60"
      >
        {submitting ? (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        ) : (
          <ArrowRight className="size-4" aria-hidden="true" />
        )}
        {submitting ? "Sending" : "Send message"}
      </button>

      <p className="text-xs leading-relaxed text-muted-foreground">
        Your details are used only to respond to this enquiry. See our Privacy Policy.
      </p>
    </form>
  );
}
