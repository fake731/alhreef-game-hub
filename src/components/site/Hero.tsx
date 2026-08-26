import { ShieldCheck, Truck, Gamepad2, Gamepad, Cable } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { LOGO_URL, whatsappLink } from "@/lib/store-data";
import { WhatsappIcon } from "./icons";

export function Hero() {
  return (
    <section id="home" className="hero-surface relative overflow-hidden pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-bold text-muted-foreground">
            <Gamepad2 className="h-4 w-4 text-accent" />
            متجر ألعاب في عمّان — الأردن
          </span>

          <h1 className="mt-6 text-4xl leading-[1.15] sm:text-5xl lg:text-6xl">
            ألعابك المفضلة،
            <br />
            <span className="text-gold-gradient">جاهزة للمتعة</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            الحريف ستور يوفّر أجهزة البلايستيشن بحالة ممتازة وأسعار منافسة، مع خدمات البيع والشراء
            والتبديل والصيانة وأقراص الألعاب — وتوصيل داخل المملكة.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/1">تصفح الأجهزة</Link>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a
                href={whatsappLink("مرحبًا الحريف ستور 👋 أريد الاستفسار عن الأجهزة المتوفرة.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsappIcon className="h-5 w-5" />
                تواصل عبر واتساب
              </a>
            </Button>
          </div>

          <dl className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, k: "كفالة سنة", v: "على الأجهزة" },
              { icon: Gamepad2, k: "200 لعبة", v: "مع كل جهاز" },
              { icon: Truck, k: "توصيل", v: "لكل المملكة بـ 3 د.أ" },
              { icon: Gamepad, k: "بيجي مع يد", v: "يد تحكم أصلية" },
              { icon: Cable, k: "بيجي كل أسلاكه", v: "كيبلات كاملة" },
            ].map(({ icon: Icon, k, v }) => (
              <div key={k} className="rounded-xl border border-border bg-surface/70 p-3 text-center">
                <Icon className="mx-auto h-5 w-5 text-accent" />
                <dt className="mt-2 text-sm font-bold">{k}</dt>
                <dd className="text-xs text-muted-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-primary/25 blur-3xl" />
          <img
            src={LOGO_URL}
            alt="شعار الحريف ستور لبيع أجهزة الألعاب"
            width={1280}
            height={853}
            className="w-full rounded-[1.75rem] border border-border object-cover shadow-[var(--shadow-glow)]"
          />
        </div>
      </div>
    </section>
  );
}
