import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-display text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90",
  outline: "border border-input text-foreground hover:bg-secondary",
  ghost: "text-foreground hover:text-accent",
  onDark: "border border-white/25 text-ink-foreground hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6",
  lg: "h-12 px-7",
};

export function actionClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type Extra = { variant?: Variant; size?: Size; children?: ReactNode };

export function ActionButton({ variant, size, className, ...props }: ComponentProps<"button"> & Extra) {
  return <button className={actionClasses(variant, size, className)} {...props} />;
}

export function ActionLink({ variant, size, className, ...props }: ComponentProps<typeof Link> & Extra) {
  return <Link className={actionClasses(variant, size, className)} {...props} />;
}

export function ActionAnchor({ variant, size, className, ...props }: ComponentProps<"a"> & Extra) {
  return <a className={actionClasses(variant, size, className)} {...props} />;
}
