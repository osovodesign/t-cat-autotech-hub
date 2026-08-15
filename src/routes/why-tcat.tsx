import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SectionHeading } from "@/components/tcat/sections";
import { ActionLink } from "@/components/tcat/action";
import { images, processSteps } from "@/data/site";

export const Route = createFileRoute("/why-tcat")({
  head: () => ({
    meta: [
      { title: "Why T-CAT ph — Diagnosis First, Then Repair" },
      {
        name: "description",
        content:
          "Accurate diagnosis, a defined workshop process, modern vehicle capability and clear communication — how T-CAT ph approaches vehicle repair in Port Harcourt.",
      },
      { property: "og:title", content: "Why T-CAT ph" },
      {
        property: "og:description",
        content: "Diagnosis first, a defined process, and repairs explained in plain language.",
      },
      { property: "og:url", content: "/why-tcat" },
    ],
    links: [{ rel: "canonical", href: "/why-tcat" }],
  }),
  component: WhyPage,
});

const pillars = [
  {
    title: "Accurate diagnosis",
    body: "Parts replaced on a guess cost money and rarely fix the problem. We confirm the fault on the vehicle before recommending a repair, using scan data alongside physical inspection.",
  },
  {
    title: "A professional process",
    body: "Inspection, diagnosis, service, verification. Every vehicle takes the same route through the workshop, which is what makes the outcome repeatable.",
  },
  {
    title: "Modern vehicle capability",
    body: "Automotive electrical systems, hybrid drivetrains and electric vehicles are part of what we service, not an area we send you elsewhere for.",
  },
  {
    title: "Clear communication",
    body: "You are told what was found, what is recommended, and what the work involves — before it is agreed, not after the invoice.",
  },
];

function WhyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why T-CAT"
        title="Diagnosis first. Repair second."
        intro="The difference between a workshop you return to and one you avoid is whether the work was necessary, correct and explained."
        image={images.diagnostics}
        imageAlt="T-CAT technician running diagnostics on a vehicle"
      />

      <Section>
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="bg-background p-8 lg:p-10">
              <h2 className="font-display text-xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading
          eyebrow="The process"
          title="What happens to your vehicle, step by step"
          onDark
        />
        <ol className="mt-12 space-y-px bg-white/10">
          {processSteps.map((s) => (
            <li key={s.n} className="grid gap-4 bg-ink p-7 sm:grid-cols-[6rem_14rem_1fr] sm:items-baseline">
              <span className="font-display text-2xl font-bold text-accent">{s.n}</span>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-ink-foreground/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src={images.reception}
            alt="T-CAT front desk staff handling a customer call"
            className="h-80 w-full object-cover lg:h-[26rem]"
            loading="lazy"
          />
          <div>
            <SectionHeading
              eyebrow="Customer experience"
              title="You should not have to chase your own vehicle."
              intro="We keep the owner informed while the vehicle is with us, and check the work again before handing it back."
            />
            <ActionLink to="/book-service" variant="accent" className="mt-8">
              Book a Service
            </ActionLink>
          </div>
        </div>
      </Section>
    </>
  );
}
