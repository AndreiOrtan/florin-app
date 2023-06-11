import Image from "next/image";

export default function R18() {
  const t = useTranslations("mecanoterapie");
  return (
    <MecanoLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
        <header className="py-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-blue700 text-3xl font-bold">
              {t("dinamometre.card9.h")}
            </h1>
          </div>
        </header>
        <div className="w-full my-8">
          <div className="w-9/12 mx-auto py-8">
            <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c18.png"
                alt="r18"
                height={300}
                width={380}
                className="rounded-lg"
              />
              <div className="sm:ml-16 mt-8 sm:mt-0">
                <h2 className="font-semibold">{t("general.dimensiuni")}</h2>
                <p className="font-light">
                  {t("general.lungime")} 120cm / {t("general.latime")} 100cm /
                  {t("general.inaltime")} 180cm
                </p>
                <h2 className="font-semibold">
                  {t("general.suprafataAmplasare")}
                </h2>
                <p className="font-light">cca. 1,5m2</p>
                <h2 className="font-semibold">{t("general.consumEnergie")}</h2>
                <p className="font-light">3 euro / {t("general.luna")}</p>
                <h2 className="font-semibold">{t("general.greutate")}</h2>
                <p className="font-light">220 kg</p>
                <h2 className="font-semibold">COMPUTER:</h2>
                <p className="font-light">{t("general.pcIntegrat")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-medium mb-4">
              {t("general.description")}
            </h1>
            <h1 className="font-medium mb-2">{t("dinamometre.card9.p1")}</h1>
            <div>
              <h1 className="font-bold mb-1">{t("dinamometre.card9.p2")}</h1>
              <ul className="list-disc ml-6">
                <li> {t("dinamometre.card9.p3")}</li>
                <li> {t("dinamometre.card9.p4")}</li>
                <li> {t("dinamometre.card9.p5")}</li>
                <li> {t("dinamometre.card9.p6")}</li>
                <li> {t("dinamometre.card9.p7")}</li>
                <li> {t("dinamometre.card9.p8")}</li>
                <li> {t("dinamometre.card9.p9")}</li>
                <li> {t("dinamometre.card9.p10")}</li>
                <li> {t("dinamometre.card9.p11")}</li>
                <li> {t("dinamometre.card9.p12")}</li>
                <li> {t("dinamometre.card9.p13")}</li>
                <li> {t("dinamometre.card9.p14")}</li>
                <li> {t("dinamometre.card9.p15")}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
              <p>{t("dinamometre.card9.p16")}</p>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c18/target1.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg "
              />
            </div>
            <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
              <p>{t("dinamometre.card9.p17")}</p>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c18/target2.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg "
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div className="flex flex-col justify-center items-center">
              <div className="flex sm:flex-row flex-col items-center">
                <div>
                  <h2 className="mb-1">{t("dinamometre.card9.p18")}</h2>
                  <p className="py-1 font-light">
                    {t("dinamometre.card9.p19")}
                  </p>
                </div>
                <Image
                  src="/mecanoterapie/dinamometre-isokinetice/c18/use1.png"
                  alt="r18"
                  height={210}
                  width={300}
                  className="rounded-lg sm:ml-8"
                />
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
