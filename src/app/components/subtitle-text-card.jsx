import AnimatedElement from "@/app/components/animated-element";
import Panel from "@/app/components/panel";

export default function SubtitleTextCard({
  title,
  subtitle,
  children,
  backgroundColor,
  titleClass,
}) {
  return (
    <Panel backgroundClass={`bg-${backgroundColor || "inherit"}`}>
      <div className="flex flex-col items-start lg:items-center justify-center space-y-3 lg:space-y-6">
        <AnimatedElement animationClass={"animate-fade-in lg:animate-slide-in"}>
          <h2
            className={`${titleClass ? titleClass : "text-2xl font-semibold lg:text-4xl"} font-serif text-main text-left lg:text-center`}
          >
            {title}
          </h2>
          {subtitle && (
            <h3
              className={`text-lg lg:text-xl font-serif text-main-700 text-left lg:text-center pt-4`}
            >
              {subtitle}
            </h3>
          )}
        </AnimatedElement>
        <AnimatedElement animationClass={"animate-fade-in lg:animate-slide-in"}>
          <div className="text-base leading-loose max-w-screen-lg text-left lg:text-justify">
            {children}
          </div>
        </AnimatedElement>
      </div>
    </Panel>
  );
}
