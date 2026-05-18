"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function DotGlobeHeroDemo() {
  return (
    <section style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      {/* Full viewport background image */}
      <div style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}>
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=80"
          alt="Hero background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Gradient overlays for readability */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(15,15,26,0.7) 0%, rgba(15,15,26,0.4) 50%, rgba(15,15,26,0.8) 100%)",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(15,15,26,0.3) 100%)",
        }} />
      </div>

      {/* Hero Content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 48px 80px",
      }}>
        <div style={{
          textAlign: "center",
          maxWidth: "900px",
          width: "100%",
        }}>
          {/* Editorial Label */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <div style={{
              width: "40px",
              height: "1px",
              background: "rgba(255,255,255,0.4)",
            }} />
            <span style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}>
              OrbitCrew AI Academy
            </span>
            <div style={{
              width: "40px",
              height: "1px",
              background: "rgba(255,255,255,0.4)",
            }} />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              fontSize: "clamp(40px, 7vw, 88px)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-2px",
              marginBottom: "32px",
            }}
          >
            Build Real
            <br />
            <span style={{
              background: "linear-gradient(135deg, #6b45f0, #00c9a7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              AI & Digital Skills
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              maxWidth: "640px",
              margin: "0 auto 48px",
              fontWeight: 400,
            }}
          >
            Learn practical AI automation, web development, and digital marketing through real projects, mentorship, and placement-focused training.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "64px",
            }}
          >
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 36px",
                  background: "linear-gradient(135deg, #6b45f0, #5535c9)",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 8px 32px rgba(107, 69, 240, 0.4)",
                  transition: "all 0.3s ease",
                }}
              >
                <span>Book Free Counseling</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 36px",
                  background: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: 600,
                  cursor: "pointer",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </motion.button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              flexWrap: "wrap",
              paddingTop: "32px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {[
              { value: "10-15", label: "Students Per Batch" },
              { value: "4", label: "Specialized Programs" },
              { value: "100%", label: "Practical Training" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "4px",
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{
          fontSize: "11px",
          color: "rgba(255,255,255,0.4)",
          letterSpacing: "2px",
          textTransform: "uppercase",
        }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} color="rgba(255,255,255,0.4)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
