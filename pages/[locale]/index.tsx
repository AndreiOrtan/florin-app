import { useTranslations } from "next-intl";
import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";
import Carrousel from "@/components/Carousel";
import AnimatedContent from "@/components/AnimatedContent";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <Carrousel />

      <div className="mx-auto py-10">
        <div className="w-9/12 mx-auto text-gray800">
          <div className="flex sm:flex-row flex-col justify-around mt-8 mb-16 sm:mx-24">
            <AnimatedContent direction="XL">
              <div className="flex flex-col justify-center items-center w-[200px] h-[200px] mx-auto border-double border rounded-md shadow-lg">
                <img
                  src="/noun-innovative-2338321 (1).png"
                  alt=""
                  className="w-[85px] rounded-full"
                />
                <p className="font-medium text-sm mt-4 text-center">
                  {t("p2")}
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent direction="YB">
              <div className="flex flex-col justify-center items-center w-[200px] sm:my-0 my-8 mx-auto h-[200px] border-double border rounded-md shadow-lg">
                <img
                  src="/noun-best-quality-2041554.png"
                  alt=""
                  className="w-[85px] rounded-full"
                />
                <p className="font-medium text-sm mt-4 text-center">
                  {t("p3")}
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent direction="XR">
              <div className="flex flex-col justify-center items-center mx-auto w-[200px] h-[200px] border rounded-md shadow-lg">
                <img
                  src="/noun-setting-2225559.png"
                  alt=""
                  className="w-[85px] rounded-full  "
                />
                <p className="font-medium text-sm mt-4 text-center">
                  {t("p4")}
                </p>
              </div>
            </AnimatedContent>
          </div>

          <AnimatedContent direction="XL">
            <h1 className="text-3xl font-normal mb-6">
              {t("p1")} <span className="font-bold"> {t("n1")}</span>
            </h1>
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
          </AnimatedContent>
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
