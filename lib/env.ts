import { z } from "zod";

// Validacija environment varijabli na runtime
// Dodaj ovde sve env varijable koje projekat koristi

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://molerajnis.rs"),
  NEXT_PUBLIC_SITE_NAME: z.string().default("Colorium"),
  NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().optional(),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),

  // Mailjet (kontakt forma)
  MAILJET_API_KEY: z.string().optional(),
  MAILJET_SECRET_KEY: z.string().optional(),
  SITE_MAIL_SENDER: z.string().optional(),
  SITE_MAIL_RECEIVER: z.string().optional(),
});

// Ovo ce baciti gresku ako env varijable nisu ispravno postavljene
const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Neispravne environment varijable:");
  console.error(parsed.error.flatten().fieldErrors);
  // U produkciji, odmah zaustavi aplikaciju
  if (process.env.NODE_ENV === "production") {
    process.exit(1);
  }
}

export const env = parsed.success ? parsed.data : envSchema.parse({});
