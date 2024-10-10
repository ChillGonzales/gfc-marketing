import LandingPage from "@/app/components/LandingPage";
import SeoMetadata from "@/app/components/seo-metadata";

export default function LandscaperLandingPage() {
  return (
    <LandingPage callout={"LANDSCAPERS"} niche={"landscaping business"}>
      <SeoMetadata
        title={"Get our FREE Course Now"}
        description={"Register for our FREE Course and get instant access."}
      />
    </LandingPage>
  );
}
