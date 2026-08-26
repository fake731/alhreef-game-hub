import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/site/SiteLayout";
import { Contact } from "@/components/site/Contact";

const TITLE = "6. تواصل معنا | الحريف ستور";
const DESC = "تواصل مع الحريف ستور عبر واتساب 0793355255 أو تابعنا على إنستغرام وفيسبوك.";

export const Route = createFileRoute("/6")({
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
  component: Page6,
});

function Page6() {
  return (
    <SiteLayout>
      <PageHeader no={6} eyebrow="تواصل معنا" title="نحن بانتظار رسالتك" desc="راسلنا على واتساب في أي وقت أو تابع جديدنا على إنستغرام وفيسبوك." />
      <Contact />
    </SiteLayout>
  );
}
