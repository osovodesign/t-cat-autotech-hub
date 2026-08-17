import { ActionLink } from "@/components/tcat/action";
import { company, images } from "@/data/site";

const trust = ["All brands & trims", "Diagnostics-led repair", "Trans-Amadi, Port Harcourt"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <img
        src={images.hero}
        alt="T-CAT technicians carrying out a pressure check under the bonnet of a vehicle"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-45"
        fetchPriority="high"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 duotone-ink" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 py-28 lg:px-8 lg:py-40">
        <div className="max-w-3xl reveal">
          <p className="eyebrow">Port Harcourt · Trans-Amadi</p>
          <span className="mt-5 block h-[3px] w-16 bg-accent" aria-hidden="true" />
          <h1 className="mt-6 text-[2.6rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.5rem]">
            Professional automotive care, built around precision.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
            From diagnostics and routine maintenance to electrical, hybrid and EV servicing, T-CAT helps vehicle owners
            understand what their car actually needs — and get the right work done on it.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ActionLink to="/book-service" variant="accent" size="lg">
              Book a Service
            </ActionLink>
            <ActionLink to="/services" variant="onDark" size="lg">
              Explore Services
            </ActionLink>
          </div>
          <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-ink-foreground/65">
            {trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-accent" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-foreground/60">
            <a href={company.phoneHref} className="text-ink-foreground underline underline-offset-4 hover:text-accent">
              {company.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
