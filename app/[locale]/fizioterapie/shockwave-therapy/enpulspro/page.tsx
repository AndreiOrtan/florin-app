"use client";
import React from "react";
import { useTranslations } from "next-intl";

export default function enPulsPro() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery1.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery2.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery3.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery4.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery5.jpeg",
  ];
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">enPulsPro</h1>
        </div>
      </header>
      <div className="flex w-9/12 mb-8 flex-col sm:flex-row items-center justify-center">
        <img
          src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/en-puls-pro-machine.png"
          alt="PhySys"
          className="w-[150px]"
        />
        <div className="text-container my-8 pr-12">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card3.card2.p1")}
          </h1>

          <p className="my-auto text-left text-lg">
            {t("cards.card3.card2.p2")}
          </p>
        </div>
      </div>

      <div className="bg-lightgray w-full py-8">
        <div className="w-9/12 mx-auto">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card3.card2.p3")}
          </h1>
          <h2 className="py-1">{t("cards.card3.card2.p4")}</h2>
          <h2 className="py-1">{t("cards.card3.card2.p5")}</h2>
          <h2 className="py-1">{t("cards.card3.card2.p6")}</h2>
          <div className="flex py-4 flex-col sm:flex-row">
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/modern1.jpeg"
              alt="PhySys"
              className="rounded-lg w-[350px]"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/modern2.jpeg"
              alt="PhySys"
              className="rounded-lg w-[350px] sm:ml-16"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/modern3.jpeg"
              alt="PhySys"
              className="rounded-lg w-[350px] sm:ml-16"
            />
          </div>
        </div>
      </div>

      <div className=" w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card3.card2.p7")}
          </h1>

          <div className="flex flex-col sm:flex-row">
            <div className="text-justify">
              <p className="py-1">{t("cards.card3.card2.p8")}</p>
              <p className="py-1">{t("cards.card3.card2.p9")}</p>
              <p className="py-1">{t("cards.card3.card2.p10")}</p>
            </div>
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/radial1.jpeg" // same photo as enPuls
              alt="PhySys"
              className="w-[350px] rounded-lg sm:ml-8"
            />
          </div>
        </div>
      </div>

      {/* below is the same as enPuls with first <p> changed */}
      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">Appliance</h1>
          <p className="pb-2">
            enPulsPro is ideal as a system for radial shockwave therapy, for
            superficial orthopedic problems such as:
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li className="pb-1">Insertion tendinopathy</li>
            <li className="pb-1"> Tendon problems</li>
            <li className="pb-1"> Chronic inflammation</li>
            <li className="pb-1"> Hypertonic muscle systems</li>
            <li className="pb-1"> Myofascial syndromes</li>
            <li className="pb-1"> Hemotoma treatments </li>
          </ul>
          <div className="flex flex-col sm:flex-row">
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/appliance1.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/appliance2.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg sm:ml-4"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/appliance3.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg sm:ml-4"
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4 py-4">
            {t("cards.card3.card2.p11")}
          </h1>

          <div className="flex flex-col sm:flex-row">
            <div className="text-justify">
              <p className="py-1">{t("cards.card3.card2.p12")}</p>
              <p className="py-1">{t("cards.card3.card2.p13")}</p>
              <p className="py-1">{t("cards.card3.card2.p14")}</p>
              <p className="py-1">{t("cards.card3.card2.p15")}</p>
            </div>
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/pulse1.jpeg" //same photo as enPuls
              alt="PhySys"
              className="w-[350px] rounded-lg ml-8"
            />
          </div>
          <p>{t("cards.card3.card2.p16")}</p>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card3.card2.p17")}
          </h1>
          <p>{t("cards.card3.card2.p18")}</p>
          <p>{t("cards.card3.card2.p19")}</p>
          <div className="flex my-4">
            <div>
              <h2 className="font-bold mb-2">enPuls 2.0</h2>
              <p className="py-0.5">60 mJ</p>
              <p className="py-0.5">90 mJ</p>
              <p className="py-0.5">120 mJ</p>
              <p className="py-0.5">185 mJ</p>
            </div>
            <div className="ml-8">
              <h2 className="font-bold mb-2">Compressed-air RSWT-System</h2>
              <p className="py-0.5">1 bar</p>
              <p className="py-0.5">2 bar</p>
              <p className="py-0.5">3 bar</p>
              <p className="py-0.5">5 bar</p>
            </div>
          </div>
          <p>{t("cards.card3.card2.p20")}</p>
          <p>{t("cards.card3.card2.p21")}</p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto my-8">
          <h1 className="text-4xl font-semibold mb-4">
            {t("cards.card3.card2.p22")}
          </h1>
          <p>{t("cards.card3.card2.p23")}</p>
          <p>{t("cards.card3.card2.p24")}</p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto my-8">
          <h1 className="text-4xl font-semibold mb-5">VAS-Scale</h1>
          <p>{t("cards.card3.card2.p25")}</p>
          <img
            src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/vas1.jpeg"
            alt="PhySys"
            className="w-[350px] rounded-lg my-4"
          />
        </div>
      </div>

      <div className="w-full py-10 bg-lightgray">
        <div className="w-9/12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Picture gallery</h2>
          <div className="flex flex-wrap justify-between">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-[150px] rounded-lg sm:m-2"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-blue700">
        <div className="flex flex-col items-center py-24">
          <div className="videos flex flex-col sm:flex-row">
            <iframe
              src="https://www.youtube.com/embed/rpnrDzWU6yk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/Qvb4XzCUcwo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h2 className="text-2xl font-semibold mb-4">Technical data</h2>
          <div className="flex">
            <div>
              <h2 className="font-semibold text-lg pb-0.5"> Technology</h2>
              <p className="mb-4">
                Compressor free ballistic radial shockwave therapy-system with
                electromagnetic generator as projectile accelerator
              </p>
              <h2 className="font-semibold text-lg pb-0.5">
                Power Levels / Energy
              </h2>
              <ul className="list-disc ml-6 mb-4">
                <li>60 to 185 mJ (equivalent to 1-5 bar)</li>
                <li>
                  Can be precisely set in 10 mJ intervals (depending on the
                  frequency of 60 mJ to max. 185 mJ)
                </li>
              </ul>
              <h2 className="font-semibold text-lg pb-0.5">Modes</h2>
              <ul className="list-disc ml-6 mb-4">
                <li>Frequencies from 1 to 22 Hz</li>
                <li>3 Burst modes (4 / 8 / 12 pulses)</li>
              </ul>
              <h2 className="font-semibold text-lg pb-0.5">Programmes</h2>
              <p className="mb-4">7 preset programmes, adjustable</p>
              <h2 className="font-semibold text-lg pb-0.5">Protocols</h2>
              <p className="mb-4">
                More than 25 illustrated preset treatment recommendations
              </p>
              <h2 className="font-semibold text-lg pb-0.5">Controls</h2>
              <ul className="list-disc ml-6 mb-4">
                <li> 12” Colour touch-screen for all software operations</li>
                <li>Rotary control for Energy level and for frequency</li>
                <li>Handpiece operation with multi-directional footswitch</li>
              </ul>
              <h2 className="font-semibold text-lg pb-0.5">Memory / Update</h2>
              <ul className="list-disc ml-6 mb-4">
                <li> SD-card for indication menu memory</li>
                <li> Favourites and adapted programmes (120 places).</li>
                <li> Error log / Firmware-Update</li>
              </ul>
            </div>
            <div className="ml-8">
              <h2 className="font-semibold text-lg pb-0.5"> Dimensions</h2>
              <p className="mb-4"> 20 x 35 x 30 cm (L/W/H) </p>
              <h2 className="font-semibold text-lg pb-0.5"> Weight</h2>
              <p className="mb-4"> 3.8 kg (without handpiece) </p>
              <h2 className="font-semibold text-lg pb-0.5">
                Shockwave Applicator Hand Piece
              </h2>

              <ul className="list-disc ml-6 mb-4">
                <li>
                  Ergonomic, with anodized aluminium casing and fan cooling
                </li>

                <li> Dimensions 23 cm length, 5 cm diameter (max.)</li>
                <li> Weight 0.85 kg (without cable)</li>
                <li> Lifetime Minimum warranty for 2.000.000 shocks</li>
                <li>
                  Maintenance Only necessary when performance drops, not
                  obligatory at a certain amount of shocks. Exchange of
                  generator by service
                </li>
                <li>Applicator heads Diameters of 6 / 15 (2 pieces) / 25 mm</li>
                <li> Tool free exchange possibility</li>
                <li> Minimum warranty of 150.000 shocks per applicator head</li>
              </ul>

              <h2 className="font-semibold text-lg pb-0.5">
                Power Consumption
              </h2>
              <p className="py-1">100 – 240 V / 50/60 Hz, max. 250 VA </p>
              <p className="mb-4">220 V / 60 Hz </p>

              <h2 className="font-semibold text-lg pb-0.5">Optional</h2>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  Trolley SysCart incl. holder for 2 handpieces and lotion
                </li>

                <li> Tray for applicators</li>
                <li> 2nd Handpiece</li>
                <li> Swivel base</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="w-full"><div className="w-9/12 mx-auto"></div></div>
