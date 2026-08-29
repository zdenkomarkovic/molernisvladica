import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const alt = `${SITE_NAME} – Moler Niš`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #16233d 0%, #24365a 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "18px",
              height: "72px",
              borderRadius: "9px",
              background: "#f2793a",
            }}
          />
          <div style={{ fontSize: "44px", color: "#faf6ee", fontWeight: 700 }}>
            {SITE_NAME}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "84px",
              color: "#ffffff",
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            Moler Niš
          </div>
          <div style={{ fontSize: "40px", color: "#f2793a", fontWeight: 600 }}>
            Moleraj · gletovanje · krečenje · dekorativne tehnike
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "30px", color: "#faf6ee", opacity: 0.75 }}>
          {SITE_URL.replace("https://", "")} · Besplatna procena na licu mesta
        </div>
      </div>
    ),
    { ...size },
  );
}
