import React from "react";
import { useTranslations } from "next-intl";

export default function enPuls() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/aesthetics/zcryo/cryo6/galery1.jpeg",
    "/aesthetics/zcryo/cryo6/galery2.jpeg",
    "/aesthetics/zcryo/cryo6/galery3.jpeg",
    "/aesthetics/zcryo/cryo6/galery4.jpeg",
    "/aesthetics/zcryo/cryo6/galery5.jpeg",
    "/aesthetics/zcryo/cryo6/galery6.jpeg",
    "/aesthetics/zcryo/cryo6/galery7.jpeg",
  ];
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Cryo6</h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
        <img
          src="/aesthetics/zcryo/cryo6/cryo6_machine.png"
          alt="Cryo7"
          className="w-[270px]"
        />
        <div className="text-container my-8 sm:pr-12">
          <h1 className="text-4xl font-semibold mb-4 text-center">
            Cryo 6, the cold air device from the world leader
          </h1>

          <div className="my-auto text-justify text-lg font-normal">
            Cryo 6 is intended to minimize pain and thermal injury during laser
            and dermatological treatments and for temporary topical anesthetic
            relief during injections. Unlike other cooling methods, such as
            contact cooling, cryogen spray or ice packs, the Cryo 6 can cool the
            epidermis before, during and after the laser energy has been
            applied, without interfering with the laser beam. Studies also have
            shown that chilling with the Cryo 6 cold air device reduces the
            patient’s pain sensitivity. This means much better tolerance of the
            treatment.
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div>
            <h1 className="text-4xl font-semibold mb-4">
              User Defined Programs
            </h1>

            <p className="font-light">
              3 supplementary storage possibilities are available for user
              defined programs. Storage possibility is available for the user’s
              favorite program. This program appears when the Cryo 6 is turned
              on and at the conclusion of each treatment.
            </p>
            <h3 className="font-semibold">
              The skin cooling system designed for superficial laser skin
              procedures.
            </h3>
            <p className="font-light">
              The Cryo 6 cold air device is intended to minimize pain and
              thermal injury during laser and dermatological treatments and for
              temporary topical anesthetic relief before injections.
            </p>
            <p className="font-light">
              Unlike other cooling methods, such as contact cooling, cryogen
              spray or ice packs, the Cryo 6 can cool the epidermis before,
              during and after the laser energy has been applied, without
              interfering with the laser beam.
            </p>
            <p className="font-light">
              Studies also have shown that chilling with the Cryo 6 cold air
              device reduces the patient’s pain sensitivity. This means much
              better tolerance of the treatment
            </p>
          </div>
          <img
            src="/aesthetics/zcryo/cryo6/scale1.jpeg"
            alt="scale"
            className="text-center"
          />
        </div>
      </div>

      <div className="w-full py-10 bg-lightgray">
        <div className="w-9/12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">{t("pictureGallery")}</h2>
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

      <div className="w-full bg-orange">
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
          <h2 className="text-2xl font-semibold mb-4">{t("technicalData")}</h2>
          <div className="flex">
            <div>
              <div>
                <h2 className="font-semibold pb-0.5"> Power supply</h2>
                <p className="font-light"> 230 V / 50 Hz</p>
                <p className="font-light"> 230 V / 60 Hz</p>
                <p className="font-light"> 115 V / 60 Hz</p>
              </div>
              <div>
                <h2 className="font-semibold pb-0.5">Power input max.</h2>
                <p className="font-light"> 1 KW</p>
              </div>
              <div>
                <h2 className="font-semibold pb-0.5">Stand-by function</h2>
                <p className="font-light">260 W / h</p>
              </div>
              <div>
                <h2 className="font-semibold pb-0.5">Protection according</h2>
                <p className="font-light">EN 60601-1 I, Type B</p>
                <p className="font-light">MDD / MPG Class IIa</p>
              </div>
            </div>
            <div className="ml-8">
              <h2 className="font-semibold"> Treatment tube length</h2>
              <p className="mb-4 font-light">1,80 m</p>
              <h2 className="font-semibold"> Housing dimensions</h2>
              <p className="mb-4 font-light">H 64,5 cm / W 39 cm / L 68 cm</p>
              <h2 className="font-semibold"> Weight</h2>
              <p className="mb-4 font-light">60 kg</p>
              <h2 className="font-semibold"> Fan levels</h2>
              <p className="mb-4 font-light">9 levels, max. 1000 l / min</p>
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