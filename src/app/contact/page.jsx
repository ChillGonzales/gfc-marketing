"use client";

import Image from "next/image";
import SeoMetadata from "@/app/components/seo-metadata";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import emailJs from "@emailjs/browser";

export default function Contact() {
  useEffect(() => {
    emailJs.init({
      publicKey: "-vTpLDfrsnU3-853U",
    });
  });

  const [formError, setFormError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = () => {
    setFormError(null);
    const form = document.querySelectorAll("form").item(0);
    const inputs = document.querySelectorAll("input");
    const data = {};
    let errors = false;

    inputs.forEach((input) => {
      if (input.required && !input.value) {
        setFormError("Please fill out all required fields before submitting.");
        errors = true;
        return;
      }

      data[input.id] = input.value;
    });

    if (errors) {
      return;
    }
    emailJs.sendForm("service_vkrajnc", "template_s1rnzrh", form);
    setFormSubmitted(true);
  };

  return (
    <div className={"min-h-screen bg-gradient-to-b from-grey-900 to-grey-700"}>
      <SeoMetadata
        title={"Contact Us | Growthforge"}
        description={"Get in touch with our team here."}
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
              Contact Us
            </h1>
            <div className={"flex flex-col gap-y-4 pt-8"}>
              <div
                className={
                  "mt-6 text-lg text-start text-gray-100 flex flex-col gap-6"
                }
              >
                {formSubmitted ? (
                  <p className={"text-center"}>
                    Thank you for your message! We'll get in touch within 24
                    hours.
                  </p>
                ) : (
                  <>
                    <p>
                      Looking to learn more about how we help Home Service
                      companies grow? Get in touch using the form below and
                      we'll get back to you within 24 hours.
                    </p>
                    <form
                      className={"flex flex-col gap-y-4"}
                      onSubmit={onSubmit}
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
                            id="from_name"
                            name="from_name"
                            required={true}
                            type="text"
                            placeholder="Name"
                            className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-orange-vivid-400 sm:text-lg sm:leading-6"
                          />
                        </div>
                        <div className={"w-full"}>
                          <label htmlFor="email" className="sr-only">
                            Email
                          </label>
                          <input
                            id="from_email"
                            name="from_email"
                            type="email"
                            required={true}
                            placeholder="you@address.com"
                            className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-orange-vivid-400 sm:text-lg sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className={"w-full"}>
                        <label htmlFor="email" className="sr-only">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          name="message"
                          required={true}
                          placeholder="Your message"
                          className="block w-full rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-orange-vivid-400 sm:text-lg sm:leading-6"
                        />
                      </div>
                      <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
                        <button
                          type={"submit"}
                          className="rounded-full bg-orange-vivid-500 px-8 py-3.5 text-lg font-bold text-white shadow-sm hover:bg-orange-vivid-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-vivid-500"
                        >
                          Contact Us
                          <ChevronDoubleRightIcon
                            className={"w-6 h-6 ml-1 inline"}
                          />
                        </button>
                        {/*<div*/}
                        {/*  className={"text-grey-300 text-sm mt-2 max-w-96 sm:max-w-56"}*/}
                        {/*>*/}
                        {/*  Join hundreds of business owners who took control of their*/}
                        {/*  online presence*/}
                        {/*</div>*/}
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
