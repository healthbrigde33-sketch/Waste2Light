import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import { schoolApplicationSchema, fieldErrors } from "@/lib/form-schemas";

const fieldClass =
  "mt-2 w-full rounded-sm border border-hairline bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand focus:ring-1 focus:ring-brand";

const errorFieldClass = "border-destructive focus:border-destructive focus:ring-destructive";

const labelClass = "text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p role="alert" className="mt-2 text-xs text-destructive">
      {message}
    </p>
  );
}

export function SchoolApplicationForm({ className }: { className?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const parsed = schoolApplicationSchema.safeParse({
      school_name: String(data.get("school_name") ?? ""),
      contact_name: String(data.get("contact_name") ?? ""),
      role: String(data.get("role") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      location: String(data.get("location") ?? ""),
      student_count: String(data.get("student_count") ?? ""),
      notes: String(data.get("notes") ?? ""),
    });

    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    const { error } = await supabase.from("school_applications").insert(parsed.data);
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
    <form onSubmit={handleSubmit} noValidate className={cn("space-y-6", className)}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="sch-name">
            School name
          </label>
          <input
            id="sch-name"
            name="school_name"
            required
            maxLength={100}
            aria-invalid={!!errors['school_name']}
            className={cn(fieldClass, errors['school_name'] && errorFieldClass)}
          />
          <FieldError message={errors['school_name']} />
        </div>
        <div>
          <label className={labelClass} htmlFor="sch-location">
            Location
          </label>
          <input
            id="sch-location"
            name="location"
            required
            maxLength={120}
            placeholder="City, state or region"
            aria-invalid={!!errors['location']}
            className={cn(fieldClass, errors['location'] && errorFieldClass)}
          />
          <FieldError message={errors['location']} />
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
            maxLength={100}
            autoComplete="name"
            aria-invalid={!!errors['contact_name']}
            className={cn(fieldClass, errors['contact_name'] && errorFieldClass)}
          />
          <FieldError message={errors['contact_name']} />
        </div>
        <div>
          <label className={labelClass} htmlFor="sch-role">
            Role
          </label>
          <input
            id="sch-role"
            name="role"
            required
            maxLength={100}
            placeholder="Principal, STEM coordinator, teacher"
            aria-invalid={!!errors['role']}
            className={cn(fieldClass, errors['role'] && errorFieldClass)}
          />
          <FieldError message={errors['role']} />
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
            maxLength={255}
            autoComplete="email"
            aria-invalid={!!errors['email']}
            className={cn(fieldClass, errors['email'] && errorFieldClass)}
          />
          <FieldError message={errors['email']} />
        </div>
        <div>
          <label className={labelClass} htmlFor="sch-phone">
            Phone (optional)
          </label>
          <input
            id="sch-phone"
            name="phone"
            type="tel"
            maxLength={20}
            aria-invalid={!!errors['phone']}
            className={cn(fieldClass, errors['phone'] && errorFieldClass)}
          />
          <FieldError message={errors['phone']} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="sch-students">
          Approximate number of students (optional)
        </label>
        <input
          id="sch-students"
          name="student_count"
          maxLength={30}
          aria-invalid={!!errors['student_count']}
          className={cn(fieldClass, errors['student_count'] && errorFieldClass)}
        />
        <FieldError message={errors['student_count']} />
      </div>

      <div>
        <label className={labelClass} htmlFor="sch-notes">
          Anything else we should know (optional)
        </label>
        <textarea
          id="sch-notes"
          name="notes"
          rows={4}
          maxLength={2000}
          aria-invalid={!!errors['notes']}
          className={cn(fieldClass, "resize-y", errors['notes'] && errorFieldClass)}
        />
        <FieldError message={errors['notes']} />
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
