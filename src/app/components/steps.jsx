import { classNames } from "@/app/utility/class-utility";
import AnimatedElement from "@/app/components/animated-element";

export default function Steps({ steps }) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={classNames(
              stepIdx !== steps.length - 1 ? "pb-10" : "",
              "relative",
            )}
          >
            <div className={"max-w-screen-md"}>
              {stepIdx !== steps.length - 1 ? (
                <div
                  className="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-main"
                  aria-hidden="true"
                />
              ) : null}
              <div className="group relative flex items-start">
                <span className="flex h-9 items-center">
                  <span className="relative z-10 text-main-grey flex h-8 w-8 items-center justify-center rounded-full bg-main">
                    {stepIdx + 1}
                  </span>
                </span>
                <AnimatedElement
                  animationClass={"animate-fade-in lg:animate-slide-in"}
                >
                  <span className="ml-4 flex min-w-0 flex-col">
                    <span className="font-semibold">{step.name}</span>
                    <span className="text-gray-500">{step.description}</span>
                  </span>
                </AnimatedElement>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
