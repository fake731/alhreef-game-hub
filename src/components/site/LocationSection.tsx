import { Clock, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ADDRESS, LAT, LNG, MAP_LINK } from "@/lib/store-data";

const bbox = `${LNG - 0.004}%2C${LAT - 0.0025}%2C${LNG + 0.004}%2C${LAT + 0.0025}`;
const EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${LAT}%2C${LNG}`;

export function LocationSection() {
  return (
    <section id="location" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold text-accent">موقعنا</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">زورنا في المحل</h2>
            <p className="mt-3 leading-8 text-muted-foreground">
              نستقبلك في المحل لتجربة الأجهزة على أرض الواقع قبل الشراء.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div className="min-w-0">
                  <p className="font-bold">العنوان</p>
                  <p className="text-sm text-muted-foreground">{ADDRESS}</p>
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

            <Button asChild variant="hero" size="lg" className="mt-6">
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                <Navigation className="h-4 w-4" />
                فتح الموقع في الخريطة
              </a>
            </Button>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="موقع الحريف ستور على الخريطة"
              src={EMBED}
              loading="lazy"
              className="h-[380px] w-full lg:h-full lg:min-h-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
