import React from "react";
import { useTranslations } from "next-intl";

export default function ZLipo() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/aesthetics/gentlepro/galery1.png",
    "/aesthetics/gentlepro/galery2.jpeg",
    "/aesthetics/gentlepro/galery3.jpeg",
    "/aesthetics/gentlepro/galery4.jpeg",
    "/aesthetics/gentlepro/galery5.jpeg",
  ];
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">GentlePro</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/gentlepro/gentlepro_machine.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              GentlePro – performance enhancement
            </h1>

            <div className="my-auto text-justify text-lg font-normal">
              Various clinical studies on erectile dysfunction demonstrated a
              significant improvement in perfusion and the formation of new
              vessels which is crucial for a high level of patient acceptance
              and a successful application.
            </div>
          </div>
        </div>
        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-24">
            <h1 className="text-3xl">Rapid results</h1>
            <div>
              <p className="my-2 font-light">
                In general, 5 to 8 treatments are needed to ensure a successful
                application. A positive change and a longer or stronger erection
                is often reported after just the first application.
              </p>
              <p className="font-light">
                Shockwave treatment for erectile dysfunction is successful as a
                stand-alone application and can also be used in combination with
                other forms of treatment. Shockwave treatment can therefore be
                successfully combined with PRP applications, vacuum pumps or
                also PDE-5 inhibitors (vasodilators), among others. The
                application is also virtually painless and has no known adverse
                effects.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-orange">
          <div className="flex flex-col items-center py-24">
            <h1 className="text-5xl text-white">The way it works</h1>
            <div className="videos flex flex-col sm:flex-row items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/qCbuz4EuICU"
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
          <div className="w-9/12 mx-auto py-24">
            <h1 className="text-5xl">
              A successful form of application for erectile dysfunction
            </h1>
            <div>
              <p className="my-2 font-normal">
                Since the male penis is not a muscle, good perfusion of the
                corpus cavernosum is extremely important and significantly
                contributes to the male erection.
              </p>
              <p className="my-2 font-normal">
                With shockwave treatment, it is possible to significantly
                promote increased perfusion and stimulate the formation of new
                vascular structures at the same time. The radial shockwaves,
                which are emitted on the shaft of the penis as well as on the
                area around the genitals, support the natural stimulation of the
                area to be treated, particularly in the case of erectile
                dysfunction due to vascular causes. Even patients with severe
                erectile dysfunction who are taking so-called PDE-5 inhibitors
                achieve significantly better therapeutic success.
              </p>
              <p className="my-2 font-normal">
                Depending on the degree of erectile dysfunction, an average of
                about 5 to 8 treatments are needed to achieve a lasting
                improvement in the erection. Shockwave therapy takes up to 25
                minutes and should be performed 2-3 times per week.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/aesthetics/gentlepro/gentle1.jpeg"
                alt=""
                className="w-[200px] rounded-lg m-4"
              />
              <img
                src="/aesthetics/gentlepro/gentle2.jpeg"
                alt=""
                className="w-[200px] rounded-lg m-4"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h2 className="text-2xl font-semibold">
              Patient-friendly application
            </h2>
            <div className="flex sm:flex-row flex-col py-8">
              <div>
                <h2 className="font-semibold text-lg">Advantages:</h2>
                <ul className="list-disc ml-6 mb-4 py-2">
                  <li className="mb-1"> non-invasive treatment</li>
                  <li className="mb-1"> no down time</li>
                  <li className="mb-1"> virtually painless application</li>
                  <li className="mb-1"> user-friendly application</li>
                  <li className="mb-1"> improvement in the erection</li>
                  <li className="mb-1"> more spontaneous sex life</li>
                  <li className="mb-1"> no painful prostaglandin injections</li>
                  <li className="mb-1"> almost no risks or adverse effects</li>
                  <li className="mb-1"> well-tolerated treatment method</li>
                </ul>
              </div>
              <div>
                <h2 className="font-semibold text-lg">Effects and reaction:</h2>

                <ul className="list-disc ml-6 mb-4 py-2">
                  <li className="mb-1"> longer erection</li>
                  <li className="mb-1"> improved penile stiffness</li>
                  <li className="mb-1">
                    {" "}
                    promotes the development of new blood vessels
                    (neoangiogensis)
                  </li>
                  <li className="mb-1"> mechanical pulses on the penis</li>
                  <li className="mb-1"> no need for PDE-5 inhibitors</li>
                  <li className="mb-1">
                    {" "}
                    stimulation of the corpus cavernous of the penis
                  </li>
                </ul>
              </div>
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
                    Compressor-free ballistic shockwave system with
                    electromagnetic generator as projectile accelerator, 1 – 22
                    Hz, 60 – 185 mJ
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Programmes</h2>
                  <p className="font-light">
                    5 pre-set application fields plus respective detailed
                    treatment protocols
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Control unit</h2>
                  <p className="font-light">
                    12″ colour touch-screen for all software operations, knops
                    for energy and frequency. Handpiece operation via
                    multidirectional foot switch.
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Memory and update</h2>
                  <p className="font-light">
                    SD card for application menu memory, favourites and adapted
                    programmes (99 places) / error log / firmware update
                  </p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold">
                  Mains voltage, Protection class
                </h2>
                <p className="mb-4 font-light">
                  100 – 240 V / 50/60 Hz; 220 V / 60 Hz, I
                </p>
                <h2 className="font-semibold">Dimensions, weight</h2>
                <p className="mb-4 font-light">
                  L 53 cm / W 54 cm / H 139 cm, 21 kg (without handpiece)
                </p>
                <h2 className="font-semibold">Guarantee</h2>
                <p className="mb-4 font-light">
                  2.000.000 shocks on each shockwave generator
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
