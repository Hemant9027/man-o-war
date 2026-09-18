/**
 * Notification layer — architecture-ready.
 *
 * Plug in an email provider (Resend, SES, SMTP/Nodemailer) here to notify the
 * marina office about new enquiries and to send receipts to guests.
 * For the demo we simply log server-side so no real email is sent.
 */
export async function notifyOffice(subject: string, summary: string) {
  // TODO: integrate email provider, e.g.:
  // await resend.emails.send({ to: process.env.MARINA_NOTIFY_EMAIL!, ... })
  console.info(`[notify] ${subject}\n${summary}`);
}

export async function notifyGuest(email: string, subject: string, body: string) {
  // TODO: transactional email to the guest with a reference number.
  console.info(`[notify:guest] ${email} — ${subject}\n${body}`);
}
