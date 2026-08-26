import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { LocationSection } from "@/components/site/LocationSection";

const TITLE = "3. موقعنا | الحريف ستور";
const DESC = "موقع الحريف ستور في ش عبد الله شعبانة، عمّان — خريطة جوجل تفاعلية مع اتجاهات الوصول.";

export const Route = createFileRoute("/3")({
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
  component: Page3,
});

function Page3() {
  return (
    <SiteLayout>
      <PageHeader no={3} eyebrow="موقعنا" title="تعال زورنا في المحل" desc="خريطة جوجل تفاعلية بوضع ليلي وزر للحصول على اتجاهات الوصول مباشرة." />
      <LocationSection />
    </SiteLayout>
  );
}
