import { z } from "zod";

const name = z
  .string()
  .trim()
  .min(2, { message: "Please enter at least 2 characters." })
  .max(100, { message: "Please keep this under 100 characters." });

const email = z
  .string()
  .trim()
  .min(1, { message: "Email is required." })
  .email({ message: "Please enter a valid email address." })
  .max(255, { message: "Email must be under 255 characters." });

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, { message: `Please keep this under ${max} characters.` })
    .optional()
    .transform((v) => (v ? v : null));

export const enquirySchema = z.object({
  name,
  email,
  organisation: optionalText(120),
  enquiry_type: z.enum([
    "School enquiry",
    "Organisation or sponsor",
    "Technology partner",
    "Collaboration",
    "General",
  ]),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please tell us a little more (at least 10 characters)." })
    .max(2000, { message: "Please keep your message under 2000 characters." }),
});

export const schoolApplicationSchema = z.object({
  school_name: name,
  contact_name: name,
  role: z
    .string()
    .trim()
    .min(2, { message: "Please enter a role." })
    .max(100, { message: "Please keep this under 100 characters." }),
  email,
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+()\-\s]{7,20}$/, { message: "Please enter a valid phone number." })
    .optional()
    .or(z.literal(""))
    .transform((v) => (v ? v : null)),
  location: z
    .string()
    .trim()
    .min(2, { message: "Please enter a city, state or region." })
    .max(120, { message: "Please keep this under 120 characters." }),
  student_count: optionalText(30),
  notes: optionalText(2000),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
export type SchoolApplicationInput = z.infer<typeof schoolApplicationSchema>;

export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
