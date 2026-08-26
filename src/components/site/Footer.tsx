import { Link } from "@tanstack/react-router";
import { ADDRESS, FACEBOOK_URL, INSTAGRAM_URL, LOGO_URL, WHATSAPP_DISPLAY, whatsappLink } from "@/lib/store-data";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "./icons";

const LINKS = [
  { to: "/1", label: "الأجهزة" },
  { to: "/2", label: "خدماتنا" },
  { to: "/3", label: "موقعنا" },
  { to: "/4", label: "المراجعات" },
  { to: "/5", label: "التوصيل" },
  { to: "/6", label: "تواصل معنا" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="شعار الحريف ستور"
              loading="lazy"
              className="h-12 w-12 rounded-xl object-cover ring-1 ring-border"
            />
            <span className="text-lg font-extrabold">
              الحريف <span className="text-gold-gradient">ستور</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
            متجر ألعاب في عمّان — بيع وشراء وتبديل وصيانة أجهزة البلايستيشن وأقراص الألعاب، مع كفالة
            وتوصيل لكل مناطق المملكة.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="إنستغرام"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface-2 transition-colors hover:border-primary"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="فيسبوك"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface-2 transition-colors hover:border-primary"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink("مرحبًا الحريف ستور 👋")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساب"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface-2 transition-colors hover:border-primary"
            >
              <WhatsappIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="روابط الموقع">
          <h2 className="text-base">روابط سريعة</h2>
          <ul className="mt-4 space-y-2">
            {LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base">معلومات التواصل</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li dir="ltr" className="text-start">
              {WHATSAPP_DISPLAY}
            </li>
            <li>{ADDRESS}</li>
            <li>يوميًا من 11 صباحًا حتى 11 مساءً</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} الحريف ستور — جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
