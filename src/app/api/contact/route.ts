import { NextResponse } from "next/server";
import { contactEnquirySchema } from "@/lib/validation";
import { notifyOffice } from "@/lib/notify";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactEnquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please review the highlighted fields.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const reference = Date.now();

  try {
    await notifyOffice(
      `New ${data.enquiryType} enquiry #${reference}`,
      `${data.name} · ${data.email}${data.phone ? ` / ${data.phone}` : ""} · ${data.message}`
    );

    return NextResponse.json({ ok: true, id: reference });
  } catch (error) {
    console.error("[contact] notification error", error);
    return NextResponse.json(
      { error: "Something went wrong on our side. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
