import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import aboutField from "@/assets/about-field.jpg";
import productFresh from "@/assets/product-fresh.jpg";
import productWholesale from "@/assets/product-wholesale.jpg";
import productSpecial from "@/assets/product-special.jpg";
import news2 from "@/assets/news-2.jpg";

const images = [
  { src: hero2, alt: "Campos de cultivo de aguaymanto en la sierra peruana", span: "lg:col-span-2 lg:row-span-2" },
  { src: hero1, alt: "Aguaymanto fresco con su capacho abierto", span: "" },
  { src: news2, alt: "Planta de aguaymanto con frutos en el campo", span: "" },
  { src: hero3, alt: "Cosecha manual de aguaymanto", span: "" },
  { src: aboutField, alt: "Selección de aguaymanto en sala de proceso", span: "" },
  { src: productFresh, alt: "Aguaymanto fresco envasado", span: "" },
  { src: productWholesale, alt: "Cajas de aguaymanto para distribución", span: "" },
  { src: productSpecial, alt: "Presentaciones especiales de aguaymanto", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <ul className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] lg:grid-cols-4">
        {images.map((img, i) => (
          <li key={img.alt} className={cn("overflow-hidden rounded-xl", img.span)}>
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group h-full w-full cursor-pointer overflow-hidden"
              aria-label={`Ampliar imagen: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          {active !== null && (
            <>
              <DialogTitle className="sr-only">{images[active].alt}</DialogTitle>
              <img
                src={images[active].src}
                alt={images[active].alt}
                className="max-h-[80svh] w-full rounded-lg object-contain"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
