import { useTheme } from "@/app/contexts/theme-provider";

export default function IconButton({ text, href }) {
  const { theme } = useTheme();

  return (
    <a
      href={href}
      className={`inline-flex items-center font-serif rounded-md bg-${theme.accent} border-2 border-${theme.accent} px-6 py-3 text-base font-semibold text-${theme.mainGrey} shadow-sm hover:bg-${theme.accent400} whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-${theme.main400}`}
    >
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
  );
}
