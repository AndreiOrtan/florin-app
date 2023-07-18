import React from "react";
import { useTranslations } from "next-intl";

export default function enPuls() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery1.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery2.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery3.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery4.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery5.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery6.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery7.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery8.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery9.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery10.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery11.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery12.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPuls/galery13.jpeg",
  ];
  return (
    <PhysioLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-blue700 text-3xl font-bold">emFieldPro</h1>
          </div>
        </header>
        <div className="w-full">
          <div className="flex w-9/12 mb-8 mx-auto flex-col sm:flex-row justify-center items-center">
            <img
              src="/fizioterapiePhotos/high-energy-inductive-therapy/emfieldpro/emfieldpro-machine.png"
              alt="PhySys"
              className="w-[270px]"
            />
            <div className="text-container my-8 sm:pr-12">
              <h1 className="text-4xl font-semibold mb-4">
                {t("cards.card4.card1.p1")}
              </h1>

              <div className="my-auto text-justify text-lg">
                <p className="py-1">{t("cards.card4.card1.p2")}</p>
                <p className="py-1">{t("cards.card4.card1.p3")}</p>
                <p className="py-1">{t("cards.card4.card1.p4")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card4.card1.p5")}
            </h1>

            <div className="flex flex-col sm:flex-row">
              <div className="text-justify">
                <p className="py-1">{t("cards.card4.card1.p6")}</p>
                <p className="py-1">{t("cards.card4.card1.p7")}</p>
                <p className="py-1">{t("cards.card4.card1.p8")}</p>
                <p className="py-1">{t("cards.card4.card1.p9")}</p>
              </div>
              <img
                src="/fizioterapiePhotos/high-energy-inductive-therapy/emfieldpro/inductive1.jpeg"
                alt="PhySys"
                className="w-[350px] rounded-lg sm:ml-8"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4 py-4">
              {t("cards.card4.card1.p10")}
            </h1>
            <h2 className="font-bold mb-2">{t("cards.card4.card1.p11")}</h2>
            <div className="text-justify">
              <p className="py-1">{t("cards.card4.card1.p12")}</p>
              <p className="py-1">{t("cards.card4.card1.p13")}</p>
            </div>

            <div className="flex flex-col sm:flex-row py-6">
              <div className="text-justify">
                <div>
                  <h2 className="font-bold mb-1"></h2>
                  <p className="py-1">{t("cards.card4.card1.p14")}</p>
                </div>
              </div>
              <img
                src="/fizioterapiePhotos/high-energy-inductive-therapy/emfieldpro/treatment1.jpeg"
                alt="PhySys"
                className="w-[300px] rounded-lg sm:ml-8"
              />
            </div>
            <div className="flex flex-col sm:flex-row py-6">
              <div className="text-justify">
                <div>
                  <h2 className="font-bold mb-1">
                    {" "}
                    {t("cards.card4.card1.p15")}
                  </h2>
                  <p className="py-1">{t("cards.card4.card1.p16")}</p>
                </div>
              </div>
              <img
                src="/fizioterapiePhotos/high-energy-inductive-therapy/emfieldpro/treatment2.jpeg"
                alt="PhySys"
                className="w-[300px] rounded-lg sm:ml-8"
              />
            </div>

            <h2 className="font-bold mb-1"> {t("cards.card4.card1.p17")}</h2>
            <p>{t("cards.card4.card1.p18")}</p>

            <p className="font-extrabold pt-10">{t("cards.card4.card1.p19")}</p>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto">
            <h1 className="text-4xl font-semibold my-4">
              {t("cards.card4.card1.p20")}
            </h1>
            <img
              src="/fizioterapiePhotos/high-energy-inductive-therapy/emfieldpro/indication1.png"
              alt="Recomandations"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto my-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card4.card1.p21")}
            </h1>
            <div className="py-8">
              <h2 className="font-bold mb-1">{t("cards.card4.card1.p22")}</h2>
              <p className="py-1 font-light">{t("cards.card4.card1.p23")}</p>

              <p className="italic pt-4">{t("cards.card4.card1.p24")}</p>
            </div>

            <div className="py-8">
              <h2 className="font-bold mb-1">{t("cards.card4.card1.p25")}</h2>
              <p className="py-1 font-light">{t("cards.card4.card1.p26")}</p>

              <p className="italic pt-4">{t("cards.card4.card1.p27")}</p>
            </div>

            <div className="py-8">
              <h2 className="font-bold mb-1">{t("cards.card4.card1.p28")}</h2>
              <p className="py-1 font-light">{t("cards.card4.card1.p29")}</p>

              <p className="italic pt-4">{t("cards.card4.card1.p30")}</p>
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto my-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card4.card1.p31")}
            </h1>
            <div className="flex flex-col sm:flex-row justify-between mx-16">
              <img
                src="/fizioterapiePhotos/high-energy-inductive-therapy/emfieldpro/increase1.png"
                alt="Recomandations"
                className="w-[450px]"
              />
              <img
                src="/fizioterapiePhotos/high-energy-inductive-therapy/emfieldpro/increase2.png"
                alt="Recomandations"
                className="w-[450px]"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-blue700">
          <div className="flex flex-col items-center py-24">
            <div className="videos flex-col sm:flex-row flex">
              <iframe
                src="https://www.youtube.com/embed/MTBRI8jvyVk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/QD_hLRd7kUQ"
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
                <h2 className="font-semibold pb-0.5"> Magnetic power</h2>
                <p className="font-light">2,5 Tesla (medium applicator)</p>
                <p className="mb-4 font-light">3 Tesla (large applicator)</p>

                <h2 className="font-semibold text-lg pb-0.5">Channels</h2>
                <p className="mb-4 font-light">2</p>

                <h2 className="font-semibold  pb-0.5">Frequency</h2>
                <p className="font-light">1-150Hz</p>

                <h2 className="font-semibold text-lg pb-0.5">
                  Treatment Protocols
                </h2>
                <p className="font-light">Programms: 20</p>
                <p className="font-light">Favourites: 20</p>
                <p className="mb-4 font-light">Expert mode: 20</p>
              </div>

              <div className="ml-8">
                <h2 className="font-semibold"> Treatment time</h2>
                <p className="mb-4 font-light">1-60 minutes</p>
                <h2 className="font-semibold"> Interface</h2>
                <p className="mb-4 font-light">
                  8” LCD touch screen and central button
                </p>
                <h2 className="font-semibold"> Dimensions</h2>
                <p className="mb-4 font-light">
                  542 (L) × 501 (W) × 993 (H) mm
                </p>
                <h2 className="font-semibold"> Weight</h2>
                <p className="mb-4 font-light">Approx. 60 kg</p>
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
