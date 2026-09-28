import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

type Slide = {
  image: string;
  alt: string;
  title: string;
  text?: string;
  actions: { label: string; to: string; variant: "gold" | "onDark" }[];
};

const slides: Slide[] = [
  {
    image: hero1,
    alt: "Aguaymanto fresco peruano con su capacho abierto sobre madera",
    title: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    text: "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    actions: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "gold" },
      { label: "Solicitar cotización", to: "/contacto", variant: "onDark" },
    ],
  },
  {
    image: hero2,
    alt: "Campos de cultivo de aguaymanto en la sierra peruana al atardecer",
    title: "Del campo peruano a nuevos mercados",
    text: "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    actions: [{ label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "gold" }],
  },
  {
    image: hero3,
    alt: "Cosecha manual de aguaymanto en una plantación peruana",
    title: "Natural, versátil y de excelente calidad",
    actions: [{ label: "Ver productos", to: "/productos", variant: "gold" }],
  },
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const active = slides[index];

  const go = useCallback((n: number) => setIndex((i) => (i + n + count) % count), [count]);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), 5000);
    return () => window.clearInterval(id);
  }, [count]);

  return (
    <section
      aria-roledescription="carrusel"
      aria-label="Presentación principal"
      className="relative h-[88svh] min-h-[560px] w-full overflow-hidden"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "h-full w-full object-cover transition-transform duration-[8000ms] ease-out",
              i === index ? "scale-105" : "scale-100",
            )}
          />
          <div className="gradient-hero absolute inset-0" />
        </div>
      ))}

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-5 lg:px-8">
        {active && (
        <div key={index} className="max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-700">
          <p className="eyebrow mb-4 text-gold-soft">Aguaymanto peruano</p>
          <h1 className="text-4xl leading-[1.08] text-balance text-primary-foreground md:text-5xl lg:text-6xl">
            {active.title}
          </h1>
          {active.text && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/85 md:text-lg">
              {active.text}
            </p>
          )}
          <div className="mt-9 flex flex-wrap gap-3">
            {active.actions.map((a) => (
              <Button key={a.label} asChild variant={a.variant} size="xl">
                <Link to={a.to}>{a.label}</Link>
              </Button>
            ))}
          </div>
        </div>
        )}
      </div>

      <div className="absolute inset-x-0 bottom-7 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
          <div className="flex items-center gap-3" role="tablist" aria-label="Indicadores">
            {slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index
                    ? "w-10 bg-gold"
                    : "w-5 bg-primary-foreground/45 hover:bg-primary-foreground/70",
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Diapositiva anterior"
              className="flex size-11 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground/15"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Siguiente diapositiva"
              className="flex size-11 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground/15"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
