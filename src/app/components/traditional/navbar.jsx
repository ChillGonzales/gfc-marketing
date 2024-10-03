"use client";

import { Dialog } from "@headlessui/react";
import {
  ArrowSmallRightIcon,
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { DropdownNavItem } from "@/app/components/traditional/dropdown-nav-item";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { useTheme } from "@/app/contexts/theme-provider";

export default function Navbar() {
  const { theme } = useTheme();

  const navigation = [
    {
      title: "Services",
      href: "#",
      children: [],
    },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`bg-${theme.nav} sticky inset-x-0 top-0 z-50 w-full mx-auto`}
    >
      <a
        type="button"
        href={"tel:616-784-5525"}
        className={`inline-flex lg:hidden fixed z-10 bg-${theme.accent400} items-center font-semibold justify-center p-2.5 text-${theme.mainGrey} w-full mx-auto`}
      >
        <PhoneIcon
          className={`h-6 w-6 inline mr-1 text-${theme.mainGrey}`}
        ></PhoneIcon>
        <span className={""}>(616) 784-5525</span>
      </a>
      <nav
        className="flex items-end justify-between pt-10 lg:pt-0 pb-2 lg:px-8 drop-shadow-md max-w-screen-2xl mx-auto"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href={`/`} className="lg:-m-1.5 pt-4 pb-2 pl-2 lg:pl-0">
            <span className="sr-only">Growthforge</span>
            <img
              className="h-16 w-auto drop-shadow-none blur-none backdrop-blur-none"
              src="/images/logo.jpg"
              alt="Growthforge"
            />
          </a>
        </div>
        <a
          type="button"
          href={"tel:616-784-5525"}
          className={`inline-flex hidden order-1 lg:flex items-center font-semibold justify-center rounded-md p-2.5 text-${theme.mainGrey} border-2 border-${theme.accent} lg:ml-4 lg:self-center lg:mt-2 hover:bg-${theme.accent400}`}
        >
          <span className="sr-only">Call Now</span>
          <PhoneIcon
            className={`h-6 w-6 inline mr-1 text-${theme.mainGrey}`}
          ></PhoneIcon>
          <span className={""}>Call Us (616) 784-5525</span>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-md p-2.5 text-${theme.mainGrey}`}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex items-center font-sans tracking-wide">
          {navigation.map((navItem) => {
            return navItem.children ? (
              <DropdownNavItem
                key={navItem.title}
                name={navItem.title}
                href={navItem.href}
                items={navItem.children.map((child) => ({
                  name: child.title,
                  href: child.href,
                }))}
              />
            ) : (
              <div
                key={navItem.title}
                className={`text-md relative transition border-opacity-0 px-6 font-semibold leading-6 text-${theme.mainGrey} border-b-4 border-${theme.main} drop-shadow-none hover:border-b-4 hover:border-${theme.mainGrey} pb-1.5`}
              >
                <a href={navItem.href} key={navItem.href} className={"pt-4"}>
                  {navItem.title}
                </a>
              </div>
            );
          })}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className={`fixed inset-0 z-50 bg-${theme.nav}`} />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href={`/`} className="p-2">
              <span className="sr-only">Clark&apos;s Landscape</span>
              <img
                className="h-16 w-auto"
                src="/images/logo.png"
                alt="West Michigan Landscaping and Gardening"
              />
            </a>
            <button
              type="button"
              className={`rounded-md p-2.5 text-${theme.mainGrey}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  return item.children ? (
                    <>
                      <a
                        key={item.href}
                        href={item.href}
                        className={`text-white block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-${theme.main600}`}
                      >
                        {item.title}
                      </a>
                      {item.children.map((child) => {
                        return (
                          <a
                            key={child.href}
                            href={child.href}
                            className={`text-white block rounded-lg pl-6 pr-3 py-2 text-base font-semibold leading-7 hover:bg-${theme.main600}`}
                          >
                            <span
                              className={"inline-flex items-center gap-x-2"}
                            >
                              <ChevronRightIcon
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                              {child.title}
                            </span>
                          </a>
                        );
                      })}
                    </>
                  ) : (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`text-white block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-${theme.main600}`}
                    >
                      {item.title}
                    </a>
                  );
                })}
                <a
                  type="button"
                  href={"tel:616-784-5525"}
                  className={`inline-flex items-center font-semibold justify-center rounded-md p-2.5 text-${theme.mainGrey} border-2 border-${theme.mainGrey} lg:ml-4 lg:self-center lg:mt-2 hover:bg-${theme.accent400}`}
                >
                  <span className="sr-only">Call Now</span>
                  <PhoneIcon
                    className={`h-6 w-6 inline mr-1 text-${theme.mainGrey}`}
                  ></PhoneIcon>
                  <span className={""}>Call Us (616) 784-5525</span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
