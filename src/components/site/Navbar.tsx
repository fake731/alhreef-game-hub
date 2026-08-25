import { useEffect, useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { LOGO_URL, SECTIONS, whatsappLink } from "@/lib/store-data";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "./icons";

export function Navbar({ onOpenCart }: { onOpenCart: () => void }) {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur-xl"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="التنقل الرئيسي"
        className="mx-auto flex h-[68px] max-w-7xl items-center gap-3 px-4 sm:h-20 sm:px-6"
      >
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3">
          <img
            src={LOGO_URL}
            alt="شعار الحريف ستور"
            className="h-11 w-11 rounded-xl object-cover ring-1 ring-border sm:h-12 sm:w-12"
          />
          <span className="hidden text-lg font-extrabold sm:block">
            الحريف <span className="text-gold-gradient">ستور</span>
          </span>
        </Link>

        <ul className="mx-auto hidden items-center gap-1 lg:flex">
          <li>
            <Link
              to="/"
              activeOptions={{ exact: true }}
              activeProps={{ className: "bg-secondary text-foreground" }}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              الرئيسية
            </Link>
          </li>
          {SECTIONS.map((s) => (
            <li key={s.to}>
              <Link
                to={s.to}
                activeProps={{ className: "bg-secondary text-foreground" }}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <span className="me-1.5 text-accent">{s.no}.</span>
                {s.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="me-0 ms-auto flex shrink-0 items-center gap-2 lg:ms-0">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="سلة المشتريات"
            className="relative grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface transition-colors hover:border-primary"
          >
            <ShoppingCart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -top-1.5 -start-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-primary px-1 text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>

          <Button asChild variant="whatsapp" className="hidden sm:inline-flex">
            <a
              href={whatsappLink("مرحبًا الحريف ستور، أريد الاستفسار عن الأجهزة المتوفرة.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsappIcon className="h-4 w-4" />
              واتساب
            </a>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="القائمة"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-68px)] overflow-y-auto border-t border-border bg-background/98 backdrop-blur-xl lg:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-4 py-3">
            <li>
              <Link
                to="/"
                activeOptions={{ exact: true }}
                activeProps={{ className: "border-primary text-foreground" }}
                className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3 py-3.5 text-base font-semibold text-muted-foreground"
              >
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-surface-2 text-xs font-extrabold text-accent">
                  0
                </span>
                الرئيسية
              </Link>
            </li>
            {SECTIONS.map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  activeProps={{ className: "border-primary text-foreground" }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface px-3 py-3.5 text-base font-semibold text-muted-foreground"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-surface-2 text-xs font-extrabold text-accent">
                    {s.no}
                  </span>
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <Button asChild variant="whatsapp" size="lg" className="mt-2 w-full sm:hidden">
                <a
                  href={whatsappLink("مرحبًا الحريف ستور 👋")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIcon className="h-4 w-4" />
                  تواصل عبر واتساب
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
