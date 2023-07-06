import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

export default function ShockwaveTherapy({ locale }: { locale: string }) {
  const t = useTranslations("physiotherapy");
  return (
    <PhysioLayout>
      <div className="flex flex-col items-center mt-4 text-gray600 w-full">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-blue700 text-3xl font-bold">
              Diathermy Therapy
            </h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
          <Card
            linkUrl={`/${locale}/fizioterapie/diathermy-therapy/thermotk`}
            imageUrl="/fizioterapiePhotos/diathermy-therapy/thermotk.jpg"
            cardHeader="ThermoTK"
            cardDescription={t("cards.card5.card1Description")}
            minH={320}
          />

          <Card
            linkUrl={`/${locale}/fizioterapie/diathermy-therapy/micropro`}
            imageUrl="/fizioterapiePhotos/diathermy-therapy/micropro.jpg"
            cardHeader="MicroPro"
            cardDescription={t("cards.card5.card2Description")}
            minH={320}
          />
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto flex flex-col py-8">
            <h2 className="text-2xl font-semibold mb-4">
              {t("cards.card5.h1")}
            </h2>
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
    </PhysioLayout>
  );
}

import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";
import PhysioLayout from "@/components/PhysioLayout";
import Card from "@/components/Card";

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
