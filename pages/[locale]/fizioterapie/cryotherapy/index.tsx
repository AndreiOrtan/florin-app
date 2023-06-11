import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

export default function Cryotherapy({ locale }: { locale: string }) {
  const t = useTranslations("physiotherapy");
  return (
    <PhysioLayout>
      <div className="flex flex-col items-center mt-4 text-gray600 w-full">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-blue700 text-3xl font-bold">Cyrotherapy</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 min-h-[320px]">
            <Link
              href={`/${locale}/fizioterapie/cryotherapy/cryomini`}
              className="relative"
            >
              <div className="w-full ">
                <Image
                  src="/fizioterapiePhotos/cryotherapy/cryomini.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-blue700 text-xl mb-1">
                    CryoMini
                  </div>
                  <p className="text-xs">{t("cards.card6.card1Description")}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 min-h-[320px]">
            <Link
              href={`/${locale}/fizioterapie/cryotherapy/cryo6`}
              className="relative"
            >
              <div className="w-full">
                <Image
                  src="/fizioterapiePhotos/cryotherapy/cryo6.jpg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-blue700 text-xl mb-1">
                    Cryo6
                  </div>
                  <p className="text-xs">{t("cards.card6.card2Description")}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 min-h-[320px]">
            <Link
              href={`/${locale}/fizioterapie/cryotherapy/cryo7`}
              className="relative"
            >
              <div className="w-full">
                <Image
                  src="/fizioterapiePhotos/cryotherapy/cryo7.jpg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-blue700 text-xl mb-1">
                    Cryo7
                  </div>
                  <p className="text-xs">{t("cards.card6.card3Description")}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto flex flex-col py-8">
            <h2 className="text-2xl font-semibold mb-4">
              {t("cards.card6.h1")}
            </h2>
            <p className="font-light py-1"> {t("cards.card6.h2")}</p>

            <p className="font-light py-1"> {t("cards.card6.h3")}</p>

            <p className="font-light py-1"> {t("cards.card6.h4")}</p>

            <p className="font-light py-1"> {t("cards.card6.h5")}</p>
          </div>
        </div>
      </div>
    </PhysioLayout>
  );
}

import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";
import PhysioLayout from "@/components/PhysioLayout";

export async function getStaticPaths() {
  const paths = ["ro", "en"].map((lang) => ({
    params: {
      locale: lang,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const locale = params?.locale || "en";

  return {
    props: {
      messages: JSON.parse(
        await readFile(path.resolve(`./messages/${locale}.json`), "utf-8")
      ),
      locale,
    },
  };
}
