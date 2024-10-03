import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../../contexts/theme-provider";

export function DropdownNavItem({ name, href, items }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const {theme} = useTheme();

  return (
    <div
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
      className={`relative pb-1.5 transition border-opacity-0 px-6 font-semibold leading-6 text-${theme.mainGrey} border-b-4 drop-shadow-none ${menuOpen ? `border-${theme.mainGrey} border-opacity-100` : `border-${theme.main} border-opacity-0`}`}
    >
      <a href={href} key={name} className={"pt-4"}>
        {name}
      </a>
      <ChevronDownIcon className={"h-4 w-4 inline ml-2"}></ChevronDownIcon>
      <div
        className={`${menuOpen ? "flex" : "hidden"} absolute left-0 top-[34px] rounded-md shadow-md overflow-visible
        transition duration-500 flex-col space-y-2 bg-${theme.main} pt-4`}
      >
        {items.map((item) => {
          return (
            <a
              href={item.href}
              key={item.name}
              className={`hover:bg-${theme.mainGrey} px-8 py-2 text-${theme.mainGrey} hover:text-${theme.main} whitespace-nowrap`}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
