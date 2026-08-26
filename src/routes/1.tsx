import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Products } from "@/components/site/Products";

const TITLE = "1. الأجهزة | الحريف ستور";
const DESC =
  "أجهزة بلايستيشن 5 و 4 و 3 من الحريف ستور في عمّان — مكفولة مع يد وأسلاك وتوصيل لكل الأردن بـ 3 دنانير.";

export const Route = createFileRoute("/1")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DevicesPage,
});

function DevicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        no={1}
        eyebrow="الأجهزة"
        title="أجهزة بلايستيشن جاهزة للتشغيل"
        desc="أجهزة PS5 و PS4 و PS3 مفحوصة بالكامل. أضِف ما تريد إلى السلة وأرسل طلبك عبر واتساب خلال ثوانٍ."
      />
      <Products hideHeader />
    </SiteLayout>
  );
}
