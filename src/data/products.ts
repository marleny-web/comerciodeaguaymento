import productFresh from "@/assets/product-fresh.jpg";
import productWholesale from "@/assets/product-wholesale.jpg";
import productSpecial from "@/assets/product-special.jpg";

export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  /** Campos preparados para ampliar la ficha del producto más adelante. */
  presentation?: string;
  weight?: string;
  availability?: string;
  price?: string;
  features?: string[];
};

export const products: Product[] = [
  {
    slug: "aguaymanto-fresco",
    name: "Aguaymanto fresco",
    description:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    image: productFresh,
    alt: "Aguaymanto fresco peruano en envase transparente y caja de madera",
    cta: "Solicitar información",
    presentation: "[PRESENTACIÓN]",
    weight: "[PESO]",
    availability: "[DISPONIBILIDAD]",
    price: "[PRECIO]",
    features: ["Selección manual", "Fruto uniforme", "Empaque adecuado"],
  },
  {
    slug: "aguaymanto-distribucion",
    name: "Aguaymanto para distribución",
    description: "Presentaciones orientadas a clientes comerciales y distribuidores.",
    image: productWholesale,
    alt: "Cajas de aguaymanto listas para distribución comercial",
    cta: "Consultar",
    presentation: "[PRESENTACIÓN]",
    weight: "[PESO]",
    availability: "[DISPONIBILIDAD]",
    price: "[PRECIO]",
    features: ["Pedidos por volumen", "Coordinación de entregas", "Atención comercial"],
  },
  {
    slug: "presentaciones-especiales",
    name: "Presentaciones especiales",
    description: "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    image: productSpecial,
    alt: "Aguaymanto en distintas presentaciones sobre mantel de lino",
    cta: "Consultar presentación",
    presentation: "[PRESENTACIÓN]",
    weight: "[PESO]",
    availability: "[DISPONIBILIDAD]",
    price: "[PRECIO]",
    features: ["Formatos a medida", "Evaluación por requerimiento", "Asesoría previa"],
  },
];
