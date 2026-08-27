import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),

  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),

  FRONTEND_URL: z
    .string()
    .default("http://localhost:5173"),

  LINKEDIN_COOKIE: z
    .string()
    .optional(),

  LINKEDIN_LI_AT: z
    .string()
    .optional()
});

export const env = envSchema.parse(process.env);