import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/tcat/sections";
import { ActionLink, ActionAnchor } from "@/components/tcat/action";
import { company, faqs, images } from "@/data/site";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Vehicle Repair Questions Answered | T-CAT ph" },
      {
        name: "description",
        content:
          "Answers on warning lights, hybrid and EV servicing, booking, inspections and turnaround at T-CAT ph, Trans-Amadi, Port Harcourt.",
      },
      { property: "og:title", content: "T-CAT ph — Frequently Asked Questions" },
      { property: "og:description", content: "Warning lights, EV and hybrid service, booking and inspections." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions vehicle owners ask us"
        intro="If your question isn't answered here, call or message the workshop and we'll answer it directly."
        image={images.office}
        imageAlt="T-CAT service adviser at the front office"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <dl className="divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="py-7">
                <dt className="font-display text-lg font-semibold">{f.q}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>

          <aside className="h-fit border border-border bg-surface p-7 lg:sticky lg:top-28">
            <h2 className="font-display text-lg font-semibold">Still need an answer?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Speak to the workshop directly about your make, model and symptoms.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ActionAnchor href={company.phoneHref} variant="accent">
                Call {company.phone}
              </ActionAnchor>
              <ActionAnchor href={company.whatsappHref} target="_blank" rel="noreferrer" variant="outline">
                WhatsApp T-CAT
              </ActionAnchor>
              <ActionLink to="/book-service" variant="outline">
                Book a Service
              </ActionLink>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
