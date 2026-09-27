import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

export const shipments = pgTable("shipments", {
  id: serial("id").primaryKey(),
  trackingNumber: varchar("tracking_number", { length: 32 })
    .notNull()
    .unique(),
  sender: text("sender").notNull(),
  receiver: text("receiver").notNull(),
  origin: text("origin").notNull(),
  destination: text("destination").notNull(),
  status: varchar("status", { length: 64 }).notNull().default("Pickup Confirmed"),
  estimatedDelivery: varchar("estimated_delivery", { length: 64 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const quoteRequests = pgTable("quote_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: varchar("phone", { length: 32 }).notNull(),
  pickup: text("pickup").notNull(),
  destination: text("destination").notNull(),
  packageType: varchar("package_type", { length: 64 }).notNull(),
  weight: varchar("weight", { length: 32 }).notNull(),
  deliveryType: varchar("delivery_type", { length: 32 }).notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: varchar("phone", { length: 32 }),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type Shipment = typeof shipments.$inferSelect;
export type NewShipment = typeof shipments.$inferInsert;
export type QuoteRequest = typeof quoteRequests.$inferSelect;
export type NewQuoteRequest = typeof quoteRequests.$inferInsert;
export type ContactRequest = typeof contactRequests.$inferSelect;
export type NewContactRequest = typeof contactRequests.$inferInsert;
