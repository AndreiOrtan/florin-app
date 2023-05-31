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
            {t("masiniIso.card10.h")}
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r16.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16 mt-8 sm:mt-0">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">120 X 110 X 196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">160 X 110 X 196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">10 X 10 KG / 5 X 5 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">280 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">{t("masiniIso.card10.p1")}</h1>
          <h1 className="font-medium mb-2">{t("masiniIso.card10.p2")}</h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <div>
              <div className="my-2">
                <h2>{t("masiniIso.card10.p3")} </h2>
                <p>
                  MUŞCHI PRINCIPALI:{" "}
                  <span className="font-light">{t("masiniIso.card10.p4")}</span>
                </p>
                <p>
                  MUŞCHI ACCESORI:{" "}
                  <span className="font-light">{t("masiniIso.card10.p5")}</span>
                </p>
              </div>
              <div className="my-2">
                <h2>{t("masiniIso.card10.p6")}</h2>
                <p>
                  MUŞCHI PRINCIPALI:{" "}
                  <span className="font-light">{t("masiniIso.card10.p7")}</span>
                </p>
                <p>
                  MUŞCHI ACCESORI:{" "}
                  <span className="font-light">{t("masiniIso.card10.p8")}</span>
                </p>
              </div>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r16/target1.png"
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
            <div className="flex sm:flex-row flex-col justify-between items-center w-full my-8 ">
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r16/use1.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4 "
                />
                <p className="font-bold">{t("masiniIso.card10.p9")}</p>
              </div>
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r16/use2.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4"
                />
                <p className="font-bold">{t("masiniIso.card10.p10")}</p>
              </div>
            </div>
            <div>
              <p className="py-1">{t("masiniIso.card10.p11")}</p>
              <p className="py-1">{t("masiniIso.card10.p12")}</p>
              <p className="py-1">{t("masiniIso.card10.p13")}</p>
              <p className="py-1">{t("masiniIso.card10.p14")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
