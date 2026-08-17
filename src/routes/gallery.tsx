import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { PageHeader, Section } from "@/components/tcat/sections";
import { ActionLink } from "@/components/tcat/action";
import { gallery, images } from "@/data/site";
import { cn } from "@/lib/utils";

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
  const categories = useMemo(() => ["All", ...Array.from(new Set(gallery.map((g) => g.category)))], []);
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = active === "All" ? gallery : gallery.filter((g) => g.category === active);
  const current = lightbox === null ? null : items[lightbox];

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
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setActive(c);
                setLightbox(null);
              }}
              className={cn(
                "rounded-sm border px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                active === c
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-accent/50 hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li
              key={item.alt}
              className={cn("reveal", i % 5 === 0 && "sm:col-span-2")}
              style={{ animationDelay: `${Math.min(i, 8) * 50}ms` }}
            >
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative block w-full overflow-hidden rounded-md border border-border bg-card elevate"
                aria-label={`View larger: ${item.alt}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={cn(
                    "w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]",
                    i % 5 === 0 ? "h-72 lg:h-[26rem]" : "h-64 lg:h-72",
                  )}
                  loading="lazy"
                  width={960}
                  height={640}
                />
                <span className="absolute left-0 top-0 bg-ink/85 px-3 py-1.5 font-display text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-foreground">
                  {item.category}
                </span>
              </button>
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

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/25 text-ink-foreground transition-colors hover:bg-white/10"
            aria-label="Close image"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <figure className="max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} className="max-h-[76vh] w-full rounded-md object-contain" />
            <figcaption className="mt-4 text-center text-sm text-ink-foreground/70">{current.alt}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
