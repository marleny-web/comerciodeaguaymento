import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { whatsappLink } from "@/config/site";

const wholesaleBenefits = [
  "Pedidos por volumen",
  "Atención personalizada",
  "Presentaciones comerciales",
  "Coordinación de entregas",
  "Cotizaciones",
];

/** Bloque orientado a clientes mayoristas y empresas. */
export function WholesaleSection() {
  return (
    <section className="section-y bg-primary">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <SectionTitle
            eyebrow="Clientes mayoristas"
            tone="dark"
            title="¿Buscas un proveedor de aguaymanto?"
            text="Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y otros negocios que requieren aguaymanto."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <a href={whatsappLink()} target="_blank" rel="noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-3">
            {wholesaleBenefits.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-4 text-primary-foreground"
              >
                <span className="gradient-gold flex size-7 shrink-0 items-center justify-center rounded-full text-accent-foreground">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** Cierre con llamado a la acción. */
export function CTASection({
  title = "Conversemos sobre tu próximo pedido",
  text = "Cuéntanos qué necesitas y te enviaremos la información y la cotización correspondiente.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="gradient-leaf rounded-2xl px-7 py-14 text-center shadow-lift md:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl text-balance text-primary-foreground md:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">{text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <Link to="/productos">Consultar productos</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Encabezado interior de páginas. */
export function PageHero({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <section className="bg-primary pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle as="h1" eyebrow={eyebrow} title={title} text={text} tone="dark" />
      </div>
    </section>
  );
}
