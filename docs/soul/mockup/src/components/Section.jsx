// Section wrapper — consistent spacing, max-width, and optional id for nav anchors.

export default function Section({
  id,
  children,
  className = "",
  background = "transparent",
}) {
  const bgClass =
    background === "surface"
      ? "bg-surface"
      : background === "kapur"
        ? "bg-kapur"
        : "";

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgClass} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}
