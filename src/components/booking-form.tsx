"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label, FieldError } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { dockageRequestSchema } from "@/lib/validation";
import { SITE } from "@/lib/site";

type Fields = Record<string, string>;
type Errors = Record<string, string | undefined>;

const initial: Fields = {
  arrivalDate: "",
  departureDate: "",
  vesselName: "",
  vesselLengthFt: "",
  beamFt: "",
  draftFt: "",
  guests: "",
  power: "none",
  specialRequests: "",
  name: "",
  email: "",
  phone: "",
};

export default function BookingForm() {
  const router = useRouter();
  const [values, setValues] = React.useState<Fields>(initial);
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "error" | "done"
  >("idle");
  const [serverError, setServerError] = React.useState("");
  const [reference, setReference] = React.useState<number | null>(null);

  const set = (key: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError("");

    const parsed = dockageRequestSchema.safeParse(values);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const next: Errors = {};
      for (const [k, v] of Object.entries(flat)) next[k] = v?.[0];
      setErrors(next);
      document
        .querySelector('[aria-invalid="true"]')
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/dockage-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json();
      if (!res.ok) {
        if (json.fieldErrors) {
          const next: Errors = {};
          for (const [k, v] of Object.entries(
            json.fieldErrors as Record<string, string[]>
          ))
            next[k] = v?.[0];
          setErrors(next);
        }
        setServerError(json.error ?? "Please try again.");
        setStatus("error");
        return;
      }
      setReference(json.id);
      setStatus("done");
      router.refresh();
    } catch {
      setServerError(
        "We couldn't reach the server. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  const err = (k: string) => (errors[k] ? errors[k] : undefined);
  const invalid = (k: string) => (errors[k] ? true : undefined);

  return (
    <div className="relative border border-navy/10 bg-white p-6 shadow-[0_40px_90px_-50px_rgba(11,36,51,0.45)] sm:p-10">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-105 flex-col items-center justify-center py-10 text-center"
          >
            <span className="flex size-16 items-center justify-center border border-ocean/30 bg-ocean-100/60 text-ocean">
              <CheckCircle2 className="size-7" aria-hidden />
            </span>
            <p className="eyebrow mt-8 text-ocean">Request received</p>
            <h3 className="mt-4 font-display text-4xl font-medium text-navy">
              Thank you.
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/70">
              Your dockage request has been received
              {reference ? (
                <>
                  {" "}
                  as reference{" "}
                  <span className="font-semibold text-navy">
                    MOW-{String(reference).padStart(4, "0")}
                  </span>
                </>
              ) : (
                ""
              )}
              . Our marina team will review your request and contact you to
              confirm availability.
            </p>
            <p className="mt-4 text-xs italic leading-relaxed text-charcoal/50">
              This is an enquiry only — your slip is not reserved until the
              marina confirms availability with you directly.
            </p>
            <button
              type="button"
              onClick={() => {
                setValues(initial);
                setStatus("idle");
                setReference(null);
              }}
              className="mt-9 inline-flex h-12 items-center gap-3 border border-navy/25 px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-all duration-300 hover:bg-navy hover:text-ivory"
            >
              Make another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            onSubmit={onSubmit}
            noValidate
          >
            <div className="flex items-baseline justify-between gap-6 border-b border-navy/10 pb-6">
              <div>
                <h2 className="font-display text-3xl font-medium text-navy">
                  Dockage Request
                </h2>
                <p className="mt-2 text-sm text-charcoal/60">
                  Tell us about your vessel and dates — we reply personally.
                </p>
              </div>
              <p className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.24em] text-charcoal/40 sm:block">
                Step 01 / 05
              </p>
            </div>

            <fieldset className="mt-8">
              <legend className="eyebrow text-ocean">Your Stay</legend>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="arrivalDate">Arrival Date</Label>
                  <Input
                    id="arrivalDate"
                    type="date"
                    required
                    value={values.arrivalDate}
                    onChange={set("arrivalDate")}
                    aria-invalid={invalid("arrivalDate")}
                  />
                  <FieldError>{err("arrivalDate")}</FieldError>
                </div>
                <div>
                  <Label htmlFor="departureDate">Departure Date</Label>
                  <Input
                    id="departureDate"
                    type="date"
                    required
                    value={values.departureDate}
                    onChange={set("departureDate")}
                    aria-invalid={invalid("departureDate")}
                  />
                  <FieldError>{err("departureDate")}</FieldError>
                </div>
              </div>
            </fieldset>

            <fieldset className="mt-8">
              <legend className="eyebrow text-ocean">Your Vessel</legend>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="vesselName">Vessel Name</Label>
                  <Input
                    id="vesselName"
                    required
                    placeholder="e.g. Sea Breeze"
                    value={values.vesselName}
                    onChange={set("vesselName")}
                    aria-invalid={invalid("vesselName")}
                  />
                  <FieldError>{err("vesselName")}</FieldError>
                </div>
                <div>
                  <Label htmlFor="vesselLengthFt">Vessel Length (ft)</Label>
                  <Input
                    id="vesselLengthFt"
                    type="number"
                    inputMode="numeric"
                    min={10}
                    max={120}
                    placeholder="Max 120 ft"
                    required
                    value={values.vesselLengthFt}
                    onChange={set("vesselLengthFt")}
                    aria-invalid={invalid("vesselLengthFt")}
                  />
                  <FieldError>{err("vesselLengthFt")}</FieldError>
                </div>
                <div>
                  <Label htmlFor="beamFt">Beam (ft)</Label>
                  <Input
                    id="beamFt"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={20}
                    placeholder="Max 20 ft"
                    value={values.beamFt}
                    onChange={set("beamFt")}
                    aria-invalid={invalid("beamFt")}
                  />
                  <FieldError>{err("beamFt")}</FieldError>
                </div>
                <div>
                  <Label htmlFor="draftFt">Draft (ft)</Label>
                  <Input
                    id="draftFt"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    max={7}
                    placeholder="Max 7 ft"
                    value={values.draftFt}
                    onChange={set("draftFt")}
                    aria-invalid={invalid("draftFt")}
                  />
                  <FieldError>{err("draftFt")}</FieldError>
                </div>
                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input
                    id="guests"
                    type="number"
                    inputMode="numeric"
                    min={1}
                    placeholder="Optional"
                    value={values.guests}
                    onChange={set("guests")}
                    aria-invalid={invalid("guests")}
                  />
                  <FieldError>{err("guests")}</FieldError>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="power">Power Requirement</Label>
                  <Select
                    id="power"
                    value={values.power}
                    onChange={set("power")}
                  >
                    <option value="none">No power needed</option>
                    <option value="30a">30 Amp</option>
                    <option value="50a">50 Amp</option>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    placeholder="Anything we should know before you arrive?"
                    value={values.specialRequests}
                    onChange={set("specialRequests")}
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className="mt-8">
              <legend className="eyebrow text-ocean">Contact Details</legend>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    autoComplete="name"
                    required
                    placeholder="Captain or owner"
                    value={values.name}
                    onChange={set("name")}
                    aria-invalid={invalid("name")}
                  />
                  <FieldError>{err("name")}</FieldError>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    value={values.email}
                    onChange={set("email")}
                    aria-invalid={invalid("email")}
                  />
                  <FieldError>{err("email")}</FieldError>
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={values.phone}
                    onChange={set("phone")}
                    aria-invalid={invalid("phone")}
                  />
                  <FieldError>{err("phone")}</FieldError>
                </div>
              </div>
            </fieldset>

            {status === "error" && serverError && (
              <p
                role="alert"
                className="mt-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {serverError} You can also reach the marina office at{" "}
                <a href={SITE.marinaPhoneHref} className="font-semibold underline">
                  {SITE.marinaPhoneDisplay}
                </a>
                .
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="group mt-9 inline-flex h-13 w-full items-center justify-center gap-3 bg-navy text-[11px] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:bg-ocean disabled:opacity-60 sm:w-auto sm:px-12"
            >
              {status === "submitting" ? (
                <>
                  Sending
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                </>
              ) : (
                <>
                  Request Dockage
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </>
              )}
            </button>
            <p className="mt-4 text-xs leading-relaxed text-charcoal/50">
              Submitting this form sends a dockage request — it does not
              guarantee availability. The marina team will confirm your slip by
              email or phone.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
