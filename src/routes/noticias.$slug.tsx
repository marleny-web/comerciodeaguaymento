import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { NewsCard } from "@/components/site/Cards";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CTASection } from "@/components/site/Sections";
import { getPost, newsPosts } from "@/data/news";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Noticia no encontrada" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Noticias` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: NoticiaNoEncontrada,
  component: Noticia,
});

function NoticiaNoEncontrada() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-28 text-center">
      <h1 className="text-3xl text-primary">Noticia no encontrada</h1>
      <p className="mt-3 text-muted-foreground">
        La noticia que buscas no existe o fue retirada.
      </p>
      <Button asChild variant="leaf" size="lg" className="mt-7">
        <Link to="/noticias">Ver todas las noticias</Link>
      </Button>
    </div>
  );
}

function Noticia() {
  const { post } = Route.useLoaderData();
  const related = newsPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <article>
        <header className="bg-primary pt-16 pb-14 lg:pt-20">
          <div className="mx-auto max-w-3xl px-5">
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-gold-soft"
            >
              <ArrowLeft className="size-4" aria-hidden="true" /> Volver a noticias
            </Link>
            <p className="eyebrow mt-6 text-gold-soft">{post.category}</p>
            <h1 className="mt-3 text-3xl leading-tight text-balance text-primary-foreground md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-sm text-primary-foreground/70">
              <time dateTime={post.date}>{post.dateLabel}</time> · Por {post.author}
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-5 py-12 lg:py-16">
          <img
            src={post.image}
            alt={post.alt}
            width={1200}
            height={800}
            className="w-full rounded-2xl object-cover shadow-lift"
          />
          <div className="mx-auto mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-foreground/85">
            {post.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="section-y bg-muted/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Seguir leyendo" title="Noticias relacionadas" />
          <ul className="mt-10 grid gap-7 md:grid-cols-2">
            {related.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={i * 100}>
                <NewsCard post={p} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}
