// Icon component — renders inline SVGs using currentColor for stroke/fill.
// All icons are custom-drawn; no icon fonts or external images.
// iconName prop maps to a specific SVG path set.

const ICON_PATHS = {
  // Foundation / pillar: stacked layers representing stable base
  foundation: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22h24" />
      <path d="M6 17h20" />
      <path d="M8 12h16" />
      <path d="M12 7h8" />
    </g>
  ),

  // Control: dashboard gauge with pointer
  control: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="11" />
      <path d="M16 9v7l4 3" />
      <path d="M16 5v2" />
      <path d="M5 16h2" />
      <path d="M25 16h2" />
    </g>
  ),

  // Peace: gentle wave / calm horizon
  peace: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18c4-4 8 0 12-4s8 0 12-4" />
      <path d="M4 24c4-4 8 0 12-4s8 0 12-4" />
      <circle cx="16" cy="9" r="3" />
    </g>
  ),

  // Database: stacked cylinders for records
  database: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="16" cy="8" rx="10" ry="4" />
      <path d="M6 8v16c0 2.2 4.5 4 10 4s10-1.8 10-4V8" />
      <path d="M6 16c0 2.2 4.5 4 10 4s10-1.8 10-4" />
    </g>
  ),

  // Monitor: screen with signal bars
  monitor: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="26" height="17" rx="2" />
      <path d="M12 26h8" />
      <path d="M16 22v4" />
      <path d="M8 14h4" />
      <path d="M8 10h8" />
    </g>
  ),

  // Reconcile: two arrows forming a cycle with checkmark
  reconcile: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12a6 6 0 0 0-10.5-3" />
      <path d="M10 20a6 6 0 0 0 10.5 3" />
      <polyline points="11 9 13 12 10 12" />
      <polyline points="21 20 19 23 22 23" />
      <path d="M14 16l2 2 4-4" />
    </g>
  ),

  // Expiry: calendar with alert dot
  expiry: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="24" height="22" rx="2" />
      <path d="M4 12h24" />
      <path d="M10 3v6" />
      <path d="M22 3v6" />
      <circle cx="16" cy="20" r="2" fill="currentColor" stroke="none" />
    </g>
  ),

  // Price: tag with centered dot
  price: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M26 14L14 26a2 2 0 0 1-2.8 0L5.2 20a2 2 0 0 1 0-2.8L17 5h9v9z" />
      <circle cx="21" cy="9" r="1.5" fill="currentColor" stroke="none" />
    </g>
  ),

  // Cashier: POS terminal / receipt
  cashier: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="20" height="24" rx="2" />
      <path d="M10 10h12" />
      <path d="M10 15h8" />
      <path d="M10 20h10" />
      <path d="M6 8h20" />
    </g>
  ),

  // Owner: person with badge/star
  owner: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="10" r="5" />
      <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" />
      <path d="M22 6l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5L17 9.5 20.5 9z" />
    </g>
  ),

  // Staff: two people silhouette
  staff: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="4" />
      <path d="M4 26c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <circle cx="22" cy="11" r="3.5" />
      <path d="M22 18c3.3 0 6 2.7 6 6" />
    </g>
  ),

  // Checkmark for success lists
  check: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 16 12 22 24 10" />
    </g>
  ),

  // Menu hamburger
  menu: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 8h24" />
      <path d="M4 16h24" />
      <path d="M4 24h24" />
    </g>
  ),

  // Close X
  close: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M8 8l16 16" />
      <path d="M24 8L8 24" />
    </g>
  ),

  // Chevron right for links
  chevronRight: (
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="10 6 22 16 10 26" />
    </g>
  ),
};

/**
 * Reusable inline SVG icon component.
 * @param {string} name - Key from ICON_PATHS
 * @param {string} [className] - Tailwind classes for sizing/color
 * @param {string} [ariaLabel] - Accessible label; if omitted, icon is decorative (aria-hidden)
 */
export default function Icon({ name, className = "w-6 h-6", ariaLabel }) {
  const paths = ICON_PATHS[name];
  if (!paths) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`Icon: unknown name "${name}"`);
    }
    return null;
  }

  const accessible = Boolean(ariaLabel);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-hidden={!accessible}
      aria-label={accessible ? ariaLabel : undefined}
      role={accessible ? "img" : undefined}
      focusable="false"
    >
      {paths}
    </svg>
  );
}
