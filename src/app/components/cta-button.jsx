import AnimatedElement from "@/app/components/animated-element";

export default function CtaButton({ text, href }) {
  return (
    <AnimatedElement
      animationClass={"animate-fade-in lg:animate-fade-in lg:animate-slide-in"}
    >
      <a href={href} className="inline-flex items-center button">
        {text}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="currentColor"
          className="w-6 h-6 ml-1 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </a>
    </AnimatedElement>
  );
}
