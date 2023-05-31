"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function R18() {
  const t = useTranslations("mecanoterapie");
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-blue700 text-3xl font-bold">
            {t("masiniIso.card13.h")}
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r32.png"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16 mt-8 sm:mt-0">
              <h2 className="font-semibold">GREUTATE TOTALĂ:</h2>
              <p className="font-light">150kg</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">L-160 X L-125 X H-170 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">L-180 X L-135 X H-170 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">AJUSTABILĂ</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">{t("masiniIso.card13.p1")}</h1>
          <h1 className="font-medium mb-2">{t("masiniIso.card13.p2")}</h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <div>
              <p>
                MUŞCHI PRINCIPALI:{" "}
                <span className="font-light"> {t("masiniIso.card13.p3")}</span>
              </p>
              <p>
                MUŞCHII ACCESORI:{" "}
                <span className="font-light"> {t("masiniIso.card13.p4")}</span>
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r32/target1.png"
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
              <p className="py-1">{t("masiniIso.card13.p5")}</p>
              <p className="py-1">{t("masiniIso.card13.p6")}</p>
              <p className="py-1">{t("masiniIso.card13.p7")}</p>
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
