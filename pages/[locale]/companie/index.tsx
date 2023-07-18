import { useTranslations } from "next-intl";
import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";
import PhysioLayout from "@/components/PhysioLayout";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <div className="flex items-center flex-col">
        <div className="w-full">
          <img
            src="/scott-graham-OQMZwNd3ThU-unsplash.jpg"
            alt="Zimmer"
            className="w-full sm:h-[380px] h-[200px] opacity-95 "
          />
        </div>
        <div className="mx-auto py-10">
          <div className="w-9/12 mx-auto text-gray800">
            <h1 className="text-3xl font-bold mb-6">Despre noi</h1>
            <p className="text-xl font-light leading-7 mt-6">
              Suntem dedicați să furnizăm soluții și echipamente medicale de
              ultimă generație, care să sprijine profesioniștii din domeniul
              sănătății în oferirea celei mai bune îngrijiri pacienților.
            </p>
            <p className="text-xl font-light leading-7 mt-2">
              La <span className="font-bold">Suhard Biomedical</span>, ne-am
              concentrat pe selectarea celor mai fiabile și inovatoare produse
              medicale disponibile pe piață. Suntem{" "}
              <span className="font-bold">distribuitori unici in Romania</span>{" "}
              pentru cu cei mai reputați producători de aparatura medicală. Gama
              noastră include echipamente de diagnostic cu inteligență
              artificială, mașini isokinetice, combine de fizioterapie si
              dispozitive de estetica medicală. Partenerii nostrii de top sunt:{" "}
              <span className="font-bold">
                Zimmer Medizin Systeme, Minato Medical și MKB Medical System
              </span>
              . Oferim servicii de{" "}
              <span className="font-bold">
                consultanță, instalare, mentenanță și instruire
              </span>{" "}
              pentru produsele noastre.
            </p>
          </div>
        </div>
        <div className="mx-auto py-10 bg-lightgray">
          <div className="w-9/12 mx-auto text-gray800">
            <div className="flex">
              <div>
                <p className="text-xl font-light leading-7 mt-6">
                  Ești o persoană energică, orientată către rezultate, cu
                  abilități excelente de comunicare și negociere și o pasiune
                  pentru domeniul medical ?
                </p>
                <p className="text-xl font-light leading-7">
                  In acest caz,{" "}
                  <span className="font-bold">Suhard Biomedical</span> este
                  locul în care să-ți dezvolți o carieră de succes în vânzări.
                  Alătură-te echipei noastre și fii parte dintr-o misiune care
                  face o diferență reală în lumea sănătății! Aplică acum și ia
                  parte la viitorul aparatelor medicale!
                </p>
              </div>
              <img
                src="/poza cariere.jpg"
                alt="cariera"
                className="w-[250px] rounded-lg"
              />
            </div>
            <p className="text-xl font-light leading-7">
              Oferim un mediu de lucru flexibil și avantaje competitive, care
              includ pachete de compensații atractive, comisioane și bonusuri în
              funcție de performanță, și posibilitatea de a-ți gestiona propriul
              portofoliu de clienți și de a-ți stabili propriul ritm de lucru.
            </p>
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
