import Image from "next/image";

export default function R18() {
  const t = useTranslations("mecanoterapie");
  return (
    <MecanoLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
        <header className="py-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-blue700 text-3xl font-bold">
              {t("masiniIso.card16.h")}
            </h1>
          </div>
        </header>
        <div className="w-full my-8">
          <div className="w-9/12 mx-auto py-8">
            <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
              <Image
                src="/mecanoterapie/masini-isokinetice/r19.png"
                alt="r18"
                height={300}
                width={380}
                className="rounded-lg"
              />
              <div className="sm:ml-16 mt-8 sm:mt-0">
                <h2 className="font-semibold">DIMENSIUNE:</h2>
                <p className="font-light">120 X 130 X 205 CM</p>

                <h2 className="font-semibold">{t("general.sarcinaPePlaci")}</h2>
                <p className="font-light">10 X 10 KG / 5 X 5 KG</p>
                <h2 className="font-semibold">{t("general.greutateTotala")}</h2>
                <p className="font-light">280 KG</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-medium mb-4">
              {t("general.description")}
            </h1>
            <h1 className="font-medium mb-2">{t("masiniIso.card16.p1")}</h1>
            <h1 className="font-medium mb-2">{t("masiniIso.card16.p2")}</h1>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
              <div>
                <p>
                  {t("general.muschiPrincipali")}{" "}
                  <span className="font-light">{t("masiniIso.card16.p3")}</span>
                </p>
                <p>
                  {t("general.muschiAccesori")}{" "}
                  <span className="font-light">{t("masiniIso.card16.p4")}</span>
                </p>
              </div>
              <Image
                src="/mecanoterapie/masini-isokinetice/r19/target1.png"
                alt="r18"
                height={180}
                width={260}
                className="rounded-lg "
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div className="flex flex-col justify-center items-center">
              <div className="flex sm:flex-row flex-col justify-between items-center w-full my-8 ">
                <div className="text-center mx-16">
                  <Image
                    src="/mecanoterapie/masini-isokinetice/r19/use1.png"
                    alt="r18"
                    height={150}
                    width={200}
                    className="rounded-lg mx-auto py-4 "
                  />
                  <p className="font-bold">{t("masiniIso.card16.p5")}</p>
                </div>
                <div className="text-center mx-16">
                  <Image
                    src="/mecanoterapie/masini-isokinetice/r19/use2.png"
                    alt="r18"
                    height={150}
                    width={200}
                    className="rounded-lg mx-auto py-4"
                  />
                  <p className="font-bold">{t("masiniIso.card16.p6")}</p>
                </div>
              </div>
              <div>
                <p className="py-1">{t("masiniIso.card16.p7")}</p>
                <p className="py-1">{t("masiniIso.card16.p8")}</p>
                <p className="py-1">{t("masiniIso.card16.p9")}</p>
              </div>
            </div>
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
