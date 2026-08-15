import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/tcat/sections";
import { ActionLink } from "@/components/tcat/action";
import { gallery, images } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Workshop Gallery — T-CAT ph, Trans-Amadi Port Harcourt" },
      {
        name: "description",
        content:
          "Photographs of the T-CAT ph workshop: service bays, diagnostics, technicians at work, front office and car wash on Trans-Amadi, Port Harcourt.",
      },
      { property: "og:title", content: "Inside the T-CAT ph Workshop" },
      { property: "og:description", content: "Service bays, diagnostics and technicians at work in Port Harcourt." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Inside the workshop"
        intro="Real photographs of the T-CAT facility, equipment and technicians at Trans-Amadi Industrial Layout."
        image={images.exteriorBays}
        imageAlt="Service bays at the T-CAT ph workshop"
      />

      <Section>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, i) => (
            <li
              key={item.alt}
              className={`group relative overflow-hidden ${i % 5 === 0 ? "sm:col-span-2" : ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] lg:h-72"
                loading="lazy"
              />
              <span className="absolute left-0 top-0 bg-ink/85 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink-foreground">
                {item.category}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <ActionLink to="/book-service" variant="accent">
            Book a Service
          </ActionLink>
          <ActionLink to="/services" variant="outline">
            View services
          </ActionLink>
        </div>
      </Section>
    </>
  );
}
