import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, SectionHeading } from "@/components/tcat/sections";
import { ActionLink } from "@/components/tcat/action";
import { images } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About T-CAT ph — Thecheksons Autotech, Port Harcourt" },
      {
        name: "description",
        content:
          "T-CAT ph (Thecheksons Autotech) is an automotive repair and maintenance workshop on Trans-Amadi, Port Harcourt, serving all vehicle brands and trims.",
      },
      { property: "og:title", content: "About T-CAT ph — Thecheksons Autotech" },
      { property: "og:type", content: "website" },
      {
        property: "og:description",
        content: "An automotive repair and maintenance workshop on Trans-Amadi, Port Harcourt.",
      },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const blocks = [
  {
    title: "Who we are",
    body: "T-CAT ph — Thecheksons Autotech — is an automotive repair and maintenance workshop on Trans-Amadi Industrial Layout in Port Harcourt. The workshop is set up for car repair and maintenance across all brands and trims, with dedicated service bays, a diagnostics area, a front office and a car wash.",
  },
  {
    title: "What we do",
    body: "Engine diagnostics, full vehicle inspection, oil and engine care, battery and electrical work, brake and safety servicing, general repair and maintenance, and electric and hybrid vehicle service.",
  },
  {
    title: "How we work",
    body: "Every vehicle follows the same route through the workshop: inspection on arrival, diagnosis of the actual fault, the agreed service or repair, then a verification check before handover. Findings are explained to the owner before work is agreed.",
  },
  {
    title: "Where we are going",
    body: "Vehicles on Nigerian roads are changing. T-CAT is building capability around modern automotive electrical systems, hybrid drivetrains and electric vehicles so owners of newer vehicles have a workshop equipped to look after them.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="An automotive workshop built around process."
        intro="T-CAT ph carries out car repair and maintenance for all brands and trims from its workshop on Trans-Amadi Industrial Layout, Port Harcourt."
        image={images.exterior}
        imageAlt="The T-CAT ph workshop building on Trans-Amadi Industrial Layout"
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="space-y-12">
            {blocks.map((b) => (
              <div key={b.title} className="rule-accent">
                <h2 className="text-2xl font-bold">{b.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            ))}
            <p className="border border-dashed border-border p-5 text-sm text-muted-foreground">
              Company history, founding story, team size and leadership background: [COMPANY INFORMATION TO BE
              CONFIRMED]
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:sticky lg:top-28">
            <img
              src={images.office}
              alt="T-CAT service adviser at the front office desk"
              className="aspect-[16/9] w-full object-cover sm:col-span-2 lg:h-80"
              loading="lazy"
              width={960}
              height={540}
            />
            <img
              src={images.technicians}
              alt="T-CAT technicians working on a vehicle"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={640}
              height={480}
            />
            <img
              src={images.carwash}
              alt="Vehicle being washed at the T-CAT car wash"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
              width={640}
              height={480}
            />
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading
          eyebrow="Next step"
          title="Bring your vehicle to Trans-Amadi"
          intro="Tell us what you've noticed and we'll assess the vehicle before recommending any work."
          onDark
        />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ActionLink to="/book-service" variant="accent">
            Book a Service
          </ActionLink>
          <ActionLink to="/contact" variant="onDark">
            Contact T-CAT
          </ActionLink>
        </div>
      </Section>
    </>
  );
}
