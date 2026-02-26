import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface PortfolioItem {
  seed: string;
  title: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  { seed: "gaming", title: "Gaming Channel Thumbnail", category: "YouTube Thumbnail" },
  { seed: "tech99", title: "Tech Brand Logo", category: "Logo Design" },
  { seed: "fitness", title: "Fitness Channel Thumbnail", category: "YouTube Thumbnail" },
  { seed: "ecomm", title: "E-commerce Brand Identity", category: "Branding" },
  { seed: "music77", title: "Music Artist Thumbnail", category: "YouTube Thumbnail" },
  { seed: "startup", title: "Startup Logo Design", category: "Logo" },
  { seed: "brand42", title: "Brand Intro Animation", category: "Animation" },
  { seed: "social", title: "Social Media Pack", category: "Graphic Design" },
  { seed: "sports5", title: "Sports Channel Thumbnail", category: "YouTube Thumbnail" },
];

function PortfolioCard({
  item,
  index,
  isVisible,
}: {
  item: PortfolioItem;
  index: number;
  isVisible: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const delayClass = `delay-${Math.min((index % 3) * 100 + 100, 400)}` as string;

  return (
    <article
      className={`fade-in-up ${delayClass} ${isVisible ? "visible" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "14px",
        overflow: "hidden",
        position: "relative",
        border: hovered
          ? "1px solid oklch(0.60 0.24 292 / 55%)"
          : "1px solid oklch(0.55 0.22 292 / 25%)",
        boxShadow: hovered
          ? "0 0 24px oklch(0.55 0.22 292 / 25%), 0 8px 32px rgba(0,0,0,0.5)"
          : "0 2px 8px rgba(0,0,0,0.3)",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        cursor: "pointer",
      }}
    >
      <img
        src={`https://picsum.photos/seed/${item.seed}/600/400`}
        alt={item.title}
        style={{
          width: "100%",
          height: "240px",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.4s ease",
          transform: hovered ? "scale(1.05)" : "scale(1)",
        }}
        loading="lazy"
      />

      {/* Hover Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(to top, rgba(10,10,10,0.95) 40%, rgba(10,10,10,0.4) 100%)"
            : "linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 60%)",
          transition: "background 0.3s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "1.25rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#a855f7",
            marginBottom: "0.4rem",
            opacity: hovered ? 1 : 0.8,
            transition: "opacity 0.3s ease",
          }}
        >
          {item.category}
        </span>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: "0.95rem",
            color: "white",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {item.title}
        </h3>
      </div>
    </article>
  );
}

export function Portfolio() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.08 });

  return (
    <section
      id="work"
      style={{
        backgroundColor: "#0a0a0a",
        padding: "6rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          ref={ref}
          className={`fade-in-up ${isVisible ? "visible" : ""}`}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <div
            style={{
              display: "inline-block",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#a855f7",
              marginBottom: "1rem",
            }}
          >
            — Selected Projects —
          </div>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "white",
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
              lineHeight: 1.15,
            }}
          >
            My Work
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#a3a3a3",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A showcase of designs crafted to drive attention and real results.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={item.seed}
              item={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
