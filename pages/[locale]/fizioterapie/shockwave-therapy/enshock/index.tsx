import React from "react";
import { useTranslations } from "next-intl";

export default function enPulsPro() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/fizioterapiePhotos/shockwave-therapy/enShock/galery1.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enShock/galery2.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enShock/galery3.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enShock/galery4.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enShock/galery5.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enShock/galery6.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enShock/galery7.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enShock/galery8.jpeg",
  ];
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">enShock</h1>
        </div>
      </header>
      <div className="flex w-9/12 mb-8 flex-col sm:flex-row justify-center items-center">
        <img
          src="/fizioterapiePhotos/shockwave-therapy/enShock/en-shock-machine.png"
          alt="PhySys"
          className="w-[350px]"
        />
        <div className="text-container my-8 pr-12">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card3.card3.p1")}
          </h1>

          <p className="my-auto text-left text-lg">
            {t("cards.card3.card3.p2")}
          </p>
        </div>
      </div>

      <div className="bg-lightgray w-full py-8">
        <div className="w-9/12 mx-auto">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card3.card3.p3")}
          </h1>
          <h2 className="py-1">{t("cards.card3.card3.p4")}</h2>

          <div className="flex py-4 flex-col sm:flex-row">
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enShock/convenient1.jpeg"
              alt="PhySys"
              className="rounded-lg w-[350px]"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enShock/convenient2.jpeg"
              alt="PhySys"
              className="rounded-lg w-[350px] sm:ml-16"
            />
          </div>
        </div>
      </div>

      <div className=" w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card3.card3.p5")}
          </h1>
          <p>{t("cards.card3.card3.p6")}</p>
          <p>{t("cards.card3.card3.p7")}</p>

          <h1 className="text-4xl font-semibold mt-8">
            {t("cards.card3.card3.p8")}
          </h1>

          <p className="pb-2 mt-4">{t("cards.card3.card3.p9")}</p>

          <ul className="list-disc ml-6 mb-4">
            <li className="py-0.5"> {t("cards.card3.card3.p10")}</li>

            <li className="py-0.5"> {t("cards.card3.card3.p11")} </li>
            <li className="py-0.5"> {t("cards.card3.card3.p12")}</li>
          </ul>
        </div>
      </div>

      {/* below is the same as enPuls with first <p> changed */}
      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card3.card3.p13")}
          </h1>
          <p className="pb-2">{t("cards.card3.card3.p14")}</p>
          <p className="mt-8 mb-2">Studies show:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="pb-1">{t("cards.card3.card3.p15")}</li>
            <li className="pb-1"> {t("cards.card3.card3.p16")}</li>
            <li className="pb-1"> {t("cards.card3.card3.p17")} </li>
            <li className="pb-1"> {t("cards.card3.card3.p18")}</li>
          </ul>
          <p>{t("cards.card3.card3.p19")}</p>
          <p className="py-4">{t("cards.card3.card3.p20")}</p>
          <div className="flex flex-col sm:flex-row">
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enShock/proven1.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enShock/proven2.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg sm:ml-4"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enShock/proven3.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg sm:ml-4"
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto mb-16">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card3.card3.p21")}
          </h1>
          <p>{t("cards.card3.card3.p22")}</p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto">
          <h1 className="text-4xl font-semibold my-4">
            {t("cards.card3.card3.p23")}
          </h1>
          <img
            src="/fizioterapiePhotos/shockwave-therapy/enShock/recomandation.jpeg"
            alt="Recomandations"
          />
        </div>
      </div>

      <div className="w-full py-10 bg-lightgray">
        <div className="w-9/12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Picture gallery</h2>
          <div className="flex flex-wrap justify-between">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-[150px] rounded-lg sm:m-2"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h2 className="text-2xl font-semibold mb-6">Technical data</h2>
          <div className="flex">
            <div>
              <h2 className="mb-4 font-bold"> enShock:</h2>

              <h2 className="font-semibold"> Technology</h2>
              <p className="mb-4 font-light">
                {" "}
                Piezoelectrically focused shock waves
              </p>

              <h2 className="font-semibold"> Energy</h2>
              <p className="mb-4 font-light">
                0.005 – 0.500 mJ/mm2, freely adjustable in 0.005 mJ increments
              </p>

              <h2 className="font-semibold"> Frequency</h2>
              <p className="mb-4 font-light">
                {" "}
                1 to 12 Hz; can be adjusted in 1-Hz increments
              </p>

              <h2 className="font-semibold"> Programmes</h2>
              <p className="mb-4 font-light">
                19 preset programmes which can be individually adapted
              </p>

              <h2 className="font-semibold"> Controller</h2>
              <p className="mb-4 font-light">
                11“ colour touch screen and central knob
              </p>

              <h2 className="font-semibold"> Dimensions</h2>
              <p className="mb-4 font-light">
                405 x 207 x 424 mm (L/W/H), without trolley
              </p>

              <h2 className="font-semibold"> Weight</h2>
              <p className="mb-4 font-light">23 kg (without handpiece)</p>
            </div>
            <div>
              <h2 className="font-bold mb-4"> enShock Handpiece:</h2>

              <h2 className="font-semibold"> Ergonomic</h2>
              <p className="mb-4 font-light"> Plastic and aluminium housing</p>

              <h2 className="font-semibold"> Generator</h2>
              <p className="mb-4 font-light"> Piezoelectric elements</p>

              <h2 className="font-semibold"> Service life</h2>
              <p className="mb-4 font-light">
                {" "}
                Guaranteed for 3,000,000 shocks, 2 years
              </p>

              <h2 className="font-semibold"> Dimensions</h2>
              <p className="mb-4 font-light">
                {" "}
                14 cm long, 11 cm diameter (max.)
              </p>

              <h2 className="font-semibold"> Gel pads</h2>
              <p className="font-light">
                {" "}
                Diameter of 5, 10, 15, 20, 25, 30, 35 and 40 mm
              </p>
              <p className="mb-4 font-light"> Can be changed without tools</p>

              <h2 className="font-semibold"> Power consumption</h2>
              <p className="mb-4 font-light">
                {" "}
                220 – 230 V; 50/60 Hz, max. 300 VA
              </p>

              <h2 className="font-semibold"> Contents</h2>
              <p className="mb-4 font-light">
                {" "}
                enShock control unit, handpiece, set of 8 gel pads, power cable,
                1 bottle of conductive gel, instructions for use
              </p>

              <h2 className="font-semibold"> Transport</h2>
              <p className="mb-4 font-light">
                {" "}
                -10°C to 50°C, 20% to 85% humidity
              </p>

              <h2 className="font-semibold"> Storage</h2>
              <p className="mb-4 font-light">
                {" "}
                Without condensation; 700 hPa – 1060 hPa
              </p>
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
