import { NextResponse } from "next/server";
import { restaurantEnquirySchema } from "@/lib/validation";
import { notifyOffice } from "@/lib/notify";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = restaurantEnquirySchema.safeParse(body);
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
      `New Dock N' Dine enquiry #${reference}`,
      `${data.name} · ${data.date} at ${data.preferredTime} · ${data.guests} guests · ${data.email} / ${data.phone}`
    );

    return NextResponse.json({ ok: true, id: reference });
  } catch (error) {
    console.error("[restaurant-enquiry] notification error", error);
    return NextResponse.json(
      { error: "Something went wrong on our side. Please try again or call the restaurant." },
      { status: 500 }
    );
  }
}
