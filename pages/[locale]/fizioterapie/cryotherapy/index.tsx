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
          <Card
            linkUrl={`/${locale}/fizioterapie/cryotherapy/cryomini`}
            imageUrl="/fizioterapiePhotos/cryotherapy/cryomini.jpeg"
            cardHeader="CryoMini"
            cardDescription={t("cards.card6.card1Description")}
            minH={320}
          />

          <Card
            linkUrl={`/${locale}/fizioterapie/cryotherapy/cryo6`}
            imageUrl="/fizioterapiePhotos/cryotherapy/cryo6.jpg"
            cardHeader="Cryo6"
            cardDescription={t("cards.card6.card2Description")}
            minH={320}
          />
          <Card
            linkUrl={`/${locale}/fizioterapie/cryotherapy/cryo7`}
            imageUrl="/fizioterapiePhotos/cryotherapy/cryo7.jpg"
            cardHeader="Cryo7"
            cardDescription={t("cards.card6.card3Description")}
            minH={320}
          />
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
