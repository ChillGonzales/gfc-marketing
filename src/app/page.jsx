export default function Home() {
  return (
    <div className={"h-screen"}>
      <div className={"bg-gradient-to-b from-grey-900 to-grey-800 h-full"}>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 px-2">
          <div className="mb-8 flex justify-center">
            <div className="bg-gradient-to-r from-orange-vivid-600 to-grey-900 relative rounded-full px-3 py-2 text-sm leading-6 text-gray-200 font-semibold ring-1 ring-white/10 hover:ring-white/20">
              Phone stopped ringing?
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Learn the Truth About Getting Found Online
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              SEO and web agencies don't want you to learn how getting customers
              online really works. Our free training explains the simple steps
              you need to take to start getting tons of free leads each week.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-orange-vivid-500 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-vivid-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-vivid-500"
              >
                Download the Free Training
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
