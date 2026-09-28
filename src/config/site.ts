/**
 * Configuración central del sitio.
 * Todo lo editable (datos de la empresa, contacto, WhatsApp, redes) vive aquí.
 * Reemplaza los valores entre corchetes por la información real de la empresa.
 */

export const site = {
  name: "[NOMBRE DE LA EMPRESA]",
  shortName: "AGUAYMANTO PERÚ",
  tagline: "Calidad y compromiso desde el campo peruano.",
  description:
    "Producción, comercialización y venta de aguaymanto peruano seleccionado para clientes particulares, restaurantes, tiendas, distribuidores y compradores mayoristas.",
  url: "https://aguaymanto-peru.lovable.app",
  locale: "es_PE",
};

export const contact = {
  whatsapp: {
    /** Número en formato internacional, solo dígitos. Ej: 51999999999 */
    number: "51999999999",
    display: "[WHATSAPP]",
    message:
      "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
    prompt: "¿Necesitas información?",
  },
  phone: {
    display: "[TELÉFONO]",
    href: "tel:+51999999999",
  },
  email: {
    display: "[CORREO]",
    href: "mailto:contacto@example.com",
  },
  address: "[DIRECCIÓN], [CIUDAD], Perú",
  schedule: "[HORARIO DE ATENCIÓN]",
};

export const socials = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "TikTok", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export const whatsappLink = (message: string = contact.whatsapp.message) =>
  `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;
