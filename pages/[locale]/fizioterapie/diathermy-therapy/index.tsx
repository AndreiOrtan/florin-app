import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

export default function ShockwaveTherapy({ locale }: { locale: string }) {
  const t = useTranslations("physiotherapy");
  return (
    <div className="flex flex-col items-center mt-4 text-gray600 w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">Diathermy Therapy</h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <Link
            href={`/${locale}/fizioterapie/diathermy-therapy/thermotk`}
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/diathermy-therapy/thermotk.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  ThermoTK
                </div>
                <p className="text-xs">{t("cards.card5.card1Description")}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <Link
            href={`/${locale}/fizioterapie/diathermy-therapy/micropro`}
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/diathermy-therapy/micropro.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  MicroPro
                </div>
                <p className="text-xs">{t("cards.card5.card2Description")}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto flex flex-col py-8">
          <h2 className="text-2xl font-semibold mb-4">{t("cards.card5.h1")}</h2>
          <img
            src="/fizioterapiePhotos/diathermy-therapy/diathermy1.jpeg"
            alt=""
            className="rounded-lg mb-2"
          />
          <p className="py-2">{t("cards.card5.h2")}</p>
          <ul className="list-disc ml-6 mb-4">
            <li> {t("cards.card5.li1")}</li>
            <li> {t("cards.card5.li2")}</li>
            <li>{t("cards.card5.li3")}</li>
            <li>{t("cards.card5.li4")}</li>
            <li>{t("cards.card5.li5")} </li>
          </ul>
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
