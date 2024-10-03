import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className={"h-screen"}>
      <div className={"bg-gradient-to-b from-grey-900 to-grey-700 h-full"}>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-2">
          <div className={"mb-4"}>
            <div className="text-sm text-center tracking-widest uppercase text-orange-vivid-400 font-semibold">
              -- LANDSCAPERS --
            </div>
          </div>
          <div className="mb-8 flex justify-center">
            <div className="bg-gradient-to-r from-orange-vivid-600 to-grey-900 relative rounded-full px-3 py-2 text-sm leading-6 text-gray-200 font-semibold ring-1 ring-white/10 hover:ring-white/20">
              Has your phone stopped ringing?
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
              Learn the Truth About Getting Found Online
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              SEO and web agencies don't want you to know how getting customers
              online really works. Our free training explains the simple steps
              you need to take so your phone starts ringing again.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-orange-vivid-500 px-3.5 py-3.5 text-lg font-bold text-white shadow-sm hover:bg-orange-vivid-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-vivid-500"
              >
                Download the Free Training{" "}
                <ChevronDoubleRightIcon className={"w-6 h-6 ml-1 inline"} />
              </a>
            </div>
            <div className={"mt-4 flex flex-col justify-center items-center"}>
              <div className={"flex flex-row justify-center items-center"}>
                <img
                  alt="Dave, a landscaper"
                  src="images/t1.webp"
                  className="h-10 w-10 rounded-full -ml-2"
                />
                <img
                  alt="Matt, a landscaper"
                  src="images/t2.webp"
                  className="h-10 w-10 rounded-full -ml-2"
                />
                <img
                  alt="Jenn, a landscaper"
                  src="images/t3.webp"
                  className="h-10 w-10 rounded-full -ml-2"
                />
              </div>
              <div className={"text-grey-300 text-sm"}>
                Join Dave, Matt, Jenn, and more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
