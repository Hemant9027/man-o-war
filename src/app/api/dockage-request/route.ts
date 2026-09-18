import { NextResponse } from "next/server";
import { db } from "@/db";
import { dockageRequests } from "@/db/schema";
import { dockageRequestSchema } from "@/lib/validation";
import { notifyOffice } from "@/lib/notify";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = dockageRequestSchema.safeParse(body);
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
      .insert(dockageRequests)
      .values({
        name: data.name,
        email: data.email,
        phone: data.phone,
        arrivalDate: data.arrivalDate,
        departureDate: data.departureDate,
        vesselName: data.vesselName,
        vesselLengthFt: data.vesselLengthFt,
        beamFt: data.beamFt ?? null,
        draftFt: data.draftFt ?? null,
        guests: data.guests ?? null,
        power: data.power,
        specialRequests: data.specialRequests || null,
        status: "requested",
      })
      .returning({ id: dockageRequests.id });

    await notifyOffice(
      `New dockage request #${inserted.id}`,
      `${data.name} · ${data.vesselName} (${data.vesselLengthFt} ft) · ${data.arrivalDate} → ${data.departureDate} · ${data.email} / ${data.phone}`
    );

    return NextResponse.json({ ok: true, id: inserted.id });
  } catch (error) {
    console.error("[dockage-request] database error", error);
    return NextResponse.json(
      { error: "Something went wrong on our side. Please try again or call the marina office." },
      { status: 500 }
    );
  }
}
