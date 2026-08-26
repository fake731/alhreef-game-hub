import { Truck, PackageCheck, Clock3 } from "lucide-react";

const POINTS = [
  { icon: Truck, title: "3 دنانير لكل الأردن", text: "رسوم توصيل ثابتة 3 د.أ إلى باب بيتك في جميع محافظات المملكة." },
  { icon: PackageCheck, title: "تغليف وفحص", text: "كل جهاز يُفحص ويُغلّف بعناية قبل الشحن." },
  { icon: Clock3, title: "تنسيق سريع", text: "نتفق على وقت التسليم عبر واتساب خلال دقائق." },
];

export function Delivery() {
  return (
    <section id="delivery" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="card-elevated overflow-hidden rounded-3xl p-8 sm:p-12">
          <header className="max-w-2xl">
            <p className="text-sm font-bold text-accent">التوصيل</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">توصيل لكل الأردن بـ 3 دنانير 🇯🇴</h2>
            <p className="mt-3 text-muted-foreground">
              أينما كنت داخل الأردن، طلبك يوصلك مفحوصًا وجاهزًا للتشغيل — رسوم التوصيل 3 دنانير فقط وتُضاف تلقائيًا إلى إجمالي طلبك.
            </p>
          </header>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {POINTS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-surface-2 p-5">
                <Icon className="h-6 w-6 text-accent" />
                <h3 className="mt-3 text-lg">{title}</h3>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
