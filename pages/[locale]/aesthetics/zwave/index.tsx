import React from "react";
import { useTranslations } from "next-intl";

export default function ZLipo() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/aesthetics/zwave/galery1.jpeg",
    "/aesthetics/zwave/galery2.jpeg",
    "/aesthetics/zwave/galery3.jpeg",
    "/aesthetics/zwave/galery4.jpeg",
    "/aesthetics/zwave/galery5.jpeg",
  ];
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">ZWave</h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
        <img
          src="/aesthetics/zwave/zwave_machine.png"
          alt="Cryo7"
          className="w-[270px]"
        />
        <div className="text-container my-8 sm:pr-12">
          <h1 className="text-4xl font-semibold mb-4 text-center">
            ZWave Pro & ZWave Med
          </h1>

          <div className="my-auto text-justify text-lg font-normal">
            The high energy radial shockwaves scientifically proved to have a
            large impact on collagen structure and the skin connective tissue,
            improving blood circulation. It stimulates collagen formation, while
            the skin becomes more elastic and its firmness is visible after only
            a few treatments.Thanks to the ZWave radial shockwave unit, it is
            also possible to significantly improve skin firmness, skin
            elasticity and collagen regeneration. Fat reduction, for example,
            after CryolipolysisTM or injection lipolysis is also enhanced by
            using the ZWave.
          </div>
        </div>
      </div>

      <div className="w-full bg-orange">
        <div className="flex flex-col items-center py-24">
          <h1 className="text-5xl text-white">The way it works</h1>
          <div className="videos flex flex-col sm:flex-row items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/LDUUobwbMAI"
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
          <h1 className="text-5xl">ZWave & ZLipo – the perfect combination</h1>
          <div>
            <p>
              Skin tightening and body contouring are becoming increasingly
              important in the modern practice. After several treatments for fat
              reduction, such as e.g. CryolipolysisTM, liposuction, or injection
              lipolysis, a more extensive application for skin tightening is
              urgently recommended and expected by the patient. Various studies
              and user observations have proven its effectiveness.
            </p>
            <div className="flex justify-center flex-col sm:flex-row my-8">
              <img
                src="/aesthetics/zwave/comb1.jpeg"
                alt=""
                className="w-[200px] rounded"
              />
              <img
                src="/aesthetics/zwave/comb2.png"
                alt=""
                className="w-[200px] rounded mx-4"
              />
              <img
                src="/aesthetics/zwave/comb3.jpeg"
                alt=""
                className="w-[200px] rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h2 className="text-2xl font-semibold">Application range</h2>
          <h2 className="font-medium text-lg">
            Skin tightening and body contouring
          </h2>
          <h2 className="font-normal text-lg">
            ZWave is used as a “stand-alone” application or in combination with
            other, mostly fat reduction methods. In the case of the
            “stand-alone” application, the focus is generally on improving the
            skin structure and connective tissue. Typical application areas are,
            e.g. cellulite, connective tissue weakness (upper arm, underbelly,
            etc.) and stretch marks (striae).
          </h2>
          <div className="flex sm:flex-row flex-col py-8 mt-8 justify-around">
            <div className="w-1/2">
              <h2 className="font-semibold text-lg">
                Patient-friendly application
              </h2>
              <h2 className="font-normal text-base">
                Using radial shockwaves for skin tightening, cellulite and
                general connective tissue tightening treatments has the
                following advantages:
              </h2>
              <ul className="list-disc ml-6 mb-4 py-2">
                <li className="mb-1"> non-invasive treatment</li>
                <li className="mb-1"> no down time</li>
                <li className="mb-1"> pain-free application</li>
                <li className="mb-1"> simple application</li>
                <li className="mb-1"> visible results</li>
                <li className="mb-1"> versatile</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg">
                Preset treatment recommendations:
              </h2>

              <ul className="list-disc ml-6 mb-4 py-2">
                <li className="mb-1"> Cellulite</li>
                <li className="mb-1"> Stretch marks</li>
                <li className="mb-1"> Combination with CryolipolysisTM</li>
                <li className="mb-1"> Combination with radio frequency</li>
                <li className="mb-1"> Combination with ultrasound</li>
                <li className="mb-1"> Combination with laser (Softlaser)</li>
                <li className="mb-1"> Skin tightening (general)</li>
                <li className="mb-1"> Aesthetic scar treatment</li>
                <li className="mb-1"> Supporting lymphatic drainage</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-16">
          <h2 className="text-2xl font-semibold mb-3">
            ZWave – visible results
          </h2>
          <h2 className="text-xl font-normal mb-2">
            The high energy radial shockwaves consists of two different parts –
            positive pressure pulse and a comparatively small tensile wave
            component. The shockwave squeezes the surrounding tissue and breaks
            the grid structure of the molecules. The tensile wave leads to a
            collapse of the gas bubbles within the fat structures (cavitation),
            which re-expand after the high energy radial shockwaves and thus
            ensure a destabilization of the fat structures.
          </h2>

          <div className="flex flex-wrap sm:flex-row flex-col justify-center">
            <div className="flex m-4">
              <div className="text-center">
                <img src="/aesthetics/zwave/result1.jpeg" alt="" />
                <p>Before</p>
              </div>
              <div className="text-center">
                <img src="/aesthetics/zwave/result2.jpeg" alt="" />
                <p>After</p>
              </div>
            </div>
            <div className="flex m-4">
              <div className="text-center">
                <img src="/aesthetics/zwave/result3.png" alt="" />
                <p>Before</p>
              </div>
              <div className="text-center">
                <img src="/aesthetics/zwave/result4.png" alt="" />
                <p>After</p>
              </div>
            </div>
            <div className="flex m-4">
              <div className="text-center">
                <img src="/aesthetics/zwave/result5.jpeg" alt="" />
                <p>Before</p>
              </div>
              <div className="text-center">
                <img src="/aesthetics/zwave/result6.jpeg" alt="" />
                <p>After</p>
              </div>
            </div>
            <div className="flex m-4">
              <div className="text-center">
                <img src="/aesthetics/zwave/result7.jpeg" alt="" />
                <p>Before</p>
              </div>
              <div className="text-center">
                <img src="/aesthetics/zwave/result8.jpeg" alt="" />
                <p>After</p>
              </div>
            </div>
          </div>
          <p className="flont-light text-lg">
            Thanks to its 39 mm applicator head, the ZWave transmits the radial
            shockwaves directly and with a high precision into the tissue. It
            was observed and documented that the introduction of a mechanical
            pressure wave triggers various tissue reactions that have a
            beneficial effect on the skin structure.
          </p>
        </div>
      </div>

      <div className="w-full py-10">
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
                  10 preset application fields plus respective detailed
                  treatment recommendations
                </p>
              </div>
              <div>
                <h2 className="font-semibold pb-0.5">Control unit</h2>
                <p className="font-light">
                  12″ colour touch-screen for all software operations.
                  Controller for energy and frequency. Handpiece operation via
                  multi-directional foot switch.
                </p>
              </div>
            </div>
            <div className="ml-8">
              <h2 className="font-semibold">Memory and update</h2>
              <p className="mb-4 font-light">
                SD card for application menu memory, favourites and adapted
                programmes (240 places) / error log / firmware update
              </p>
              <h2 className="font-semibold">Mains voltage Protection class</h2>
              <p className="mb-4 font-light">
                100 – 240 V / 50/60 Hz; 220 V / 60 Hz I
              </p>
              <h2 className="font-semibold">Dimensions, weight</h2>
              <p className="mb-4 font-light">
                W 32,2 cm / D 23,5 cm / H 13 cm, 2,7 kg (without handpiece)
              </p>
              <h2 className="font-semibold">Guarantee</h2>
              <p className="mb-4 font-light">
                2.000.000 shocks on each shockwave generator and two years for
                the unit
              </p>
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
