import { classNames } from "@/app/utility/class-utility";
import AnimatedElement from "@/app/components/animated-element";
import CtaButton from "@/app/components/cta-button";
import Steps from "@/app/components/steps";
import Image from "next/image";
import BodyImage from "@/app/components/body-image";
import Panel from "@/app/components/panel";

export default function StepsCard({ backgroundColor, pathToImage, steps }) {
  return (
    <Panel backgroundClass={backgroundColor}>
      <div className={"flex flex-col gap-y-8"}>
        <div
          className={
            "flex flex-col gap-y-4 lg:gap-y-0 lg:flex-row lg:gap-x-8 mx-auto"
          }
        >
          <div className={"flex flex-col gap-y-8"}>
            <div className={"flex flex-col text-left"}>
              <AnimatedElement
                animationClass={"animate-fade-in lg:animate-slide-in"}
              >
                <div
                  className={
                    "text-2xl lg:text-4xl font-serif font-semibold text-main text-left lg:text-center lg:text-left"
                  }
                >
                  Getting Started is Easy
                </div>
              </AnimatedElement>
            </div>
            <div className={`flex lg:flex-row justify-center flex-col lg:mt-8`}>
              <Steps steps={steps} />
            </div>
          </div>
          <div
            className={
              "flex flex-col justify-center items-center mx-auto rounded-md hidden lg:block"
            }
          >
            <BodyImage src={pathToImage} />
          </div>
        </div>
        <div className={"mx-auto text-center lg:mt-4"}>
          <CtaButton text={"Schedule a Walkthrough"} href={"/contact"} />
        </div>
      </div>
    </Panel>
  );
}
