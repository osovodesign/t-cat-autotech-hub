import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "light",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "surface" | "ink";
  id?: string;
}) {
  const tones = {
    light: "bg-background text-foreground",
    surface: "bg-surface text-foreground",
    ink: "bg-ink text-ink-foreground",
  } as const;
  return (
    <section id={id} className={cn("py-20 lg:py-28", tones[tone], className)}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-bold leading-[1.1] sm:text-4xl">{title}</h2>
      {intro && (
        <p className={cn("mt-4 text-base leading-relaxed", onDark ? "text-ink-foreground/70" : "text-muted-foreground")}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" aria-hidden="true" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">{intro}</p>
      </div>
    </section>
  );
}
