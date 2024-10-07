import Image from "next/image";
import SeoMetadata from "@/app/components/seo-metadata";

export default function ThankYou() {
  return (
    <div className={"min-h-screen bg-gradient-to-b from-grey-900 to-grey-700"}>
      <SeoMetadata
        title={"Thank you for signing up! | Growthforge"}
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
              Thank you for signing up!
            </h1>
            <div className={"flex flex-col gap-y-4 pt-8"}>
              <Image
                src={"/images/face_dg.png"}
                width={500}
                height={400}
                className={
                  "rounded-md w-auto max-w-96 lg:max-w-screen-xl mx-auto h-fit"
                }
                alt={"Colin's face"}
              />
              <div
                className={
                  "mt-6 text-lg text-start text-gray-100 flex flex-col gap-6"
                }
              >
                <p>
                  Hi, I'm Colin and I'm the owner of Growthforge. Thank you for
                  signing up for our email course, it's fantastic to have you
                  here.
                </p>
                <p>
                  You'll receive a confirmation email shortly. Once confirmed,
                  your course will be on its way! If you ever have questions you
                  can always reply to the emails to get in touch with me
                  directly.
                </p>
                <p>
                  Our mission at Growthforge is to bring a new movement of
                  empowerment for small businesses.
                </p>
                <p>
                  We’re tired of seeing these rent-seeking marketing agencies
                  collecting checks each month for doing nothing.
                </p>
                <p>
                  This is why we'll never gatekeep information from you. Want to
                  know how to improve your marketing? Or how to upsell more of
                  your customers? Just ask and we'll help- no strings attached.
                </p>
                <p>
                  We're working to set a new tone in this industry. And we're
                  very excited that you'll be joining us.
                </p>
                <p>- Colin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
