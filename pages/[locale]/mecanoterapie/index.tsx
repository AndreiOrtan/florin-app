import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Mecanoterapie = ({ locale }: { locale: string }) => {
  const t = useTranslations("mecanoterapie");
  return (
    <MecanoLayout>
      <div className="flex flex-col items-center my-4 w-full px-4">
        <header className="py-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-blue700 text-3xl font-bold">
              Mechanotherapy Equipment
            </h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12">
          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt`}
              className="relative"
            >
              <div className="w-full min-h-[300px] flex flex-col">
                <Image
                  src="/mecanoterapie/isokinetic.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2 my-auto">
                  <div className="font-bold text-blue700 text-xl mb-1 text-center">
                    {t("card1Description")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
            <Link
              href={`/${locale}/mecanoterapie/dinamometre-digitale-isokinetice-ctt`}
              className="relative"
            >
              <div className="w-full min-h-[300px]">
                <Image
                  src="/mecanoterapie/dinamometru.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-blue700 text-xl mb-1 text-center">
                    {t("card2Description")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>
        </div>
      </div>
    </MecanoLayout>
  );
};

import { GetStaticPropsContext } from "next";
import path from "path";
import { readFile } from "fs/promises";
import MecanoLayout from "@/components/MecanoLayout";

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

export default Mecanoterapie;
