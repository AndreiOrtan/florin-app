import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ElectroAndUltrasound({ locale }: { locale: string }) {
  const t = useTranslations("physiotherapy");

  return (
    <PhysioLayout>
      <div className="flex flex-col items-center my-4 text-gray800">
        <header className="py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-blue700 text-3xl font-bold">
              Electro & Ultrasound
            </h1>
          </div>
        </header>
        <div className="w-full">
          <div className="flex flex-col sm:flex-row w-9/12 justify-center items-center mx-auto">
            <Card
              linkUrl={`/${locale}/fizioterapie/electro-ultrasound/physys`}
              imageUrl="/fizioterapiePhotos/electro-ultrasound/physys.jpg"
              cardHeader={t("cards.card1.card1.header")}
              cardDescription={t("cards.card1.card1.description")}
              minH={320}
            />

            <Card
              linkUrl={`/${locale}/fizioterapie/electro-ultrasound/soleo-sonostim`}
              imageUrl="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim.jpg"
              cardHeader={t("cards.card1.card2.header")}
              cardDescription={t("cards.card1.card2.description")}
              minH={320}
            />

            <Card
              linkUrl={`/${locale}/fizioterapie/electro-ultrasound/sonoone`}
              imageUrl="/fizioterapiePhotos/electro-ultrasound/sonoone.jpg"
              cardHeader={t("cards.card1.card3.header")}
              cardDescription={t("cards.card1.card3.description")}
              minH={320}
            />
          </div>
        </div>

        <section className="mt-16 flex justify-center">
          <div className="w-9/12">
            <h1 className="mb-8 text-4xl font-semibold leading-none tracking-wide text-gray-900 sm:text-left text-center">
              {t("cards.card1.header2")}
            </h1>

            <div className="">
              <div className="flex sm:flex-row flex-col justify-center mb-4">
                <Image
                  src="/fizioterapiePhotos/electro-ultrasound/electro-ultrasound-man.jpeg"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                  className="mr-4 rounded-lg mb-4"
                />
                <div>
                  <p className="text-lg mb-2 leading-relaxed text-justify">
                    {t("cards.card1.p1")}
                  </p>
                  <p className="mb-2 text-lg leading-relaxed text-justify">
                    {t("cards.card1.p2")}
                  </p>
                  <p className="mb-2 text-lg leading-relaxed text-justify">
                    {t("cards.card1.p3")}
                  </p>
                </div>
              </div>
              <div>
                <p className="mb-4 text-lg leading-relaxed text-justify">
                  {t("cards.card1.p4")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PhysioLayout>
  );
}

import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";
import PhysioLayout from "@/components/PhysioLayout";
import Card from "@/components/Card";

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
