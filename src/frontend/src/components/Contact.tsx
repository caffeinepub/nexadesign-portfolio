import { useState } from "react";
import { Mail, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface FormState {
  name: string;
  email: string;
  project: string;
}

export function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [form, setForm] = useState<FormState>({ name: "", email: "", project: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Presentational only — simulate success
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#0a0a0a",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, oklch(0.55 0.22 292 / 10%) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          ref={ref}
          className={`fade-in-up ${isVisible ? "visible" : ""}`}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
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
            — Get In Touch —
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
            Let's Work Together
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
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          className={`fade-in-up delay-100 ${isVisible ? "visible" : ""}`}
          style={{
            display: "grid",
            gap: "3rem",
          }}
          // Responsive grid: 1 col mobile, 2 col desktop
        >
          <div
            style={{
              display: "grid",
              gap: "3rem",
              gridTemplateColumns: "1fr",
            }}
            className="lg:grid-cols-2"
          >
            {/* Form */}
            <div
              style={{
                backgroundColor: "#111111",
                border: "1px solid oklch(0.55 0.22 292 / 20%)",
                borderRadius: "20px",
                padding: "2rem",
              }}
            >
              {submitted ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    minHeight: "320px",
                    textAlign: "center",
                  }}
                >
                  <CheckCircle size={56} color="#a855f7" strokeWidth={1.5} />
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "1.5rem",
                      color: "white",
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#a3a3a3",
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", project: "" }); }}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      padding: "0.625rem 1.5rem",
                      borderRadius: "8px",
                      background: "transparent",
                      color: "#a855f7",
                      border: "1px solid oklch(0.55 0.22 292 / 50%)",
                      cursor: "pointer",
                    }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ marginBottom: "1.25rem" }}>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "#d4d4d4",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="input-purple"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "10px",
                        fontSize: "0.9rem",
                        fontFamily: "'Inter', sans-serif",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "1.25rem" }}>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "#d4d4d4",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="input-purple"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "10px",
                        fontSize: "0.9rem",
                        fontFamily: "'Inter', sans-serif",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: "1.75rem" }}>
                    <label
                      htmlFor="project"
                      style={{
                        display: "block",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 500,
                        color: "#d4d4d4",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Project Details
                    </label>
                    <textarea
                      id="project"
                      name="project"
                      required
                      value={form.project}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className="input-purple"
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        borderRadius: "10px",
                        fontSize: "0.9rem",
                        fontFamily: "'Inter', sans-serif",
                        boxSizing: "border-box",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      fontSize: "1rem",
                      padding: "0.9rem",
                      borderRadius: "10px",
                      background: "linear-gradient(135deg, #7c3aed, #9333ea, #a855f7)",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                      letterSpacing: "0.02em",
                      transition: "opacity 0.2s ease, transform 0.2s ease",
                      boxShadow: "0 4px 20px oklch(0.55 0.22 292 / 35%)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.opacity = "0.88";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLButtonElement;
                      el.style.opacity = "1";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {/* Info cards */}
              <div
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid oklch(0.55 0.22 292 / 20%)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "oklch(0.55 0.22 292 / 15%)",
                    border: "1px solid oklch(0.55 0.22 292 / 30%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a855f7",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#737373",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Email
                  </div>
                  <a
                    href="mailto:rajdutta2567@gmail.com"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      color: "#d4d4d4",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    rajdutta2567@gmail.com
                  </a>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid oklch(0.55 0.22 292 / 20%)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: "oklch(0.55 0.22 292 / 15%)",
                    border: "1px solid oklch(0.55 0.22 292 / 30%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a855f7",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#737373",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Mobile
                  </div>
                  <a
                    href="tel:+919707796407"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      color: "#d4d4d4",
                      textDecoration: "none",
                      fontWeight: 500,
                    }}
                  >
                    +91 9707796407
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919707796407"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  padding: "1rem 1.5rem",
                  borderRadius: "14px",
                  backgroundColor: "#16a34a",
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  transition: "background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: "0 4px 20px rgba(22, 163, 74, 0.3)",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "#15803d";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 8px 28px rgba(22, 163, 74, 0.45)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.backgroundColor = "#16a34a";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 4px 20px rgba(22, 163, 74, 0.3)";
                }}
              >
                <MessageCircle size={22} />
                Chat on WhatsApp
              </a>

              {/* Response time badge */}
              <div
                style={{
                  backgroundColor: "#111111",
                  border: "1px solid oklch(0.55 0.22 292 / 20%)",
                  borderRadius: "12px",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#22c55e",
                    boxShadow: "0 0 8px #22c55e",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "#a3a3a3",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  Typically responds within{" "}
                  <strong style={{ color: "#d4d4d4" }}>24 hours</strong>. Available
                  for freelance and contract work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
