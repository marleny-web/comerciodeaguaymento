import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { NewsCard } from "@/components/site/Cards";
import { PageHero, CTASection } from "@/components/site/Sections";
import { newsPosts } from "@/data/news";

const title = "Noticias y actualidad | Aguaymanto peruano";
const description =
  "Novedades de la empresa, contenido sobre el cultivo del aguaymanto, mercado y producción responsable.";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Noticias,
});

function Noticias() {
  return (
    <>
      <PageHero
        eyebrow="Noticias"
        title="Noticias y actualidad"
        text="Información sobre nuestra empresa, el aguaymanto y la agricultura peruana."
      />

      <section className="section-y">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <ul className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((post, i) => (
              <Reveal as="li" key={post.slug} delay={i * 100}>
                <NewsCard post={post} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection title="¿Conversamos sobre tu pedido?" />
    </>
  );
}
