import HeroSection from "@/app/components/traditional/hero-section";
import SubtitleTextCard from "@/app/components/subtitle-text-card";
import StepsCard from "@/app/components/steps-card";
import CtaBanner from "@/app/components/cta-banner";

export default function CategoryPage({
  titleModel,
  subtitleModel,
  stepsModel,
  ctaModel,
  children,
}) {
  return (
    <main className={"mx-auto"}>
      <HeroSection
        title={titleModel.title}
        ctaText={titleModel.ctaText}
        ctaHref={titleModel.ctaHref}
        pathToImage={titleModel.imagePath}
      />
      <SubtitleTextCard
        title={subtitleModel.title}
        subtitle={subtitleModel.subtitle}
      >
        {subtitleModel.body}
      </SubtitleTextCard>
      {stepsModel && (
        <StepsCard
          backgroundColor={"bg-main-grey"}
          pathToImage={stepsModel.imagePath}
          steps={stepsModel.steps}
        ></StepsCard>
      )}
      {children}
      {ctaModel && (
        <CtaBanner text={ctaModel.title} ctaText={ctaModel.ctaText} />
      )}
    </main>
  );
}
