import React from "react";
import { useTranslations } from "next-intl";

export default function Cryo6() {
  const t = useTranslations("aesthetics");
  const images = [
    "/aesthetics/zcryo/cryo6/galery1.jpeg",
    "/aesthetics/zcryo/cryo6/galery2.jpeg",
    "/aesthetics/zcryo/cryo6/galery3.jpeg",
    "/aesthetics/zcryo/cryo6/galery4.jpeg",
    "/aesthetics/zcryo/cryo6/galery5.jpeg",
    "/aesthetics/zcryo/cryo6/galery6.jpeg",
    "/aesthetics/zcryo/cryo6/galery7.jpeg",
  ];
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Cryo6</h1>
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
              {t("cards.card1.card2.p1")}
            </h1>

            <div className="my-auto text-justify text-lg font-normal">
              {t("cards.card1.card2.p2")}
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div>
              <h1 className="text-4xl font-semibold mb-4">
                {t("cards.card1.card2.p3")}
              </h1>

              <p className="font-light">{t("cards.card1.card2.p4")}</p>
              <h3 className="font-semibold">{t("cards.card1.card2.p5")}</h3>
              <p className="font-light">{t("cards.card1.card2.p6")}</p>
              <p className="font-light">{t("cards.card1.card2.p7")}</p>
              <p className="font-light">{t("cards.card1.card2.p8")}</p>
            </div>
            <img
              src="/aesthetics/zcryo/cryo6/scale1.jpeg"
              alt="scale"
              className="text-center"
            />
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

        <div className="w-full bg-orange">
          <div className="flex flex-col items-center py-24">
            <div className="videos flex flex-col sm:flex-row items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/UdsU6GMmVYg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/eWe77R3ty-U" //SAME VIDEOUS AS MINI
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
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
                  <p className="font-light"> 230 V / 50 Hz</p>
                  <p className="font-light"> 230 V / 60 Hz</p>
                  <p className="font-light"> 115 V / 60 Hz</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">{t("input")}</h2>
                  <p className="font-light"> 1 KW</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">{t("standBy")}</h2>
                  <p className="font-light">260 W / h</p>
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
                <p className="mb-4 font-light">H 64,5 cm / W 39 cm / L 68 cm</p>
                <h2 className="font-semibold"> {t("weight")}</h2>
                <p className="mb-4 font-light">60 kg</p>
                <h2 className="font-semibold"> {t("fan")}</h2>
                <p className="mb-4 font-light">
                  9 {t("levels")}, max. 1000 l / min
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
