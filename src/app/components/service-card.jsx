"use client";

import AnimatedElement from "@/app/components/animated-element";
import BodyImage from "@/app/components/body-image";
import Panel from "@/app/components/panel";
import IconButton from "@/app/components/icon-button";
import { useTheme } from "@/app/contexts/theme-provider";

export default function ServiceCard({
  title,
  subtitle,
  children,
  ctaText,
  ctaHref,
  pathToImage,
  backgroundGradient,
  imagePosition = "left",
}) {
  const { theme } = useTheme();

  return (
    <Panel
      backgroundClass={
        backgroundGradient
          ? `${imagePosition === "left" ? `bg-gradient-to-l from-${theme.mainGrey}` : `bg-gradient-to-r from-${theme.mainGrey}`} to-white`
          : "bg-inherit"
      }
    >
      <div className="flex flex-col lg:flex-row justify-center gap-y-8 lg:gap-x-12 lg:gap-y-0">
        {imagePosition === "left" && (
          <AnimatedElement
            animationClass={
              "animate-fade-in order-1 lg:order-1 max-w-screen-sm"
            }
          >
            <BodyImage src={pathToImage} />
          </AnimatedElement>
        )}
        <div className="flex flex-col justify-center text-left order-2">
          <AnimatedElement
            animationClass={"animate-fade-in lg:animate-slide-in"}
          >
            <h2 className={`text-2xl lg:text-4xl font-semibold font-serif text-${theme.main} py-1 lg:py-2`}>
              {title}
            </h2>
          </AnimatedElement>
          <AnimatedElement
            animationClass={"animate-fade-in lg:animate-slide-in"}
          >
            <h3 className={`text-lg lg:text-xl font-serif text-${theme.main} py-1 lg:py-2`}>
              {subtitle}
            </h3>
          </AnimatedElement>
          <AnimatedElement
            animationClass={"animate-fade-in lg:animate-slide-in"}
          >
            <div className="text-md leading-loose py-1 lg:py-2">{children}</div>
          </AnimatedElement>
          {ctaText && (
            <AnimatedElement
              animationClass={"animate-fade-in lg:animate-slide-in"}
            >
              <div className={"py-4"}>
                <IconButton text={ctaText} href={ctaHref} />
              </div>
            </AnimatedElement>
          )}
        </div>
        {imagePosition === "right" && (
          <AnimatedElement
            animationClass={"animate-fade-in order-1 lg:order-3"}
          >
            <BodyImage src={pathToImage} />
          </AnimatedElement>
        )}
      </div>
    </Panel>
  );
}
