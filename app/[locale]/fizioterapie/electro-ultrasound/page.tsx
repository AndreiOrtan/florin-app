"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import NavigationLink from "../../components/NavigationLink";

export default function ElectroAndUltrasound() {
  const t = useTranslations("physiotherapy");

  return (
    <div className="flex flex-col items-center my-4 text-gray800">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            Electro & Ultrasound
          </h1>
        </div>
      </header>
      <div className="w-full">
        <div className="flex flex-col sm:flex-row w-9/12 justify-center items-center mx-auto">
          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
            <NavigationLink
              href="/fizioterapie/electro-ultrasound/physys"
              className="relative"
            >
              <div className="w-full">
                <Image
                  src="/fizioterapiePhotos/electro-ultrasound/physys.jpg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-blue700 text-xl mb-1">
                    {t("cards.card1.card1.header")}
                  </div>
                  <p className="text-xs">
                    {t("cards.card1.card1.description")}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </NavigationLink>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
            <NavigationLink
              href="/fizioterapie/electro-ultrasound/soleo-sonostim"
              className="relative"
            >
              <div className="w-full">
                <Image
                  src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim.jpg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-blue700 text-xl mb-1">
                    {t("cards.card1.card2.header")}
                  </div>
                  <p className="text-xs">
                    {t("cards.card1.card2.description")}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </NavigationLink>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
            <NavigationLink
              href="/fizioterapie/electro-ultrasound/sonoone"
              className="relative h-full"
            >
              <div className="w-full">
                <Image
                  src="/fizioterapiePhotos/electro-ultrasound/sonoone.jpg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-blue700 text-xl mb-1">
                    {t("cards.card1.card3.header")}
                  </div>
                  <p className="text-xs">
                    {" "}
                    {t("cards.card1.card3.description")}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </NavigationLink>
          </div>
        </div>
      </div>

      <section className="mt-16 flex justify-center">
        <div className="w-9/12">
          <h1 className="mb-8 text-4xl font-semibold leading-none tracking-wide text-gray-900 sm:text-left text-center">
            {t("cards.card1.header2")}
          </h1>

          <div className="">
            <div className="flex sm:flex-row flex-col justify-center mb-4">
              <Image
                src="/fizioterapiePhotos/electro-ultrasound/electro-ultrasound-man.jpeg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
                className="mr-4 rounded-lg mb-4"
              />
              <div>
                <p className="text-lg mb-2 leading-relaxed text-justify">
                  {t("cards.card1.p1")}
                </p>
                <p className="mb-2 text-lg leading-relaxed text-justify">
                  {t("cards.card1.p2")}
                </p>
                <p className="mb-2 text-lg leading-relaxed text-justify">
                  {t("cards.card1.p3")}
                </p>
              </div>
            </div>
            <div>
              <p className="mb-4 text-lg leading-relaxed text-justify">
                {t("cards.card1.p4")}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
