import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/Sections";
import { Button } from "@/components/ui/button";
import { contact, whatsappLink } from "@/config/site";

const title = "Contacto | Solicita una cotización de aguaymanto";
const description =
  "Contáctanos por WhatsApp, teléfono, correo o formulario para consultar productos, precios y pedidos al por mayor de aguaymanto peruano.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contacto,
});

const items = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: contact.whatsapp.display,
    href: whatsappLink(),
    external: true,
  },
  { icon: Phone, label: "Teléfono", value: contact.phone.display, href: contact.phone.href },
  { icon: Mail, label: "Correo electrónico", value: contact.email.display, href: contact.email.href },
  { icon: MapPin, label: "Dirección", value: contact.address },
  { icon: Clock, label: "Horario de atención", value: contact.schedule },
];

function Contacto() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Estamos aquí para atenderte"
        text="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
      />

      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <Reveal>
            <h2 className="text-2xl text-primary">Datos de contacto</h2>
            <ul className="mt-6 space-y-4">
              {items.map((item) => (
                <li
                  key={item.label}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-secondary">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                        className="text-base font-medium text-primary hover:text-secondary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-primary">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <Button asChild variant="leaf" size="xl" className="mt-6 w-full">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mb-6 text-2xl text-primary">Envíanos tu consulta</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-muted/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionTitle eyebrow="Preguntas frecuentes" title="Antes de escribirnos" />
          </Reveal>
          <Reveal delay={120}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>
    </>
  );
}
