# Form notification webhook setup

## Current state

The site has two live forms:

1. **Contact enquiry form** on `/contact`
   - Captures: name, email, organisation, enquiry type, message
   - Stored in: `public.contact_enquiries`
   - Webhook payload `form` value: `"Contact enquiry"`

2. **School application form** on `/for-schools`
   - Captures: school name, location, contact name, role, email, phone, student count, notes
   - Stored in: `public.school_applications`
   - Webhook payload `form` value: `"School application"`

Both forms submit through server functions in `src/lib/notifications.functions.ts`, which:
- validate with Zod,
- insert into the database,
- then POST to `process.env["FORM_NOTIFY_WEBHOOK_URL"]`.

The webhook payload shape is:

```json
{
  "form": "Contact enquiry" | "School application",
  "subject": "New enquiry from ..." | "New school application: ...",
  "fields": { "Name": "...", "Email": "...", ... }
}
```

## Decision: one Apps Script, two branches

Use a single Google Apps Script web app. The script reads `payload.form` and formats the email differently for each form type. This is simpler than maintaining two scripts and two secrets.

## What gets built

1. Provide a single Apps Script code block that:
   - parses the JSON POST body,
   - switches on `payload.form` to build a readable subject and body,
   - sends the email to the configured recipient(s),
   - returns `ok` so the server logs success.

2. Store the Apps Script deployment URL and recipient email(s) as project secrets:
   - `FORM_NOTIFY_WEBHOOK_URL`
   - `FORM_NOTIFY_RECIPIENT` (can be a single email or comma-separated list)

3. Update `src/lib/notifications.functions.ts` to send the recipient list in the payload so the Apps Script does not need to be edited if the recipient changes later.

4. Keep notification failures non-blocking: if the webhook fails or is not configured, the form still saves and the visitor still sees success.

## What I need from you

- The email address(es) that should receive these notifications.
- Whether you want the two form types to have different recipient addresses (e.g. enquiries to one inbox, school applications to another).

## Later option

Once you own a sender domain (e.g. `notify.waste2light.com`), this webhook can be replaced with branded transactional email that also auto-replies to the submitter. The form code will not need to change.
