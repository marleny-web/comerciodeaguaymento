import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

export type NewsPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  dateLabel: string;
  author: string;
  excerpt: string;
  image: string;
  alt: string;
  /** Contenido de ejemplo, editable o eliminable. */
  body: string[];
};

export const newsPosts: NewsPost[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    title: "El aguaymanto peruano y su presencia en nuevos mercados",
    category: "Mercado",
    date: "2026-05-14",
    dateLabel: "14 de mayo de 2026",
    author: "[AUTOR]",
    excerpt:
      "El interés por frutas peruanas de sabor característico abre oportunidades comerciales para productores y distribuidores.",
    image: news1,
    alt: "Aguaymanto fresco presentado en un puesto de frutas",
    body: [
      "El aguaymanto es una fruta reconocida por su sabor particular y su versatilidad en la cocina y en la elaboración de productos derivados. En los últimos años, el interés comercial por este fruto ha crecido tanto en el mercado local como en canales especializados.",
      "Para los negocios que buscan diferenciarse, incorporar aguaymanto a su oferta permite presentar un producto con identidad peruana y alta valoración visual, especialmente en presentaciones frescas.",
      "Este contenido es un texto de ejemplo y puede editarse o eliminarse desde el archivo de noticias del proyecto.",
    ],
  },
  {
    slug: "cultivo-del-aguaymanto",
    title: "Conoce más sobre el cultivo del aguaymanto",
    category: "Agricultura",
    date: "2026-04-02",
    dateLabel: "2 de abril de 2026",
    author: "[AUTOR]",
    excerpt:
      "Condiciones de cultivo, cuidado de la planta y manejo del fruto: una mirada general al trabajo agrícola detrás del producto.",
    image: news2,
    alt: "Planta de aguaymanto con frutos en el campo",
    body: [
      "El cultivo del aguaymanto requiere atención constante en el manejo de la planta, el riego y el momento adecuado de cosecha para conservar la calidad del fruto.",
      "El capacho que envuelve al fruto cumple una función protectora y contribuye a su presentación comercial, por lo que su cuidado durante la cosecha y el traslado es importante.",
      "Este contenido es un texto de ejemplo y puede editarse o eliminarse desde el archivo de noticias del proyecto.",
    ],
  },
  {
    slug: "apuesta-por-la-calidad",
    title: "Nuestra apuesta por la calidad y la producción responsable",
    category: "Noticias de la empresa",
    date: "2026-02-20",
    dateLabel: "20 de febrero de 2026",
    author: "[AUTOR]",
    excerpt:
      "Revisión del producto, empaque adecuado y atención cercana al cliente: los ejes de nuestro trabajo diario.",
    image: news3,
    alt: "Control de calidad de aguaymanto en una sala de selección",
    body: [
      "Trabajamos con procesos de revisión que buscan mantener una presentación consistente del producto en cada pedido atendido.",
      "La relación con nuestros clientes se basa en la comunicación clara sobre disponibilidad, presentaciones y tiempos de coordinación.",
      "Este contenido es un texto de ejemplo y puede editarse o eliminarse desde el archivo de noticias del proyecto.",
    ],
  },
];

export const getPost = (slug: string) => newsPosts.find((p) => p.slug === slug);
