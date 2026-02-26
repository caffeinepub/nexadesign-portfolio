import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Hero() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: subRef, isVisible: subVisible } = useScrollAnimation({ threshold: 0.05 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.05 });

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "68px",
      }}
    >
      {/* Decorative background blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-15%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, oklch(0.55 0.22 292 / 18%) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, oklch(0.60 0.24 292 / 14%) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, oklch(0.50 0.20 292 / 8%) 0%, transparent 65%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(oklch(0.55 0.22 292 / 4%) 1px, transparent 1px),
                            linear-gradient(90deg, oklch(0.55 0.22 292 / 4%) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
          maskImage: "radial-gradient(ellipse 80% 80% at center, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at center, black 30%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "4rem 1.5rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <div
          className={`fade-in-up ${headingVisible ? "visible" : ""}`}
          ref={headingRef}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1.75rem",
            padding: "0.4rem 1rem",
            borderRadius: "100px",
            border: "1px solid oklch(0.55 0.22 292 / 35%)",
            backgroundColor: "oklch(0.55 0.22 292 / 8%)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 500,
            color: "#a855f7",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#a855f7",
              display: "inline-block",
              boxShadow: "0 0 8px #a855f7",
            }}
          />
          Available for Projects
        </div>

        {/* Main Heading */}
        <h1
          className={`fade-in-up delay-100 ${headingVisible ? "visible" : ""}`}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: "1.1",
            color: "white",
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
          }}
        >
          High-Converting{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 60%, #9333ea 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Thumbnail
          </span>{" "}
          &amp; Graphic Designer
        </h1>

        {/* Subheading */}
        <p
          ref={subRef}
          className={`fade-in-up delay-200 ${subVisible ? "visible" : ""}`}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: "1.75",
            color: "#d4d4d4",
            maxWidth: "660px",
            margin: "0 auto 2.75rem",
            fontWeight: 400,
          }}
        >
          I create powerful thumbnails, logos, brand animations, and custom
          graphics that help creators and brands stand out and grow faster.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className={`fade-in-up delay-300 ${ctaVisible ? "visible" : ""}`}
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            type="button"
            onClick={() => scrollTo("#work")}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              padding: "0.875rem 2rem",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #7c3aed 0%, #9333ea 50%, #a855f7 100%)",
              color: "white",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.01em",
              transition: "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
              boxShadow: "0 4px 24px oklch(0.55 0.22 292 / 35%)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 8px 32px oklch(0.55 0.22 292 / 50%)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 24px oklch(0.55 0.22 292 / 35%)";
            }}
          >
            View My Work
          </button>

          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              padding: "0.875rem 2rem",
              borderRadius: "10px",
              background: "transparent",
              color: "#a855f7",
              border: "2px solid oklch(0.55 0.22 292 / 60%)",
              cursor: "pointer",
              letterSpacing: "0.01em",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "oklch(0.55 0.22 292 / 12%)";
              el.style.borderColor = "#a855f7";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.backgroundColor = "transparent";
              el.style.borderColor = "oklch(0.55 0.22 292 / 60%)";
              el.style.transform = "translateY(0)";
            }}
          >
            Contact Me
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.4,
          }}
        >
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, transparent, #a855f7)",
            }}
          />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7rem",
              color: "#737373",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
