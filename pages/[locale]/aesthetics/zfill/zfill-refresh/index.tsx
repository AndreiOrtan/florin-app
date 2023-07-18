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
            <h1 className="text-3xl font-bold">Z Fill refresh²</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/zfill/zfill-refresh/zfill_refresh_thing.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              {t("cards.card7.card1.p1")}
            </h1>

            <div className="my-auto text-justify text-lg font-normal">
              {t("cards.card7.card1.p2")}
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h2 className="text-2xl font-semibold">
              {t("cards.card7.card1.p3")}
            </h2>
            <div className="flex sm:flex-row flex-col py-8">
              <ul className="list-disc ml-6 mb-4 py-2">
                <li className="mb-1"> {t("cards.card7.card1.p4")}</li>
                <li className="mb-1"> {t("cards.card7.card1.p5")}</li>
                <li className="mb-1"> {t("cards.card7.card1.p6")}</li>
                <li className="mb-1"> {t("cards.card7.card1.p7")}</li>
                <li className="mb-1"> {t("cards.card7.card1.p8")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <h2 className="text-2xl font-semibold mb-4">Hyaluronate</h2>
            <div className="flex">
              <div>
                <div>
                  <h2 className="font-semibold pb-0.5">Concentration of HA</h2>
                  <p className="font-light">18 mg/ml</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Stabiliser</h2>
                  <p className="font-light">Glycerine</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Sterility</h2>
                  <p className="font-light">Sterile</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">pH</h2>
                  <p className="font-light">6.8 – 7.6</p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold">Package</h2>
                <p className="mb-4 font-light">1x 1 ml</p>
                <h2 className="font-semibold">Needle</h2>
                <p className="mb-4 font-light">2x 30 G 1⁄2”</p>
                <h2 className="font-semibold">Recommended treatment plan:</h2>
                <p className="mb-4 font-light">
                  In the first two months, three treatments are recommended.
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
