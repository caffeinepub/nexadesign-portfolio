import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: isScrolled
          ? "rgba(10, 10, 10, 0.92)"
          : "rgba(10, 10, 10, 0.7)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: isScrolled
          ? "1px solid oklch(0.55 0.22 292 / 20%)"
          : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavClick("#home")}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "1.375rem",
            letterSpacing: "-0.02em",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "white",
            padding: 0,
          }}
        >
          Nexa
          <span
            style={{
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Design
          </span>
        </button>

        {/* Desktop Nav Links */}
        <ul
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "#d4d4d4",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s ease",
                  padding: "4px 0",
                  borderBottom: "2px solid transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#a855f7";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#d4d4d4";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button Desktop */}
        <button
          type="button"
          onClick={() => handleNavClick("#contact")}
          className="hidden md:block"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            fontWeight: 600,
            padding: "0.5rem 1.25rem",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #7c3aed, #9333ea)",
            color: "white",
            border: "none",
            cursor: "pointer",
            transition: "opacity 0.2s ease, transform 0.2s ease",
            letterSpacing: "0.02em",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.opacity = "1";
            (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          }}
        >
          Hire Me
        </button>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        style={{
          backgroundColor: "rgba(10, 10, 10, 0.98)",
          borderTop: "1px solid oklch(0.55 0.22 292 / 20%)",
          overflow: "hidden",
          maxHeight: isOpen ? "400px" : "0",
          transition: "max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="md:hidden"
      >
        <nav style={{ padding: "1rem 1.5rem 1.5rem" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                display: "block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                fontWeight: 500,
                color: "#d4d4d4",
                textDecoration: "none",
                padding: "0.85rem 0",
                borderBottom: "1px solid oklch(0.55 0.22 292 / 10%)",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#a855f7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#d4d4d4";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
