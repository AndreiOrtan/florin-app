import { useTranslations } from "next-intl";
import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";
import AnimatedContent from "@/components/AnimatedContent";

export default function Home() {
  const t = useTranslations("companie");

  return (
    <>
      <div className="flex items-center flex-col">
        <div className="w-full">
          <img
            src="/Office-Hands.jpeg"
            alt="Zimmer"
            className="w-full sm:h-[380px] h-[200px] opacity-95 "
          />
        </div>
        <div className="mx-auto py-10">
          <div className="w-9/12 mx-auto text-gray800">
            <AnimatedContent direction="XL">
              <h1 className="text-3xl font-bold mb-6">{t("p1")}</h1>
              <p className="text-justify text-xl font-light leading-7 mt-6">
                {t("p2")}
              </p>
              <p className="text-justify text-xl font-light leading-7 mt-2">
                {t("p3")} <span className="font-bold">Suhard Biomedical</span>,{" "}
                {t("p4")} <span className="font-bold">{t("p5")}</span> {t("p6")}{" "}
                <span className="font-bold">
                  Zimmer Medizin Systeme, Minato Medical {t("p7")} MKB Medical
                  System
                </span>
                . {t("p8")} <span className="font-bold">{t("p9")}</span>{" "}
                {t("p10")}
              </p>
            </AnimatedContent>
          </div>
        </div>
        <div className="mx-auto py-10 bg-lightgray">
          <div className="w-9/12 mx-auto text-gray800">
            <AnimatedContent direction="XL">
              <h1 className="text-3xl font-bold mb-6">{t("p16")}</h1>
              <div className="flex flex-col sm:flex-row items-center">
                <div className="sm:order-1 order-2 mb-4">
                  <p className="text-justify text-xl font-light leading-7 mt-6">
                    {t("p11")}
                  </p>
                  <p className="text-justify text-xl font-light leading-7">
                    {t("p12")}{" "}
                    <span className="font-bold">Suhard Biomedical</span>{" "}
                    {t("p13")}
                  </p>
                </div>
                <img
                  src="/poza cariere.jpg"
                  alt="cariera"
                  className="w-[250px] rounded-lg order-1 sm:order-2 sm:ml-4"
                />
              </div>
              <p className="text-justify text-xl font-light leading-7">
                {t("p14")}
              </p>
            </AnimatedContent>
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
