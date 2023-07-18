import React from "react";
import { useTranslations } from "next-intl";

export default function ZLipo() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/aesthetics/conticure/galery1.png",
    "/aesthetics/conticure/galery2.png",
    "/aesthetics/conticure/galery3.jpeg",
    "/aesthetics/conticure/galery4.jpeg",
  ];
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">ContiCure</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/conticure/conticure_machine.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              Muscle training through magnetic field therapy
            </h1>

            <div className="my-auto text-justify text-lg font-normal">
              Using magnetic field therapy, a current is induced in the cell
              which causes a contraction of the pelvic floor muscles. This
              strengthening of the muscles leads to improvement of incontinence
              problems. ContiCure offers the appropriate treatment parameters
              for each patient. Select the treatment goal from one of the 4
              predefined programmes. This enables treatment of stress, mixed,
              and urge incontinence, and general pelvic floor training can be
              selected. ContiCure has a large applicator which is inserted in
              the treatment chair for the therapy. The intensity can be
              individually adjusted during therapy depending on the patient’s
              sensation.
            </div>
          </div>
        </div>

        <div className="w-full bg-orange">
          <div className="flex flex-col items-center py-24">
            <h1 className="text-5xl text-white">The way it works</h1>
            <div className="videos flex flex-col sm:flex-row items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/ACD4SVZDsXI"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-24">
            <h1 className="text-5xl">
              Meet the next generation of Body Toning
            </h1>
            <h2 className="text-3xl my-4">Therapy with ContiCure</h2>
            <div className="mb-2">
              <h2 className="font-medium">Application time</h2>
              <p className="font-light">
                The application lasts between 20 to a maximum of 30 minutes,
                depending on the programme. However, the user also has the
                option to create individual programmes for the patient in order
                to address the patient’s needs in a targeted manner.
              </p>
            </div>
            <div className="mb-2">
              <h2 className="font-medium">Therapy</h2>
              <p className="font-light">
                The patient sits comfortably on the chair while the pelvic floor
                muscles are optimally stimulated during the entire treatment
                time.
              </p>
            </div>
            <div className="mb-2">
              <h2 className="font-medium">Treatment recommendation</h2>
              <p className="font-light">
                Depending on the patient, between 8-10 treatments are
                recommended. Some patients report an improvement in their
                incontinence problems after just the first few treatments.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl mb-4">
              The chair – The central focus in your practice
            </h1>
            <div className="flex flex-col sm:flex-row">
              <div>
                <div>
                  <h2 className="font-semibold">Interchangeable inlays</h2>
                  <p className="font-light">
                    The sitting position can be adjusted using the three
                    different inlays, depending on the patient’s size.
                  </p>
                  <h2 className="font-semibold">Hygiene</h2>
                  <p className="font-light">
                    The biocompatible cover can be disinfected with conventional
                    cleaning agents and ensures a hygienic treatment.
                  </p>
                  <h2 className="font-semibold">High-quality design</h2>
                  <p className="font-light">
                    The chair is entirely manufactured in Germany and covered by
                    hand with a high-quality fabric.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="font-semibold">
                    Simple design for intuitive operation
                  </h2>
                  <p className="font-light">
                    Control knob to adjust intensities
                  </p>
                  <h2 className="font-semibold">Predefined protocols</h2>
                  <p className="font-light">
                    Predefined protocols for the professional treatment of
                    stress, urge, and mixed incontinence as well as general
                    pelvic floor training are available to the user.
                  </p>
                  <h2 className="font-semibold">Individual protocols</h2>
                  <p className="font-light">
                    It is also possible to store individual protocols with
                    parameters that were explicitly configured for the patient.
                  </p>
                </div>
              </div>
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
                  <h2 className="font-semibold pb-0.5">Mains voltage</h2>
                  <p className="font-light">100-240 V / 50-60 Hz</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Frequency</h2>
                  <p className="font-light">1-150 Hz</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Channel</h2>
                  <p className="font-light">1 Channel</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Treatment protocols</h2>
                  <p className="font-light">4 different protocols</p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold">Medical Device</h2>

                <h2 className="font-semibold">
                  ContiCure | Housing dimensions (cm)
                </h2>
                <p className="mb-4 font-light">H 118 cm / W 70 cm / L 57 cm</p>
                <h2 className="font-semibold">Weight</h2>
                <p className="mb-4 font-light">60 kg</p>
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
