import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ADDRESS,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  MAP_LINK,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "@/lib/store-data";
import { FacebookIcon, InstagramIcon, WhatsappIcon } from "./icons";

export function Contact({ hideHeader }: { hideHeader?: boolean }) {
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {!hideHeader && (
<header className="max-w-2xl">
          <p className="text-sm font-bold text-accent">تواصل معنا</p>
          <h2 className="mt-2 text-3xl sm:text-4xl">جاهزون للرد على استفسارك</h2>
          <p className="mt-3 text-muted-foreground">
            راسلنا على واتساب أو تابعنا على مواقع التواصل لمتابعة آخر الأجهزة والعروض.
          </p>
        </header>
        )}

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <a
            href={whatsappLink("مرحبًا الحريف ستور 👋 عندي استفسار.")}
            target="_blank"
            rel="noopener noreferrer"
            className="card-elevated rounded-2xl p-6"
          >
            <WhatsappIcon className="h-7 w-7 text-whatsapp" />
            <h3 className="mt-4 text-lg">واتساب</h3>
            <p className="mt-1 text-sm text-muted-foreground" dir="ltr">
              {WHATSAPP_DISPLAY}
            </p>
          </a>

          <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="card-elevated rounded-2xl p-6">
            <MapPin className="h-7 w-7 text-accent" />
            <h3 className="mt-4 text-lg">موقع المحل</h3>
            <p className="mt-1 text-sm text-muted-foreground">{ADDRESS}</p>
          </a>

          <div className="card-elevated rounded-2xl p-6">
            <Phone className="h-7 w-7 text-primary" />
            <h3 className="mt-4 text-lg">مواقع التواصل</h3>
            <div className="mt-3 flex gap-2">
              <Button asChild variant="subtle" size="icon" aria-label="إنستغرام الحريف ستور">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="subtle" size="icon" aria-label="فيسبوك الحريف ستور">
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
