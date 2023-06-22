import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useTranslations } from "next-intl";

export default function ShockwaveTherapy({ locale }: { locale: string }) {
  const t = useTranslations("mecanoterapie");
  return (
    <MecanoLayout>
      <div className="flex flex-col items-center mt-4 text-gray600 w-full">
        <header className="py-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-blue700 text-3xl font-bold">
              {t("card1Description")}
            </h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900 ">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r18`}
              className="relative"
            >
              <div className="w-full min-h-[480px] ">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r18.png"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card1.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li>{t("masiniIso.card1.li1")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r31`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r31.jpeg"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card2.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li> {t("masiniIso.card2.li1")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r17`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r17.jpeg"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card3.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li> {t("masiniIso.card3.li1")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r14`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r14.jpeg"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card4.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li> {t("masiniIso.card4.li1")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r10`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r10.jpeg"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card5.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li> {t("masiniIso.card5.li1")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r7`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r7.jpeg"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card6.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li> {t("masiniIso.card6.li1")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r3`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r3.jpeg"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card7.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li>{t("masiniIso.card7.li1")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r27`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r27.jpeg"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card8.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li>{t("masiniIso.card8.li1")}</li>
                    <li>{t("masiniIso.card8.li2")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r11`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r11.jpeg"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card9.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li>{t("masiniIso.card9.li1")}</li>
                    <li>{t("masiniIso.card9.li2")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r16`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r16.jpeg"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card10.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li>{t("masiniIso.card10.li1")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r6sl`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r6sl.jpeg"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card11.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li>{t("masiniIso.card11.li1")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r12e`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r12e.png"
                  className="w-full h-[210px]"
                  alt="Any Text"
                  width={150}
                  height={100}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card12.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li className="text-xs">{t("masiniIso.card12.li1")}</li>
                    <li className="text-xs"> {t("masiniIso.card12.li2")}</li>
                    <li className="text-xs"> {t("masiniIso.card12.li3")}</li>
                    <li className="text-xs"> {t("masiniIso.card12.li4")}</li>
                    <li className="text-xs"> {t("masiniIso.card12.li5")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r32`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r32.png"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card13.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li>{t("masiniIso.card13.li1")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r8`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r8.jpeg"
                  className="w-full h-[250px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card14.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li>{t("masiniIso.card14.li1")}</li>
                    <li>{t("masiniIso.card14.li2")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r5`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r5.png"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card15.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li>{t("masiniIso.card15.li1")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r19`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r19.png"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card16.h")}
                  </div>
                  <ul className="list-disc ml-4 mb-4 text-gray900">
                    <li>{t("masiniIso.card16.li1")}</li>
                  </ul>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r1000`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r1000.png"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card17.h")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>
          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/r1000`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r1000.png"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card18.h")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>
          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100 text-blue700 hover:text-gray900">
            <Link
              href={`/${locale}/mecanoterapie/masini-isokinetice-mtt/rr28`}
              className="relative"
            >
              <div className="w-full min-h-[480px]">
                <Image
                  src="/mecanoterapie/masini-isokinetice/rr28.jpeg"
                  className="w-full h-[300px]"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-base mb-1">
                    {t("masiniIso.card19.h")}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>
        </div>
      </div>
    </MecanoLayout>
  );
}
import { GetStaticPropsContext } from "next";
import path from "path";
import { readFile } from "fs/promises";
import MecanoLayout from "@/components/MecanoLayout";

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
