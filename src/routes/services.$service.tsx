import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, ArrowLeft } from "lucide-react";
import { PageHeader, Section } from "@/components/tcat/sections";
import { ActionLink, ActionAnchor } from "@/components/tcat/action";
import { company, services } from "@/data/site";

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.service);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service unavailable — T-CAT ph" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
    return {
      meta: [
        { title: `${service.name} — T-CAT ph, Port Harcourt` },
        { name: "description", content: service.summary },
        { property: "og:title", content: `${service.name} — T-CAT ph` },
        { property: "og:description", content: service.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/services/${params.service}` },
      ],
      links: [{ rel: "canonical", href: `/services/${params.service}` }],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={service.name}
        intro={service.summary}
        image={service.image}
        imageAlt={`${service.name} at the T-CAT workshop`}
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All services
            </Link>
            <h2 className="mt-8 text-2xl font-bold sm:text-3xl">What this covers</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{service.description}</p>
            <ul className="mt-8 space-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Pricing depends on the vehicle and the work required. [PRICING TO BE CONFIRMED BY T-CAT]
            </p>
          </div>

          <aside className="h-fit border border-border bg-surface p-7">
            <h2 className="font-display text-lg font-semibold">Book this service</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Send your vehicle details and we'll confirm a time at the Trans-Amadi workshop.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ActionLink to="/book-service" variant="accent">
                Request Service
              </ActionLink>
              <ActionAnchor href={company.phoneHref} variant="outline">
                Call {company.phone}
              </ActionAnchor>
              <ActionAnchor href={company.whatsappHref} target="_blank" rel="noreferrer" variant="outline">
                WhatsApp T-CAT
              </ActionAnchor>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl font-bold">Other services</h2>
        <ul className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3">
          {others.map((s) => (
            <li key={s.slug} className="bg-background">
              <Link
                to="/services/$service"
                params={{ service: s.slug }}
                className="flex h-full flex-col p-7 transition-colors hover:bg-surface"
              >
                <h3 className="font-display text-base font-semibold">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
