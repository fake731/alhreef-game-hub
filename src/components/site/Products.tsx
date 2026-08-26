import { Check, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRODUCTS, whatsappLink } from "@/lib/store-data";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { WhatsappIcon } from "./icons";
import { useCartUI } from "@/lib/cart-ui";

export function Products({ onOpenCart, hideHeader }: { onOpenCart?: () => void; hideHeader?: boolean }) {
  const { add } = useCart();
  const { openCart } = useCartUI();
  const open = onOpenCart ?? openCart;

  return (
    <section id="devices" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {!hideHeader && (
<header className="max-w-2xl">
          <p className="text-sm font-bold text-accent">الأجهزة</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">أجهزة بلايستيشن جاهزة للتشغيل</h2>
          <p className="mt-3 text-muted-foreground">
            كل جهاز يصلك مفحوصًا وجاهزًا مع يد التحكم وكيبلاته وباقة ألعاب — والتوصيل على المتجر.
          </p>
        </header>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="card-elevated flex flex-col overflow-hidden rounded-2xl">
              <div className="relative aspect-square overflow-hidden bg-surface-2">
                <img
                  src={p.image}
                  alt={`${p.name} ${p.subtitle} من الحريف ستور`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {p.condition && (
                  <span className="absolute top-3 start-3 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-xs font-bold text-gold-foreground">
                    {p.condition}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="truncate text-lg">{p.name}</h3>
                    <p className="text-xs font-semibold tracking-wide text-muted-foreground">
                      {p.subtitle}
                    </p>
                  </div>
                  <p className="shrink-0 text-2xl font-extrabold text-accent">
                    {p.price}
                    <span className="ms-1 text-sm font-bold">د.أ</span>
                  </p>
                </div>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="inline-flex items-center gap-1 rounded-md border border-border bg-surface-2 px-2 py-1 text-[11px] font-semibold text-muted-foreground"
                    >
                      <Check className="h-3 w-3 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-2">
                  <Button
                    variant="hero"
                    className="flex-1"
                    onClick={() => {
                      add(p.id);
                      toast.success("تمت الإضافة إلى السلة", {
                        description: p.name,
                        action: { label: "عرض السلة", onClick: open },
                      });
                    }}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    أضف إلى السلة
                  </Button>
                  <Button asChild variant="subtle" size="icon" aria-label={`استفسار عن ${p.name}`}>
                    <a
                      href={whatsappLink(
                        `مرحبًا الحريف ستور 👋 أريد تفاصيل أكثر عن ${p.name} (${p.subtitle}) بسعر ${p.price} د.أ`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsappIcon className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
