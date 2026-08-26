import { useState } from "react";
import { Clock, MapPin, Moon, Navigation, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ADDRESS, DIRECTIONS_LINK, LAT, LNG, MAP_EMBED, MAP_LINK } from "@/lib/store-data";

export function LocationSection({ hideHeader }: { hideHeader?: boolean }) {
  const [dark, setDark] = useState(true);

  return (
    <section id="location" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            {!hideHeader && (
              <>
                <p className="text-sm font-bold text-accent">موقعنا</p>
                <h2 className="mt-2 text-3xl sm:text-4xl">زورنا في المحل</h2>
                <p className="mt-3 leading-8 text-muted-foreground">
                  نستقبلك في المحل لتجربة الأجهزة على أرض الواقع قبل الشراء.
                </p>
              </>
            )}

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="font-bold">العنوان</p>
                  <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                  <p className="mt-1 text-xs text-muted-foreground" dir="ltr">
                    {LAT.toFixed(6)}, {LNG.toFixed(6)}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="font-bold">للاستفسار عن أوقات الدوام</p>
                  <p className="text-sm text-muted-foreground">تواصل معنا عبر واتساب في أي وقت.</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Button asChild variant="hero" size="lg" className="w-full sm:w-auto">
                <a href={DIRECTIONS_LINK} target="_blank" rel="noopener noreferrer">
                  <Navigation className="h-4 w-4" />
                  الحصول على اتجاهات
                </a>
              </Button>
              <Button asChild variant="subtle" size="lg" className="w-full sm:w-auto">
                <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                  <MapPin className="h-4 w-4" />
                  فتح في خرائط جوجل
                </a>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between gap-3 border-b border-border bg-surface px-4 py-3">
              <p className="text-sm font-bold">خرائط جوجل — الحريف ستور</p>
              <button
                type="button"
                onClick={() => setDark((v) => !v)}
                aria-label={dark ? "تفعيل الوضع النهاري للخريطة" : "تفعيل الوضع الليلي للخريطة"}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs font-bold transition-colors hover:border-primary"
              >
                {dark ? <Sun className="h-4 w-4 text-accent" /> : <Moon className="h-4 w-4 text-accent" />}
                {dark ? "وضع نهاري" : "وضع ليلي"}
              </button>
            </div>
            <iframe
              title="موقع الحريف ستور على خرائط جوجل"
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[360px] w-full transition-[filter] duration-500 lg:h-[calc(100%-57px)] lg:min-h-[420px]"
              style={dark ? { filter: "invert(0.92) hue-rotate(180deg) contrast(0.9) saturate(0.85)" } : undefined}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
