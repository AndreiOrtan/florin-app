"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import NavigationLink from "../../components/NavigationLink";

export default function ShockwaveTherapy() {
  return (
    <div className="flex flex-col items-center my-4 w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">Shockwave Therapy</h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/fizioterapie/shockwave-therapy/enpuls"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/shockwave-therapy/enPuls.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  enPuls
                </div>
                <p className="text-xs">
                  Efficient, easy & mobile: Fight the pain with Radial Shockwave
                  Therapy – up to 22 Hz.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/fizioterapie/shockwave-therapy/enpulspro"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/shockwave-therapy/enPulsPro.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  enPulsPro
                </div>
                <p className="text-xs">
                  Innovative ballistic high-tech device with up to two
                  handpieces & powerful Softshot Technology.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/fizioterapie/shockwave-therapy/enshock"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/fizioterapiePhotos/shockwave-therapy/enShock.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  enShock
                </div>
                <p className="text-xs">
                  enShock sets new standards in therapy with focused shock
                  waves.
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
            Laser therapy – Achieve therapeutic success with the speed of light
          </h2>
          <img
            src="/fizioterapiePhotos/shockwave-therapy/man.jpeg"
            alt=""
            className="rounded-lg mb-2"
          />
          <h2 className="mb-4">
            A projectile accelerated in the handpiece generates a mechanical
            pressure wave, which is transferred to the human body by an
            applicator head and which radiates out in the tissue. The mechanical
            energy is absorbed by the tissue and decreases as the distance from
            the application site increases. The mechanical stress triggers
            reactions in the tissue that have a positive influence on a wide
            range of orthopedic and neurological conditions:
          </h2>
          <ul className="list-disc ml-6 mb-4">
            <li> Insertion tendinopathy</li>
            <li> Tendon problems</li>
            <li> Chronic inflammation</li>
            <li> Hypertonic muscle systems</li>
            <li> Myofascial syndromes</li>
            <li> Hemotoma treatments</li>
          </ul>
          <p>
            Successful treatment has been conducted and documented in all these
            areas. This is an impressive confirmation of the efficacy of this
            easy-to-use therapeutic procedure and shows that a wide range of
            additional indications can also be treated.
          </p>
        </div>
      </div>

      <div className="w-full mt-8">
        <div className="w-9/12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Focused shock wave therapy: Proven to be highly effective
          </h2>
          <h2>
            In the most common indications in orthopaedic practice, therapy with
            focused shock waves has quick and lasting effects.
          </h2>
          <div>
            <h2 className="font-semibold">Studies show</h2>

            <ul className="list-disc ml-6 mb-4">
              <li>
                long-term pain relief, often even during or immediately after
                the treatment,
              </li>
              <li>
                a noticeably positive effect on inflammatory reactions in
                musculoskeletal discomfort/conditions,
              </li>
              <li>
                very good effects on bone healing, especially also in the
                treatment of nonhealing fractures and pseudoarthroses
              </li>
              <li>
                as well as in the elimination of calcification in tendons, for
                example, in the case of shoulder calcification.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
