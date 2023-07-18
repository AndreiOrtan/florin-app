import React from "react";
import { useTranslations } from "next-intl";

export default function ZLipo() {
  const t = useTranslations("physiotherapy");
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
            <h1 className="text-3xl font-bold">ZTone</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/ztone/ztone_machine.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              Z Tone – Thousands of muscle contractions through electromagnetic
              pulses
            </h1>

            <div className="my-auto text-justify text-lg font-normal">
              The High Energy Inductive Treatment with Z Tone is performed using
              electromagnetic pulses and is able to contract the muscles.
              Electromagnetic fields can penetrate cells, tissues, organs and
              bones without deformation or loss, activate the electrochemistry
              of tissues and improve the function of cells and cell membranes.
              The magnetic field consequently stimulates nerve cells, muscles
              and blood vessels.
            </div>
          </div>
        </div>
        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-24">
            <h1 className="text-5xl">
              Meet the next generation of Body Toning
            </h1>
            <div>
              <p>
                Z Tone enables the user to select one of 3 desired training
                levels for each region appropriately for the patient.
              </p>
              <p>
                Z Tone has two applicators of the same size. Both applicators
                can be individually controlled and operated. This feature allows
                the user to treat two different regions with different
                intensities at the same time. The device also offers the option
                of connecting the applicators and operating them at the same
                intensity.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-9/12 mx-auto py-24">
            <h1 className="text-5xl">
              Performance and Design taken right to the edge
            </h1>
            <div>
              <p>
                Z Tone has two applicators of the same size. Both applicators
                are used at the same time with identical application parameters
                or separately from each other. All relevant treatment parameters
                can be set, saved and adjusted with a few clicks. Z Tone allows
                treatment with two different intensities at the same time. For
                example, the left and right biceps can be treated with different
                intensities without any problems.
              </p>
              <p>The use of a single applicator is also possible.</p>
            </div>
            <img src="/aesthetics/ztone/news1.png" alt="" />
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h2 className="text-2xl font-semibold">Treatment advantages</h2>
            <div className="flex sm:flex-row flex-col py-8">
              <div>
                <h2 className="font-semibold text-lg">Increased efficiency</h2>
                <h2 className="font-normal text-base">Maximum flexibility</h2>
                <ul className="list-disc ml-6 mb-4 py-2">
                  <li className="mb-1"> Separate control of the applicators</li>
                  <li className="mb-1"> Two treatments at the same time </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-lg">
                  Ergonomic, stylish, high-performance
                </h2>
                <h2 className="font-normal text-base">
                  Designed for modern practice
                </h2>
                <ul className="list-disc ml-6 mb-4 py-2">
                  <li className="mb-1">
                    {" "}
                    Large display with intuitive software interface
                  </li>
                  <li className="mb-1">
                    {" "}
                    Individual protocols adapted to the muscle region{" "}
                  </li>
                  <li className="mb-1">
                    {" "}
                    Wrap-around handle for maximum mobility{" "}
                  </li>
                  <li className="mb-1">
                    {" "}
                    Practical applicator holder always close to the treatment
                    area{" "}
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-lg">Maintenance-friendly</h2>
                <h2 className="font-normal text-base">
                  Time for the essentials
                </h2>
                <ul className="list-disc ml-6 mb-4 py-2">
                  <li className="mb-1">
                    {" "}
                    Removable applicators make replacement easy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-16">
            <div>
              <h1 className="text-4xl font-semibold mb-1">Application range</h1>
            </div>

            <img
              src="/aesthetics/ztone/range1.jpeg"
              alt="scale"
              className="text-center"
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
                  className="max-w-[150px] rounded-lg"
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
                <div>
                  <h2 className="font-semibold pb-0.5">Channels</h2>
                  <p className="font-light">2</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Frequency</h2>
                  <p className="font-light">1 – 100 Hz</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Magnetic field</h2>
                  <p className="font-light">3.0 Tesla</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Treatment protocols</h2>
                  <p className="font-light">Regions</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Medical Device</h2>
                  <p className="font-light">Class IIa</p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold">Surface</h2>
                <p className="mb-4 font-light">LCD touch screen</p>
                <h2 className="font-semibold">Dimensions</h2>
                <p className="mb-4 font-light">H 118 cm x W 70 cm x L 57 cm</p>
                <h2 className="font-semibold">Weight</h2>
                <p className="mb-4 font-light">81 kg</p>
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
