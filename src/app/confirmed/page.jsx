import Image from "next/image";
import SeoMetadata from "@/app/components/seo-metadata";

export default function Confirmed() {
  return (
    <div className={"min-h-screen bg-gradient-to-b from-grey-900 to-grey-700"}>
      <SeoMetadata
        title={"Subscription Confirmed! | Growthforge"}
        description={"Thank you for signing up for our email course!"}
      />
      <div className={""}>
        <Image
          className={"pt-4 mx-auto"}
          src={"images/growthforge_t.png"}
          alt={"Growthforge logo"}
          width={75}
          height={75}
        />

        <div className="mx-auto max-w-4xl py-16 lg:py-20 px-2">
          <div className="text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-4xl font-serif">
              Thanks for confirming your course subscription!
            </h1>
            <div className={"flex flex-col gap-y-4 pt-8"}>
              <div
                className={
                  "mt-6 text-lg text-start text-gray-100 flex flex-col gap-6"
                }
              >
                <p>
                  Thank you for confirming your email subscription! This will
                  help to make sure you're getting very part of the email course
                  without interruption.
                </p>
                <p>
                  You'll receive the first installment of the free course
                  shortly.
                </p>
                <p>See you soon in your inbox!</p>
                <p>-Colin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
