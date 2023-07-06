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
            <h1 className="text-blue700 text-3xl font-bold text-center">
              High Energy Inductive Therapy
            </h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
          <Card
            linkUrl={`/${locale}/fizioterapie/high-energy-inductive-therapy/emfieldpro`}
            imageUrl="/fizioterapiePhotos/high-energy-inductive-therapy/emFieldPro.jpg"
            cardHeader="emFieldPro"
          />
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto flex flex-col py-8">
            <h2 className="text-2xl font-semibold mb-4">
              {t("cards.card4.h1")}
            </h2>
            <img
              src="/fizioterapiePhotos/high-energy-inductive-therapy/masage1.jpeg"
              alt=""
              className="rounded-lg mb-2"
            />
            <p className="py-2">{t("cards.card4.h2")}</p>
            <p className="py-2">{t("cards.card4.h3")}</p>
            <p className="py-2">{t("cards.card4.h4")}</p>
          </div>
        </div>

        <div className="w-full bg-blue700 text-white font-medium">
          <div className="w-9/12 mx-auto flex flex-col py-8">
            <p className="py-2">{t("cards.card4.h5")}</p>
            <p className="py-2">{t("cards.card4.h6")}</p>
            <p className="py-2">{t("cards.card4.h7")}</p>
            <img
              src="/fizioterapiePhotos/high-energy-inductive-therapy/magent.jpeg"
              alt=""
              className="rounded-lg mb-2"
            />
            <p className="py-2">{t("cards.card4.h8")}</p>
            <p className="py-2">{t("cards.card4.h9")}</p>
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
