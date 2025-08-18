import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const title = searchParams.get("title") || "Espérance Sportive de Tunis"
    const subtitle = searchParams.get("subtitle") || ""
    const type = searchParams.get("type") || "general"
    const category = searchParams.get("category") || ""
    const date = searchParams.get("date") || ""
    const homeTeam = searchParams.get("homeTeam") || ""
    const awayTeam = searchParams.get("awayTeam") || ""

    // EST brand colors
    const estRouge = "#E31E24"
    const estJaune = "#FFD200"

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          backgroundImage: `linear-gradient(135deg, ${estRouge}15 0%, ${estJaune}15 100%)`,
          position: "relative",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(circle at 25% 25%, ${estRouge}20 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${estJaune}20 0%, transparent 50%)`,
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              backgroundColor: estRouge,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "20px",
              border: `4px solid ${estJaune}`,
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "32px",
                fontWeight: "bold",
              }}
            >
              EST
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: estRouge,
              }}
            >
              Espérance Sportive
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#666",
              }}
            >
              de Tunis
            </span>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "900px",
            padding: "0 40px",
            zIndex: 1,
          }}
        >
          {/* Match vs Layout */}
          {type === "match" && homeTeam && awayTeam ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "40px",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    color: estRouge,
                  }}
                >
                  {homeTeam}
                </span>
              </div>
              <span
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                VS
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "36px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {awayTeam}
                </span>
              </div>
            </div>
          ) : (
            /* Regular Title */
            <h1
              style={{
                fontSize: type === "article" ? "48px" : "56px",
                fontWeight: "bold",
                color: "#333",
                lineHeight: "1.2",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              {title}
            </h1>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p
              style={{
                fontSize: "24px",
                color: "#666",
                lineHeight: "1.4",
                marginBottom: "30px",
                textAlign: "center",
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Metadata */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              fontSize: "18px",
              color: "#888",
            }}
          >
            {category && (
              <div
                style={{
                  backgroundColor: estJaune,
                  color: "#333",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </div>
            )}
            {date && <span>{date}</span>}
            {type && !category && (
              <div
                style={{
                  backgroundColor: estRouge,
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                {type}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "30px",
            right: "40px",
            fontSize: "16px",
            color: "#888",
            zIndex: 1,
          }}
        >
          est.org.tn
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
