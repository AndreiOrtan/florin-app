import React from "react";
import { useTranslations } from "next-intl";

export default function enPuls() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/aesthetics/zcryo/cryo7/galery1.jpeg",
    "/aesthetics/zcryo/cryo7/galery2.jpeg",
    "/aesthetics/zcryo/cryo7/galery3.jpeg",
    "/aesthetics/zcryo/cryo7/galery4.jpeg",
    "/aesthetics/zcryo/cryo7/galery5.jpeg",
  ];
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Cryo7</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/aesthetics/zcryo/cryo7/cryo7_machine.png"
            alt="Cryo7"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              The new Cryo 7: Ultramodern technology and over 25 years of
              experience
            </h1>

            <div className="my-auto text-justify text-lg">
              Cryo is the perfect system for cooling the skin during laser
              applications and injections of all types. The cold air device
              provides lasting pain reduction and prevents thermal damage to the
              skin during laser and IPL applications.Unlike in other cooling
              methods, such as contact cooling, cooling sprays, or ice packs,
              the skin can be cooled with Cryo before, during, and after the
              laser application without impeding the effect of the laser.
            </div>
          </div>
        </div>

        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-semibold mb-4">
              {t("cards.card6.card2.p3")}
            </h1>

            <p>{t("cards.card6.card2.p4")}</p>
            <p className="pt-4">
              Operating the new Cryo 7 entails only low consumption costs for
              you. The new standby mode additionally minimises energy costs.
            </p>
            <p className="pt-4">
              Cryo 7 is designed for reliable use all day long. The defrosting
              function and software-controlled monitoring of the amount of
              defrost water ensure smooth operation. In addition, the air filter
              is easily accessible and can be quickly replaced if soiled.
            </p>
            <p className="pt-4">
              Numerous technical innovations allow the Cryo 7 to be operated
              even more quietly. This makes the treatment significantly more
              pleasant for everyone: for your patients and also for the medical
              staff.
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div>
              <h1 className="text-4xl font-semibold mb-4">
                Maximum operating convenience
              </h1>
              <p className="font-light">User-friendly design</p>
              <ul className="list-disc ml-6 mb-4">
                <li className="pb-1">Energy-saving eco standby operation</li>
                <li className="pb-1"> Storage space for 100 Favourites</li>
                <li className="pb-1"> High-resolution 10-inch touch display</li>
                <li className="pb-1"> Colours and presettings as desired</li>
              </ul>
            </div>
            <div>
              <h1 className="text-4xl font-semibold mb-4">
                Easier to operate than ever
              </h1>
              <p className="font-light">Runs effortlessly for you</p>
              <ul className="list-disc ml-6 mb-4">
                <li className="pb-1">
                  Software reminder if the water tank is full
                </li>
                <li className="pb-1">
                  {" "}
                  Air filter can be quickly and easily changed
                </li>
                <li className="pb-1"> Magnetic tube attachment</li>
                <li className="pb-1"> Automatic maintenance reminder</li>
              </ul>
            </div>
            <div>
              <h1 className="text-4xl font-semibold mb-4">
                Form meets function
              </h1>
              <p className="font-light">Ergonomic & stylish</p>
              <ul className="list-disc ml-6 mb-4">
                <li className="pb-1">
                  Easier on the back due to the ergonomic height
                </li>
                <li className="pb-1">
                  {" "}
                  Swivelling spring arm allows one-hand operation
                </li>
                <li className="pb-1"> Quiet operation</li>
                <li className="pb-1"> Space-saving with a narrow footprint</li>
                <li className="pb-1">
                  {" "}
                  A real eyecatcher in the modern practice
                </li>
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
            <h2 className="text-2xl font-semibold mb-4">
              {t("technicalData")}
            </h2>
            <div className="flex">
              <div>
                <div>
                  <h2 className="font-semibold pb-0.5"> Power supply</h2>
                  <p className="font-light"> 220-240 V / 50-60 Hz</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    Max. power consumption during therapy
                  </h2>
                  <p className="font-light"> 1,2 kW</p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">
                    Eco standby operation
                  </h2>
                  <p className="font-light">
                    0,55 kWh (Values are based on an internal test)
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold pb-0.5">Medical product</h2>
                  <p className="font-light"> Class IIa</p>
                </div>
              </div>
              <div className="ml-8">
                <h2 className="font-semibold"> Treatment tube length</h2>
                <p className="mb-4 font-light">250 cm</p>
                <h2 className="font-semibold"> Housing dimensions</h2>
                <p className="mb-4 font-light">H 106 cm / W 50 cm / L 56 cm</p>
                <h2 className="font-semibold"> Weight</h2>
                <p className="mb-4 font-light">60 kg</p>
                <h2 className="font-semibold"> Fan levels</h2>
                <p className="mb-4 font-light">9 levels</p>
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
