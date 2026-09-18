"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label, FieldError } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { contactEnquirySchema } from "@/lib/validation";
import { SITE } from "@/lib/site";

type Fields = Record<string, string>;
type Errors = Record<string, string | undefined>;

const initial: Fields = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "general",
  message: "",
};

export default function ContactForm({
  defaultType = "general",
}: {
  defaultType?: string;
}) {
  const [values, setValues] = React.useState<Fields>({
    ...initial,
    enquiryType: defaultType,
  });
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

    const parsed = contactEnquirySchema.safeParse(values);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const next: Errors = {};
      for (const [k, v] of Object.entries(flat)) next[k] = v?.[0];
      setErrors(next);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
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
            <p className="eyebrow mt-8 text-ocean">Message sent</p>
            <h3 className="mt-4 font-display text-4xl font-medium text-navy">
              Thank you.
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-charcoal/70">
              Your enquiry has been received. Our team will get back to you as
              soon as we can — usually within a day.
            </p>
            <button
              type="button"
              onClick={() => {
                setValues({ ...initial, enquiryType: defaultType });
                setStatus("idle");
              }}
              className="mt-9 inline-flex h-12 items-center gap-3 border border-navy/25 px-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-navy transition-all duration-300 hover:bg-navy hover:text-ivory"
            >
              Send another message
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
            <div className="border-b border-navy/10 pb-6">
              <h2 className="font-display text-3xl font-medium text-navy">
                Send an Enquiry
              </h2>
              <p className="mt-2 text-sm text-charcoal/60">
                We answer every message personally.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="c-name">Name</Label>
                <Input
                  id="c-name"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={set("name")}
                  aria-invalid={invalid("name")}
                />
                <FieldError>{err("name")}</FieldError>
              </div>
              <div>
                <Label htmlFor="c-email">Email</Label>
                <Input
                  id="c-email"
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
                <Label htmlFor="c-phone">Phone</Label>
                <Input
                  id="c-phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={set("phone")}
                  aria-invalid={invalid("phone")}
                />
                <FieldError>{err("phone")}</FieldError>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="c-type">Enquiry Type</Label>
                <Select
                  id="c-type"
                  value={values.enquiryType}
                  onChange={set("enquiryType")}
                >
                  <option value="dockage">Dockage</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="fuel">Fuel</option>
                  <option value="gift-shop">Gift Shop</option>
                  <option value="general">General</option>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="c-message">Message</Label>
                <Textarea
                  id="c-message"
                  required
                  placeholder="How can we help?"
                  value={values.message}
                  onChange={set("message")}
                  aria-invalid={invalid("message")}
                />
                <FieldError>{err("message")}</FieldError>
              </div>
            </div>

            {status === "error" && serverError && (
              <p
                role="alert"
                className="mt-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              >
                {serverError} You can also email us at{" "}
                <a href={SITE.emailHref} className="font-semibold underline">
                  {SITE.email}
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
                  Send Enquiry
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
