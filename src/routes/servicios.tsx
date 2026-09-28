import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/Cards";
import { PageHero, WholesaleSection, CTASection } from "@/components/site/Sections";
import { services } from "@/data/services";

const title = "Servicios | Venta y distribución de aguaymanto";
const description =
  "Venta de aguaymanto, venta al por mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Servicios,
});

function Servicios() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros servicios"
        title="Soluciones comerciales alrededor del aguaymanto"
        text="Atendemos desde compras puntuales hasta requerimientos recurrentes de negocios y distribuidores."
      />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ul className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <WholesaleSection />
      <CTASection title="¿Necesitas una propuesta para tu negocio?" />
    </>
  );
}
