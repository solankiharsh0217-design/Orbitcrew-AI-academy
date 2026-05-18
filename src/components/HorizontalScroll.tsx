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
    const firstChild = el.firstElementChild as HTMLElement | null;
    const itemWidth = firstChild ? firstChild.offsetWidth + 16 : 340;
    el.scrollBy({
      left: direction === "left" ? -itemWidth : itemWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className={`hscroll ${className}`}>
      <button
        className={`hscroll-btn hscroll-btn-left ${!canScrollLeft ? "hscroll-btn-hidden" : ""}`}
        onClick={() => scroll("left")}
        aria-label="Scroll left"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={scrollRef}
        className={`hscroll-track ${trackClassName}`}
        onScroll={checkScroll}
      >
        {children}
      </div>

      <button
        className={`hscroll-btn hscroll-btn-right ${!canScrollRight ? "hscroll-btn-hidden" : ""}`}
        onClick={() => scroll("right")}
        aria-label="Scroll right"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
