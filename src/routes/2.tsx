import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Services } from "@/components/site/Services";

const TITLE = "2. خدماتنا | الحريف ستور";
const DESC =
  "بيع وشراء وتبديل وصيانة أجهزة البلايستيشن وأقراص الألعاب في عمّان مع فريق الحريف ستور.";

export const Route = createFileRoute("/2")({
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
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        no={2}
        eyebrow="خدماتنا"
        title="خدمات متكاملة لعالم البلايستيشن"
        desc="من شراء جهازك القديم حتى صيانته وتزويده بالألعاب — كل شيء تحت سقف واحد."
      />
      <Services />
    </SiteLayout>
  );
}
