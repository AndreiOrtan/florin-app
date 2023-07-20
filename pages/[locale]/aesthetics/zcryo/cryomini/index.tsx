import React from "react";
import { useTranslations } from "next-intl";

export default function Cryomini() {
  const t = useTranslations("aesthetics");
  const images = [
    "/aesthetics/zcryo/cryomini/galery1.jpeg",
    "/aesthetics/zcryo/cryomini/galery2.jpeg",
    "/aesthetics/zcryo/cryomini/galery3.jpeg",
    "/aesthetics/zcryo/cryomini/galery4.jpeg",
    "/aesthetics/zcryo/cryomini/galery5.jpeg",
    "/aesthetics/zcryo/cryomini/galery6.jpeg",
  ];
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">CryoMini</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/zcryo/cryo6/cryo6_machine.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              {t("cards.card1.card3.p1")}
            </h1>

            <div className="my-auto text-justify text-lg font-normal">
              {t("cards.card1.card3.p2")}
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div className="text-container my-8 sm:pr-12">
              <h1 className="text-4xl font-semibold mb-4">
                {t("cards.card1.card3.p3")}
              </h1>

              <div className="my-auto text-justify text-lg font-normal">
                {t("cards.card1.card3.p4")}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-10 bg-lightgray">
          <div className="w-9/12 mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              {t("pictureGallery")}
            </h2>
            <div className="flex flex-wrap justify-between">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="max-w-[110px] sm:max-w-[150px] rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-4">
              {t("technicalData")}
            </h2>
            <div className="flex">
              <div>
                <div>
                  <h2 className="font-semibold pb-0.5"> {t("powerSupply")}</h2>
                  <p className="font-light"> 230 V / 50-60 Hz</p>
                  <p className="font-light"> 125 V / 50-60 Hz</p>
                  <p className="font-light"> 100 V / 50-60 Hz</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">{t("input")}</h2>
                  <p className="font-light"> 1 KW</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">{t("standBy")}</h2>
                  <p className="font-light">100 W/h</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">{t("protection")}</h2>
                  <p className="font-light">EN 60601-1 I, Type B</p>
                  <p className="font-light">MDD / MPG Class IIa</p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold"> {t("tube")}</h2>
                <p className="mb-4 font-light">1,80 m</p>
                <h2 className="font-semibold"> {t("length")}</h2>
                <p className="mb-4 font-light">H 65 cm / W 33,5 cm / L 60 cm</p>
                <h2 className="font-semibold"> {t("weight")}</h2>
                <p className="mb-4 font-light">35,5 kg</p>
                <h2 className="font-semibold"> {t("airFlow")}</h2>
                <p className="mb-4 font-light">
                  9 {t("levels")}, ~ 1300 l / min
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AestheticsLayout>
  );
}

// <div className="w-full"><div className="w-9/12 mx-auto"></div></div>

import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";
import AestheticsLayout from "@/components/AestheticsLayout";

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
