import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ShockwaveTherapy({ locale }: { locale: string }) {
  const t = useTranslations("physiotherapy");
  return (
    <div className="flex flex-col items-center my-4 w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">Shockwave Therapy</h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <Link
            href={`/${locale}/fizioterapie/shockwave-therapy/enpuls`}
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/shockwave-therapy/enPuls.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  enPuls
                </div>
                <p className="text-xs">{t("cards.card3.card1.description")}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <Link
            href={`/${locale}/fizioterapie/shockwave-therapy/enpulspro`}
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/shockwave-therapy/enPulsPro.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  enPulsPro
                </div>
                <p className="text-xs">{t("cards.card3.card2.description")}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <Link
            href={`/${locale}/fizioterapie/shockwave-therapy/enshock`}
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/shockwave-therapy/enShock.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  enShock
                </div>
                <p className="text-xs">{t("cards.card3.card3.description")}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto flex flex-col py-8">
          <h2 className="text-2xl font-semibold mb-4">{t("cards.card3.h1")}</h2>
          <img
            src="/fizioterapiePhotos/shockwave-therapy/man.jpeg"
            alt=""
            className="rounded-lg mb-2"
          />
          <h2 className="mb-4">{t("cards.card3.h2")}</h2>
          <ul className="list-disc ml-6 mb-4">
            <li> {t("cards.card3.li1")}</li>
            <li> {t("cards.card3.li2")}</li>
            <li> {t("cards.card3.li3")}</li>
            <li> {t("cards.card3.li4")}</li>
            <li> {t("cards.card3.li5")}</li>
            <li> {t("cards.card3.li6")}</li>
          </ul>
          <p>{t("cards.card3.h3")}</p>
        </div>
      </div>

      <div className="w-full mt-8">
        <div className="w-9/12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">{t("cards.card3.h4")}</h2>
          <h2>{t("cards.card3.h5")}</h2>
          <div>
            <h2 className="font-semibold">{t("cards.card3.h6")}</h2>

            <ul className="list-disc ml-6 mb-4">
              <li>{t("cards.card3.li7")}</li>
              <li>{t("cards.card3.li8")}</li>
              <li>{t("cards.card3.li9")}</li>
              <li>{t("cards.card3.li10")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";

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
