"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Cryotherapy() {
  return (
    <div className="flex flex-col items-center mt-4 text-gray600 w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">Cyrotherapy</h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <Link href="/fizioterapie/cryotherapy/cryomini" className="relative">
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/cryotherapy/cryomini.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  CryoMini
                </div>
                <p className="text-xs">
                  The small Cryo: Pleasant application and rapid onset of
                  efficacy at -10°C
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <Link href="/fizioterapie/cryotherapy/cryo6" className="relative">
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/cryotherapy/cryo6.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">Cryo6</div>
                <p className="text-xs">
                  Constant cooling effect at -30°C allows simultaneous movement
                  therapy
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <Link href="/fizioterapie/cryotherapy/cryo7" className="relative">
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/cryotherapy/cryo7.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">Cryo7</div>
                <p className="text-xs">
                  State of the art cryotherapy with -30°C air.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto flex flex-col py-8">
          <h2 className="text-2xl font-semibold mb-4">Cryotherapy</h2>
          <p className="font-light py-1">
            {" "}
            The healing effect of cold temperatures has been known for
            centuries. Cold therapy is nowadays of great importance in physical
            therapy, sports medicine and also in rheumatology.
          </p>

          <p className="font-light py-1">
            {" "}
            Areas of application are, for example, acute and chronically painful
            conditions of the musculoskeletal system, treatment of muscular
            trigger points in combination with stretching, support of the
            movement therapy through prior cooling and especially, with the
            whole-body cold chamber, inflammatory and degenerative rheumatic
            diseases as well as quicker recovery in competitive sports.
          </p>

          <p className="font-light py-1">
            {" "}
            Minimal consumption costs and outstanding functionality characterise
            the Cryo from Zimmer MedizinSysteme and ensure optimal treatment for
            pain and inflammation.
          </p>

          <p className="font-light py-1">
            {" "}
            Staying in the icelab promises a quality experience and surprises
            with a spontaneous feeling of well-being.
          </p>
        </div>
      </div>
    </div>
  );
}
