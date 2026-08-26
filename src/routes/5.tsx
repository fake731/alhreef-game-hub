import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Delivery } from "@/components/site/Delivery";

const TITLE = "5. التوصيل | الحريف ستور";
const DESC = "توصيل أجهزة البلايستيشن لكل محافظات الأردن بسعر 3 دنانير فقط من الحريف ستور.";

export const Route = createFileRoute("/5")({
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
  component: Page5,
});

function Page5() {
  return (
    <SiteLayout>
      <PageHeader no={5} eyebrow="التوصيل" title="توصيل لكل الأردن بـ 3 دنانير" desc="نوصل طلبك إلى باب بيتك في جميع محافظات المملكة برسوم ثابتة 3 دنانير." />
      <Delivery hideHeader />
    </SiteLayout>
  );
}
