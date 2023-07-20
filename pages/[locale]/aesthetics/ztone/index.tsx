import React from "react";
import { useTranslations } from "next-intl";

export default function ZLipo() {
  const t = useTranslations("aesthetics");
  const images = [
    "/aesthetics/ztone/galery1.jpeg",
    "/aesthetics/ztone/galery2.jpeg",
    "/aesthetics/ztone/galery3.jpeg",
    "/aesthetics/ztone/galery4.jpeg",
    "/aesthetics/ztone/galery5.jpeg",
    "/aesthetics/ztone/galery6.jpeg",
    "/aesthetics/ztone/galery7.jpeg",
  ];
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">ZTone</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/ztone/ztone_machine.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              {t("cards.card4.p1")}
            </h1>

            <div className="my-auto text-justify text-lg font-normal">
              {t("cards.card4.p2")}
            </div>
          </div>
        </div>
        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-24">
            <h1 className="text-5xl">{t("cards.card4.p3")}</h1>
            <div>
              <p>{t("cards.card4.p4")}</p>
              <p>{t("cards.card4.p5")}</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-9/12 mx-auto py-24">
            <h1 className="text-5xl">{t("cards.card4.p6")}</h1>
            <div>
              <p>{t("cards.card4.p7")}</p>
              <p>{t("cards.card4.p8")}</p>
            </div>
            <img src="/aesthetics/ztone/news1.png" alt="" />
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h2 className="text-2xl font-semibold">{t("cards.card4.p9")}</h2>
            <div className="flex sm:flex-row flex-col py-8">
              <div>
                <h2 className="font-semibold text-lg">
                  {t("cards.card4.p10")}
                </h2>
                <h2 className="font-normal text-base">
                  {t("cards.card4.p11")}
                </h2>
                <ul className="list-disc ml-6 mb-4 py-2">
                  <li className="mb-1"> {t("cards.card4.p12")}</li>
                  <li className="mb-1"> {t("cards.card4.p13")}</li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-lg">
                  {t("cards.card4.p14")}
                </h2>
                <h2 className="font-normal text-base">
                  {t("cards.card4.p15")}
                </h2>
                <ul className="list-disc ml-6 mb-4 py-2">
                  <li className="mb-1"> {t("cards.card4.p16")}</li>
                  <li className="mb-1"> {t("cards.card4.p17")} </li>
                  <li className="mb-1"> {t("cards.card4.p18")} </li>
                  <li className="mb-1"> {t("cards.card4.p19")} </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-lg">
                  {t("cards.card4.p20")}
                </h2>
                <h2 className="font-normal text-base">
                  {t("cards.card4.p21")}
                </h2>
                <ul className="list-disc ml-6 mb-4 py-2">
                  <li className="mb-1"> {t("cards.card4.p22")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-16">
            <div>
              <h1 className="text-4xl font-semibold mb-1">
                {t("cards.card4.p23")}
              </h1>
            </div>

            <img
              src="/aesthetics/ztone/range1.jpeg"
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

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-4">
              {t("technicalData")}
            </h2>
            <div className="flex">
              <div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card3.d1")}
                  </h2>
                  <p className="font-light">2</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card3.d2")}
                  </h2>
                  <p className="font-light">1 – 100 Hz</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card3.magnetic")}
                  </h2>
                  <p className="font-light">3.0 Tesla</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card3.d3")}
                  </h2>
                  <p className="font-light">Regions</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card3.medicalDevice")}
                  </h2>
                  <p className="font-light">Class IIa</p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold">{t("cards.card3.d5")}</h2>
                <p className="mb-4 font-light">{t("cards.card3.d6")}</p>
                <h2 className="font-semibold">{t("cards.card3.d7")}</h2>
                <p className="mb-4 font-light">H 118 cm x W 70 cm x L 57 cm</p>
                <h2 className="font-semibold">{t("cards.card3.d8")}</h2>
                <p className="mb-4 font-light">81 kg</p>
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
