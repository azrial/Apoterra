// Button component — primary and secondary variants using brand colors.

const VARIANTS = {
  primary:
    "bg-arang-hangat text-kapur hover:bg-arang-hangat-hover active:bg-arang-hangat-active",
  secondary:
    "bg-transparent border border-border-strong text-arang hover:bg-tanah-tint-1 active:bg-tanah-tint-2",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";

  return (
    <button className={`${base} ${VARIANTS[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
