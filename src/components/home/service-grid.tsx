import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/site";

export function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((service, i) => (
        <li key={service.slug} className="reveal" style={{ animationDelay: `${Math.min(i, 6) * 60}ms` }}>
          <Link
            to="/services/$service"
            params={{ service: service.slug }}
            className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-card elevate"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={service.image}
                alt={`${service.name} at the T-CAT ph workshop in Port Harcourt`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                loading="lazy"
                width={640}
                height={400}
              />
              <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/35 to-transparent" aria-hidden="true" />
              <h3 className="absolute inset-x-0 bottom-0 p-5 font-display text-lg font-semibold leading-snug text-ink-foreground">
                {service.name}
              </h3>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                View service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
