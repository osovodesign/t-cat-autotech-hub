import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHeader, Section } from "@/components/tcat/sections";
import { ActionAnchor } from "@/components/tcat/action";
import { company, images, services } from "@/data/site";

export const Route = createFileRoute("/book-service")({
  head: () => ({
    meta: [
      { title: "Book a Service — T-CAT ph, Port Harcourt" },
      {
        name: "description",
        content:
          "Request a service at T-CAT ph. Send your vehicle make, model and the issue you've noticed, and the workshop will confirm a time.",
      },
      { property: "og:title", content: "Book a Service at T-CAT ph" },
      { property: "og:description", content: "Send your vehicle details and we'll confirm a workshop appointment." },
      { property: "og:url", content: "/book-service" },
    ],
    links: [{ rel: "canonical", href: "/book-service" }],
  }),
  component: BookServicePage,
});

const fieldClass =
  "mt-2 w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-accent";
const labelClass = "block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground";

function BookServicePage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "Service request — T-CAT ph",
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Vehicle: ${data.get("make")} ${data.get("model")} ${data.get("year") ?? ""}`.trim(),
      `Service: ${data.get("service")}`,
      `Preferred date: ${data.get("date") || "Not specified"}`,
      `Details: ${data.get("details") || "—"}`,
    ].join("\n");
    window.open(`${company.whatsappHref}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    setSent(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Book a service"
        title="Request a workshop appointment"
        intro="Tell us about the vehicle and what you've noticed. We'll confirm a time and assess the car when it arrives."
        image={images.technicians}
        imageAlt="T-CAT technicians working on a customer vehicle"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          {sent ? (
            <div className="border border-border bg-surface p-10">
              <CheckCircle2 className="h-8 w-8 text-accent" aria-hidden="true" />
              <h2 className="mt-4 text-2xl font-bold">Request prepared</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Your details have been passed to WhatsApp so the workshop receives them directly. If the message did
                not open, call {company.phone} and we'll take the booking over the phone.
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-semibold text-accent underline underline-offset-4"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-border p-7 lg:p-9">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="name">
                    Full name
                  </label>
                  <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone number
                  </label>
                  <input id="phone" name="phone" required type="tel" className={fieldClass} placeholder="0803 000 0000" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email (optional)
                  </label>
                  <input id="email" name="email" type="email" className={fieldClass} placeholder="you@example.com" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="make">
                    Vehicle make
                  </label>
                  <input id="make" name="make" required className={fieldClass} placeholder="Toyota" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="model">
                    Model
                  </label>
                  <input id="model" name="model" required className={fieldClass} placeholder="Corolla" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="year">
                    Year
                  </label>
                  <input id="year" name="year" className={fieldClass} placeholder="2018" />
                </div>
                <div>
                  <label className={labelClass} htmlFor="date">
                    Preferred date
                  </label>
                  <input id="date" name="date" type="date" className={fieldClass} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="service">
                    Service required
                  </label>
                  <select id="service" name="service" required defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Not sure — please advise">Not sure — please advise</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="details">
                    Describe the issue
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={5}
                    className={fieldClass}
                    placeholder="Warning light, noise, when it started, anything you've noticed."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] text-accent-foreground transition-colors hover:bg-accent/90 sm:w-auto"
              >
                Send service request
              </button>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Submitting opens WhatsApp with your details so the workshop receives the request directly. No data is
                stored on this site.
              </p>
            </form>
          )}

          <aside className="h-fit border border-border bg-surface p-7 lg:sticky lg:top-28">
            <h2 className="font-display text-lg font-semibold">Prefer to speak to someone?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The workshop can take your booking directly by phone or WhatsApp.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <ActionAnchor href={company.phoneHref} variant="accent">
                Call {company.phone}
              </ActionAnchor>
              <ActionAnchor href={company.whatsappHref} target="_blank" rel="noreferrer" variant="outline">
                WhatsApp T-CAT
              </ActionAnchor>
            </div>
            <div className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              <p className="font-display font-semibold text-foreground">Workshop</p>
              <p className="mt-1">
                {company.addressLine1}
                <br />
                {company.addressLine2}
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
