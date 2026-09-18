"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label, FieldError } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { restaurantEnquirySchema } from "@/lib/validation";
import { SITE } from "@/lib/site";

type Fields = Record<string, string>;
type Errors = Record<string, string | undefined>;

const times = [
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
];

const initial: Fields = {
  name: "",
  email: "",
  phone: "",
  date: "",
  preferredTime: "12:00 PM",
  guests: "2",
  specialRequest: "",
};

export default function RestaurantForm() {
  const [values, setValues] = React.useState<Fields>(initial);
  const [errors, setErrors] = React.useState<Errors>({});
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "error" | "done"
  >("idle");
  const [serverError, setServerError] = React.useState("");

  const set = (key: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError("");

    const parsed = restaurantEnquirySchema.safeParse(values);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const next: Errors = {};
      for (const [k, v] of Object.entries(flat)) next[k] = v?.[0];
      setErrors(next);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/restaurant-enquiry", {
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
      setStatus("done");
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
    <div className="border border-navy/10 bg-white p-6 shadow-[0_40px_90px_-50px_rgba(11,36,51,0.45)] sm:p-10">
      <AnimatePresence mode="wait">
        {status === "done" ? (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex min-h-100 flex-col items-center justify-center py-10 text-center"
          >
            <span className="flex size-16 items-center justify-center border border-ocean/30 bg-ocean-100/60 text-ocean">
              <CheckCircle2 className="size-7" aria-hidden />
            </span>
            <p className="eyebrow mt-8 text-ocean">Enquiry received</p>
            <h3 className="mt-4 font-display text-4xl font-medium text-navy">
              Thank you.
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/70">
              Your table enquiry for Dock N' Dine has been received. The
              restaurant team will confirm your request by phone or email.
            </p>
            <p className="mt-4 text-xs italic leading-relaxed text-charcoal/50">
              This is an enquiry, not a confirmed reservation — for same-day
              visits we recommend calling ahead.
            </p>
            <a
              href={SITE.restaurantPhoneHref}
              className="mt-9 inline-flex h-12 items-center gap-3 border border-navy/25 px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-all duration-300 hover:bg-navy hover:text-ivory"
            >
              <Phone className="size-4" aria-hidden />
              Call {SITE.restaurantPhoneDisplay}
            </a>
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
            <div className="border-b border-navy/10 pb-6">
              <h2 className="font-display text-3xl font-medium text-navy">
                Table Enquiry
              </h2>
              <p className="mt-2 text-sm text-charcoal/60">
                Dock N' Dine · Monday – Saturday · 11:00 AM – 3:00 PM
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="r-name">Name</Label>
                <Input
                  id="r-name"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={set("name")}
                  aria-invalid={invalid("name")}
                />
                <FieldError>{err("name")}</FieldError>
              </div>
              <div>
                <Label htmlFor="r-email">Email</Label>
                <Input
                  id="r-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={set("email")}
                  aria-invalid={invalid("email")}
                />
                <FieldError>{err("email")}</FieldError>
              </div>
              <div>
                <Label htmlFor="r-phone">Phone</Label>
                <Input
                  id="r-phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={values.phone}
                  onChange={set("phone")}
                  aria-invalid={invalid("phone")}
                />
                <FieldError>{err("phone")}</FieldError>
              </div>
              <div>
                <Label htmlFor="r-date">Date</Label>
                <Input
                  id="r-date"
                  type="date"
                  required
                  value={values.date}
                  onChange={set("date")}
                  aria-invalid={invalid("date")}
                />
                <FieldError>{err("date")}</FieldError>
              </div>
              <div>
                <Label htmlFor="r-time">Preferred Time</Label>
                <Select
                  id="r-time"
                  value={values.preferredTime}
                  onChange={set("preferredTime")}
                >
                  {times.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="r-guests">Number of Guests</Label>
                <Input
                  id="r-guests"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  max={30}
                  required
                  value={values.guests}
                  onChange={set("guests")}
                  aria-invalid={invalid("guests")}
                />
                <FieldError>{err("guests")}</FieldError>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="r-notes">Special Request</Label>
                <Textarea
                  id="r-notes"
                  placeholder="Occasion, dietary notes, or anything else we should know."
                  value={values.specialRequest}
                  onChange={set("specialRequest")}
                />
              </div>
            </div>

            {status === "error" && serverError && (
              <p
                role="alert"
                className="mt-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {serverError} You can also call Dock N' Dine at{" "}
                <a
                  href={SITE.restaurantPhoneHref}
                  className="font-semibold underline"
                >
                  {SITE.restaurantPhoneDisplay}
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
                  Request a Table
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </>
              )}
            </button>
            <p className="mt-4 text-xs leading-relaxed text-charcoal/50">
              This form sends an enquiry — your table is only confirmed once
              the restaurant team responds to you directly.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
