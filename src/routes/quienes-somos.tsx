import { createFileRoute } from "@tanstack/react-router";
import { Compass, HeartHandshake, Leaf, Target, Users } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { ValueCard } from "@/components/site/Cards";
import { Gallery } from "@/components/site/Gallery";
import { PageHero, CTASection } from "@/components/site/Sections";
import { commitments, mission, timeline, values, vision } from "@/data/company";
import aboutField from "@/assets/about-field.jpg";

const title = "Quiénes somos | Empresa peruana de aguaymanto";
const description =
  "Conoce nuestra empresa, historia, misión, visión, valores y compromiso con la calidad del aguaymanto peruano.";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: About,
});

const commitmentIcons = [Leaf, Users, HeartHandshake];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una empresa con raíces en el campo peruano"
        text="Producimos y comercializamos aguaymanto seleccionado, atendiendo a clientes particulares y a negocios que buscan un proveedor confiable."
      />

      {/* Nuestra empresa */}
      <section id="nuestra-empresa" className="section-y">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <img
              src={aboutField}
              alt="Equipo seleccionando aguaymanto fresco en sala de proceso"
              width={1200}
              height={912}
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionTitle eyebrow="Nuestra empresa" title="Trabajo agrícola y atención comercial" />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Somos una empresa peruana dedicada a la producción, comercialización y venta de
                aguaymanto. Nuestro trabajo abarca el cuidado del producto en campo, la selección
                del fruto y la coordinación comercial con cada cliente.
              </p>
              <p>
                Atendemos a clientes particulares y a negocios como restaurantes, hoteles,
                cafeterías, tiendas, distribuidores y empresas que requieren aguaymanto de forma
                puntual o recurrente.
              </p>
              <p>
                Nos diferencia la atención cercana, la revisión cuidadosa del producto y el
                compromiso de mantener una presentación consistente en cada pedido atendido.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Historia */}
      <section id="nuestra-historia" className="section-y bg-muted/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Trayectoria"
              title="Nuestra historia"
              text="Una línea de tiempo general de nuestro recorrido como empresa."
            />
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, i) => (
              <Reveal
                as="li"
                key={item.step}
                delay={i * 100}
                className="relative rounded-xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="font-display text-3xl text-gold">{item.step}</span>
                <h3 className="mt-3 text-lg text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Misión y visión */}
      <section className="section-y">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal
            className="rounded-2xl bg-primary p-9 text-primary-foreground shadow-lift"
          >
            <span
              id="mision"
              className="gradient-gold flex size-12 items-center justify-center rounded-lg text-accent-foreground"
            >
              <Target className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl text-primary-foreground md:text-3xl">Nuestra Misión</h2>
            <p className="mt-4 leading-relaxed text-primary-foreground/85">{mission}</p>
          </Reveal>
          <Reveal
            delay={120}
            className="rounded-2xl border border-border bg-card p-9 shadow-soft"
          >
            <span
              id="vision"
              className="gradient-leaf flex size-12 items-center justify-center rounded-lg text-primary-foreground"
            >
              <Compass className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl text-primary md:text-3xl">Nuestra Visión</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{vision}</p>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="section-y bg-muted/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle eyebrow="Cultura" align="center" title="Nuestros valores" />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 80}>
                <ValueCard title={v.title} text={v.text} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Compromiso */}
      <section id="nuestro-compromiso" className="section-y">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="Nuestro compromiso"
              title="Tres pilares que guían nuestro trabajo"
            />
          </Reveal>
          <ul className="mt-12 grid gap-7 md:grid-cols-3">
            {commitments.map((c, i) => {
              const Icon = commitmentIcons[i] ?? Leaf;
              return (
                <Reveal
                  as="li"
                  key={c.title}
                  delay={i * 100}
                  className="rounded-xl border border-border bg-card p-7 shadow-soft"
                >
                  <span className="flex size-12 items-center justify-center rounded-lg bg-muted text-secondary">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-y bg-muted/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionTitle eyebrow="Galería" title="Nuestro trabajo en imágenes" />
          </Reveal>
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
