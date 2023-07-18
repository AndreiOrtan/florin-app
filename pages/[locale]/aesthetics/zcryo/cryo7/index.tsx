import React from "react";
import { useTranslations } from "next-intl";

export default function Cryo7() {
  const t = useTranslations("aesthetics");
  const images = [
    "/aesthetics/zcryo/cryo7/galery1.jpeg",
    "/aesthetics/zcryo/cryo7/galery2.jpeg",
    "/aesthetics/zcryo/cryo7/galery3.jpeg",
    "/aesthetics/zcryo/cryo7/galery4.jpeg",
    "/aesthetics/zcryo/cryo7/galery5.jpeg",
  ];
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Cryo7</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/zcryo/cryo7/cryo7_machine.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              {t("cards.card1.card1.description")}
            </h1>

            <div className="my-auto text-justify text-lg">
              {t("cards.card1.card1.p1")}
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card1.card1.p2")}
            </h1>

            <p className="pt-4">{t("cards.card1.card1.p3")}</p>
            <p className="pt-4">{t("cards.card1.card1.p4")}</p>
            <p className="pt-4">{t("cards.card1.card1.p5")}</p>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div>
              <h1 className="text-4xl font-semibold mb-4">
                {t("cards.card1.card1.p6")}
              </h1>
              <p className="font-light">{t("cards.card1.card1.p7")}</p>
              <ul className="list-disc ml-6 mb-4">
                <li className="pb-1">{t("cards.card1.card1.p8")}</li>
                <li className="pb-1">{t("cards.card1.card1.p9")}</li>
                <li className="pb-1">{t("cards.card1.card1.p10")}</li>
                <li className="pb-1">{t("cards.card1.card1.p11")}</li>
              </ul>
            </div>
            <div>
              <h1 className="text-4xl font-semibold mb-4">
                {t("cards.card1.card1.p12")}
              </h1>
              <p className="font-light">{t("cards.card1.card1.p13")}</p>
              <ul className="list-disc ml-6 mb-4">
                <li className="pb-1">{t("cards.card1.card1.p14")}</li>
                <li className="pb-1"> {t("cards.card1.card1.p15")}</li>
                <li className="pb-1"> {t("cards.card1.card1.p16")}</li>
                <li className="pb-1">{t("cards.card1.card1.p17")}</li>
              </ul>
            </div>
            <div>
              <h1 className="text-4xl font-semibold mb-4">
                {t("cards.card1.card1.p18")}
              </h1>
              <p className="font-light">{t("cards.card1.card1.p19")}</p>
              <ul className="list-disc ml-6 mb-4">
                <li className="pb-1">{t("cards.card1.card1.p20")}</li>
                <li className="pb-1"> {t("cards.card1.card1.p21")}</li>
                <li className="pb-1"> {t("cards.card1.card1.p22")}</li>
                <li className="pb-1"> {t("cards.card1.card1.p23")}</li>
                <li className="pb-1"> {t("cards.card1.card1.p24")}</li>
              </ul>
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
                  <h2 className="font-semibold pb-0.5"> Power supply</h2>
                  <p className="font-light"> 220-240 V / 50-60 Hz</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    Max. power consumption during therapy
                  </h2>
                  <p className="font-light"> 1,2 kW</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    Eco standby operation
                  </h2>
                  <p className="font-light">
                    0,55 kWh (Values are based on an internal test)
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Medical product</h2>
                  <p className="font-light"> Class IIa</p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold"> Treatment tube length</h2>
                <p className="mb-4 font-light">250 cm</p>
                <h2 className="font-semibold"> Housing dimensions</h2>
                <p className="mb-4 font-light">H 106 cm / W 50 cm / L 56 cm</p>
                <h2 className="font-semibold"> Weight</h2>
                <p className="mb-4 font-light">60 kg</p>
                <h2 className="font-semibold"> Fan levels</h2>
                <p className="mb-4 font-light">9 levels</p>
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
