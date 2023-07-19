import React from "react";
import { useTranslations } from "next-intl";

export default function EnPulsPro() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery1.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery2.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery3.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery4.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery5.jpeg",
  ];
  return (
    <PhysioLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-blue700 text-3xl font-bold">enPulsPro</h1>
          </div>
        </header>
        <div className="flex w-9/12 mb-8 flex-col sm:flex-row items-center justify-center">
          <img
            src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/en-puls-pro-machine.png"
            alt="PhySys"
            className="w-[150px]"
          />
          <div className="text-container my-8 pr-12">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card3.card2.p1")}
            </h1>

            <p className="my-auto text-left text-lg">
              {t("cards.card3.card2.p2")}
            </p>
          </div>
        </div>

        <div className="bg-lightgray w-full py-8">
          <div className="w-9/12 mx-auto">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card3.card2.p3")}
            </h1>
            <h2 className="py-1">{t("cards.card3.card2.p4")}</h2>
            <h2 className="py-1">{t("cards.card3.card2.p5")}</h2>
            <h2 className="py-1">{t("cards.card3.card2.p6")}</h2>
            <div className="flex py-4 flex-col sm:flex-row">
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/modern1.jpeg"
                alt="PhySys"
                className="rounded-lg w-[350px]"
              />
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/modern2.jpeg"
                alt="PhySys"
                className="rounded-lg w-[350px] sm:ml-16"
              />
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/modern3.jpeg"
                alt="PhySys"
                className="rounded-lg w-[350px] sm:ml-16"
              />
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card3.card2.p7")}
            </h1>

            <div className="flex flex-col sm:flex-row">
              <div className="text-justify">
                <p className="py-1">{t("cards.card3.card2.p8")}</p>
                <p className="py-1">{t("cards.card3.card2.p9")}</p>
                <p className="py-1">{t("cards.card3.card2.p10")}</p>
              </div>
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPuls/radial1.jpeg" // same photo as enPuls
                alt="PhySys"
                className="w-[350px] rounded-lg sm:ml-8"
              />
            </div>
          </div>
        </div>

        {/* below is the same as enPuls with first <p> changed */}
        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card1.card2.header6")}
            </h1>
            <p className="pb-2">{t("cards.card3.card1.list")}</p>

            <ul className="list-disc ml-6 mb-4">
              <li className="pb-1">{t("cards.card3.card1.li1")}</li>
              <li className="pb-1"> {t("cards.card3.card1.li2")}</li>
              <li className="pb-1"> {t("cards.card3.card1.li3")}</li>
              <li className="pb-1"> {t("cards.card3.card1.li4")}</li>
              <li className="pb-1"> {t("cards.card3.card1.li5")}</li>
              <li className="pb-1"> {t("cards.card3.card1.li6")} </li>
            </ul>
            <div className="flex flex-col sm:flex-row">
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPuls/appliance1.jpeg"
                alt="PhySys"
                className="w-80 rounded-lg"
              />
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPuls/appliance2.jpeg"
                alt="PhySys"
                className="w-80 rounded-lg sm:ml-4"
              />
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPuls/appliance3.jpeg"
                alt="PhySys"
                className="w-80 rounded-lg sm:ml-4"
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4 py-4">
              {t("cards.card3.card2.p11")}
            </h1>

            <div className="flex flex-col sm:flex-row">
              <div className="text-justify">
                <p className="py-1">{t("cards.card3.card2.p12")}</p>
                <p className="py-1">{t("cards.card3.card2.p13")}</p>
                <p className="py-1">{t("cards.card3.card2.p14")}</p>
                <p className="py-1">{t("cards.card3.card2.p15")}</p>
              </div>
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPuls/pulse1.jpeg" //same photo as enPuls
                alt="PhySys"
                className="w-[350px] rounded-lg ml-8"
              />
            </div>
            <p>{t("cards.card3.card2.p16")}</p>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card3.card2.p17")}
            </h1>
            <p>{t("cards.card3.card2.p18")}</p>
            <p>{t("cards.card3.card2.p19")}</p>
            <div className="flex my-4">
              <div>
                <h2 className="font-bold mb-2">enPuls 2.0</h2>
                <p className="py-0.5">60 mJ</p>
                <p className="py-0.5">90 mJ</p>
                <p className="py-0.5">120 mJ</p>
                <p className="py-0.5">185 mJ</p>
              </div>
              <div className="ml-8">
                <h2 className="font-bold mb-2">Compressed-air RSWT-System</h2>
                <p className="py-0.5">1 bar</p>
                <p className="py-0.5">2 bar</p>
                <p className="py-0.5">3 bar</p>
                <p className="py-0.5">5 bar</p>
              </div>
            </div>
            <p>{t("cards.card3.card2.p20")}</p>
            <p>{t("cards.card3.card2.p21")}</p>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto my-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card3.card2.p22")}
            </h1>
            <p>{t("cards.card3.card2.p23")}</p>
            <p>{t("cards.card3.card2.p24")}</p>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto my-8">
            <h1 className="text-4xl font-semibold mb-5">VAS-Scale</h1>
            <p>{t("cards.card3.card2.p25")}</p>
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/vas1.jpeg"
              alt="PhySys"
              className="w-[350px] rounded-lg my-4"
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
                  className="w-[150px] rounded-lg sm:m-2"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full bg-blue700">
          <div className="flex flex-col items-center py-24">
            <div className="videos flex flex-col sm:flex-row">
              <iframe
                src="https://www.youtube.com/embed/rpnrDzWU6yk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/Qvb4XzCUcwo"
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
                <h2 className="font-semibold text-lg pb-0.5">
                  {" "}
                  {t("cards.card3.card1.d1")}
                </h2>
                <p className="mb-4">{t("cards.card3.card1.d2")}</p>
                <h2 className="font-semibold text-lg pb-0.5">
                  {t("cards.card3.card1.d3")}
                </h2>
                <ul className="list-disc ml-6 mb-4">
                  <li>{t("cards.card3.card1.d4")}</li>
                  <li>{t("cards.card3.card1.d5")}</li>
                </ul>
                <h2 className="font-semibold text-lg pb-0.5">
                  {t("cards.card3.card1.d6")}
                </h2>
                <ul className="list-disc ml-6 mb-4">
                  <li>{t("cards.card3.card1.d7")}</li>
                  <li>{t("cards.card3.card1.d8")}</li>
                </ul>
                <h2 className="font-semibold text-lg pb-0.5">
                  {t("cards.card3.card1.d9")}
                </h2>
                <p className="mb-4">{t("cards.card3.card1.d10")}</p>
                <h2 className="font-semibold text-lg pb-0.5">
                  {t("cards.card3.card1.d11")}
                </h2>
                <p className="mb-4">{t("cards.card3.card1.d12")}</p>
                <h2 className="font-semibold text-lg pb-0.5">
                  {t("cards.card3.card1.d13")}
                </h2>
                <ul className="list-disc ml-6 mb-4">
                  <li> {t("cards.card3.card1.d14")}</li>
                  <li>{t("cards.card3.card1.d15")}</li>
                  <li>{t("cards.card3.card1.d16")}</li>
                </ul>
                <h2 className="font-semibold text-lg pb-0.5">
                  {t("cards.card3.card1.d17")}
                </h2>
                <ul className="list-disc ml-6 mb-4">
                  <li> {t("cards.card3.card1.d18")}</li>
                  <li> {t("cards.card3.card1.d19")}</li>
                  <li> {t("cards.card3.card1.d20")}</li>
                </ul>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold text-lg pb-0.5"> Dimensions</h2>
                <p className="mb-4"> 20 x 35 x 30 cm (L/W/H) </p>
                <h2 className="font-semibold text-lg pb-0.5">
                  {" "}
                  {t("cards.card3.card1.d21")}
                </h2>
                <p className="mb-4"> 3.8 kg (without handpiece) </p>
                <h2 className="font-semibold text-lg pb-0.5">
                  {t("cards.card3.card1.d22")}
                </h2>

                <ul className="list-disc ml-6 mb-4">
                  <li>{t("cards.card3.card1.d23")}</li>
                  <li> {t("cards.card3.card1.d24")}</li>
                  <li> {t("cards.card3.card1.d25")}</li>
                  <li> {t("cards.card3.card1.d26")}</li>
                  <li> {t("cards.card3.card1.d27")}</li>
                  <li>{t("cards.card3.card1.d28")}</li>
                  <li>{t("cards.card3.card1.d29")}</li>
                  <li> {t("cards.card3.card1.d30")}</li>
                  <li> {t("cards.card3.card1.d31")}</li>
                </ul>

                <h2 className="font-semibold text-lg pb-0.5">
                  {" "}
                  {t("cards.card3.card1.d32")}
                </h2>
                <p className="mb-4">
                  100 – 240 V / 50/60 Hz, max. 250 VA 220 V / 60 Hz{" "}
                </p>
                <div>
                  <h2 className="font-semibold text-lg pb-0.5"> Optional</h2>
                  <p> {t("cards.card3.card1.o1")}</p>
                  <p> {t("cards.card3.card1.o2")}</p>
                  <p> {t("cards.card3.card1.o3")}</p>
                  <p> {t("cards.card3.card1.o4")}</p>
                </div>
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
