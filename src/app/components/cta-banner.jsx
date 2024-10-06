"use client";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import AnimatedElement from "@/app/components/animated-element";
import { useTheme } from "@/app/contexts/theme-provider";

export default function CtaBanner({
  text = "Get Your Yard Ready for Spring",
  ctaText = "Schedule a Walkthrough",
  href = "/contact",
}) {
  const { theme } = useTheme();

  return (
    <div className={`bg-${theme.main950} py-20`}>
      <div className={"flex flex-col justify-center space-y-8"}>
        <div
          className={`text-2xl lg:text-4xl font-serif font-semibold text-center text-${theme.mainGrey}`}
        >
          <AnimatedElement
            animationClass={
              "animate-fade-in lg:animate-fade-in lg:animate-slide-in"
            }
          >
            {text}
          </AnimatedElement>
        </div>
        <div
          className={`my-2 mx-auto border-2 border-${theme.mainGrey} text-${theme.mainGrey} rounded-md`}
        >
          <AnimatedElement
            animationClass={
              "animate-fade-in lg:animate-fade-in lg:animate-slide-in"
            }
          >
            <a
              href={href}
              className={`inline-flex items-center font-serif rounded-md bg-${theme.main950} px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-${theme.main700} whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${theme.main}`}
            >
              {ctaText}
              <ChevronRightIcon className={"w-6 h-6 ml-1 inline"} />
            </a>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}
