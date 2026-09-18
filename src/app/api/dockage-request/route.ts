import { NextResponse } from "next/server";
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
  const reference = Date.now();

  try {
    await notifyOffice(
      `New dockage request #${reference}`,
      `${data.name} · ${data.vesselName} (${data.vesselLengthFt} ft) · ${data.arrivalDate} → ${data.departureDate} · ${data.email} / ${data.phone}`
    );

    return NextResponse.json({ ok: true, id: reference });
  } catch (error) {
    console.error("[dockage-request] notification error", error);
    return NextResponse.json(
      { error: "Something went wrong on our side. Please try again or call the marina office." },
      { status: 500 }
    );
  }
}
