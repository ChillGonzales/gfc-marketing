import HeroSection from "@/app/components/traditional/hero-section";
import SubtitleTextCard from "@/app/components/subtitle-text-card";
import ServiceCard from "@/app/components/service-card";
import CtaBanner from "@/app/components/cta-banner";

export default function DetailPage({
  titleModel,
  subtitleModel,
  items,
  children,
  showCta = true,
}) {
  return (
    <div>
      <HeroSection
        title={titleModel.title}
        pathToImage={titleModel.imagePath}
        ctaHref={titleModel.ctaHref}
        ctaText={titleModel.ctaText}
      />
      {subtitleModel && (
        <SubtitleTextCard
          subtitle={subtitleModel.subtitle}
          title={subtitleModel.title}
        >
          {subtitleModel.body}
        </SubtitleTextCard>
      )}
      {items.map((item, ix) => {
        return (
          <ServiceCard
            title={item.title}
            pathToImage={item.imagePath}
            backgroundGradient={ix % 2 === 0}
            imagePosition={ix % 2 === 0 ? "left" : "right"}
            ctaText={item.ctaText}
            ctaHref={item.ctaHref}
          >
            {item.body}
          </ServiceCard>
        );
      })}
      {children}
      {showCta && (
        <CtaBanner
          href={"/contact"}
          text={"Contact Us to Begin Your Next Project"}
          ctaText={"Contact Us"}
        />
      )}
    </div>
  );
}
