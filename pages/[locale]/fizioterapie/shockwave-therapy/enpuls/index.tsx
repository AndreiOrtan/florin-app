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
            <h1 className="text-blue700 text-3xl font-bold">
              enPuls <span className="text-xs"> Version 2.0</span>
            </h1>
          </div>
        </header>
        <div className="w-full">
          <div className="flex w-9/12 mb-8 flex-col sm:flex-row items-center justify-center mx-auto">
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/en-puls-machine.png"
              alt="PhySys"
              className="w-[350px]"
            />
            <div className="text-container my-8 pr-12">
              <h1 className="text-4xl font-semibold mb-4">
                {t("cards.card3.card1.p1")}
              </h1>

              <p className="my-auto text-left text-lg">
                {t("cards.card3.card1.p2")}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-lightgray w-full py-8">
          <div className="w-9/12 mx-auto">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card3.card1.p3")}
            </h1>
            <h2>{t("cards.card3.card1.p4")}</h2>
            <h2>{t("cards.card3.card1.p5")}</h2>
            <div className="flex py-4 flex-col sm:flex-row">
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPuls/modern1.jpeg"
                alt="PhySys"
                className="rounded-lg w-[350px]"
              />
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPuls/modern2.jpeg"
                alt="PhySys"
                className="rounded-lg w-[350px] sm:ml-16 "
              />
            </div>
          </div>
        </div>

        <div className=" w-full">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card3.card1.p6")}
            </h1>

            <div className="flex flex-col sm:flex-row">
              <div className="text-justify">
                <p className="py-1">{t("cards.card3.card1.p7")}</p>
                <p className="py-1">{t("cards.card3.card1.p8")}</p>
                <p className="py-1">{t("cards.card3.card1.p9")}</p>
              </div>
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPuls/radial1.jpeg"
                alt="PhySys"
                className="w-[350px] rounded-lg sm:ml-8"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card1.card2.header6")}
            </h1>
            <p className="pb-2">
              en<span className="font-extrabold">Puls</span>{" "}
              {t("cards.card3.card1.list")}
            </p>

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
              {t("cards.card3.card1.p10")}
            </h1>

            <div className="flex flex-col sm:flex-row">
              <div className="text-justify">
                <p className="py-1">{t("cards.card3.card1.p11")}</p>
                <p className="py-1">{t("cards.card3.card1.p12")}</p>
                <p className="py-1">{t("cards.card3.card1.p13")}</p>
                <p className="py-1">{t("cards.card3.card1.p14")}</p>
              </div>
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPuls/pulse1.jpeg"
                alt="PhySys"
                className="w-[350px] rounded-lg ml-8"
              />
            </div>
            <p>{t("cards.card3.card1.p15")}</p>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card3.card1.p16")}
            </h1>
            <p>{t("cards.card3.card1.p17")}</p>
            <p>{t("cards.card3.card1.p18")}</p>
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
            <p>{t("cards.card3.card1.p19")}</p>
            <p>{t("cards.card3.card1.p20")}</p>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto my-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card3.card1.p21")}
            </h1>
            <p>{t("cards.card3.card1.p22")}</p>
            <p>{t("cards.card3.card1.p23")}</p>
          </div>
        </div>
        <div className="w-full">
          <div className="w-9/12 mx-auto mb-8">
            <h1 className="text-4xl font-semibold mb-4">Mobility</h1>
            <p className="mb-2">{t("cards.card3.card1.p24")}</p>
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/mobility1.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-9/12 mx-auto mb-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card3.card1.p25")}
            </h1>
            <h2 className="font-bold mb-2">{t("cards.card3.card1.p26")}</h2>
            <div className="flex flex-col sm:flex-row">
              <img
                src="/fizioterapiePhotos/shockwave-therapy/enPuls/practical1.jpeg"
                alt="PhySys"
                className="w-80 rounded-lg"
              />
              <ul className="list-disc ml-6 mb-4">
                <li>{t("cards.card3.card1.p27")}</li>
                <li>{t("cards.card3.card1.p28")}</li>
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
                <p className="mb-4"> 32,2 cm x 23,5 cm x 13 cm (L/W/H) </p>
                <h2 className="font-semibold text-lg pb-0.5">
                  {" "}
                  {t("cards.card3.card1.d21")}
                </h2>
                <p className="mb-4"> 2.7 kg (without handpiece) </p>
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
                <p className="mb-4">100 / 240 VAC / 50/60 Hz, 5/2,5 A </p>
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
