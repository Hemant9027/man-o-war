import { NextResponse } from "next/server";
import { db } from "@/db";
import { restaurantEnquiries } from "@/db/schema";
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

  try {
    const [inserted] = await db
      .insert(restaurantEnquiries)
      .values({
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: data.date,
        preferredTime: data.preferredTime,
        guests: data.guests,
        specialRequest: data.specialRequest || null,
      })
      .returning({ id: restaurantEnquiries.id });

    await notifyOffice(
      `New Dock N' Dine enquiry #${inserted.id}`,
      `${data.name} · ${data.date} at ${data.preferredTime} · ${data.guests} guests · ${data.email} / ${data.phone}`
    );

    return NextResponse.json({ ok: true, id: inserted.id });
  } catch (error) {
    console.error("[restaurant-enquiry] database error", error);
    return NextResponse.json(
      { error: "Something went wrong on our side. Please try again or call the restaurant." },
      { status: 500 }
    );
  }
}
