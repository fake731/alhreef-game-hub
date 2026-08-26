import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { ADDRESS, DELIVERY_FEE, whatsappLink } from "@/lib/store-data";
import { WhatsappIcon } from "./icons";

export function CartSheet({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { items, total, count, setQty, remove, clear } = useCart();

  const grandTotal = total + DELIVERY_FEE;

  const orderMessage = () => {
    const lines = items
      .map((i, idx) => `${idx + 1}) ${i.product.name} (${i.product.subtitle}) × ${i.qty} = ${i.qty * i.product.price} د.أ`)
      .join("\n");
    return `مرحبًا الحريف ستور 👋\nأريد إتمام الطلب التالي:\n\n${lines}\n\nعدد القطع: ${count}\nمجموع الأجهزة: ${total} د.أ\nرسوم التوصيل: ${DELIVERY_FEE} د.أ\nالإجمالي النهائي: ${grandTotal} د.أ\n\nأرجو تزويدي بتفاصيل التوصيل. (${ADDRESS})`;
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="flex w-full flex-col gap-0 bg-background p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border p-5 text-start">
          <SheetTitle className="flex items-center gap-2 text-xl">
            <ShoppingCart className="h-5 w-5 text-accent" />
            سلة المشتريات
          </SheetTitle>
          <SheetDescription>راجع الكميات ثم أرسل الطلب مباشرة عبر واتساب.</SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
            <ShoppingCart className="h-10 w-10 text-muted-foreground" />
            <p className="text-muted-foreground">سلتك فارغة حاليًا</p>
            <Button variant="subtle" onClick={() => onOpenChange(false)}>
              تصفح الأجهزة
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto p-5">
              {items.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-3 rounded-xl border border-border bg-surface p-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-20 w-20 shrink-0 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="truncate font-bold">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.subtitle}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(product.id)}
                        aria-label={`حذف ${product.name}`}
                        className="rounded-md p-1 text-muted-foreground transition-colors hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1 rounded-lg border border-border bg-surface-2 p-1">
                        <button
                          type="button"
                          aria-label="إنقاص الكمية"
                          onClick={() => setQty(product.id, qty - 1)}
                          className="grid h-7 w-7 place-items-center rounded-md hover:bg-secondary"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="min-w-7 text-center text-sm font-bold">{qty}</span>
                        <button
                          type="button"
                          aria-label="زيادة الكمية"
                          onClick={() => setQty(product.id, qty + 1)}
                          className="grid h-7 w-7 place-items-center rounded-md hover:bg-secondary"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="font-extrabold text-accent">
                        {qty * product.price} <span className="text-xs">د.أ</span>
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="space-y-3 border-t border-border p-5">
              <div className="space-y-2 rounded-xl border border-border bg-surface p-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>مجموع الأجهزة</span>
                  <span className="font-bold text-foreground">{total} د.أ</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>التوصيل لكل الأردن</span>
                  <span className="font-bold text-foreground">{DELIVERY_FEE} د.أ</span>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-2 text-lg font-extrabold">
                  <span>الإجمالي</span>
                  <span className="text-accent">{grandTotal} د.أ</span>
                </div>
              </div>
              <Button asChild variant="whatsapp" size="xl" className="w-full">
                <a href={whatsappLink(orderMessage())} target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon className="h-5 w-5" />
                  إتمام الطلب عبر واتساب
                </a>
              </Button>
              <Button variant="subtle" className="w-full" onClick={clear}>
                تفريغ السلة
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
