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
          <h1 className="text-3xl font-bold mb-6">De ce noi?</h1>
          <div className="flex sm:flex-row flex-col justify-between mt-8 mb-16">
            <div className="flex flex-col justify-center items-center">
              <img
                src="/noun-innovative-2338321 (1).png"
                alt=""
                className="w-[200px] h-[196px] rounded-full p-2 shadow-md"
              />
              <p className="font-light text-xl mt-4">
                Produse medicale de ultimă generație
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src="/noun-best-quality-2041554.png"
                alt=""
                className="w-[200px] h-[196px] rounded-full p-2 shadow-md"
              />
              <p className="font-light text-xl mt-4">
                Distribuitori unici în România
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <img
                src="/noun-setting-2225559.png"
                alt=""
                className="w-[200px] h-[196px] rounded-full  shadow-md"
              />
              <p className="font-light text-xl mt-4">
                Consultanță, instalare, mentenanță și instruire
              </p>
            </div>
          </div>

          <p className="text-xl font-light leading-7">
            La <span className="font-bold">Suhard Biomedical</span>, ne-am
            concentrat pe selectarea celor mai fiabile și inovatoare produse
            medicale disponibile pe piață. Suntem{" "}
            <span className="font-bold">distribuitori unici în România</span>{" "}
            pentru cei mai reputați producători de aparatură medicală destinată
            recuperării și esteticii medicale:{" "}
            <span className="font-bold">
              Zimmer Medizin Systeme, Minato Medical și MKB Medical System
            </span>
            . Oferim servicii de{" "}
            <span className="font-bold">
              consultanță, instalare, mentenanță și instruire
            </span>{" "}
            pentru produsele noastre.
          </p>
          <p className="text-xl font-light leading-7 mt-6">
            Vă invităm să explorați gama noastră variată de produse și să ne
            contactați pentru orice întrebări sau solicitări speciale!
          </p>
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
