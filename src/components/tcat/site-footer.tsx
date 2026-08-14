import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { company, images, services } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="inline-flex bg-white p-3">
              <img src={images.logo} alt="T-CAT ph logo" className="h-12 w-auto" width={120} height={48} />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              {company.legalName}. Car repair and maintenance for all brands and trims, carried out in Port Harcourt
              with structured diagnostics and clear communication.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/50">
              Company
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/about", label: "About" },
                { to: "/why-tcat", label: "Why T-CAT" },
                { to: "/gallery", label: "Gallery" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ink-foreground/75 transition-colors hover:text-accent">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/50">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$service"
                    params={{ service: s.slug }}
                    className="text-ink-foreground/75 transition-colors hover:text-accent"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/50">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-ink-foreground/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {company.addressLine1}
                  <br />
                  {company.addressLine2}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={company.phoneHref} className="hover:text-accent">
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="hover:text-accent">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <Instagram className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={company.instagram} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {company.social}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
          <p>Port Harcourt, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
