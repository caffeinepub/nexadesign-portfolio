import { useScrollAnimation } from "../hooks/useScrollAnimation";

const stats = [
  { value: "200+", label: "Projects" },
  { value: "50+", label: "Clients" },
  { value: "5", label: "Years Exp." },
];

export function About() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: visualRef, isVisible: visualVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="about"
      style={{
        backgroundColor: "#111111",
        padding: "6rem 1.5rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          alignItems: "center",
        }}
        className="lg:flex-row lg:gap-16 lg:items-center"
      >
        {/* Text Side */}
        <div
          ref={textRef}
          className={`fade-in-up ${textVisible ? "visible" : ""} lg:w-1/2`}
          style={{ flex: 1 }}
        >
          {/* Label */}
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#a855f7",
              marginBottom: "1rem",
            }}
          >
            — Who I Am —
          </div>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            About Me
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: "1.8",
              color: "#d4d4d4",
              marginBottom: "2.5rem",
            }}
          >
            I am a creative designer focused on delivering bold, high-impact
            visuals that help brands and creators grow faster. My designs are
            built to attract attention and drive results. Every pixel is
            intentional, every concept crafted to make your brand unforgettable.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "2.25rem",
                    background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1.1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "#737373",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Visual Side */}
        <div
          ref={visualRef}
          className={`fade-in ${visualVisible ? "visible" : ""} lg:w-1/2`}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            minHeight: "400px",
          }}
        >
          {/* Outer ring */}
          <div
            style={{
              position: "absolute",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              border: "1px solid oklch(0.55 0.22 292 / 20%)",
            }}
          />

          {/* Mid ring */}
          <div
            style={{
              position: "absolute",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              border: "1px solid oklch(0.55 0.22 292 / 30%)",
            }}
          />

          {/* Glow blob */}
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, oklch(0.55 0.22 292 / 22%) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Center circle */}
          <div
            style={{
              position: "relative",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #a855f7 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 60px oklch(0.55 0.22 292 / 40%)",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1.4rem",
                color: "white",
                letterSpacing: "-0.02em",
                textAlign: "center",
                lineHeight: 1.2,
              }}
            >
              Nexa
              <br />
              Design
            </span>
          </div>

          {/* Floating accent squares */}
          <div style={{ position: "absolute", top: "10%", left: "10%", width: "28px", height: "28px", borderRadius: "6px", background: "linear-gradient(135deg, oklch(0.55 0.22 292 / 50%), oklch(0.60 0.24 292 / 30%))", border: "1px solid oklch(0.55 0.22 292 / 40%)", animation: "float 4s ease-in-out 0s infinite" }} />
          <div style={{ position: "absolute", top: "75%", left: "15%", width: "18px", height: "18px", borderRadius: "6px", background: "linear-gradient(135deg, oklch(0.55 0.22 292 / 50%), oklch(0.60 0.24 292 / 30%))", border: "1px solid oklch(0.55 0.22 292 / 40%)", animation: "float 4s ease-in-out 0.5s infinite" }} />
          <div style={{ position: "absolute", top: "12%", right: "15%", width: "22px", height: "22px", borderRadius: "6px", background: "linear-gradient(135deg, oklch(0.55 0.22 292 / 50%), oklch(0.60 0.24 292 / 30%))", border: "1px solid oklch(0.55 0.22 292 / 40%)", animation: "float 4s ease-in-out 1s infinite" }} />
          <div style={{ position: "absolute", top: "70%", right: "10%", width: "32px", height: "32px", borderRadius: "6px", background: "linear-gradient(135deg, oklch(0.55 0.22 292 / 50%), oklch(0.60 0.24 292 / 30%))", border: "1px solid oklch(0.55 0.22 292 / 40%)", animation: "float 4s ease-in-out 0.3s infinite" }} />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(8deg); }
        }
      `}</style>
    </section>
  );
}
