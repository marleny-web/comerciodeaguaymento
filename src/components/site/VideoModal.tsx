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
      className="fixed inset-0 z-[100] bg-black"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Cerrar video"
        className="absolute right-4 top-4 z-10 flex size-12 items-center justify-center rounded-full border border-white/50 bg-black/40 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
      >
        <X className="size-6" />
      </button>
      <iframe
        className="absolute inset-0 h-full w-full border-0"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
