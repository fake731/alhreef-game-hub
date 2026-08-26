import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star, X } from "lucide-react";
import { REVIEW_IMAGES, TESTIMONIALS } from "@/lib/store-data";

export function Reviews() {
  const [emblaRef, embla] = useEmblaCarousel({ direction: "rtl", align: "start", loop: true });
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelected(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const scroll = useCallback(
    (dir: "prev" | "next") => {
      if (!embla) return;
      if (dir === "prev") embla.scrollPrev();
      else embla.scrollNext();
    },
    [embla],
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="reviews" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <p className="text-sm font-bold text-accent">المراجعات</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">ماذا يقول عملاؤنا؟</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              لقطات حقيقية من رسائل وتعليقات زبائن الحريف ستور. اضغط على أي صورة لتكبيرها.
            </p>
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="السابق"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface transition-colors hover:border-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="التالي"
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface transition-colors hover:border-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div className="mt-8 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {REVIEW_IMAGES.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setLightbox(src)}
                className="card-elevated w-[78%] shrink-0 overflow-hidden rounded-2xl sm:w-[46%] lg:w-[30%]"
              >
                <span className="flex items-center gap-2 border-b border-border px-4 py-3 text-xs font-bold text-muted-foreground">
                  <Quote className="h-4 w-4 text-accent" />
                  رأي زبون #{i + 1}
                </span>
                <img
                  src={src}
                  alt={`مراجعة زبون رقم ${i + 1} عن الحريف ستور`}
                  loading="lazy"
                  className="h-[420px] w-full bg-surface-2 object-contain"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {REVIEW_IMAGES.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`الانتقال إلى المراجعة ${i + 1}`}
              onClick={() => embla?.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                selected === i ? "w-7 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <article key={t.name} className="card-elevated rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-gold)] text-lg font-extrabold text-gold-foreground">
                  {t.name.trim().charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.meta} · {t.when}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex gap-1 text-accent" aria-label="تقييم 5 من 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-8 text-muted-foreground">{t.text}</p>
            </article>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="عرض صورة المراجعة"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-background/95 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="إغلاق"
            className="absolute top-5 start-5 grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox}
            alt="مراجعة زبون بالحجم الكامل"
            className="max-h-[88vh] max-w-full rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
