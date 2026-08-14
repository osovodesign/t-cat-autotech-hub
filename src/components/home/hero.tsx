import { ActionLink } from "@/components/tcat/action";
import { company, images } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <img
        src={images.hero}
        alt="T-CAT technicians carrying out a pressure check under the bonnet of a vehicle"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-ink via-ink/92 to-ink/55"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-36">
        <div className="max-w-3xl reveal">
          <p className="eyebrow">Port Harcourt · Trans-Amadi</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.03] sm:text-5xl lg:text-[4rem]">
            Professional automotive care, built around precision.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
            From diagnostics and routine maintenance to electrical, hybrid and EV servicing, T-CAT helps vehicle owners
            understand what their car actually needs — and get the right work done on it.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ActionLink to="/book-service" variant="accent" size="lg">
              Book a Service
            </ActionLink>
            <ActionLink to="/services" variant="onDark" size="lg">
              Explore Services
            </ActionLink>
          </div>
          <p className="mt-8 text-sm text-ink-foreground/60">
            Car repair &amp; maintenance for all brands and trims ·{" "}
            <a href={company.phoneHref} className="text-ink-foreground underline underline-offset-4 hover:text-accent">
              {company.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
