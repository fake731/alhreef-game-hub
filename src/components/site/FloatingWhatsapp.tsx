import { useCart } from "@/lib/cart";
import { buildOrderMessage } from "@/lib/order-message";
import { whatsappLink } from "@/lib/store-data";
import { WhatsappIcon } from "./icons";

export function FloatingWhatsapp() {
  const { items, count } = useCart();

  return (
    <a
      href={whatsappLink(buildOrderMessage(items))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="تواصل معنا عبر واتساب"
      className="group fixed bottom-5 start-4 z-50 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-whatsapp)] px-4 py-3 text-sm font-extrabold text-[oklch(0.16_0.015_20)] shadow-[var(--shadow-whatsapp)] transition-transform duration-200 hover:-translate-y-0.5 sm:px-5"
    >
      <span className="relative grid place-items-center">
        <span className="absolute h-8 w-8 animate-ping rounded-full bg-white/30" aria-hidden />
        <WhatsappIcon className="relative h-6 w-6" />
      </span>
      <span className="hidden sm:inline">تواصل عبر واتساب</span>
      {count > 0 && (
        <span className="grid h-6 min-w-6 place-items-center rounded-full bg-[oklch(0.16_0.015_20)] px-1.5 text-xs font-extrabold text-white">
          {count}
        </span>
      )}
    </a>
  );
}
