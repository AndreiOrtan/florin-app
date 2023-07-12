import React from "react";
import { useTranslations } from "next-intl";

export default function ZLipo() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/aesthetics/zfield-dual/galery1.jpeg",
    "/aesthetics/zfield-dual/galery2.jpeg",
    "/aesthetics/zfield-dual/galery3.jpeg",
    "/aesthetics/zfield-dual/galery4.jpeg",
    "/aesthetics/zfield-dual/galery5.jpeg",
    "/aesthetics/zfield-dual/galery6.jpeg",
    "/aesthetics/zfield-dual/galery7.jpeg",
  ];
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">ZField Dual</h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
        <img
          src="/aesthetics/zfield-dual/zfield-dual_machine.png"
          alt="Cryo7"
          className="w-[270px]"
        />
        <div className="text-container my-8 sm:pr-12">
          <h1 className="text-4xl font-semibold mb-4 text-center">
            Z Field Dual – improved success for non-invasive body shaping
          </h1>

          <div className="my-auto text-justify text-lg font-normal">
            Z Field Dual, the innovative product for targeted muscle development
            from Zimmer AestheticDivision. The High-Energy Inductive Treatment
            with Z Field Dual is performed using electromagnetic pulses and is
            able to contract the muscles. In combination with other treatments,
            such as after fat reduction applications through cold, the
            High-Energy Inductive Treatment is an ideally suitable application
            for improving and highlighting the result.
          </div>
        </div>
      </div>
      <div className="w-full bg-orange">
        <div className="flex flex-col items-center py-24">
          <h1 className="text-5xl text-white">The way it works</h1>
          <div className="videos flex flex-col sm:flex-row items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/QnIewZql_Qw"
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
          <div>
            <h1 className="text-4xl font-semibold mb-1">Application range</h1>
            <h1 className="text-xl font-normal mb-4">Safe, simple and fast</h1>

            <p className="font-light">
              The treatment is performed with the patient lying down and is
              extremely comfortable for him or her. A session generally lasts
              between 20 and 30 minutes. As a result of the non-invasive and
              virtually painless treatment, the patient can resume his or her
              normal daily activities immediately after the treatment.
            </p>
          </div>
          <div>
            <h2 className="font-normal text-xl">
              The benefits of Z Field Dual
            </h2>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-1"> Safe application</li>
              <li className="mb-1"> No downtime</li>
              <li className="mb-1"> Virtually painless</li>
              <li className="mb-1"> Short treatment times</li>
              <li className="mb-1"> Simple operation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-normal text-xl">The treatment region</h2>
            <ul className="list-disc ml-6 mb-4">
              <li className="mb-1"> Abdomen</li>
              <li className="mb-1"> Buttocks</li>
              <li className="mb-1"> Upper legs</li>
            </ul>
          </div>
          <img
            src="/aesthetics/zfield-dual/range1.png"
            alt="scale"
            className="text-center"
          />
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div>
            <h1 className="text-4xl font-semibold mb-4">Highlights</h1>
            <h2 className="font-normal">
              Z Field Dual, the perfect combination for satisfied patients.
            </h2>
            <p className="font-light">
              Z Field Dual has two applicators of the same size. Both
              applicators are used at the same time with identical application
              parameters in order to stimulate opposing sections of muscle
              synchronously, for example. The use of a single applicator is also
              possible.
            </p>
            <h2 className="font-normal">
              The combined benefits of Z Field Dual: Muscle development and
              support in fat reduction
            </h2>
            <p className="font-light mt-4">
              Z Field Dual has pre-set programs which allow the user to perform
              the various treatments quickly and reliably. In addition, the
              modern and simple menu navigation of the software enables the user
              to create individual protocols for the patient and treatment. All
              of the relevant treatment parameters can be set, saved and
              adjusted with just a few clicks.
            </p>
          </div>
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

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h2 className="text-2xl font-semibold mb-4">{t("technicalData")}</h2>
          <div className="flex">
            <div>
              <div>
                <h2 className="font-semibold pb-0.5">Channels</h2>
                <p className="font-light">2</p>
              </div>
              <div>
                <h2 className="font-semibold pb-0.5">Frequency</h2>
                <p className="font-light">1 – 150 Hz</p>
              </div>
              <div>
                <h2 className="font-semibold pb-0.5">Treatment protocols</h2>
                <p className="font-light">programs, regions, manual mode</p>
              </div>
            </div>
            <div className="ml-8">
              <h2 className="font-semibold">Surface</h2>
              <p className="mb-4 font-light">
                LCD touch screen (8 inches) and a central knob
              </p>
              <h2 className="font-semibold">Dimensions</h2>
              <p className="mb-4 font-light">
                542 mm (L) × 501 mm (W) × 993 (H) mm
              </p>
              <h2 className="font-semibold">Weight</h2>
              <p className="mb-4 font-light">approx. 60 kg</p>
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
