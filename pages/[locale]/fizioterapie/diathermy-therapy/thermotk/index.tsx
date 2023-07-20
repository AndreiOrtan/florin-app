import React from "react";
import { useTranslations } from "next-intl";

export default function EnPuls() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery1.png",
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery2.png",
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery3.png",
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery4.jpeg",
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery5.jpeg",
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery6.jpeg",
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery7.png",
  ];
  return (
    <PhysioLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-blue700 text-3xl font-bold">ThermoTk</h1>
          </div>
        </header>
        <div className="w-full">
          <div className="flex w-9/12 flex-col sm:flex-row mx-auto justify-center items-centermb-8">
            <img
              src="/fizioterapiePhotos/diathermy-therapy/thermotk/thermotk-machine.png"
              alt="PhySys"
              className="w-[270px]"
            />
            <div className="text-container my-8 sm:pr-12">
              <h1 className="text-4xl font-semibold mb-4">
                {t("cards.card5.card1.p1")}
              </h1>

              <div className="my-auto text-justify text-lg">
                <p className="py-1">{t("cards.card5.card1.p2")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card5.card1.p3")}
            </h1>

            <div className="flex flex-col sm:flex-row">
              <div className="text-justify">
                <p className="py-1">{t("cards.card5.card1.p4")}</p>
                <p className="py-1">{t("cards.card5.card1.p5")}</p>
                <p className="py-1">{t("cards.card5.card1.p6")}</p>
              </div>
              <img
                src="/fizioterapiePhotos/diathermy-therapy/thermotk/inspired1.jpeg"
                alt="PhySys"
                className="w-[350px] rounded-lg sm:ml-8"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4 py-4">
              {t("cards.card5.card1.p7")}
            </h1>
            <p className="mb-2">{t("cards.card5.card1.p8")}</p>

            <div className="text-justify mb-4">
              <h2 className="font-bold ">{t("cards.card5.card1.p9")}</h2>
              <p className="font-light">{t("cards.card5.card1.p10")}</p>
            </div>

            <div className="text-justify mb-4">
              <h2 className="font-bold">{t("cards.card5.card1.p11")}</h2>
              <p className="font-light">{t("cards.card5.card1.p12")}</p>
            </div>
            <div className="text-justify mb-4">
              <h2 className="font-bold mb-1">{t("cards.card5.card1.p13")}</h2>
              <p className="font-light">{t("cards.card5.card1.p14")}</p>
            </div>
            <div className="text-justify mb-4">
              <h2 className="font-bold">{t("cards.card5.card1.p15")}</h2>
              <p className="font-light">{t("cards.card5.card1.p16")}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between">
              <img
                src="/fizioterapiePhotos/diathermy-therapy/thermotk/working2.jpeg"
                alt=""
                className="w-[250px] rounded-lg py-1"
              />
              <img
                src="/fizioterapiePhotos/diathermy-therapy/thermotk/working1.jpeg"
                alt=""
                className="w-[250px] rounded-lg py-1"
              />
              <img
                src="/fizioterapiePhotos/diathermy-therapy/thermotk/working3.jpeg"
                alt=""
                className="w-[250px] rounded-lg py-1"
              />
              <img
                src="/fizioterapiePhotos/diathermy-therapy/thermotk/working4.jpeg"
                alt=""
                className="w-[250px] rounded-lg py-1"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 flex-col sm:flex-row mx-auto">
            <h1 className="text-4xl font-semibold my-4">
              {t("cards.card5.card1.p17")}
            </h1>
            <img
              src="/fizioterapiePhotos/diathermy-therapy/thermotk/quality1.png"
              alt="Recomandations"
            />
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card5.card1.p18")}
            </h1>
            <h2 className="font-bold mb-2">{t("cards.card5.card1.p19")}</h2>

            <ul className="list-disc ml-6 mb-4">
              <li>{t("cards.card5.card1.p20")}</li>
              <li>{t("cards.card5.card1.p21")}</li>
            </ul>
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/practical1.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg"
            />
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
                  className="max-w-[150px]"
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
                <h2 className="font-semibold pb-0.5">
                  {" "}
                  {t("cards.card5.card1.ddd")}
                </h2>
                <p className="font-light">100-240V ~ /50/60 Hz</p>

                <h2 className="font-semibold text-lg pb-0.5">Consum.:</h2>
                <p className="mb-4 font-light">300 VA max</p>

                <h2 className="font-semibold  pb-0.5">
                  {t("cards.card5.card1.m1")}
                </h2>
                <p className="font-light">{t("cards.card5.card1.m2")}</p>
                <p className="font-light">{t("cards.card5.card1.m3")}</p>
                <p className="font-light mb-4">{t("cards.card5.card1.m4")}</p>

                <h2 className="font-semibold text-lg pb-0.5">
                  {t("cards.card5.card1.m5")}
                </h2>
                <p className="font-light">460 kHz / 540 kHz</p>
                <h2 className="font-semibold text-lg pb-0.5">Accuracy</h2>
                <p className="font-light">± 20 %</p>
              </div>

              <div className="ml-8">
                <h2 className="font-semibold"> {t("cards.card5.card1.m6")}</h2>
                <p className="mb-4 font-light">I</p>
                <h2 className="font-semibold"> {t("cards.card5.card1.m7")}</h2>
                <p className="mb-4 font-light">{t("cards.card5.card1.m8")}</p>
                <h2 className="font-semibold"> {t("cards.card5.card1.m9")}</h2>
                <p className="mb-4 font-light">{t("cards.card5.card1.m10")}</p>
                <h2 className="font-semibold"> {t("cards.card5.card1.m11")}</h2>
                <p className="mb-4 font-light">
                  W 322 mm / D 234 mm / H 135 mm
                </p>
                <h2 className="font-semibold"> {t("cards.card5.card1.m12")}</h2>
                <p className="mb-4 font-light">{t("cards.card5.card1.m13")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhysioLayout>
  );
}

// <div className="w-full"><div className="w-9/12 mx-auto"></div></div>

import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";
import PhysioLayout from "@/components/PhysioLayout";

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
