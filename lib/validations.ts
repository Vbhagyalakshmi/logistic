import { z } from "zod";

export const trackingSchema = z.object({
  trackingNumber: z
    .string()
    .trim()
    .min(4, "Enter a valid tracking number.")
    .max(32, "Enter a valid tracking number.")
    .regex(/^[A-Za-z0-9-]+$/, "Tracking numbers only contain letters, numbers and hyphens."),
});

export const quoteRequestSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().min(7, "Enter a valid phone number."),
  pickup: z.string().trim().min(2, "Enter a pickup location."),
  destination: z.string().trim().min(2, "Enter a delivery location."),
  packageType: z.enum(["document", "parcel", "fragile", "bulk"], {
    errorMap: () => ({ message: "Select a package type." }),
  }),
  weight: z.string().trim().min(1, "Enter an approximate weight."),
  deliveryType: z.enum(["standard", "express", "priority"], {
    errorMap: () => ({ message: "Select a delivery speed." }),
  }),
  message: z.string().trim().max(1000).optional(),
});

export const contactRequestSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
});

export type TrackingInput = z.infer<typeof trackingSchema>;
export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
export type ContactRequestInput = z.infer<typeof contactRequestSchema>;
