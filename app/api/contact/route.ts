import { NextRequest, NextResponse } from "next/server";
import { SITE_NAME } from "@/lib/constants";
import { molerContactFormSchema } from "@/lib/validations";

// POST /api/contact — šalje poruku sa kontakt forme na email preko Mailjet-a.

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = molerContactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { success: false, message: "Neispravni podaci u formi." },
      { status: 400 }
    );
  }

  const { name, phone, email, message } = parsed.data;

  const apiKey = process.env.MAILJET_API_KEY;
  const secretKey = process.env.MAILJET_SECRET_KEY;
  const sender = process.env.SITE_MAIL_SENDER;
  const receiver = process.env.SITE_MAIL_RECEIVER;

  if (!apiKey || !secretKey || !sender || !receiver) {
    console.error("Mailjet nije konfigurisan (nedostaju env varijable).");
    return NextResponse.json(
      { success: false, message: "Slanje trenutno nije dostupno." },
      { status: 500 }
    );
  }

  const textPart = [
    `Nova poruka sa sajta ${SITE_NAME}`,
    "",
    `Ime: ${name}`,
    `Telefon: ${phone}`,
    email ? `Email: ${email}` : null,
    "",
    "Poruka:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    const response = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${Buffer.from(`${apiKey}:${secretKey}`).toString("base64")}`,
      },
      body: JSON.stringify({
        Messages: [
          {
            From: { Email: sender, Name: SITE_NAME },
            To: [{ Email: receiver }],
            ReplyTo: email ? { Email: email, Name: name } : undefined,
            Subject: `Nova poruka sa sajta – ${name}`,
            TextPart: textPart,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Mailjet greška:", response.status, errorBody);
      return NextResponse.json(
        { success: false, message: "Poruka nije poslata. Pokušajte ponovo." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Greška pri slanju poruke:", error);
    return NextResponse.json(
      { success: false, message: "Poruka nije poslata. Pokušajte ponovo." },
      { status: 500 }
    );
  }
}
