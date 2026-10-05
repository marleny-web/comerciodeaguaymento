import { useEffect, useRef } from "react";
import { X } from "lucide-react";

type VideoModalProps = {
  videoId: string;
  title: string;
  onClose: () => void;
};

export function VideoModal({ videoId, title, onClose }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar video"
          className="absolute -top-12 right-0 flex size-11 items-center justify-center rounded-full border border-primary-foreground/40 text-primary-foreground transition-colors hover:bg-primary-foreground/15"
        >
          <X className="size-5" />
        </button>
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-lift">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
