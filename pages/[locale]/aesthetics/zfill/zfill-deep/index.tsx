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
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Z Fill deep ² und Z Fill deep⁺</h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
        <img
          src="/aesthetics/zfill/zfill-refresh/zfill_deep.png"
          alt="Cryo7"
          className="w-[270px]"
        />
        <div className="text-container my-8 sm:pr-12">
          <h1 className="text-4xl font-semibold mb-4 text-center">
            Gel implant for new fullness and more volume
          </h1>

          <div className="my-auto text-justify text-lg font-normal">
            Z Fill deep² and Z Fill deep⁺ are suitable for the correction of
            deep nasolabial folds. Thanks to the outstanding viscoelastic
            properties, the gel implant can be injected easily and very
            precisely with a thin needle.
          </div>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h2 className="text-2xl font-semibold">Properties</h2>
          <div className="flex sm:flex-row flex-col py-8">
            <ul className="list-disc ml-6 mb-4 py-2">
              <li className="mb-1"> Sterile</li>
              <li className="mb-1"> Isotonic and biodegradable</li>
              <li className="mb-1"> Viscoelastic</li>
              <li className="mb-1"> Clear and transparent</li>
              <li className="mb-1"> Homogenised</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h2 className="text-2xl font-semibold mb-4">Z Fill deep ²</h2>
          <div className="flex">
            <div>
              <div>
                <h2 className="font-semibold pb-0.5">
                  Highly crosslinked hyaluronic acid
                </h2>
              </div>
              <div>
                <h2 className="font-semibold pb-0.5">Concentration of HA</h2>
                <p className="font-light">23 mg/ml</p>
              </div>
              <div>
                <h2 className="font-semibold pb-0.5">Stabiliser</h2>
                <p className="font-light">BDDE</p>
              </div>
              <div>
                <h2 className="font-semibold pb-0.5">pH</h2>
                <p className="font-light">6.8 – 7.4</p>
              </div>
              <div>
                <h2 className="font-semibold pb-0.5">Sterility</h2>
                <p className="font-light">Sterile</p>
              </div>
            </div>
            <div className="ml-8">
              <h2 className="font-semibold">Package</h2>
              <p className="mb-4 font-light">1x 1 ml</p>
              <h2 className="font-semibold">Degree of cross-linking</h2>
              <p className="mb-4 font-light">++</p>
              <h2 className="font-semibold">Needle</h2>
              <p className="mb-4 font-light">2x 27 G 1⁄2”</p>
              <h2 className="font-semibold">Duration of effect</h2>
              <p className="mb-4 font-light">At least 9 months</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Z Fill deep⁺</h2>
          <div>
            <h2 className="font-semibold pb-0.5">
              Additionally lidocaine hydrochloride
            </h2>
            <p className="font-light">0.3%</p>
          </div>
          <div>
            <h2 className="font-semibold pb-0.5">pH</h2>
            <p className="font-light">6.7 – 7.3</p>
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
