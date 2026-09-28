import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChefHat,
  Handshake,
  PackageSearch,
  ShoppingBasket,
  Store,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";
import type { Service } from "@/data/services";
import type { NewsPost } from "@/data/news";

const serviceIcons: Record<Service["icon"], LucideIcon> = {
  "shopping-basket": ShoppingBasket,
  truck: Truck,
  "chef-hat": ChefHat,
  store: Store,
  "package-search": PackageSearch,
  handshake: Handshake,
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift">
      <div className="aspect-4/3 overflow-hidden">
        <img
          src={product.image}
          alt={product.alt}
          width={1200}
          height={900}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl text-primary">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        {product.features && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {product.features.map((f) => (
              <li
                key={f}
                className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-secondary"
              >
                {f}
              </li>
            ))}
          </ul>
        )}
        <Button asChild variant="leaf" size="lg" className="mt-6 w-full">
          <Link to="/contacto" search={{ producto: product.slug }}>
            {product.cta}
          </Link>
        </Button>
      </div>
    </article>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];
  return (
    <article
      id={service.slug}
      className="flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
    >
      <span className="gradient-gold flex size-12 items-center justify-center rounded-lg text-accent-foreground">
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl text-primary">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
      <Link
        to="/contacto"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary"
      >
        Consultar <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

export function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="h-full rounded-xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-gold">
      <span className="gradient-leaf block h-1 w-10 rounded-full" aria-hidden="true" />
      <h3 className="mt-4 text-lg text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </article>
  );
}

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft transition-shadow hover:shadow-lift">
      <div className="aspect-16/10 overflow-hidden">
        <img
          src={post.image}
          alt={post.alt}
          width={1200}
          height={800}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full bg-accent/20 px-3 py-1 font-semibold text-accent-foreground">
            {post.category}
          </span>
          <time dateTime={post.date} className="text-muted-foreground">
            {post.dateLabel}
          </time>
        </div>
        <h3 className="mt-4 text-xl leading-snug text-primary">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <Link
          to="/noticias/$slug"
          params={{ slug: post.slug }}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary"
        >
          Leer más <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
