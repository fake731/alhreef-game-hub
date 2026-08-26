import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Reviews } from "@/components/site/Reviews";

const TITLE = "4. المراجعات | الحريف ستور";
const DESC = "آراء وتقييمات زبائن الحريف ستور في عمّان — تعليقات حقيقية ولقطات من المحادثات.";

export const Route = createFileRoute("/4")({
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
  component: Page4,
});

function Page4() {
  return (
    <SiteLayout>
      <PageHeader no={4} eyebrow="المراجعات" title="آراء زبائننا" desc="تعليقات حقيقية من زبائن الحريف ستور، مع لقطات من رسائلهم وتقييماتهم." />
      <Reviews />
    </SiteLayout>
  );
}
