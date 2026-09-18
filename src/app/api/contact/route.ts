import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactEnquiries } from "@/db/schema";
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

  try {
    const [inserted] = await db
      .insert(contactEnquiries)
      .values({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        enquiryType: data.enquiryType,
        message: data.message,
      })
      .returning({ id: contactEnquiries.id });

    await notifyOffice(
      `New ${data.enquiryType} enquiry #${inserted.id}`,
      `${data.name} · ${data.email}${data.phone ? ` / ${data.phone}` : ""}`
    );

    return NextResponse.json({ ok: true, id: inserted.id });
  } catch (error) {
    console.error("[contact] database error", error);
    return NextResponse.json(
      { error: "Something went wrong on our side. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
