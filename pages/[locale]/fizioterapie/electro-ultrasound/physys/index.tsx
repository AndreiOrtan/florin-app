import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Physys() {
  const t = useTranslations("physiotherapy");

  const images = [
    "/fizioterapiePhotos/electro-ultrasound/physys/galery1.png",
    "/fizioterapiePhotos/electro-ultrasound/physys/galery2.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/physys/galery3.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/physys/galery4.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/physys/galery5.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/physys/galery6.jpeg",
  ];
  return (
    <PhysioLayout>
      <div className="flex flex-col items-center my-4 w-full text-gray600">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-blue700 text-3xl font-bold">PhySys</h1>
          </div>
        </header>

        <div className="w-9/12 my-8">
          <div className="flex flex-col sm:flex-row items-center">
            <img
              src="/fizioterapiePhotos/electro-ultrasound/physys/physysMachine.png"
              alt="PhySys"
              className="w-[150px]"
            />
            <div className="text-container my-auto">
              <h1 className="text-4xl font-semibold mb-4">
                {t("cards.card1.card1.header1")}
              </h1>

              <p className="my-auto text-left">{t("cards.card1.card1.p1")}</p>
            </div>
          </div>
        </div>

        {/* {APPLIANCE} */}
        <div className="bg-lightgray w-full">
          <div className="mx-auto py-8 flex flex-col items-center w-9/12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Appliance</h2>
              <ul className="list-disc list-inside">
                <li>Pain Treatment</li>
                <li>Muscle Relaxing Therapy</li>
                <li>Muscle Toning Therapy</li>
                <li>Metabolism Stimulation</li>
              </ul>
              <p className="mt-4">
                PhySys broadens the range of all requested therapies for
                optimized treatments with its electrostimulation and ultrasound
                therapy programs in mono or dual channels.
              </p>
            </div>
            {/* <div className="flex">
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/physys/physysMAN1.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/physys/physysMAN2.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/physys/physysMAN3.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/physys/physysMAN4.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
          </div> */}
          </div>
        </div>

        <div className="w-full py-8">
          <div className="w-9/12 mx-auto">
            <h2 className="text-xl font-bold mb-2">
              {t("cards.card1.card1.h2-1")}
            </h2>
            <p className="mb-4">{t("cards.card1.card1.p2")}</p>
            <p>{t("cards.card1.card1.p3")}</p>
            <h2 className="text-xl font-bold my-2">
              {t("cards.card1.card1.p4")}
            </h2>
            {t("cards.card1.card1.h2-2")}
            <p className="mb-4"></p>
            <p>{t("cards.card1.card1.p5")}</p>
          </div>
        </div>

        {/* {{t("pictureGallery")}} */}
        <div className="w-full bg-lightgray">
          <div className="w-9/12 mx-auto py-8">
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
            <div className="videos flex sm:flex-row flex-col items-center">
              <iframe
                src="https://www.youtube.com/embed/F_pEaofmFOM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/7SIY_sCT9KU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
            </div>
          </div>
        </div>

        {/* {{t("technicalData")}} */}

        <div className="w-full flex justify-center">
          <div className="py-8 flex justify-center w-9/12">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                {t("technicalData")}
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("cards.card1.card1.t1")}
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>{t("cards.card1.card1.t2")}</li>
                    <li>{t("cards.card1.card1.t3")}</li>
                    <li>{t("cards.card1.card1.t4")}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("cards.card1.card1.t5")}
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>{t("cards.card1.card1.t6")}</li>
                    <li>{t("cards.card1.card1.t7")}</li>
                    <li>{t("cards.card1.card1.t8")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("cards.card1.card1.t9")}
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>
                      Galv., DD, LF, biphasic, MF, MF/LF, interferential, etc.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("cards.card1.card1.t10")}
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>{t("cards.card1.card1.t11")}</li>
                    <li>5 cm²</li>
                    <li>1 cm² (optional)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("cards.card1.card1.t12")}
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>{t("cards.card1.card1.t13")}</li>
                    <li>{t("cards.card1.card1.t14")}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("cards.card1.card1.t15")}
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>{t("cards.card1.card1.t16")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("cards.card1.card1.t17")}
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>{t("cards.card1.card1.t18")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("cards.card1.card1.t19")}
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>{t("cards.card1.card1.t20")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("cards.card1.card1.t21")}
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>{t("cards.card1.card1.t22")}</li>
                    <li>{t("cards.card1.card1.t23")}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("cards.card1.card1.t24")}
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>{t("cards.card1.card1.t25")}</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t("cards.card1.card1.t26")}
                  </h3>
                  <ul className="list-disc list-inside">
                    <li>{t("cards.card1.card1.t27")}</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PhysioLayout>
  );
}

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
