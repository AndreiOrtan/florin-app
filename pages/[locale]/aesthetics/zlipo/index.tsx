import React from "react";
import { useTranslations } from "next-intl";

export default function ZLipo() {
  const t = useTranslations("aesthetics");
  const images = [
    "/aesthetics/zlipo/galery1.jpeg",
    "/aesthetics/zlipo/galery2.jpeg",
    "/aesthetics/zlipo/galery3.jpeg",
    "/aesthetics/zlipo/galery4.jpeg",
    "/aesthetics/zlipo/galery5.jpeg",
    "/aesthetics/zlipo/galery6.jpeg",
    "/aesthetics/zlipo/galery7.jpeg",
    "/aesthetics/zlipo/galery8.jpeg",
    "/aesthetics/zlipo/galery9.jpeg",
    "/aesthetics/zlipo/galery10.jpeg",
    "/aesthetics/zlipo/galery11.jpeg",
    "/aesthetics/zlipo/galery12.jpeg",
  ];
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">ZLipo</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/zlipo/zlipo_machine.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              {t("cards.card2.p1")}
            </h1>

            <div className="my-auto text-justify text-lg font-normal">
              {t("cards.card2.p2")}
            </div>
          </div>
        </div>
        <div className="w-full bg-orange">
          <div className="flex flex-col items-center py-24">
            <h1 className="text-5xl text-white">{t("cards.card2.p3")}</h1>
            <div className="videos flex flex-col sm:flex-row items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/UFFgKlObqb8"
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
            <div>
              <h1 className="text-4xl font-semibold mb-4">
                {t("cards.card2.p4")}
              </h1>

              <p className="font-light">{t("cards.card2.p5")}</p>
            </div>
            <img
              src="/aesthetics/zlipo/range1.jpeg"
              alt="scale"
              className="text-center"
            />
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl ml-16">{t("cards.card2.p6")}</h1>
            <div className="flex flex-col text-center items-center my-4">
              <div className="max-w-[300px] py-2 flex flex-col">
                <div>
                  <img src="/aesthetics/zlipo/progress1.jpeg" alt="" />
                </div>
                <p>{t("cards.card2.eight")}</p>
              </div>
              <div className="max-w-[300px] py-2 flex flex-col">
                <div>
                  <img src="/aesthetics/zlipo/progress3.jpeg" alt="" />
                </div>
                <p>{t("cards.card2.eight")}</p>
              </div>
              <div className="max-w-[300px] py-2 flex flex-col">
                <div>
                  <img src="/aesthetics/zlipo/progress5.jpeg" alt="" />
                </div>
                <p>{t("cards.card2.eight")}</p>
              </div>
              <div className="max-w-[300px] py-2 flex flex-col">
                <div>
                  <img src="/aesthetics/zlipo/progress7.jpeg" alt="" />
                </div>
                <p>{t("cards.card2.eight")}</p>
              </div>
              <div className="max-w-[300px] py-2 flex flex-col">
                <div>
                  <img src="/aesthetics/zlipo/progress9.jpeg" alt="" />
                </div>
                <p>{t("cards.card2.eight")}</p>
              </div>
              <div className="max-w-[300px] py-2 flex flex-col">
                <div>
                  <img src="/aesthetics/zlipo/progress11.jpeg" alt="" />
                </div>
                <p>left: 2 treatments; right: no treatments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div>
              <h1 className="text-4xl font-semibold mb-4">
                {t("cards.card2.p7")}
              </h1>

              <p className="font-light">{t("cards.card2.p8")}</p>
              <p className="font-light mt-4">{t("cards.card2.p9")}</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div className="flex flex-col items-center py-24">
              <h1 className="text-5xl">{t("cards.card2.p10")}</h1>
              <p className="font-light my-2">{t("cards.card2.p11")}</p>
              <div className="videos flex flex-col sm:flex-row items-center justify-center">
                <iframe
                  src="https://www.youtube.com/embed/nOKoVpRg90c"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
                ></iframe>
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
                    {t("cards.card2.d1")}
                  </h2>
                  <p className="font-light">{t("cards.card2.d2")}</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card2.d3")}
                  </h2>
                  <p className="font-light">{t("cards.card2.d4")}</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card2.d5")}
                  </h2>
                  <p className="font-light">{t("cards.card2.d6")}</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card2.d7")}
                  </h2>
                  <p className="font-light">{t("cards.card2.d8")}</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card2.d9")}
                  </h2>
                  <p className="font-light">{t("cards.card2.d10")}</p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold">{t("cards.card2.d11")}</h2>
                <p className="mb-4 font-light">{t("cards.card2.d12")}</p>
                <h2 className="font-semibold">{t("cards.card2.d13")}</h2>
                <p className="mb-4 font-light">220 – 240 V, 50 Hz</p>
                <h2 className="font-semibold">{t("cards.card2.d14")}</h2>
                <p className="mb-4 font-light">2006/95/EG</p>
                <h2 className="font-semibold"> Protection class</h2>
                <p className="mb-4 font-light">I</p>
                <h2 className="font-semibold">{t("cards.card2.d15")}</h2>
                <p className="mb-4 font-light">
                  W 66,5 cm / D 62,9 cm / H 1 m, ca. 84 kg (with handpieces)
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
