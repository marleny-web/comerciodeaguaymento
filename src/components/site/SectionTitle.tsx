import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionTitle({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "light",
  as: Heading = "h2",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        tone === "dark" && "text-primary-foreground",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-3 flex items-center gap-3",
            align === "center" && "justify-center",
            tone === "dark" ? "text-gold-soft" : "text-secondary",
          )}
        >
          <span
            className={cn("h-px w-8", tone === "dark" ? "bg-gold-soft/60" : "bg-secondary/50")}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          "text-3xl leading-[1.12] text-balance md:text-4xl lg:text-[2.75rem]",
          tone === "dark" ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </Heading>
      {text && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed",
            tone === "dark" ? "text-primary-foreground/80" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}
