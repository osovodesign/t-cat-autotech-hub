import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { company, images } from "@/data/site";
import { ActionLink } from "@/components/tcat/action";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-tcat", label: "Why T-CAT" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="T-CAT ph home">
          <img src={images.logo} alt="T-CAT ph logo" className="h-10 w-16 shrink-0 object-contain" width={128} height={64} />
          <span className="hidden border-l border-border pl-3 sm:block">
            <span className="block font-display text-sm font-bold tracking-[0.08em] text-foreground">T-CAT ph</span>
            <span className="mt-0.5 block text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Thecheksons Autotech
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-accent" }}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={company.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-accent"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phone}
          </a>
          <ActionLink to="/book-service" variant="accent" size="sm">
            Book a Service
          </ActionLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center border border-border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-accent" }}
                className="border-b border-border/70 py-4 font-display text-base font-semibold tracking-tight"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 py-5">
              <ActionLink to="/book-service" variant="accent" onClick={() => setOpen(false)}>
                Book a Service
              </ActionLink>
              <a href={company.phoneHref} className="flex items-center justify-center gap-2 py-2 text-sm font-medium">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {company.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
