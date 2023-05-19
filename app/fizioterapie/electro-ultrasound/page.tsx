"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ElectroAndUltrasound() {
  return (
    <div className="flex flex-col items-center my-4">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            Electro & Ultrasound
          </h1>
        </div>
      </header>
      <div>
        <div className="flex flex-col sm:flex-row">
          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
            <Link
              href="/fizioterapie/electro-ultrasound/physys"
              className="relative"
            >
              <div className="w-full">
                <Image
                  src="/fizioterapiePhotos/electro-ultrasound/physys.jpg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-blue700 text-xl mb-1">
                    PhySys
                  </div>
                  <p className="text-xs">
                    The high-tech treatment centre in a practice orientated
                    system.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
            <Link
              href="/fizioterapie/electro-ultrasound/soleo-sonostim"
              className="relative"
            >
              <div className="w-full">
                <Image
                  src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim.jpg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-blue700 text-xl mb-1">
                    Soleo SonoStim
                  </div>
                  <p className="text-xs">
                    Current stimulation, ultrasound and combination therapy in
                    one device
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>

          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
            <Link
              href="/fizioterapie/electro-ultrasound/sonoone"
              className="relative h-full"
            >
              <div className="w-full">
                <Image
                  src="/fizioterapiePhotos/electro-ultrasound/sonoone.jpg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-blue700 text-xl mb-1">
                    SonoOne
                  </div>
                  <p className="text-xs">Hand-held ultrasound therapy</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>
        </div>
      </div>

      <section className="my-16 flex justify-center">
        <div className="w-9/12">
          <h1 className="mb-8 text-4xl font-semibold leading-none tracking-wide text-gray-900">
            Ultrasound-, Electro- and Combined Therapy
          </h1>

          <div className="">
            <div className="flex sm:flex-row flex-col justify-center mb-4">
              <Image
                src="/fizioterapiePhotos/electro-ultrasound/electro-ultrasound-man.jpeg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
                className="mr-4 rounded-lg"
              />
              <p className="text-lg leading-relaxed ml-1 text-justify">
                Electrotherapy and ultrasound therapy – an important branch of
                physical medicine – today plays an important role in the
                treatment and rehabilitation of many diseases.
              </p>
            </div>
            <div>
              <p className="mb-4 text-lg leading-relaxed text-justify">
                Applications include pain management, muscle therapy, muscle
                rehabilitation, circulation improvement and trophism
                improvement.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-justify">
                In the simulation process, the combined use is highly efficient
                in the treatment of functional disorders, for example in
                connection with myofascial pain syndromes.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-justify">
                Numerous innovations make the Zimmer MedizinSysteme systems the
                perfect therapy partner in your practice: besides special
                programmes for muscle and sports rehabilitation, the patented
                SonoSwing process offers the possibility of determining the
                penetration depth and the site of action of your ultrasound
                therapy yourself.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
