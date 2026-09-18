import { pgEnum, pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

/**
 * Dockage enquiry lifecycle.
 * Architecture is ready for a full booking pipeline:
 * requested -> availability_confirmed -> reservation_confirmed -> deposit_paid -> confirmed
 * Only `requested` is set by the public website today; the remaining states
 * are managed by marina staff once availability has been verified by VHF / phone / email.
 */
export const dockageStatusEnum = pgEnum("dockage_status", [
  "requested",
  "availability_confirmed",
  "reservation_confirmed",
  "deposit_paid",
  "confirmed",
  "cancelled",
]);

export const powerEnum = pgEnum("power_requirement", ["none", "30a", "50a"]);

export const dockageRequests = pgTable("dockage_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  arrivalDate: text("arrival_date").notNull(),
  departureDate: text("departure_date").notNull(),
  vesselName: text("vessel_name").notNull(),
  vesselLengthFt: integer("vessel_length_ft").notNull(),
  beamFt: integer("beam_ft"),
  draftFt: integer("draft_ft"),
  guests: integer("guests"),
  power: powerEnum("power").default("none"),
  specialRequests: text("special_requests"),
  status: dockageStatusEnum("status").default("requested").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const restaurantEnquiries = pgTable("restaurant_enquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  date: text("date").notNull(),
  preferredTime: text("preferred_time").notNull(),
  guests: integer("guests").notNull(),
  specialRequest: text("special_request"),
  status: text("status").default("new").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const contactEnquiries = pgTable("contact_enquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  enquiryType: text("enquiry_type").notNull(),
  message: text("message").notNull(),
  status: text("status").default("new").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type DockageRequest = typeof dockageRequests.$inferSelect;
export type NewDockageRequest = typeof dockageRequests.$inferInsert;
export type RestaurantEnquiry = typeof restaurantEnquiries.$inferSelect;
export type ContactEnquiry = typeof contactEnquiries.$inferSelect;
