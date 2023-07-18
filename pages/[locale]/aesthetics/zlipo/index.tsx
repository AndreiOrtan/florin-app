import React from "react";
import { useTranslations } from "next-intl";

export default function ZLipo() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/aesthetics/zlipo/galery1.jpeg",
    "/aesthetics/zlipo/galery2.jpeg",
    "/aesthetics/zlipo/galery3.jpeg",
    "/aesthetics/zlipo/galery4.jpeg",
    "/aesthetics/zlipo/galery5.jpeg",
    "/aesthetics/zlipo/galery6.jpeg",
    "/aesthetics/zlipo/galery7.jpeg",
    "/aesthetics/zlipo/galery8.jpeg",
    "/aesthetics/zlipo/galery9.jpeg",
    "/aesthetics/zlipo/galery10.jpeg",
    "/aesthetics/zlipo/galery11.jpeg",
    "/aesthetics/zlipo/galery12.jpeg",
  ];
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">ZLipo</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/zlipo/zlipo_machine.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              ZLipo – chilling your way to your dream figure
            </h1>

            <div className="my-auto text-justify text-lg font-normal">
              The highly innovative Cryolipolysis™ – ZLipo system makes it
              possible to target fat depots and reduce them permanently and
              non-invasively. This method cools fat deposits over a longer
              period of time to a controlled and safe temperature range. ZLipo
              convinces with its simple, safe and user-friendly handling.
            </div>
          </div>
        </div>
        <div className="w-full bg-orange">
          <div className="flex flex-col items-center py-24">
            <h1 className="text-5xl text-white">The way it works</h1>
            <div className="videos flex flex-col sm:flex-row items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/UFFgKlObqb8"
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
              <h1 className="text-4xl font-semibold mb-4">Application range</h1>

              <p className="font-light">
                For years, Cryolipolysis™ has been successfully used to reduce
                fat deposits on thighs, hips, belly, buttocks, love handles, and
                men‘s chests. The targeted removal of energy by means of a cold
                treatment causes the apoptosis of the fat cells. This ultimately
                leads to their destruction. The complete breakdown and removal
                of fat cells the natural way through the lymphatic system takes
                about 10–12 weeks. Since the surrounding tissue does not respond
                to the cold treatment in the same way as fatty tissue, the
                treatment is considered safe, gentle and non-invasive.
              </p>
            </div>
            <img
              src="/aesthetics/zlipo/range1.jpeg"
              alt="scale"
              className="text-center"
            />
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl ml-16">Visible achievements</h1>
            <div className="flex flex-col text-center items-center my-4">
              <div className="max-w-[300px] py-2 flex flex-col">
                <div>
                  <img src="/aesthetics/zlipo/progress1.jpeg" alt="" />
                </div>
                <p>before and after 8 weeks of treatment</p>
              </div>
              <div className="max-w-[300px] py-2 flex flex-col">
                <div>
                  <img src="/aesthetics/zlipo/progress3.jpeg" alt="" />
                </div>
                <p>before and after 8 weeks of treatment</p>
              </div>
              <div className="max-w-[300px] py-2 flex flex-col">
                <div>
                  <img src="/aesthetics/zlipo/progress5.jpeg" alt="" />
                </div>
                <p>before and after 8 weeks of treatment</p>
              </div>
              <div className="max-w-[300px] py-2 flex flex-col">
                <div>
                  <img src="/aesthetics/zlipo/progress7.jpeg" alt="" />
                </div>
                <p>before and after 8 weeks of treatment</p>
              </div>
              <div className="max-w-[300px] py-2 flex flex-col">
                <div>
                  <img src="/aesthetics/zlipo/progress9.jpeg" alt="" />
                </div>
                <p>before and after 8 weeks of treatment</p>
              </div>
              <div className="max-w-[300px] py-2 flex flex-col">
                <div>
                  <img src="/aesthetics/zlipo/progress11.jpeg" alt="" />
                </div>
                <p>left: 2 treatments; right: no treatments</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div>
              <h1 className="text-4xl font-semibold mb-4">Highlights</h1>

              <p className="font-light">
                The applicator for the ZLipo system comes in three sizes to
                apply pain-less suction to the desired treatment area. The
                ability to use pulsating suction increases the positive effect
                on lymphatic drainage and metabolism. The intensity can be set
                to one of ten different levels that can even be adjusted during
                treatment.
              </p>
              <p className="font-light mt-4">
                The large 10.2“ touch-screen colour display allows users to
                adjust the application time, suction level and suction mode
                (continuous or pulsed) safely and intuitively. The selected
                parameters are clearly displayed during treatment.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div className="flex flex-col items-center py-24">
              <h1 className="text-5xl">
                ZLipo & ZWavePro – the cool combination
              </h1>
              <p className="font-light my-2">
                By combining ZLipo and ZWave Pro (Cryolipolysis™ and shockwave)
                we offer the perfect combination treatment for significantly
                better fat reduction. Studies and reports have shown that
                intensive, pain-free shockwave treatment after Cryolipolysis™
                not only ensures better fat loss, but also stimulates lymphatic
                drainage and tightens the skin. The world’s leading operators
                have been using this concept for a long time.
              </p>
              <div className="videos flex flex-col sm:flex-row items-center justify-center">
                <iframe
                  src="https://www.youtube.com/embed/nOKoVpRg90c"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
                ></iframe>
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
                  <h2 className="font-semibold pb-0.5">Technology</h2>
                  <p className="font-light">
                    cooling unit with cooling pad technology
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Programmes</h2>
                  <p className="font-light">
                    freely adjustable programmes or standard programmes
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Controller</h2>
                  <p className="font-light">
                    10.2“ touch-screen colour display
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Applicators</h2>
                  <p className="font-light">
                    applicators available in size S, M and L and with 360°
                    cooling in sizes mini, S and M
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Suction</h2>
                  <p className="font-light">
                    up to about 250 mmHg, 10 suction levels
                  </p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold">Updates</h2>
                <p className="mb-4 font-light">
                  USB port for service and updates
                </p>
                <h2 className="font-semibold">Voltage</h2>
                <p className="mb-4 font-light">220 – 240 V, 50 Hz</p>
                <h2 className="font-semibold">
                  Meets the requirements of the Low Voltage Directive
                </h2>
                <p className="mb-4 font-light">2006/95/EG</p>
                <h2 className="font-semibold"> Protection class</h2>
                <p className="mb-4 font-light">I</p>
                <h2 className="font-semibold">Dimensions</h2>
                <p className="mb-4 font-light">
                  weight W 66,5 cm / D 62,9 cm / H 1 m, ca. 84 kg (with
                  handpieces)
                </p>
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
