# Email notifications for form submissions

Right now both forms (contact enquiry, school application) save to the database only — nothing lands in your inbox. This adds a notification for every new submission.

## Chosen approach: Google Apps Script webhook

Built-in branded email needs a domain you own plus DNS setup, which isn't in place yet. The Apps Script route works today, costs nothing, and sends from your own Gmail — so we build that now and can add branded email later without redoing the forms.

Flow:

```text
Visitor submits form
  -> saved to database (unchanged)
  -> server sends the submission to your Apps Script URL
  -> Apps Script emails your inbox
```

## What gets built

1. A server-side notification step that runs after each successful save. It posts the submission (form type, name, email, organisation/school, message) to a webhook URL held as a project secret.
2. Both forms switch from writing straight to the database in the browser to submitting through one server action per form, which saves the row and then fires the notification. Validation and inline errors stay exactly as they are.
3. Notification failures never break the form — the submission is still saved and the visitor still sees the success state; the failure is logged server-side.
4. A short setup note with the exact Apps Script code to paste into script.google.com, so the script emails you and returns OK.

## What I need from you

- Create the Apps Script (I'll give you the ~10 lines to paste) and deploy it as a web app with access set to "Anyone".
- Paste me the deployment URL and the email address that should receive notifications. I'll store the URL as a secret — it never appears in the site code.

## Later option

Once you set up a sender domain (e.g. `notify.waste2light.com`), I can swap this for branded email from Waste2Light, including an automatic confirmation reply to whoever submitted the form. The form code won't need to change again.

## Technical notes

- New `src/lib/notifications.functions.ts` with two `createServerFn` POST handlers (`submitEnquiry`, `submitSchoolApplication`), each validating with the existing Zod schemas from `src/lib/form-schemas.ts`.
- Inserts move server-side using the publishable client; existing RLS anon-insert policies stay valid, no migration needed.
- Webhook URL read from `process.env` inside the handler, wrapped in try/catch with a 5s timeout.
