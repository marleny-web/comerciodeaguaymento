import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/Cards";
import { PageHero, WholesaleSection, CTASection } from "@/components/site/Sections";
import { products } from "@/data/products";
import { qualityAttributes } from "@/data/company";

const title = "Productos | Aguaymanto fresco y presentaciones comerciales";
const description =
  "Catálogo de aguaymanto peruano: fruto fresco seleccionado, presentaciones para distribución y formatos especiales según requerimiento.";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Productos,
});

function Productos() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros productos"
        title="Aguaymanto peruano seleccionado"
        text="Presentaciones para consumo directo, negocios gastronómicos y distribución comercial."
      />

      <section id="aguaymanto-fresco" className="section-y">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ul className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
              Presentación, peso, disponibilidad y precio se confirman según el pedido y la
              temporada. Escríbenos para recibir la información vigente.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="calidad" className="section-y bg-muted/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Calidad"
              align="center"
              title="Calidad que se nota"
              text="Los atributos que cuidamos en cada etapa del manejo del producto."
            />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {qualityAttributes.map((a, i) => (
              <Reveal
                as="li"
                key={a.title}
                delay={i * 80}
                className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-soft"
              >
                <BadgeCheck className="mt-0.5 size-6 shrink-0 text-secondary" aria-hidden="true" />
                <div>
                  <h3 className="text-lg text-primary">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <div id="pedidos-mayoristas">
        <WholesaleSection />
      </div>

      <CTASection title="¿Te interesa alguna presentación?" />
    </>
  );
}
