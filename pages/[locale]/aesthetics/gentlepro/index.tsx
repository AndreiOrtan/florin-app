import React from "react";
import { useTranslations } from "next-intl";

export default function ZLipo() {
  const t = useTranslations("aesthetics");
  const images = [
    "/aesthetics/gentlepro/galery1.png",
    "/aesthetics/gentlepro/galery2.jpeg",
    "/aesthetics/gentlepro/galery3.jpeg",
    "/aesthetics/gentlepro/galery4.jpeg",
    "/aesthetics/gentlepro/galery5.jpeg",
  ];
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">GentlePro</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/gentlepro/gentlepro_machine.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              {t("cards.card8.p1")}
            </h1>

            <div className="my-auto text-justify text-lg font-normal">
              {t("cards.card8.p2")}
            </div>
          </div>
        </div>
        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-24">
            <h1 className="text-3xl">{t("cards.card8.p3")}</h1>
            <div>
              <p className="my-2 font-light">{t("cards.card8.p4")}</p>
              <p className="font-light">{t("cards.card8.p5")}</p>
            </div>
          </div>
        </div>

        <div className="w-full bg-orange">
          <div className="flex flex-col items-center py-24">
            <h1 className="text-5xl text-white">{t("cards.card8.p6")}</h1>
            <div className="videos flex flex-col sm:flex-row items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/qCbuz4EuICU"
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
          <div className="w-9/12 mx-auto py-24">
            <h1 className="text-5xl">{t("cards.card8.p7")}</h1>
            <div>
              <p className="my-2 font-normal">{t("cards.card8.p8")}</p>
              <p className="my-2 font-normal">{t("cards.card8.p9")}</p>
              <p className="my-2 font-normal">{t("cards.card8.p10")}</p>
            </div>
            <div className="flex justify-center">
              <img
                src="/aesthetics/gentlepro/gentle1.jpeg"
                alt=""
                className="w-[200px] rounded-lg m-4"
              />
              <img
                src="/aesthetics/gentlepro/gentle2.jpeg"
                alt=""
                className="w-[200px] rounded-lg m-4"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h2 className="text-2xl font-semibold">{t("cards.card8.p11")}</h2>
            <div className="flex sm:flex-row flex-col py-8">
              <div>
                <h2 className="font-semibold text-lg">
                  {t("cards.card8.p12")}:
                </h2>
                <ul className="list-disc ml-6 mb-4 py-2">
                  <li className="mb-1"> {t("cards.card8.p13")}</li>
                  <li className="mb-1"> {t("cards.card8.p14")}</li>
                  <li className="mb-1"> {t("cards.card8.p15")}</li>
                  <li className="mb-1"> {t("cards.card8.p16")}</li>
                  <li className="mb-1"> {t("cards.card8.p17")}</li>
                  <li className="mb-1"> {t("cards.card8.p18")}</li>
                  <li className="mb-1"> {t("cards.card8.p19")}</li>
                  <li className="mb-1"> {t("cards.card8.p20")}</li>
                  <li className="mb-1"> {t("cards.card8.p21")}</li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-lg">
                  {t("cards.card8.p22")}:
                </h2>

                <ul className="list-disc ml-6 mb-4 py-2">
                  <li className="mb-1"> {t("cards.card8.p23")}</li>
                  <li className="mb-1"> {t("cards.card8.p24")}</li>
                  <li className="mb-1"> {t("cards.card8.p25")}</li>
                  <li className="mb-1"> {t("cards.card8.p26")}</li>
                  <li className="mb-1"> {t("cards.card8.p27")}</li>
                  <li className="mb-1"> {t("cards.card8.p28")}</li>
                </ul>
              </div>
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
                  <h2 className="font-semibold pb-0.5">Technology</h2>
                  <p className="font-light">
                    Compressor-free ballistic shockwave system with
                    electromagnetic generator as projectile accelerator, 1 – 22
                    Hz, 60 – 185 mJ
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Programmes</h2>
                  <p className="font-light">
                    5 pre-set application fields plus respective detailed
                    treatment protocols
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Control unit</h2>
                  <p className="font-light">
                    12″ colour touch-screen for all software operations, knops
                    for energy and frequency. Handpiece operation via
                    multidirectional foot switch.
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Memory and update</h2>
                  <p className="font-light">
                    SD card for application menu memory, favourites and adapted
                    programmes (99 places) / error log / firmware update
                  </p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold">
                  Mains voltage, Protection class
                </h2>
                <p className="mb-4 font-light">
                  100 – 240 V / 50/60 Hz; 220 V / 60 Hz, I
                </p>
                <h2 className="font-semibold">Dimensions, weight</h2>
                <p className="mb-4 font-light">
                  L 53 cm / W 54 cm / H 139 cm, 21 kg (without handpiece)
                </p>
                <h2 className="font-semibold">Guarantee</h2>
                <p className="mb-4 font-light">
                  2.000.000 shocks on each shockwave generator
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
