"use client";

import IconButton from "@/app/components/icon-button";
import BackgroundImage from "@/app/components/background-image";
import { useTheme } from "@/app/contexts/theme-provider";

export default function HeroSectionTraditional({
  pathToImage,
  title,
  subtitle,
  ctaText,
  ctaHref,
  bgImgPosition = "bg-center",
}) {
  const { theme } = useTheme();

  return (
    <BackgroundImage pathToImage={pathToImage} bgImgPosition={bgImgPosition}>
      <div className="sm:py-32 lg:pt-48 3xl:pt-72 lg:pb-32 max-w-screen-2xl">
        <div className="text-center drop-shadow-2xl">
          <h1
            className={`font-serif text-4xl px-0.5 font-bold text-${theme.mainGrey} sm:text-6xl`}
          >
            {title}
          </h1>

          <p
            className={`mt-6 font-serif text-xl px-1 sm:text-3xl leading-8 text-${theme.mainGrey} max-w-screen-lg mx-auto`}
          >
            {subtitle}
          </p>

          {ctaText && (
            <div className="mt-6 flex flex-col items-center justify-center">
              <IconButton text={ctaText} href={ctaHref} />
            </div>
          )}
        </div>
      </div>
    </BackgroundImage>
  );
}
