import { useTranslations } from "next-intl";
import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";
import Image from "next/image";
import Link from "next/link";

export default function Kineto({ locale }: { locale: string }) {
  const t = useTranslations("mecanoterapie");

  return (
    <>
      <div className="mx-auto py-10">
        <div className="flex flex-col items-center mt-4 text-gray600 w-full">
          <h1 className="text-3xl font-bold mb-6">Kineto</h1>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
            <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
              <Link
                href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r12e`}
                className="relative"
              >
                <div className="w-full min-h-[450px]">
                  <Image
                    src="/mecanoterapie/masini-isokinetice/r12e.png"
                    className="w-full h-[210px]"
                    alt="Any Text"
                    width={150}
                    height={100}
                    blurDataURL="URL"
                    placeholder="blur"
                  />
                  <div className="py-2 px-2">
                    <div className="font-bold text-base mb-1">
                      {t("masiniIso.card12.h")}
                    </div>
                    <ul className="list-disc ml-4 mb-4 text-gray900">
                      <li className="text-xs">{t("masiniIso.card12.li1")}</li>
                      <li className="text-xs"> {t("masiniIso.card12.li2")}</li>
                      <li className="text-xs"> {t("masiniIso.card12.li3")}</li>
                      <li className="text-xs"> {t("masiniIso.card12.li4")}</li>
                      <li className="text-xs"> {t("masiniIso.card12.li5")}</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
              </Link>
            </div>
            <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
              <Link
                href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r1000`}
                className="relative"
              >
                <div className="w-full min-h-[450px]">
                  <Image
                    src="/thera.jpeg"
                    className="w-full h-[300px]"
                    alt="Any Text"
                    width={500}
                    height={500}
                    blurDataURL="URL"
                    placeholder="blur"
                  />
                  <div className="py-2 px-2">
                    <div className="font-bold text-base mb-1">
                      Masa de kineto divizata in trei parti
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
              </Link>
            </div>
            <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
              <Link
                href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r1000`}
                className="relative"
              >
                <div className="w-full min-h-[450px]">
                  <Image
                    src="/mecanoterapie/masini-isokinetice/r1000.png"
                    className="w-full h-[300px]"
                    alt="Any Text"
                    width={500}
                    height={500}
                    blurDataURL="URL"
                    placeholder="blur"
                  />
                  <div className="py-2 px-2">
                    <div className="font-bold text-base mb-1">
                      {t("masiniIso.card18.h")}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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
