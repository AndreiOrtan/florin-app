import React from "react";
import { useTranslations } from "next-intl";

export default function ZLipo() {
  const t = useTranslations("aesthetics");
  const images = [
    "/aesthetics/conticure/galery1.png",
    "/aesthetics/conticure/galery2.png",
    "/aesthetics/conticure/galery3.jpeg",
    "/aesthetics/conticure/galery4.jpeg",
  ];
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">ContiCure</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/conticure/conticure_machine.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              {t("cards.card6.p1")}
            </h1>

            <div className="my-auto text-justify text-lg font-normal">
              {t("cards.card6.p2")}
            </div>
          </div>
        </div>

        <div className="w-full bg-orange">
          <div className="flex flex-col items-center py-24">
            <h1 className="text-5xl text-white">{t("cards.card6.p3")}</h1>
            <div className="videos flex flex-col sm:flex-row items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/ACD4SVZDsXI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-24">
            <h1 className="text-5xl">{t("cards.card6.p4")}</h1>
            <h2 className="text-3xl my-4">{t("cards.card6.p5")}</h2>
            <div className="mb-2">
              <h2 className="font-medium">{t("cards.card6.p6")}</h2>
              <p className="font-light">{t("cards.card6.p7")}</p>
            </div>
            <div className="mb-2">
              <h2 className="font-medium">{t("cards.card6.p8")}</h2>
              <p className="font-light">{t("cards.card6.p9")}</p>
            </div>
            <div className="mb-2">
              <h2 className="font-medium">{t("cards.card6.p10")}</h2>
              <p className="font-light">{t("cards.card6.p11")}</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl mb-4">{t("cards.card6.p12")}</h1>
            <div className="flex flex-col sm:flex-row">
              <div>
                <div>
                  <h2 className="font-semibold">{t("cards.card6.p13")}</h2>
                  <p className="font-light">{t("cards.card6.p14")}</p>
                  <h2 className="font-semibold">Hygiene</h2>
                  <p className="font-light">{t("cards.card6.p15")}</p>
                  <h2 className="font-semibold">{t("cards.card6.p16")}</h2>
                  <p className="font-light">{t("cards.card6.p17")}</p>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="font-semibold">{t("cards.card6.p18")}</h2>
                  <p className="font-light">{t("cards.card6.p19")}</p>
                  <h2 className="font-semibold">{t("cards.card6.p20")}</h2>
                  <p className="font-light">{t("cards.card6.p21")}</p>
                  <h2 className="font-semibold">{t("cards.card6.p22")}</h2>
                  <p className="font-light">{t("cards.card6.p23")}</p>
                </div>
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
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card6.d1")}
                  </h2>
                  <p className="font-light">100-240 V / 50-60 Hz</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card6.d2")}
                  </h2>
                  <p className="font-light">1-150 Hz</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card6.d3")}
                  </h2>
                  <p className="font-light">1 {t("cards.card6.d3")}</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card6.d4")}
                  </h2>
                  <p className="font-light">{t("cards.card6.d5")}</p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold">{t("cards.card6.d6")}</h2>

                <h2 className="font-semibold">{t("cards.card6.d7")}</h2>
                <p className="mb-4 font-light">H 118 cm / W 70 cm / L 57 cm</p>
                <h2 className="font-semibold">{t("cards.card6.d8")}</h2>
                <p className="mb-4 font-light">60 kg</p>
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
