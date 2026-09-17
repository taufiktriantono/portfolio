import { ImageResponse } from "next/og";

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageContentType = "image/png";

type SocialImageContent = {
  eyebrow: string;
  title: string;
  description: string;
  tags?: readonly string[];
};

export function renderSocialImage({ eyebrow, title, description, tags = [] }: SocialImageContent) {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "62px 72px",
        backgroundColor: "#0a0d0c",
        color: "#edf3ef",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 13, color: "#aabbb0", fontSize: 23, fontWeight: 600 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 43, height: 43, border: "1px solid #4e6c5b", color: "#79e2ae", fontSize: 14 }}>TT</div>
        <span>Taufik Triantono</span>
        <span style={{ marginLeft: "auto", color: "#79e2ae", fontSize: 16, letterSpacing: 2 }}>{eyebrow}</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", maxWidth: 1040 }}>
        <div style={{ display: "flex", width: 74, height: 4, backgroundColor: "#79e2ae", marginBottom: 36 }} />
        <div style={{ display: "flex", fontSize: title.length > 42 ? 62 : 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.04 }}>
          {title}
        </div>
        <div style={{ display: "flex", marginTop: 27, maxWidth: 980, color: "#aabbb0", fontSize: 28, lineHeight: 1.35 }}>
          {description}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 24, borderTop: "1px solid #29372f", color: "#85a592", fontSize: 17 }}>
        {tags.length > 0 ? tags.slice(0, 4).map((tag) => (
          <div key={tag} style={{ display: "flex", padding: "8px 12px", border: "1px solid #34473a" }}>{tag}</div>
        )) : <span>Backend · Distributed Systems · Platform Engineering</span>}
        <span style={{ marginLeft: "auto" }}>taufiktriantono.railzway.com</span>
      </div>
    </div>,
    socialImageSize,
  );
}
