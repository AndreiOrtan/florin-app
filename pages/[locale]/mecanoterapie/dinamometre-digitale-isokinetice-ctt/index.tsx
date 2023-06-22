import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function ShockwaveTherapy({ locale }: { locale: string }) {
  const t = useTranslations("mecanoterapie");
  return (
    <MecanoLayout>
      <div className="flex flex-col items-center mt-4 text-gray600 w-full">
        <header className="py-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-blue700 text-3xl font-bold">
              {t("dinamometre.description")}
            </h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/dinamometre-digitale-isokinetice-ctt/c13`}
              className="relative"
            >
              <div className="w-full min-h-[340px]">
                <Image
                  src="/mecanoterapie/dinamometre-isokinetice/c13.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold  text-base mb-1">
                    {t("dinamometre.card1D")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/dinamometre-digitale-isokinetice-ctt/c6`}
              className="relative"
            >
              <div className="w-full min-h-[340px]">
                <Image
                  src="/mecanoterapie/dinamometre-isokinetice/c6.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold  text-base mb-1">
                    {t("dinamometre.card2D")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/dinamometre-digitale-isokinetice-ctt/c5`}
              className="relative"
            >
              <div className="w-full min-h-[340px]">
                <Image
                  src="/mecanoterapie/dinamometre-isokinetice/c5.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold  text-base mb-1">
                    {t("dinamometre.card3D")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/dinamometre-digitale-isokinetice-ctt/c17`}
              className="relative"
            >
              <div className="w-full min-h-[340px]">
                <Image
                  src="/mecanoterapie/dinamometre-isokinetice/c17.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold  text-base mb-1">
                    {t("dinamometre.card4D")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/dinamometre-digitale-isokinetice-ctt/c8`}
              className="relative"
            >
              <div className="w-full min-h-[340px]">
                <Image
                  src="/mecanoterapie/dinamometre-isokinetice/c8.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold  text-base mb-1">
                    {t("dinamometre.card5D")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/dinamometre-digitale-isokinetice-ctt/c11`}
              className="relative"
            >
              <div className="w-full min-h-[340px]">
                <Image
                  src="/mecanoterapie/dinamometre-isokinetice/c11.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold  text-base mb-1">
                    {t("dinamometre.card6D")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/dinamometre-digitale-isokinetice-ctt/c20`}
              className="relative"
            >
              <div className="w-full min-h-[340px]">
                <Image
                  src="/mecanoterapie/dinamometre-isokinetice/c20.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold  text-base mb-1">
                    {t("dinamometre.card7D")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/dinamometre-digitale-isokinetice-ctt/c16`}
              className="relative"
            >
              <div className="w-full min-h-[340px]">
                <Image
                  src="/mecanoterapie/dinamometre-isokinetice/c16.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold  text-base mb-1">
                    {t("dinamometre.card8D")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/dinamometre-digitale-isokinetice-ctt/c18`}
              className="relative"
            >
              <div className="w-full min-h-[340px]">
                <Image
                  src="/mecanoterapie/dinamometre-isokinetice/c18.png"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold  text-base mb-1">
                    {t("dinamometre.card9D")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/dinamometre-digitale-isokinetice-ctt/c12`}
              className="relative"
            >
              <div className="w-full min-h-[340px]">
                <Image
                  src="/mecanoterapie/dinamometre-isokinetice/c12.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold  text-base mb-1">
                    {t("dinamometre.card10D")}
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
}
import { GetStaticPropsContext } from "next";
import path from "path";
import { readFile } from "fs/promises";
import { useTranslations } from "next-intl";
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
