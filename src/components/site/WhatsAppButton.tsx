import { MessageCircle } from "lucide-react";
import { contact, whatsappLink } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label={`${contact.whatsapp.prompt} Escríbenos por WhatsApp`}
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-secondary py-3 pr-5 pl-3 text-secondary-foreground shadow-lift transition-transform hover:scale-[1.03] focus-visible:scale-[1.03] sm:right-6 sm:bottom-6"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-primary-foreground/15">
        <MessageCircle className="size-5" aria-hidden="true" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">{contact.whatsapp.prompt}</span>
    </a>
  );
}
