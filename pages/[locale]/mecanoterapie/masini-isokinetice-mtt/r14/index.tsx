import Image from "next/image";
import { useTranslations } from "next-intl";

export default function R18() {
  const t = useTranslations("mecanoterapie");
  return (
    <MecanoLayout>
      <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
        <header className="py-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-blue700 text-3xl font-bold">
              {t("masiniIso.card4.h")}
            </h1>
          </div>
        </header>
        <div className="w-full my-8">
          <div className="w-9/12 mx-auto py-8">
            <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
              <Image
                src="/mecanoterapie/masini-isokinetice/r17.jpeg"
                alt="r18"
                height={300}
                width={380}
                className="rounded-lg"
              />
              <div className="sm:ml-16 mt-8 sm:mt-0">
                <h2 className="font-semibold">
                  {t("general.dimensiuneSetarePasiva")}
                </h2>
                <p className="font-light">158 X 100 X 196 CM</p>
                <h2 className="font-semibold">
                  {t("general.dimensiuneSetareActiva")}
                </h2>
                <p className="font-light">230 X 100 X 196 CM</p>
                <h2 className="font-semibold">{t("general.sarcinaPePlaci")}</h2>
                <p className="font-light">15X 5 KG</p>
                <h2 className="font-semibold">{t("general.greutateTotala")}</h2>
                <p className="font-light">300 KG</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <h1 className="text-4xl font-medium mb-4">
              {t("masiniIso.card4.p1")}
            </h1>
            <h1 className="font-medium mb-2">{t("masiniIso.card4.p2")}</h1>
            <h1 className="font-medium mb-2">{t("masiniIso.card4.p3")}</h1>
          </div>
        </div>

        <div className="w-full">
          <div className="w-9/12 mx-auto py-8">
            <div className="flex sm:flex-row flex-col justify-center items-center">
              <p>
                {t("general.muschiPrincipali")}{" "}
                <span className="font-light"> {t("masiniIso.card4.p4")}</span>
              </p>
              <Image
                src="/mecanoterapie/masini-isokinetice/r14/target1.png"
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
              <div>
                <p className="py-1">{t("masiniIso.card4.p5")}</p>
                <p className="py-1">{t("masiniIso.card4.p6")}</p>
                <p className="py-1">{t("masiniIso.card4.p7")}</p>
              </div>
              <div className="flex flex-wrap my-2">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r14/use1.png"
                  alt="r18"
                  height={210}
                  width={300}
                  className="rounded-lg "
                />
                <Image
                  src="/mecanoterapie/masini-isokinetice/r14/use2.png"
                  alt="r18"
                  height={210}
                  width={300}
                  className="rounded-lg "
                />
                <Image
                  src="/mecanoterapie/masini-isokinetice/r14/use3.png"
                  alt="r18"
                  height={210}
                  width={300}
                  className="rounded-lg "
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
