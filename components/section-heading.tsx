export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light"
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-orange">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-4 text-3xl font-black leading-tight sm:text-5xl ${tone === "dark" ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 text-lg leading-8 ${tone === "dark" ? "text-white/72" : "text-slateText"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}
