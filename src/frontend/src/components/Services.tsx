import { Play, Pen, Sparkles, Palette } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import type { ReactNode } from "react";

interface ServiceCard {
  icon: ReactNode;
  title: string;
  description: string;
  delay: string;
}

const services: ServiceCard[] = [
  {
    icon: <Play size={24} />,
    title: "YouTube Thumbnail Design",
    description:
      "Eye-catching, high-CTR thumbnails designed to increase clicks and improve video performance.",
    delay: "delay-100",
  },
  {
    icon: <Pen size={24} />,
    title: "Logo Design",
    description:
      "Professional and memorable logos that build strong brand identity and trust.",
    delay: "delay-200",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Brand Animation",
    description:
      "Modern intro and outro animations that enhance brand presence.",
    delay: "delay-300",
  },
  {
    icon: <Palette size={24} />,
    title: "Graphic Design",
    description:
      "Custom social media posts, banners, and promotional visuals tailored to your niche.",
    delay: "delay-400",
  },
];

function ServiceCardItem({
  icon,
  title,
  description,
  delay,
  isVisible,
}: ServiceCard & { isVisible: boolean }) {
  return (
    <div
      className={`fade-in-up ${delay} ${isVisible ? "visible" : ""} card-glow`}
      style={{
        backgroundColor: "#1a1a2e",
        borderRadius: "16px",
        padding: "2rem",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "12px",
          backgroundColor: "oklch(0.55 0.22 292 / 15%)",
          border: "1px solid oklch(0.55 0.22 292 / 30%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#a855f7",
          marginBottom: "1.25rem",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: "1.125rem",
          color: "white",
          marginBottom: "0.75rem",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.9rem",
          lineHeight: "1.7",
          color: "#a3a3a3",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export function Services() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="services"
      style={{
        backgroundColor: "#111111",
        padding: "6rem 1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Section Header */}
        <div
          ref={ref}
          className={`fade-in-up ${isVisible ? "visible" : ""}`}
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
          }}
        >
          {/* Accent line */}
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
            — What I Offer —
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
            Our Services
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#a3a3a3",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Professional design solutions built for impact and growth.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
          className="md:grid-cols-2"
        >
          {services.map((service) => (
            <ServiceCardItem
              key={service.title}
              {...service}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
