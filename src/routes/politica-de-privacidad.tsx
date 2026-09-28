import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/Sections";
import { contact, site } from "@/config/site";

const title = "Política de privacidad";
const description =
  "Cómo tratamos los datos personales que nos envías a través del formulario de contacto y canales de atención.";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: `${title} | ${site.shortName}` },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} text={description} />
      <section className="section-y">
        <div className="mx-auto max-w-3xl space-y-6 px-5 text-base leading-relaxed text-muted-foreground">
          <p>
            En {site.name} tratamos los datos personales que nos proporcionas con la única finalidad
            de atender tus consultas comerciales, enviarte cotizaciones y dar seguimiento a tu
            pedido.
          </p>
          <h2 className="text-xl text-primary">Datos que recopilamos</h2>
          <p>
            Nombre, empresa, correo electrónico, teléfono, ciudad y la información que incluyas en
            el mensaje del formulario de contacto.
          </p>
          <h2 className="text-xl text-primary">Uso de la información</h2>
          <p>
            Utilizamos estos datos para responder tu consulta y mantener la comunicación comercial.
            No vendemos ni cedemos tu información a terceros ajenos a esta finalidad.
          </p>
          <h2 className="text-xl text-primary">Derechos</h2>
          <p>
            Puedes solicitar el acceso, la rectificación o la eliminación de tus datos escribiendo a{" "}
            {contact.email.display}.
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
