import { Banknote, Disc3, HandCoins, Repeat2, Wrench } from "lucide-react";

const SERVICES = [
  { icon: Banknote, title: "البيع", desc: "بيع أجهزة الألعاب والمنتجات المتوفرة في المحل بأسعار منافسة." },
  { icon: HandCoins, title: "الشراء", desc: "نشتري أجهزة الألعاب من الزبائن بتقييم عادل ودفع فوري." },
  { icon: Repeat2, title: "التبديل", desc: "إمكانية تبديل جهازك بجهاز آخر حسب سياسة المحل." },
  { icon: Wrench, title: "الصيانة", desc: "صيانة أجهزة الألعاب على يد فنيين بخبرة وقطع موثوقة." },
  { icon: Disc3, title: "الأقراص CD", desc: "توفير وبيع أقراص وألعاب متنوعة لجميع الأجهزة." },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="max-w-2xl">
          <p className="text-sm font-bold text-accent">خدماتنا</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">كل ما يحتاجه اللاعب في مكان واحد</h2>
        </header>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="card-elevated rounded-2xl p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface-2">
                <Icon className="h-5 w-5 text-accent" />
              </span>
              <h3 className="mt-4 text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
