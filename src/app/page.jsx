import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import CtaBanner from "@/app/components/cta-banner";

export default function Home() {
  return (
    <div className={"min-h-screen overflow-scroll"}>
      <div className={"bg-gradient-to-b from-grey-900 to-grey-700 h-full"}>
        <div className="mx-auto max-w-2xl py-32 lg:py-32 px-2">
          <div className={"mb-4"}>
            <div className="text-sm text-center tracking-widest uppercase text-orange-vivid-400 font-semibold">
              HOME SERVICE OWNERS
            </div>
          </div>
          <div className="mb-8 flex justify-center">
            <div className="bg-gradient-to-r font-serif from-orange-vivid-600 to-grey-800 relative rounded-full px-3 py-2 text-base leading-6 text-gray-200 font-semibold">
              Has your phone stopped ringing?
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-4xl font-serif">
              Here's What They Won't Tell You About Getting Found Online
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Most SEO and web agencies try to complicate the process so you
              keep paying them month after month. But the truth about getting
              found online is simpler than they let on—and we’re here to show
              you how you can take control of your online presence without all
              the confusion.
            </p>
            <p className={"font-semibold mt-4 text-lg text-gray-300"}>
              Ready to learn the truth and start getting real customers again?
            </p>
            <div className={"flex flex-col justify-center mt-8"}>
              <span
                className={"block text-gray-300 text-lg font-bold text-start"}
              >
                In this FREE guide you'll learn:
              </span>
              <ul
                className={
                  "mx-auto text-lg leading-8 text-gray-300 list-disc text-start px-4"
                }
              >
                <li>
                  The proven, essential tactics that drive results for your
                  business.
                </li>
                <li>How to get found online by the customers you want.</li>
                <li>
                  How to set up your business to make the most of the customers
                  you do get.
                </li>
                <li>How to do all this without paying expensive agencies.</li>
              </ul>
            </div>
            <div
              className={
                "mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 sm:gap-y-0 sm:gap-x-6"
              }
            >
              <div className={"w-full"}>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-orange-vivid-400 sm:text-lg sm:leading-6"
                />
              </div>
              <div className={"w-full"}>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@address.com"
                  className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-orange-vivid-400 sm:text-lg sm:leading-6"
                />
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-orange-vivid-500 px-3.5 py-3.5 text-lg font-bold text-white shadow-sm hover:bg-orange-vivid-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-vivid-500"
              >
                Download the Free Guide
                <ChevronDoubleRightIcon className={"w-6 h-6 ml-1 inline"} />
              </a>
              <div className={"text-grey-300 text-sm mt-2 max-w-96"}>
                Join hundreds of business owners who took control of their
                online presence
              </div>
            </div>
            <div
              className={
                "flex flex-col justify-center items-center bg-grey-600 mt-10 py-8 rounded-md px-8 shadow"
              }
            >
              <figure className="">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-200 sm:text-2xl sm:leading-9">
                  <p>
                    "I'm really surprised with how simple the strategy is. I was
                    expecting something really complex and like a ton of SEO
                    behind it or something. This has been really easy to do
                    myself."
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    alt="Matt, a landscaper"
                    src="images/t2.webp"
                    className="h-10 w-10 rounded-full mx-auto"
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-200">
                      Chad Davis
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
            {/*<div className={"mt-4 flex flex-col justify-center items-center"}>*/}
            {/*  <div className={"flex flex-row justify-center items-center"}>*/}
            {/*    <img*/}
            {/*      alt="Dave, a landscaper"*/}
            {/*      src="images/t1.webp"*/}
            {/*      className="h-10 w-10 rounded-full -ml-2"*/}
            {/*    />*/}
            {/*    <img*/}
            {/*      alt="Matt, a landscaper"*/}
            {/*      src="images/t2.webp"*/}
            {/*      className="h-10 w-10 rounded-full -ml-2"*/}
            {/*    />*/}
            {/*    <img*/}
            {/*      alt="Jenn, a landscaper"*/}
            {/*      src="images/t3.webp"*/}
            {/*      className="h-10 w-10 rounded-full -ml-2"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className={"text-grey-300 text-sm mt-2 max-w-72"}>*/}
            {/*    Join business owners like Dave, Matt, and Jenn who took control*/}
            {/*    of their online presence*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
