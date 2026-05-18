import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
  itemWidth?: number;
  gap?: number;
}

export default function HorizontalScroll({
  children,
  className = "",
  trackClassName = "",
  itemWidth = 320,
  gap = 16,
}: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = itemWidth + gap;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-wrapper ${className}`} style={{ position: "relative" }}>
      {canScrollLeft && (
        <button
          className="scroll-btn scroll-btn-left"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          style={{
            position: "absolute",
            left: "-16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "var(--white)",
            border: "1px solid var(--primary-border)",
            boxShadow: "var(--shadow-md)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: "var(--primary)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--primary)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--white)";
            e.currentTarget.style.color = "var(--primary)";
          }}
        >
          <ChevronLeft size={20} />
        </button>
      )}

      <div
        ref={scrollRef}
        className={trackClassName}
        style={{
          overflowX: "auto",
          paddingBottom: "20px",
          scrollbarWidth: "thin",
          scrollbarColor: "var(--primary-light) var(--gray-100)",
        }}
      >
        {children}
      </div>

      {canScrollRight && (
        <button
          className="scroll-btn scroll-btn-right"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          style={{
            position: "absolute",
            right: "-16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            background: "var(--white)",
            border: "1px solid var(--primary-border)",
            boxShadow: "var(--shadow-md)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: "var(--primary)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--primary)";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--white)";
            e.currentTarget.style.color = "var(--primary)";
          }}
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
}
