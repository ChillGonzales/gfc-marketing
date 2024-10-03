// services is array of { title, href, pathToImage }
import AnimatedElement from "@/app/components/animated-element";
import ImagePanel from "@/app/components/image-panel";
import Panel from "@/app/components/panel";

export default function ServiceGrid({
  title,
  subtitle,
  services,
  backgroundClass,
}) {
  return (
    <Panel backgroundClass={backgroundClass}>
      <div className="flex flex-col items-center justify-center space-y-6">
        <AnimatedElement animationClass={"animate-fade-in lg:animate-slide-in"}>
          <div
            className={`text-2xl lg:text-4xl font-serif text-main text-left lg:text-center font-semibold`}
          >
            {title}
          </div>
          {subtitle && (
            <div className={`text-base text-left lg:text-center pt-4`}>
              {subtitle}
            </div>
          )}
        </AnimatedElement>
        <div className={"grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2 gap-y-2"}>
          {services.map((service) => {
            return (
              <div key={service.title} className={""}>
                <ImagePanel
                  href={service.href}
                  title={service.title}
                  pathToImage={service.pathToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}
