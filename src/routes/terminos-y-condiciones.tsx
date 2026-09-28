import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { site } from "@/config/site";

const title = "Términos y condiciones";
const description =
  "Condiciones generales de uso del sitio web y de las consultas comerciales realizadas a través de él.";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: `${title} | ${site.shortName}` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text={description} />
      <section className="section-y">
        <div className="mx-auto max-w-3xl space-y-6 px-5 text-base leading-relaxed text-muted-foreground">
          <h2 className="text-xl text-primary">Uso del sitio</h2>
          <p>
            El contenido de este sitio web tiene fines informativos y comerciales. {site.name} puede
            actualizar la información de productos, presentaciones y disponibilidad en cualquier
            momento.
          </p>
          <h2 className="text-xl text-primary">Consultas y cotizaciones</h2>
          <p>
            Las consultas realizadas a través del formulario o de nuestros canales de atención no
            constituyen una venta cerrada. Precios, presentaciones y plazos se confirman de forma
            directa con cada cliente.
          </p>
          <h2 className="text-xl text-primary">Propiedad del contenido</h2>
          <p>
            Los textos e imágenes de este sitio pertenecen a {site.name}, salvo indicación en
            contrario.
          </p>
          <p className="text-sm">
            Este texto es una versión inicial editable y debe ser revisado por la empresa antes de
            su publicación definitiva.
          </p>
        </div>
      </section>
    </>
  );
}
