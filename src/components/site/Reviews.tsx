import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { BadgeCheck, ChevronLeft, ChevronRight, Maximize2, Quote, Star, X } from "lucide-react";
import { REVIEW_IMAGES, TESTIMONIALS } from "@/lib/store-data";

const AVATAR_TONES = [
  "from-[oklch(0.72_0.19_25)] to-[oklch(0.55_0.2_20)]",
  "from-[oklch(0.86_0.15_92)] to-[oklch(0.7_0.16_60)]",
  "from-[oklch(0.7_0.13_250)] to-[oklch(0.52_0.15_265)]",
  "from-[oklch(0.75_0.15_155)] to-[oklch(0.55_0.14_165)]",
];

export function Reviews({ hideHeader }: { hideHeader?: boolean }) {
  const [emblaRef, embla] = useEmblaCarousel({ direction: "rtl", align: "center", loop: true });
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
            {!hideHeader && (
              <>
                <p className="text-sm font-bold text-accent">المراجعات</p>
                <h2 className="mt-2 text-3xl sm:text-4xl">ماذا يقول عملاؤنا؟</h2>
              </>
            )}
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
                className={`card-elevated group relative w-[86%] shrink-0 overflow-hidden rounded-2xl transition-[transform,opacity] duration-300 sm:w-[52%] lg:w-[34%] ${
                  selected === i ? "opacity-100" : "opacity-60 sm:scale-[0.96]"
                }`}
              >
                <span className="flex items-center justify-between gap-2 border-b border-border px-4 py-3 text-xs font-bold text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Quote className="h-4 w-4 text-accent" />
                    رأي زبون #{i + 1}
                  </span>
                  <Maximize2 className="h-4 w-4 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <span className="block bg-surface-2 p-2">
                  <img
                    src={src}
                    alt={`مراجعة زبون رقم ${i + 1} عن الحريف ستور`}
                    loading="lazy"
                    className="mx-auto h-[52vw] max-h-[420px] w-full rounded-xl object-contain sm:h-[380px]"
                  />
                </span>
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
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              className="card-elevated relative overflow-hidden rounded-2xl p-5 transition-colors hover:border-primary/60"
            >
              <Quote className="pointer-events-none absolute -top-2 start-4 h-16 w-16 text-primary/5" />
              <div className="relative flex items-center gap-3">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br ${
                    AVATAR_TONES[i % AVATAR_TONES.length]
                  } text-lg font-extrabold text-[oklch(0.16_0.015_20)] shadow-[var(--shadow-card)] ring-2 ring-border`}
                >
                  {t.name.trim().charAt(0)}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="flex items-center gap-1.5 truncate font-bold">
                    {t.name}
                    <BadgeCheck className="h-4 w-4 shrink-0 text-[oklch(0.7_0.13_250)]" />
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.meta} · {t.when}
                  </p>
                </div>
                <div
                  className="flex shrink-0 gap-0.5 text-[oklch(0.84_0.16_85)]"
                  aria-label="تقييم 5 من 5"
                >
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]" />
                  ))}
                </div>
              </div>
              <p className="relative mt-4 rounded-xl bg-surface-2/60 p-4 text-sm leading-8 text-muted-foreground">
                {t.text}
              </p>
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
