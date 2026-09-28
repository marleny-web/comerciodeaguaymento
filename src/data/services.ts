export type Service = {
  slug: string;
  title: string;
  text: string;
  icon: "shopping-basket" | "truck" | "chef-hat" | "store" | "package-search" | "handshake";
};

export const services: Service[] = [
  {
    slug: "venta",
    title: "Venta de aguaymanto",
    text: "Venta de producto para clientes particulares y comerciales.",
    icon: "shopping-basket",
  },
  {
    slug: "venta-mayorista",
    title: "Venta al por mayor",
    text: "Atención de pedidos de mayor volumen.",
    icon: "truck",
  },
  {
    slug: "restaurantes",
    title: "Atención a restaurantes",
    text: "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
    icon: "chef-hat",
  },
  {
    slug: "tiendas-distribuidores",
    title: "Atención a tiendas y distribuidores",
    text: "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
    icon: "store",
  },
  {
    slug: "pedidos-personalizados",
    title: "Pedidos personalizados",
    text: "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
    icon: "package-search",
  },
  {
    slug: "asesoria-comercial",
    title: "Asesoría comercial",
    text: "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
    icon: "handshake",
  },
];
