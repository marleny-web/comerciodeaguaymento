import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, ShieldCheck, Sparkles, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/site/HeroSlider";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ProductCard, NewsCard, ServiceCard } from "@/components/site/Cards";
import { Gallery } from "@/components/site/Gallery";
import { FAQAccordion } from "@/components/site/FAQAccordion";
import { WholesaleSection, CTASection } from "@/components/site/Sections";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { newsPosts } from "@/data/news";
import { reasons } from "@/data/company";
import aboutField from "@/assets/about-field.jpg";

const title = "Aguaymanto peruano | Producción, venta y distribución - Limatambo ";
const description =
  "Empresa peruana dedicada a la producción, comercialización y venta de aguaymanto fresco. Atendemos clientes particulares, restaurantes, tiendas, distribuidores y pedidos al por mayor.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

const reasonIcons = [Sparkles, ShieldCheck, Leaf, ShieldCheck, MapPin];

function Home() {
  return (
    <>
      <HeroSlider />

      {/* Introducción de la empresa */}
      <section className="section-y">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Sobre la Empresa "
              title="Comprometidos con la calidad del aguaymanto limatambeño"
              text="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
            />
            <Button asChild variant="leaf" size="xl" className="mt-8">
              <Link to="/quienes-somos">Conoce quiénes somos</Link>
            </Button>
          </Reveal>
          <Reveal delay={120} className="relative">
            <img
              src={aboutField}
              alt="Selección de aguaymanto fresco en sala de proceso"
              width={1200}
              height={912}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-lift"
            />
            <div className="gradient-gold absolute -bottom-6 -left-4 hidden rounded-xl px-6 py-5 shadow-lift sm:block">
              <p className="font-display text-2xl text-accent-foreground">100%</p>
              <p className="text-xs font-semibold text-accent-foreground/80">Origen peruano</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Productos */}
      <section className="section-y bg-muted/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Nuestros productos bamdera"
              align="center"
              title="Aguaymanto seleccionado para cada necesidad de los peruoños"
              text="Presentaciones pensadas para consumo directo, negocios gastronómicos y distribución comercial."
            />
          </Reveal>
          <ul className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 100}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Nuestros servicios"
              title="Acompañamos cada etapa de tu compra"
              text="Desde una consulta puntual hasta la coordinación de pedidos recurrentes para tu negocio."
            />
          </Reveal>
          <ul className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 100}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </ul>
          <Reveal delay={150}>
            <Button asChild variant="outline" size="xl" className="mt-10">
              <Link to="/servicios">Conocer nuestros servicios</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <WholesaleSection />

      {/* Por qué elegirnos */}
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="¿Por qué elegirnos?"
              align="center"
              title="Razones para trabajar con nosotros"
            />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {reasons.map((r, i) => {
              const Icon = reasonIcons[i] ?? Leaf;
              return (
                <Reveal
                  as="li"
                  key={r.title}
                  delay={i * 80}
                  className="rounded-xl border border-border bg-card p-6 text-center shadow-soft"
                >
                  <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-muted text-secondary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg text-primary">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Galería */}
      <section className="section-y bg-muted/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Galería"
              title="El campo, el proceso y el producto"
              text="Imágenes de nuestros cultivos, la cosecha, la selección y las presentaciones del aguaymanto."
            />
          </Reveal>
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="section-y">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Noticias"
              title="Novedades y actualidad"
              text="Contenido sobre el aguaymanto, la agricultura peruana y nuestra empresa."
            />
          </Reveal>
          <ul className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={i * 100}>
                <NewsCard post={post} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-muted/60">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Preguntas frecuentes"
              title="Resolvemos tus dudas antes de comprar"
              text="Si necesitas información adicional, escríbenos y te respondemos con gusto."
            />
          </Reveal>
          <Reveal delay={120}>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
