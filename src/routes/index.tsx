import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gauge, ClipboardCheck, BatteryCharging, MessagesSquare } from "lucide-react";
import { Hero } from "@/components/home/hero";
import { ServiceGrid } from "@/components/home/service-grid";
import { Section, SectionHeading } from "@/components/tcat/sections";
import { ActionLink, ActionAnchor, actionClasses } from "@/components/tcat/action";
import { company, images, processSteps, services } from "@/data/site";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "T-CAT ph — Car Repair, Diagnostics & Servicing in Port Harcourt" },
      {
        name: "description",
        content:
          "Professional diagnostics, servicing, electrical, hybrid and EV vehicle care for all brands and trims at T-CAT ph, Trans-Amadi, Port Harcourt.",
      },
      { property: "og:title", content: "T-CAT ph — Car Repair & Maintenance, Port Harcourt" },
      {
        property: "og:description",
        content:
          "Diagnostics, servicing, electrical, hybrid and EV vehicle care for all brands and trims in Port Harcourt.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const strengths = [
  {
    icon: Gauge,
    title: "Professional Diagnostics",
    body: "Faults are identified with equipment and inspection, not assumption.",
  },
  {
    icon: ClipboardCheck,
    title: "Structured Service",
    body: "Every vehicle follows the same process from inspection to final verification.",
  },
  {
    icon: BatteryCharging,
    title: "Modern Vehicle Capability",
    body: "Electrical systems, hybrid drivetrains and electric vehicles.",
  },
  {
    icon: MessagesSquare,
    title: "Customer-Focused Care",
    body: "You are told what was found, what is needed and what it involves.",
  },
];

function HomePage() {
  return (
    <>
      <Hero />

      {/* Positioning strip */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-px bg-border px-0 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-background px-6 py-8 lg:px-8">
              <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
              <h2 className="mt-4 font-display text-base font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <Section>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="What we do"
            title="Service areas covered at Trans-Amadi"
            intro="Car repair and maintenance for all brands and trims, handled by technicians working to a defined workshop process."
          />
          <ActionLink to="/services" variant="outline" className="self-start lg:self-end">
            All services
          </ActionLink>
        </div>
        <div className="mt-12">
          <ServiceGrid items={services.slice(0, 6)} />
        </div>
      </Section>

      {/* Why T-CAT */}
      <Section tone="surface">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why T-CAT"
              title="The repair you pay for should be the repair your vehicle needs."
              intro="Most frustration with vehicle repair comes from parts replaced on a guess and work that is never explained. Our process is designed to remove both."
            />
            <dl className="mt-10 space-y-8">
              {[
                {
                  t: "Accurate diagnosis first",
                  d: "The fault is confirmed on the vehicle before any repair is recommended.",
                },
                {
                  t: "A professional process",
                  d: "Inspection, diagnosis, service and verification — in that order, every time.",
                },
                {
                  t: "Modern vehicle capability",
                  d: "Automotive electrical systems, hybrid drivetrains and electric vehicles.",
                },
                {
                  t: "Clear communication",
                  d: "You are told what was found and what the work involves, in language that makes sense.",
                },
              ].map((item) => (
                <div key={item.t} className="border-l-2 border-accent pl-5">
                  <dt className="font-display text-base font-semibold">{item.t}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.d}</dd>
                </div>
              ))}
            </dl>
            <ActionLink to="/why-tcat" variant="primary" className="mt-10">
              See how we work
            </ActionLink>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={images.technicians}
              alt="Two T-CAT technicians inspecting a vehicle engine bay"
              className="col-span-2 h-72 w-full rounded-md object-cover elevate lg:h-96"
              loading="lazy"
              width={960}
              height={640}
            />
            <img
              src={images.diagnostics}
              alt="T-CAT technician using diagnostic equipment on a vehicle"
              className="h-44 w-full rounded-md object-cover elevate lg:h-56"
              loading="lazy"
              width={480}
              height={320}
            />
            <img
              src={images.exteriorBays}
              alt="Service bays at the T-CAT workshop in Port Harcourt"
              className="mt-6 h-44 w-full rounded-md object-cover elevate lg:h-56"
              loading="lazy"
              width={480}
              height={320}
            />
          </div>

        </div>
      </Section>

      {/* Process */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="Our process"
          title="Five steps, followed on every vehicle"
          intro="A defined workshop process is what makes results repeatable — and what lets us explain exactly where your vehicle is."
          onDark
        />
        <ol className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.n} className="bg-ink p-7">
              <span className="font-display text-3xl font-bold text-accent">{step.n}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Customer experience */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <img
            src={images.reception}
            alt="T-CAT front desk staff taking a customer call beneath the illuminated T-CAT ph sign"
            className="h-80 w-full rounded-md object-cover elevate lg:h-[30rem]"
            loading="lazy"
            width={800}
            height={960}
          />

          <div>
            <SectionHeading
              eyebrow="Customer experience"
              title="Your vehicle is in the workshop. You're still in the loop."
              intro="Most of the stress around vehicle repair is uncertainty — not knowing what was found, what is being done, or when the car will be ready."
            />
            <ul className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                Findings are explained before work is agreed.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                You can reach the workshop by phone or WhatsApp while your vehicle is with us.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                The vehicle is checked again before it is handed back.
              </li>
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ActionAnchor href={company.whatsappHref} target="_blank" rel="noreferrer" variant="primary">
                WhatsApp T-CAT
              </ActionAnchor>
              <ActionAnchor href={company.phoneHref} variant="outline">
                Call {company.phone}
              </ActionAnchor>
            </div>
          </div>
        </div>
      </Section>

      {/* EV & Hybrid */}
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={images.acService}
          alt="Technician servicing a vehicle air conditioning system at T-CAT"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="lazy"
          width={1600}
          height={900}
        />
        <div className="absolute inset-0 duotone-ink" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Electric &amp; hybrid</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Ready for the vehicles arriving on Port Harcourt roads next.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-foreground/75">
              Hybrid and electric vehicles need workshops equipped and trained for high-voltage systems. T-CAT offers
              electric and hybrid vehicle repair and maintenance, and continues to build capability in this area.
            </p>
            <Link
              to="/services/$service"
              params={{ service: "electric-vehicle-service" }}
              className={actionClasses("accent", "md", "mt-9")}
            >
              Explore EV &amp; hybrid services
            </Link>

          </div>
        </div>
      </section>

      {/* Workshop */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="The workshop"
          title="A better workshop experience starts with how the work is done."
          intro="Organised bays, proper equipment and a consistent routine are what make repair quality predictable rather than lucky."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <img
            src={images.exterior}
            alt="Front view of the T-CAT ph workshop on Trans-Amadi Industrial Layout"
            className="h-64 w-full object-cover md:col-span-2 md:h-96"
            loading="lazy"
          />
          <img
            src={images.office}
            alt="T-CAT service adviser working at the front office"
            className="h-64 w-full object-cover md:h-96"
            loading="lazy"
          />
        </div>
        <ActionLink to="/gallery" variant="outline" className="mt-10">
          View gallery
        </ActionLink>
      </Section>

      {/* Closing CTA */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-8 border border-border bg-background p-8 lg:flex-row lg:items-center lg:p-12">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Book your vehicle in at Trans-Amadi</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tell us the make, model and what you've noticed. We'll confirm a time and assess the vehicle when it
              arrives.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink to="/book-service" variant="accent" size="lg">
              Book a Service
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ActionLink>
            <ActionLink to="/contact" variant="outline" size="lg">
              Contact T-CAT
            </ActionLink>
          </div>
        </div>
      </Section>
    </>
  );
}
