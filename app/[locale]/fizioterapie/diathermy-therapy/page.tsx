"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavigationLink from "../../components/NavigationLink";

export default function ShockwaveTherapy() {
  return (
    <div className="flex flex-col items-center mt-4 text-gray600 w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">Diathermy Therapy</h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/fizioterapie/diathermy-therapy/thermotk"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/diathermy-therapy/thermotk.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  ThermoTK
                </div>
                <p className="text-xs">
                  Deep Heating through high-frequency electrotherapy – Essential
                  for modern physiotherapy
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/fizioterapie/diathermy-therapy/micropro"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/diathermy-therapy/micropro.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  MicroPro
                </div>
                <p className="text-xs">
                  Microwave Therapy – the gentle heat therapy
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto flex flex-col py-8">
          <h2 className="text-2xl font-semibold mb-4">
            Now you can experience the power of High Engergy Inductive Therapy
          </h2>
          <img
            src="/fizioterapiePhotos/diathermy-therapy/diathermy1.jpeg"
            alt=""
            className="rounded-lg mb-2"
          />
          <p className="py-2">
            Proven therapy and state of the art as well – Diathermy is easy to
            use and comfortable for patients. Diathermy Therapy is determined
            for the support of healing processes in the tissue. Several modes of
            action are used here:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li> Pain relief</li>
            <li> Muscle relaxation</li>
            <li>Improvement in function</li>
            <li>Increase in mobility</li>
            <li>Stimulation of blood circulation </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
