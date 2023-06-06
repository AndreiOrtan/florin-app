import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useTranslations } from "next-intl";

export default function ElectroAndUltrasound({ locale }: { locale: string }) {
  const t = useTranslations("physiotherapy");
  return (
    <div className="flex flex-col items-center my-4 ">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">Laser Therapy</h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center mb-8">
        <div className="card-container rounded-lg shadow-lg w-9/12 sm:mx-2 overflow-hidden my-2 hover:opacity-100 mx-auto">
          <Link
            href={`/${locale}/fizioterapie/laser-therapy/optonpro`}
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/laser-therapy/optonpro.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={400}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  OptonPro
                </div>
                <p className="text-xs">{t("cards.card2.cardDescription")}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>
      </div>

      <section className="my-16">
        <div className="bg-lightgray flex justify-center">
          <div className="w-9/12 py-4">
            <h1 className="mb-8 text-4xl font-semibold leading-none tracking-wide text-gray-900">
              {t("cards.card2.headerBig")}
            </h1>
            <img
              src="/fizioterapiePhotos/laser-therapy/laser-therapy-man.jpeg"
              alt="Laser therapy"
            />
            <p>
              High-power laser therapy with OptonPro offers a very wide range of
              applications: pain therapy with local efficacy directly at the
              site of pain. In addition to the analgesic effect, biostimulation
              achieves accelerated tissue regeneration. Indications primarily
              include musculoskelettal diseases, tendinopathies, neuralgia and
              skin disorders.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-9/12 py-4">
            <h1 className="mb-8 text-4xl font-semibold leading-none tracking-wide text-gray900">
              Lasertherapy: Effect
            </h1>

            <h2 className="text-2xl font-semibold">
              {t("cards.card2.header1")}
            </h2>
            <p>{t("cards.card2.p1")}</p>
            <h2 className="text-2xl font-semibold">
              {t("cards.card2.header2")}
            </h2>
            <p>{t("cards.card2.p2")}</p>
            <h2 className="text-2xl font-semibold">
              {t("cards.card2.header3")}
            </h2>
            <p>{t("cards.card2.p3")}</p>
            <h2 className="text-2xl font-semibold">
              {t("cards.card2.header4")}
            </h2>
            <p>{t("cards.card2.p4")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

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
