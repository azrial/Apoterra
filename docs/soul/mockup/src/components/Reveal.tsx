import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  /** Delay in ms before animation starts */
  delay?: number;
  /** Additional className for the wrapper */
  className?: string;
  /** Animation variant */
  variant?: "fade-up" | "fade-in" | "fade-left" | "fade-right";
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "fade-up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small stagger based on delay prop
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const transforms: Record<string, string> = {
    "fade-up": "translate-y-6",
    "fade-in": "scale-[0.98]",
    "fade-left": "-translate-x-6",
    "fade-right": "translate-x-6",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        visible
          ? "translate-y-0 translate-x-0 scale-100 opacity-100"
          : `opacity-0 ${transforms[variant]}`
      }`}
    >
      {children}
    </div>
  );
}
