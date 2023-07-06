import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function ShockwaveTherapy({ locale }: { locale: string }) {
  const t = useTranslations("physiotherapy");
  return (
    <PhysioLayout>
      <div className="flex flex-col items-center my-4 w-full">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-blue700 text-3xl font-bold">
              {t("cards.card3.header")}
            </h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
          <Card
            linkUrl={`/${locale}/fizioterapie/shockwave-therapy/enpuls`}
            imageUrl="/fizioterapiePhotos/shockwave-therapy/enPuls.jpg"
            cardHeader="enPuls"
            cardDescription={t("cards.card3.card1.description")}
            minH={336}
          />

          <Card
            linkUrl={`/${locale}/fizioterapie/shockwave-therapy/enpulspro`}
            imageUrl="/fizioterapiePhotos/shockwave-therapy/enPulsPro.jpg"
            cardHeader="enPulsPro"
            cardDescription={t("cards.card3.card2.description")}
            minH={336}
          />

          <Card
            linkUrl={`/${locale}/fizioterapie/shockwave-therapy/enshock`}
            imageUrl="/fizioterapiePhotos/shockwave-therapy/enShock.jpg"
            cardHeader="enShock"
            cardDescription={t("cards.card3.card3.description")}
            minH={336}
          />
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto flex flex-col py-8">
            <h2 className="text-2xl font-semibold mb-4">
              {t("cards.card3.h1")}
            </h2>
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
            <h2 className="text-2xl font-semibold mb-4">
              {t("cards.card3.h4")}
            </h2>
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
