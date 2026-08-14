import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/site";

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <ul className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service) => (
        <li key={service.slug} className="bg-background">
          <Link
            to="/services/$service"
            params={{ service: service.slug }}
            className="group flex h-full flex-col p-7 transition-colors hover:bg-surface"
          >
            <h3 className="font-display text-lg font-semibold leading-snug text-foreground">{service.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              View service
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
