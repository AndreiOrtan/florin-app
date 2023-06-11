import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Physys() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery1.png",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery2.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery3.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery4.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery5.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery6.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery7.jpeg",
  ];

  return (
    <PhysioLayout>
      <div className="flex flex-col items-center w-full">
        <div className="w-9/12 py-4">
          <div className="flex flex-col items-center">
            <div>
              <header className="py-4">
                <div className="container mx-auto px-4">
                  <h1 className="text-blue700 text-3xl font-bold">SonoOne</h1>
                </div>
              </header>
            </div>
            <div className="flex justify-center items-center sm:flex-row flex-col">
              <Image
                src="/fizioterapiePhotos/electro-ultrasound/sonoone/sonoone-machine.png"
                width={150}
                height={100}
                alt="PhySys"
              />
              <div className="text-container my-auto">
                <h1 className="text-4xl font-semibold mb-4">
                  {t("cards.card1.card3.header1")}
                </h1>

                <p className="my-auto text-left">{t("cards.card1.card3.p1")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* {APPLIANCE} */}
        <div className="w-full bg-lightgray">
          <div className="mx-auto py-8 flex flex-col items-center">
            <div className="w-9/12">
              <h1 className="text-2xl font-bold mb-4">
                {t("cards.card1.card3.header2")}
              </h1>

              <h2 className="text-xl font-bold mb-2">
                {t("cards.card1.card3.p2")}
              </h2>
              <p>{t("cards.card1.card3.p3")}</p>
              <h2 className="text-xl font-bold mb-2">
                {t("cards.card1.card3.header3")}
              </h2>
              <p>{t("cards.card1.card3.p4")}</p>
              <h2 className="text-xl font-bold mb-2">
                {t("cards.card1.card3.header4")}
              </h2>
              <p>{t("cards.card1.card3.p5")}</p>
              <p className="py-8">{t("cards.card1.card3.header5")}</p>
              <ul className="list-disc list-inside">
                <li>{t("cards.card1.card3.p6")}</li>
                <li>{t("cards.card1.card3.p7")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full py-10">
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
                  className="max-w-[150px]"
                />
              ))}
            </div>
          </div>
        </div>

        {/* {{t("technicalData")}} */}

        <div className="w-full">
          <div className="mx-auto py-8 px-4 flex justify-center">
            <section className="w-9/12">
              <h2 className="text-2xl font-bold mb-4">{t("technicalData")}</h2>
              <div>
                <h2 className="text-xl font-bold mb-4">
                  {t("cards.card1.card3.t1")}
                </h2>
                <p className="mb-4">{t("cards.card1.card3.t2")}</p>
                <h3 className="text-lg font-bold mb-2">
                  {t("cards.card1.card3.t3")}
                </h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>{t("cards.card1.card3.t4")}</li>
                  <li>{t("cards.card1.card3.t5")}</li>
                  <li>{t("cards.card1.card3.t6")}</li>
                  <li>{t("cards.card1.card3.t7")}</li>
                </ul>
                <h3 className="text-lg font-bold mb-2">
                  {t("cards.card1.card3.t8")}
                </h3>
                <p className="mb-4">{t("cards.card1.card3.t9")}</p>
                <h3 className="text-lg font-bold mb-2">
                  {t("cards.card1.card3.t10")}
                </h3>
                <p className="mb-4">{t("cards.card1.card3.t11")}</p>
                <h3 className="text-lg font-bold mb-2">
                  {t("cards.card1.card3.t12")}
                </h3>
                <p className="mb-4">{t("cards.card1.card3.t13")}</p>
                <h3 className="text-lg font-bold mb-2">
                  {t("cards.card1.card3.t14")}
                </h3>
                <p className="mb-4">1</p>
                <h3 className="text-lg font-bold mb-2">
                  {t("cards.card1.card3.t15")}
                </h3>
                <p className="mb-4">{t("cards.card1.card3.t16")}</p>
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
