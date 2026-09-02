// Logo component — reproduces the exact Apoterra brand mark SVG.
// Dark circle with sprout/root path and soil-colored dot.

export default function Logo({ className = "w-8 h-8" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="16" r="16" fill="#25231E" />
      <path
        d="M16 7c4 3 6.5 6 6.5 10a6.5 6.5 0 1 1-13 0c0-2.4 1-4.6 2.7-6.4"
        fill="none"
        stroke="#F2EEE7"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="17.5" r="2.4" fill="#8E7F64" />
    </svg>
  );
}
