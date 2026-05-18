import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  trackClassName?: string;
}

export default function HorizontalScroll({
  children,
  className = "",
  trackClassName = "",
}: HorizontalScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
  }, []);

  useEffect(() => {
    const timer = setTimeout(checkScroll, 100);
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
      clearTimeout(timer);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = 340;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`scroll-wrapper ${className}`}>
      <button
        className={`scroll-btn scroll-btn-left ${!canScrollLeft ? "scroll-btn-hidden" : ""}`}
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className={`scroll-track ${trackClassName}`}
        onScroll={checkScroll}
      >
        {children}
      </div>

      <button
        className={`scroll-btn scroll-btn-right ${!canScrollRight ? "scroll-btn-hidden" : ""}`}
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
