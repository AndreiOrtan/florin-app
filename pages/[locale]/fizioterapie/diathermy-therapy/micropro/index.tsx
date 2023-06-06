import React from "react";
import { useTranslations } from "next-intl";

export default function enPuls() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/fizioterapiePhotos/diathermy-therapy/micropro/galery1.jpeg",
    "/fizioterapiePhotos/diathermy-therapy/micropro/galery2.jpeg",
    "/fizioterapiePhotos/diathermy-therapy/micropro/galery3.jpeg",
  ];
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">MicroPro</h1>
        </div>
      </header>
      <div className="w-full">
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/fizioterapiePhotos/diathermy-therapy/micropro/micropro-machine.png"
            alt="PhySys"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              {t("cards.card5.card2.p1")}
            </h1>

            <div className="my-auto text-justify text-lg">
              <p className="py-1">{t("cards.card5.card2.p2")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card5.card2.p3")}
          </h1>
          <p className="font-light py-2"> {t("cards.card5.card2.p4")}</p>

          <p className="font-light py-2"> {t("cards.card5.card2.p5")}</p>

          <p className="font-light py-2"> {t("cards.card5.card2.p6")}</p>

          <p className="font-light py-2"> {t("cards.card5.card2.p7")} </p>

          <p className="font-light py-2"> {t("cards.card5.card2.p8")}</p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card5.card2.p9")}
          </h1>
          <ul className="list-disc ml-6 mb-4">
            <li className="pb-1"> {t("cards.card5.card2.p10")}</li>
            <li className="pb-1"> {t("cards.card5.card2.p11")}</li>
            <li className="pb-1"> {t("cards.card5.card2.p12")} </li>
            <li className="pb-1"> {t("cards.card5.card2.p13")}</li>
            <li className="pb-1">{t("cards.card5.card2.p14")}</li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card5.card2.p15")}
          </h1>
          <div className="flex flex-col sm:flex-row mx-auto items-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src="/fizioterapiePhotos/diathermy-therapy/micropro/radiator1.png"
                alt="PhySys"
                className="w-[200px]"
              />
              <p>{t("cards.card5.card2.p16")}</p>
            </div>
            <div className="flex flex-col text-center">
              <img
                src="/fizioterapiePhotos/diathermy-therapy/micropro/radiator2.png"
                alt="PhySys"
                className="w-[200px]"
              />
              <p>{t("cards.card5.card2.p17")}</p>
            </div>
            <div className="flex flex-col text-center">
              <img
                src="/fizioterapiePhotos/diathermy-therapy/micropro/radiator3.png"
                alt="PhySys"
                className="w-[200px]"
              />
              <p>{t("cards.card5.card2.p18")}</p>
            </div>
            <div className="flex flex-col text-center">
              <img
                src="/fizioterapiePhotos/diathermy-therapy/micropro/radiator4.png"
                alt="PhySys"
                className="w-[200px]"
              />
              <p>{t("cards.card5.card2.p19")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">Appliance</h1>
          <p className="pb-2">
            en<span className="font-extrabold">Puls</span> 2.0 is ideal as a
            system for radial shockwave therapy, for superficial orthopedic
            problems such as:
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li className="pb-1">Insertion tendinopathy</li>
            <li className="pb-1"> Tendon problems</li>
            <li className="pb-1"> Chronic inflammation</li>
            <li className="pb-1"> Hypertonic muscle systems</li>
            <li className="pb-1"> Myofascial syndromes</li>
            <li className="pb-1"> Hemotoma treatments </li>
          </ul>
          <div className="flex">
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/appliance1.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/appliance2.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg ml-4"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/appliance3.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg ml-4"
            />
          </div>
        </div>
      </div> */}

      <div className="w-full py-10">
        <div className="w-9/12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Picture gallery</h2>
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
          <h2 className="text-2xl font-semibold mb-4">Technical data</h2>
          <div className="flex">
            <div>
              <h2 className="font-semibold pb-0.5"> Medical device</h2>
              <p className="font-light">IIa</p>

              <h2 className="font-semibold text-lg pb-0.5">HF nominal power</h2>
              <p className="mb-4 font-light">200/200 W (CW/pulse)</p>

              <h2 className="font-semibold  pb-0.5">Operating frequency</h2>

              <p className="font-light mb-4">2.45 GHz ± 1.5 %</p>

              <h2 className="font-semibold text-lg pb-0.5">Power indication</h2>
              <p className="font-light">Effective power</p>
            </div>

            <div className="ml-16">
              <h2 className="font-semibold"> Timer</h2>
              <p className="mb-4 font-light">1–30 min. (1 min steps)</p>

              <h2 className="font-semibold"> Dimensions </h2>
              <p className="mb-4 font-light">450 x 1110 x 530 mm (B x H x T)</p>
              <h2 className="font-semibold"> Weight</h2>
              <p className="mb-4 font-light">44 kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="w-full"><div className="w-9/12 mx-auto"></div></div>

import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";

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
