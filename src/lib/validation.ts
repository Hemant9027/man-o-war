import { z } from "zod";
import { MARINA } from "./site";

const phoneRegex = /^[+()\-.\s\d]{7,20}$/;

export const dockageRequestSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid phone number"),
  arrivalDate: z.string().min(1, "Arrival date is required"),
  departureDate: z.string().min(1, "Departure date is required"),
  vesselName: z.string().trim().min(2, "Vessel name is required").max(120),
  vesselLengthFt: z.coerce
    .number({ error: "Enter vessel length in feet" })
    .int("Whole feet only")
    .min(10, "Minimum 10 ft")
    .max(
      MARINA.maxLengthFt,
      `Our slips accommodate vessels up to ${MARINA.maxLengthFt} ft`
    ),
  beamFt: z.coerce
    .number()
    .int()
    .min(1)
    .max(MARINA.maxBeamFt, `Maximum beam is ${MARINA.maxBeamFt} ft`)
    .optional()
    .or(z.literal("").transform(() => undefined)),
  draftFt: z.coerce
    .number()
    .int()
    .min(1)
    .max(MARINA.maxDraftFt, `Maximum draft is ${MARINA.maxDraftFt} ft`)
    .optional()
    .or(z.literal("").transform(() => undefined)),
  guests: z.coerce
    .number()
    .int()
    .min(1, "At least 1 guest")
    .max(24)
    .optional()
    .or(z.literal("").transform(() => undefined)),
  power: z.enum(["none", "30a", "50a"]).default("none"),
  specialRequests: z.string().trim().max(2000).optional().or(z.literal("")),
});

export const restaurantEnquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid phone number"),
  date: z.string().min(1, "Please choose a date"),
  preferredTime: z.string().min(1, "Please choose a time"),
  guests: z.coerce
    .number({ error: "Enter the number of guests" })
    .int()
    .min(1, "At least 1 guest")
    .max(30, "For larger parties, please call us"),
  specialRequest: z.string().trim().max(2000).optional().or(z.literal("")),
});

export const contactEnquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email address").max(160),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  enquiryType: z.enum(["dockage", "restaurant", "fuel", "gift-shop", "general"]),
  message: z.string().trim().min(10, "Please add a short message").max(3000),
});

export type DockageRequestInput = z.infer<typeof dockageRequestSchema>;
export type RestaurantEnquiryInput = z.infer<typeof restaurantEnquirySchema>;
export type ContactEnquiryInput = z.infer<typeof contactEnquirySchema>;
