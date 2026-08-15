import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/tcat/sections";
import { ServiceGrid } from "@/components/home/service-grid";
import { ActionLink } from "@/components/tcat/action";
import { images, services } from "@/data/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Diagnostics, Servicing, EV & Hybrid | T-CAT ph" },
      {
        name: "description",
        content:
          "Engine diagnostics, vehicle inspection, oil and engine care, battery and electrical, brakes, general repair, EV and hybrid service in Port Harcourt.",
      },
      { property: "og:title", content: "T-CAT ph Services — Port Harcourt" },
      {
        property: "og:description",
        content: "Diagnostics, servicing, electrical, brake, EV and hybrid vehicle service for all brands and trims.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Vehicle service areas covered at T-CAT"
        intro="Car repair and maintenance for all brands and trims. Each service follows the same workshop process: inspect, diagnose, service, verify."
        image={images.exteriorBays}
        imageAlt="Open service bays at the T-CAT ph workshop"
      />
      <Section>
        <ServiceGrid items={services} />
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <ActionLink to="/book-service" variant="accent">
            Book a Service
          </ActionLink>
          <ActionLink to="/contact" variant="outline">
            Contact T-CAT
          </ActionLink>
        </div>
      </Section>
    </>
  );
}
