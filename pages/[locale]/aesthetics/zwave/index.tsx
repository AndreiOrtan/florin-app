import React from "react";
import { useTranslations } from "next-intl";

export default function ZLipo() {
  const t = useTranslations("aesthetics");
  const images = [
    "/aesthetics/zwave/galery1.jpeg",
    "/aesthetics/zwave/galery2.jpeg",
    "/aesthetics/zwave/galery3.jpeg",
    "/aesthetics/zwave/galery4.jpeg",
    "/aesthetics/zwave/galery5.jpeg",
  ];
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">ZWave</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/zwave/zwave_machine.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              {t("cards.card5.p1")}
            </h1>

            <div className="my-auto text-justify text-lg font-normal">
              {t("cards.card5.p2")}
            </div>
          </div>
        </div>

        <div className="w-full bg-orange">
          <div className="flex flex-col items-center py-24">
            <h1 className="text-5xl text-white">{t("cards.card5.p3")}</h1>
            <div className="videos flex flex-col sm:flex-row items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/LDUUobwbMAI"
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
            <h1 className="text-5xl">{t("cards.card5.p4")}</h1>
            <div>
              <p>{t("cards.card5.p5")}</p>
              <div className="flex justify-center flex-col sm:flex-row my-8">
                <img
                  src="/aesthetics/zwave/comb1.jpeg"
                  alt=""
                  className="w-[200px] rounded"
                />
                <img
                  src="/aesthetics/zwave/comb2.png"
                  alt=""
                  className="w-[200px] rounded mx-4"
                />
                <img
                  src="/aesthetics/zwave/comb3.jpeg"
                  alt=""
                  className="w-[200px] rounded"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <h2 className="text-2xl font-semibold">{t("cards.card5.p6")}</h2>
            <h2 className="font-medium text-lg">{t("cards.card5.p7")}</h2>
            <h2 className="font-normal text-lg">{t("cards.card5.p8")}</h2>
            <div className="flex sm:flex-row flex-col py-8 mt-8 justify-around">
              <div className="w-1/2">
                <h2 className="font-semibold text-lg">{t("cards.card5.p9")}</h2>
                <h2 className="font-normal text-base">
                  {t("cards.card5.p10")}
                </h2>
                <ul className="list-disc ml-6 mb-4 py-2">
                  <li className="mb-1"> {t("cards.card5.p11")}</li>
                  <li className="mb-1"> {t("cards.card5.p12")}</li>
                  <li className="mb-1"> {t("cards.card5.p13")}</li>
                  <li className="mb-1"> {t("cards.card5.p14")}</li>
                  <li className="mb-1"> {t("cards.card5.p15")}</li>
                  <li className="mb-1"> {t("cards.card5.p16")}</li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-lg">
                  {t("cards.card5.p17")}
                </h2>

                <ul className="list-disc ml-6 mb-4 py-2">
                  <li className="mb-1"> {t("cards.card5.p18")}</li>
                  <li className="mb-1"> {t("cards.card5.p19")}</li>
                  <li className="mb-1"> {t("cards.card5.p20")}</li>
                  <li className="mb-1"> C{t("cards.card5.p21")}</li>
                  <li className="mb-1"> {t("cards.card5.p22")}</li>
                  <li className="mb-1"> {t("cards.card5.p23")}</li>
                  <li className="mb-1"> {t("cards.card5.p24")}</li>
                  <li className="mb-1"> {t("cards.card5.p25")}</li>
                  <li className="mb-1"> {t("cards.card5.p26")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-16">
            <h2 className="text-2xl font-semibold mb-3">
              {t("cards.card5.p27")}
            </h2>
            <h2 className="text-xl font-normal mb-2">{t("cards.card5.p28")}</h2>

            <div className="flex flex-wrap sm:flex-row flex-col justify-center">
              <div className="flex m-4">
                <div className="text-center">
                  <img src="/aesthetics/zwave/result1.jpeg" alt="" />
                  <p>Before</p>
                </div>
                <div className="text-center">
                  <img src="/aesthetics/zwave/result2.jpeg" alt="" />
                  <p>After</p>
                </div>
              </div>
              <div className="flex m-4">
                <div className="text-center">
                  <img src="/aesthetics/zwave/result3.png" alt="" />
                  <p>Before</p>
                </div>
                <div className="text-center">
                  <img src="/aesthetics/zwave/result4.png" alt="" />
                  <p>After</p>
                </div>
              </div>
              <div className="flex m-4">
                <div className="text-center">
                  <img src="/aesthetics/zwave/result5.jpeg" alt="" />
                  <p>Before</p>
                </div>
                <div className="text-center">
                  <img src="/aesthetics/zwave/result6.jpeg" alt="" />
                  <p>After</p>
                </div>
              </div>
              <div className="flex m-4">
                <div className="text-center">
                  <img src="/aesthetics/zwave/result7.jpeg" alt="" />
                  <p>Before</p>
                </div>
                <div className="text-center">
                  <img src="/aesthetics/zwave/result8.jpeg" alt="" />
                  <p>After</p>
                </div>
              </div>
            </div>
            <p className="flont-light text-lg">{t("cards.card5.p29")}</p>
          </div>
        </div>

        <div className="w-full py-10">
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
                    {t("cards.card5.d1")}
                  </h2>
                  <p className="font-light">{t("cards.card5.d2")}</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card5.d3")}
                  </h2>
                  <p className="font-light">{t("cards.card5.d4")}</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    {t("cards.card5.d5")}
                  </h2>
                  <p className="font-light">{t("cards.card5.d6")}</p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold">{t("cards.card5.d7")}</h2>
                <p className="mb-4 font-light">{t("cards.card5.d8")}</p>
                <h2 className="font-semibold">{t("cards.card5.d9")}</h2>
                <p className="mb-4 font-light">
                  100 – 240 V / 50/60 Hz; 220 V / 60 Hz, I
                </p>
                <h2 className="font-semibold">{t("cards.card5.d10")}</h2>
                <p className="mb-4 font-light">
                  W 32,2 cm / D 23,5 cm / H 13 cm, 2,7 kg (without handpiece)
                </p>
                <h2 className="font-semibold">{t("cards.card5.d11")}</h2>
                <p className="mb-4 font-light">{t("cards.card5.d12")}</p>
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
