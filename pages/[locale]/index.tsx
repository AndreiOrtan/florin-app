import { useTranslations } from "next-intl";
import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";
import Carrousel from "@/components/Carousel";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <Carrousel />

      <div className="mx-auto py-10 bg-lightgray">
        <div className="w-9/12 mx-auto text-gray800">
          <h1 className="text-3xl font-bold mb-6">{t("p1")}</h1>
          <div className="flex sm:flex-row flex-col justify-between mt-8 mb-16">
            <div className="flex flex-col justify-center items-center max-w-[297px]">
              <img
                src="/noun-innovative-2338321 (1).png"
                alt=""
                className="w-[200px] h-[196px] rounded-full p-2 shadow-md"
              />
              <p className="font-medium text-xl mt-4 text-center">{t("p2")}</p>
            </div>

            <div className="flex flex-col justify-center items-center max-w-[297px]">
              <img
                src="/noun-best-quality-2041554.png"
                alt=""
                className="w-[200px] h-[196px] rounded-full p-2 shadow-md"
              />
              <p className="font-medium text-xl mt-4 text-center">{t("p3")}</p>
            </div>

            <div className="flex flex-col justify-center items-center max-w-[297px]">
              <img
                src="/noun-setting-2225559.png"
                alt=""
                className="w-[200px] h-[196px] rounded-full  shadow-md"
              />
              <p className="font-medium text-xl mt-4 text-center">{t("p4")}</p>
            </div>
          </div>

          <p className="text-xl font-light leading-7">
            {t("p5")} <span className="font-bold">Suhard Biomedical</span>,{" "}
            {t("p6")} <span className="font-bold">{t("p7")}</span> {t("p8")}{" "}
            <span className="font-bold">
              Zimmer Medizin Systeme, Minato Medical {t("p9")} MKB Medical
              System
            </span>
            . {t("p10")} <span className="font-bold">{t("p11")}</span>{" "}
            {t("p12")}
          </p>
          <p className="text-xl font-medium leading-7 mt-6">{t("p13")}</p>
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
