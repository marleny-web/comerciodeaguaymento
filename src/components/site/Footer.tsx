import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, nav, site, socials, whatsappLink } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="font-display text-xl font-semibold">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h2 className="eyebrow text-gold-soft">Enlaces</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/80 transition-colors hover:text-gold-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-gold-soft">Información</h2>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2">
              <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a className="hover:text-gold-soft" href={whatsappLink()} target="_blank" rel="noreferrer">
                WhatsApp {contact.whatsapp.display}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a className="hover:text-gold-soft" href={contact.phone.href}>
                {contact.phone.display}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a className="hover:text-gold-soft" href={contact.email.href}>
                {contact.email.display}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-gold-soft">Redes sociales</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  className="text-primary-foreground/80 transition-colors hover:text-gold-soft"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-primary-foreground/70">{contact.schedule}</p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 {site.name}. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link to="/politica-de-privacidad" className="hover:text-gold-soft">
              Política de privacidad
            </Link>
            <Link to="/terminos-y-condiciones" className="hover:text-gold-soft">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
