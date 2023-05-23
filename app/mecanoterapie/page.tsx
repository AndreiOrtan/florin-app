import Link from "next/link";
import React from "react";
import Image from "next/image";

const Mecanoterapie = () => {
  return (
    <div className="flex flex-col items-center my-4 w-full px-4">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            Mechanotherapy Equipment
          </h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12">
        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <Link href="/fizioterapie/electro-ultrasound" className="relative">
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/electro-sound.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  Masini Isokinetice
                </div>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Doloremque, inventore.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <Link href="/fizioterapie/electro-ultrasound" className="relative">
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/electro-sound.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  Dinamometre digitale Isokinetice
                </div>
                <p className="text-xs">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Placeat commodi amet pariatur in praesentium maxime.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mecanoterapie;
