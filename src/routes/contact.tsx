import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { PageHeader, Section } from "@/components/tcat/sections";
import { ActionLink, ActionAnchor } from "@/components/tcat/action";
import { company, images } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact T-CAT ph — Trans-Amadi, Port Harcourt" },
      {
        name: "description",
        content: `Call ${company.phone}, message on WhatsApp or visit T-CAT ph at ${company.addressLine1}, Port Harcourt for vehicle repair and servicing.`,
      },
      { property: "og:title", content: "Contact T-CAT ph — Port Harcourt" },
      { property: "og:type", content: "website" },
      { property: "og:description", content: "Phone, WhatsApp, email and workshop address on Trans-Amadi." },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: Phone, label: "Phone", value: company.phone, href: company.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: company.phone, href: company.whatsappHref },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: Instagram, label: "Social", value: company.social, href: company.instagram },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to the workshop"
        intro="Call, message on WhatsApp, or visit us at Trans-Amadi Industrial Layout in Port Harcourt."
        image={images.reception}
        imageAlt="T-CAT reception beneath the illuminated workshop sign"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Get in touch</h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {items.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 py-5 transition-colors hover:text-accent"
                  >
                    <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        {label}
                      </span>
                      <span className="block truncate font-display text-base font-semibold">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <p className="text-sm leading-relaxed">
                  <span className="block font-display font-semibold">{company.legalName}</span>
                  {company.addressLine1}
                  <br />
                  {company.addressLine2}
                </p>
              </div>
              <div className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <span className="block font-display font-semibold text-foreground">Opening hours</span>
                  {company.hours}
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ActionAnchor href={company.whatsappHref} target="_blank" rel="noreferrer" variant="accent">
                WhatsApp T-CAT
              </ActionAnchor>
              <ActionLink to="/book-service" variant="outline">
                Book a Service
              </ActionLink>
            </div>
          </div>

          <div className="min-h-[24rem] border border-border">
            <iframe
              title="Map showing T-CAT ph on Trans-Amadi Industrial Layout, Port Harcourt"
              src="https://www.google.com/maps?q=60%20Trans-Amadi%20Industrial%20Layout%20Port%20Harcourt&output=embed"
              className="h-full min-h-[24rem] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
