"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Physys() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery1.png",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery2.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery3.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery4.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery5.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery6.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery7.jpeg",
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-9/12 py-4">
        <div className="flex flex-col items-center">
          <div>
            <header className="py-4">
              <div className="container mx-auto px-4">
                <h1 className="text-blue700 text-3xl font-bold">SonoOne</h1>
              </div>
            </header>
          </div>
          <div className="flex justify-center items-center sm:flex-row flex-col">
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/sonoone/sonoone-machine.png"
              width={150}
              height={100}
              alt="PhySys"
            />
            <div className="text-container my-auto">
              <h1 className="text-4xl font-semibold mb-4">
                {t("cards.card1.card3.header1")}
              </h1>

              <p className="my-auto text-left">{t("cards.card1.card3.p1")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* {APPLIANCE} */}
      <div className="w-full bg-lightgray">
        <div className="mx-auto py-8 flex flex-col items-center">
          <div className="w-9/12">
            <h1 className="text-2xl font-bold mb-4">
              {t("cards.card1.card3.header2")}
            </h1>

            <h2 className="text-xl font-bold mb-2">
              {t("cards.card1.card3.p2")}
            </h2>
            <p>{t("cards.card1.card3.p3")}</p>
            <h2 className="text-xl font-bold mb-2">
              {t("cards.card1.card3.header3")}
            </h2>
            <p>{t("cards.card1.card3.p4")}</p>
            <h2 className="text-xl font-bold mb-2">
              {t("cards.card1.card3.header4")}
            </h2>
            <p>{t("cards.card1.card3.p5")}</p>
            <p className="py-8">{t("cards.card1.card3.header5")}</p>
            <ul className="list-disc list-inside">
              <li>{t("cards.card1.card3.p6")}</li>
              <li>{t("cards.card1.card3.p7")}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <div className="w-9/12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Picture gallery</h2>
          <div className="flex flex-wrap justify-between">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="max-w-[150px]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* {TECHNICAL DATA} */}

      <div className="w-full">
        <div className="mx-auto py-8 px-4 flex justify-center">
          <section className="w-9/12">
            <h2 className="text-2xl font-bold mb-4">Technical data</h2>
            <div>
              <h2 className="text-xl font-bold mb-4">Frequency</h2>
              <p className="mb-4">1 and 3 MHz</p>
              <h3 className="text-lg font-bold mb-2">Ultrasound types</h3>
              <ul className="list-disc ml-6 mb-4">
                <li>Continuous ultrasound</li>
                <li>Pulsed ultrasound, adjustable pulse frequencies</li>
                <li>Pulse Frequencies: 10 Hz, 20 Hz, 50 Hz, 100 Hz</li>
                <li>Duty ratio: 1:1, 1:2, 1:5, 1:10</li>
              </ul>
              <h3 className="text-lg font-bold mb-2">Transducer surface</h3>
              <p className="mb-4">5 cm², AER = 3 cm²</p>
              <h3 className="text-lg font-bold mb-2">Intensity</h3>
              <p className="mb-4">Max. 3 W/cm²</p>
              <h3 className="text-lg font-bold mb-2">Intensity levels</h3>
              <p className="mb-4">
                0.1 W/cm² to 3 W/cm² in intervals of 0.1 W/cm²
              </p>
              <h3 className="text-lg font-bold mb-2">
                Number of ultrasound transducer connections
              </h3>
              <p className="mb-4">1</p>
              <h3 className="text-lg font-bold mb-2">
                Dimensions (LxWxH) / Weight
              </h3>
              <p className="mb-4">23.8 cm x 13.8 cm x 9.5 cm / 1 kg</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
