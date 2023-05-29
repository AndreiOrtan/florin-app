"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavigationLink from "../../components/NavigationLink";
import { useTranslations } from "next-intl";

export default function ShockwaveTherapy() {
  const t = useTranslations("physiotherapy");
  return (
    <div className="flex flex-col items-center mt-4 text-gray600 w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold text-center">
            High Energy Inductive Therapy
          </h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/fizioterapie/high-energy-inductive-therapy/emfieldpro"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/high-energy-inductive-therapy/emFieldPro.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  emFieldPro
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto flex flex-col py-8">
          <h2 className="text-2xl font-semibold mb-4">{t("cards.card4.h1")}</h2>
          <img
            src="/fizioterapiePhotos/high-energy-inductive-therapy/masage1.jpeg"
            alt=""
            className="rounded-lg mb-2"
          />
          <p className="py-2">{t("cards.card4.h2")}</p>
          <p className="py-2">{t("cards.card4.h3")}</p>
          <p className="py-2">{t("cards.card4.h4")}</p>
        </div>
      </div>

      <div className="w-full bg-blue700 text-white font-medium">
        <div className="w-9/12 mx-auto flex flex-col py-8">
          <p className="py-2">{t("cards.card4.h5")}</p>
          <p className="py-2">{t("cards.card4.h6")}</p>
          <p className="py-2">{t("cards.card4.h7")}</p>
          <img
            src="/fizioterapiePhotos/high-energy-inductive-therapy/magent.jpeg"
            alt=""
            className="rounded-lg mb-2"
          />
          <p className="py-2">{t("cards.card4.h8")}</p>
          <p className="py-2">{t("cards.card4.h9")}</p>
        </div>
      </div>
    </div>
  );
}
