"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function R18() {
  const t = useTranslations("mecanoterapie");
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-blue700 text-3xl font-bold">
            {t("masiniIso.card2.h")}
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r31.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16 mt-8 sm:mt-0">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">190 X 134 X 196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">250 X 134 X 196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">10 X 3+10 X 5 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">400 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">
            {t("masiniIso.card2.p1")}
          </h1>
          <h1 className="font-medium mb-2">{t("masiniIso.card2.p2")}</h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <div>
              <p>
                MUŞCHI PRINCIPALI:{" "}
                <span className="font-light"> {t("masiniIso.card2.p3")}</span>
              </p>
              <p>
                MUŞCHII ACCESORI:{" "}
                <span className="font-light">{t("masiniIso.card2.p4")}</span>
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r31/target1.png"
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
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <div>
              <p className="py-1">{t("masiniIso.card2.p5")}</p>
              <p className="py-1">{t("masiniIso.card2.p6")}</p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r32/use1.png"
              alt="r18"
              height={210}
              width={300}
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
