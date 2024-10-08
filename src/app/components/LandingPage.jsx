"use client";

import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const SubmissionForm = () => {
  return (
    <form
      action="https://app.kit.com/forms/7200315/subscriptions"
      method="post"
      data-sv-form="7200315"
      data-uid="350573401f"
      data-format="modal"
      data-version="5"
      data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
    >
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
            name="fields[first_name]"
            required={true}
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
            name="email_address"
            type="email"
            required={true}
            placeholder="you@address.com"
            className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-orange-vivid-400 sm:text-lg sm:leading-6"
          />
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
        <button
          type={"submit"}
          className="rounded-full bg-orange-vivid-500 px-3.5 py-3.5 text-lg font-bold text-white shadow-sm hover:bg-orange-vivid-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-vivid-500"
        >
          Get the Free Course
          <ChevronDoubleRightIcon className={"w-6 h-6 ml-1 inline"} />
        </button>
        {/*<div*/}
        {/*  className={"text-grey-300 text-sm mt-2 max-w-96 sm:max-w-56"}*/}
        {/*>*/}
        {/*  Join hundreds of business owners who took control of their*/}
        {/*  online presence*/}
        {/*</div>*/}
      </div>
    </form>
  );
};

export default function LandingPage() {
  return (
    <div className={"min-h-screen"}>
      {/*<Script src="https://f.convertkit.com/ckjs/ck.5.js"></Script>*/}
      <div className={"bg-gradient-to-b from-grey-900 to-grey-700 h-full"}>
        <Image
          className={"pt-4 mx-auto"}
          src={"/images/growthforge_t.png"}
          alt={"Growthforge logo"}
          width={75}
          height={75}
        />
        <div className="mx-auto max-w-2xl py-16 lg:py-20 px-2">
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
              My name is Colin and I started Growthforge after leaving my career
              as a software engineer, frustrated by all the ‘advice’ out there
              on SEO, SEM, and online marketing. Turns out, most of it is
              complete crap.
              <br />
              <br />
              I'm going to show you what you actually need to do to move the
              needle in your business, and how to set up the systems and
              practices that will keep you growing steadily year after year.
            </p>
            <p className={"font-semibold mt-4 text-lg text-gray-300"}>
              Ready to learn the truth and start getting real customers again?
            </p>
          </div>

          <SubmissionForm />
          <div className={"flex flex-col justify-center mt-8"}>
            <span
              className={"block text-gray-300 text-lg font-bold text-start"}
            >
              This course is for YOU if:
            </span>
            <ul
              className={
                "mx-auto text-lg leading-8 text-gray-300 list-disc text-start px-4"
              }
            >
              <li>
                You're starting a new home service business and feel lost.
              </li>
              <li>
                You've owned a home service business for years and are
                struggling to grow.
              </li>
              <li>
                You own a home service business and you're struggling to keep up
                with new customer requests.
              </li>
            </ul>
          </div>
          <div className={"flex flex-col justify-center mt-8"}>
            <span
              className={"block text-gray-300 text-lg font-bold text-start"}
            >
              In this FREE 3-day email course you'll learn:
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
                How to set up systems and practices that will keep you growing
                steadily year after year.
              </li>
              <li>How to do all this without paying expensive agencies.</li>
            </ul>
          </div>
          <div
            className={
              "flex flex-col justify-center items-center bg-grey-600 mt-10 py-8 rounded-md px-8 shadow"
            }
          >
            <figure className="">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-200 sm:text-2xl sm:leading-9">
                <p>
                  "I was really surprised with how simple the strategy is. I was
                  expecting something really complex and like a ton of SEO
                  behind it or something. So much easier to follow than I was
                  expecting."
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <img
                  alt="Chad, a landscaper"
                  src="/images/chad.jpg"
                  className="h-10 w-10 rounded-full mx-auto"
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-200">Chad Davis</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <SubmissionForm />
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
  );
}
