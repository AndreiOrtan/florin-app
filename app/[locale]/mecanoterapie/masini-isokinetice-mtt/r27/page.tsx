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
            {t("masiniIso.card8.h")}
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r27.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16 mt-8 sm:mt-0">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">120 X 160 X 196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">200 X 160 X 196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">20 X 10 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">280 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">{t("masiniIso.card8.p1")}</h1>
          <h1 className="font-medium mb-2">{t("masiniIso.card8.p2")}</h1>
          <h1 className="font-medium mb-2">{t("masiniIso.card8.p3")}</h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <div>
              <p>
                MUŞCHI PRINCIPALI:{" "}
                <span className="font-light">ILIOPSOAS.</span>
              </p>
              <p>
                MUŞCHI ACCESORI:{" "}
                <span className="font-light">{t("masiniIso.card8.p4")}</span>
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r27/target1.png"
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
            <div className="flex sm:flex-row flex-col justify-between items-center w-full my-8">
              <div className="text-center">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r27/use1.png"
                  alt="r18"
                  height={150}
                  width={150}
                  className="rounded-lg mx-auto py-4"
                />
                <p className="font-bold">{t("masiniIso.card8.p5")}</p>
              </div>
              <div className="text-center">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r27/use2.png"
                  alt="r18"
                  height={150}
                  width={120}
                  className="rounded-lg mx-auto py-4"
                />
                <p className="font-bold">{t("masiniIso.card8.p6")}</p>
              </div>
              <div className="text-center">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r27/use3.png"
                  alt="r18"
                  height={150}
                  width={150}
                  className="rounded-lg mx-auto py-4"
                />
                <p className="font-bold">{t("masiniIso.card8.p7")}</p>
              </div>
              <div className="text-center">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r27/use4.png"
                  alt="r18"
                  height={150}
                  width={150}
                  className="rounded-lg mx-auto py-4"
                />
                <p className="font-bold">{t("masiniIso.card8.p8")}</p>
              </div>
            </div>
            <div>
              <p className="py-1">{t("masiniIso.card8.p9")}</p>
              <p className="py-1">{t("masiniIso.card8.p10")}</p>

              <p className="py-1">{t("masiniIso.card8.p12")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
