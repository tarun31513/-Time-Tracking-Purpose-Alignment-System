// src/lib/validations.ts
import { z } from "zod";

/* ----------------------------- CATEGORY SCHEMA ----------------------------- */
export const categorySchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name too long"),
  color: z
    .string()
    .regex(/^#[0-9A-F]{6}$/i, "Invalid color format"),
  order: z.number().int().min(0).optional(),
  isDefault: z.boolean().optional(),
});

/* ------------------------------- PLAN SCHEMA ------------------------------- */
export const planSchema = z.object({
  date: z.union([z.string(), z.date()]),
  durationMin: z
    .number()
    .int()
    .min(1, "Duration must be at least 1 minute"),
  categoryId: z.string().optional(),
  notes: z.string().max(500, "Notes too long").optional(),
});

/* ------------------------------ ACTUAL SCHEMA ------------------------------ */
export const actualSchema = z.object({
  date: z.union([z.string(), z.date()]),
  durationMin: z
    .number()
    .int()
    .min(1, "Duration must be at least 1 minute"),
  categoryId: z.string().optional(),
  exceptionReason: z.string().max(500, "Reason too long").optional(),
});

/* ------------------------------ SIGNUP SCHEMA ------------------------------ */
export const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  timezone: z.string().optional(),
});

/* ------------------------------ SIGNIN SCHEMA ------------------------------ */
export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

/* ------------------------------ SETTINGS SCHEMA ---------------------------- */
export const settingsSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long").optional(),
  timezone: z.string().optional(),
  settings: z.record(z.any()).optional(),
});
