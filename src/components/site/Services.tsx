import { BadgeDollarSign, Disc3, Repeat, ShoppingBag, Wrench } from "lucide-react";

const SERVICES = [
  {
    icon: ShoppingBag,
    title: "بيع الأجهزة",
    desc: "أجهزة PlayStation 5 و 4 و 3 بحالة ممتازة، مفحوصة بالكامل وبأسعار واضحة بدون مفاجآت.",
  },
  {
    icon: BadgeDollarSign,
    title: "شراء أجهزتك",
    desc: "نشتري جهازك أو ملحقاتك بتقييم عادل حسب الحالة، والدفع فوري عند الاتفاق.",
  },
  {
    icon: Repeat,
    title: "تبديل الأجهزة",
    desc: "بدّل جهازك القديم بجهاز أحدث وادفع الفرق فقط، حسب سياسة المحل.",
  },
  {
    icon: Wrench,
    title: "الصيانة",
    desc: "صيانة تسخين، تغيير معجون حراري، أعطال الهارد والقارئ والأيادي على يد فنيين بخبرة.",
  },
  {
    icon: Disc3,
    title: "الأقراص والألعاب",
    desc: "أقراص ألعاب أصلية وحسابات وألعاب رقمية لجميع الأجهزة مع تركيب وتجربة داخل المحل.",
  },
];

export function Services() {
  return (
    <section className="section-pad pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="card-elevated rounded-2xl p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface-2">
                <Icon className="h-5 w-5 text-accent" />
              </span>
              <h2 className="mt-4 text-xl">{title}</h2>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
