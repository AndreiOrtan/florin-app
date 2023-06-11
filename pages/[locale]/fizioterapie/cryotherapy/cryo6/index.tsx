import React from "react";
import { useTranslations } from "next-intl";

export default function enPuls() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/fizioterapiePhotos/cryotherapy/cryo6/galery1.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo6/galery2.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo6/galery3.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo6/galery4.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo6/galery5.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo6/galery6.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo6/galery7.jpeg",
  ];
  return (
    <PhysioLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-blue700 text-3xl font-bold">Cryo6</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/fizioterapiePhotos/cryotherapy/cryo6/cryo6-machine.png"
            alt="PhySys"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              {t("cards.card6.card2.p1")}
            </h1>

            <div className="my-auto text-justify text-lg">
              <p className="py-1">{t("cards.card6.card2.p2")}</p>
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card6.card2.p3")}
            </h1>

            <p>{t("cards.card6.card2.p4")}</p>
            <p className="pt-4">{t("cards.card6.card2.p5")}</p>
            <ul className="list-disc ml-6 mb-4">
              <li className="pb-1">{t("cards.card6.card2.p6")}</li>
              <li className="pb-1"> {t("cards.card6.card2.p7")}</li>
              <li className="pb-1"> {t("cards.card6.card2.p8")}</li>
            </ul>

            <div className="flex flex-col sm:flex-row justify-between">
              <img
                src="/fizioterapiePhotos/cryotherapy/cryomini/man1.jpeg" // same photos as mini
                alt="PhySys"
                className="w-[370px] rounded-lg"
              />
              <img
                src="/fizioterapiePhotos/cryotherapy/cryomini/man2.jpeg"
                alt="PhySys"
                className="w-[370px] rounded-lg"
              />
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

        <div className="w-full py-10 ">
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
                  className="max-w-[150px] rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full bg-blue700">
          <div className="flex flex-col items-center py-24">
            <div className="videos flex flex-col sm:flex-row items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/UdsU6GMmVYg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/eWe77R3ty-U" //SAME VIDEOUS AS MINI
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
                <h2 className="font-semibold pb-0.5"> Power supply</h2>
                <p className="font-light"> 220-240 V / 50 Hz</p>
                <p className="font-light"> 240 V / 60 Hz</p>
                <p className="font-light"> 100-120 V / 50Hz/60 Hz</p>
              </div>

              <div className="ml-8">
                <h2 className="font-semibold"> Treatment tube length</h2>
                <p className="mb-4 font-light">1,80 m</p>
                <h2 className="font-semibold"> Housing dimensions (LxWxH)</h2>
                <p className="mb-4 font-light">68 cm x 39 cm x 64,5 cm</p>
                <h2 className="font-semibold"> Weight</h2>
                <p className="mb-4 font-light">75 kg</p>
                <h2 className="font-semibold"> Air flow</h2>
                <p className="mb-4 font-light">9 levels, max. 1000 l / min</p>
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
