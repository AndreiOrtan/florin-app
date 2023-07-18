import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Physys() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery1.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery2.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery3.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery4.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery5.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery6.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery7.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery8.jpeg",
  ];

  return (
    <PhysioLayout>
      <div className="flex flex-col items-center w-full">
        <div className="w-9/12 py-4">
          <div className="flex flex-col items-center ">
            <div>
              <header className="py-4">
                <div className="container mx-auto px-4">
                  <h1 className="text-3xl font-bold">Soleo SonoStim</h1>
                </div>
              </header>
            </div>
            <div className="flex justify-center items-center flex-col sm:flex-row">
              <Image
                src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/soleo-sonostim-machine.png"
                width={150}
                height={100}
                alt="PhySys"
              />
              <div className="text-container my-8">
                <h1 className="text-4xl font-semibold mb-4">
                  {t("cards.card1.card2.header1")}
                </h1>

                <p className="my-auto text-left">{t("cards.card1.card2.p1")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* {APPLIANCE} */}
        <div className="w-full bg-lightgray">
          <div className="mx-auto py-8 flex flex-col items-center w-9/12">
            <div className="w-full py-4">
              <h1 className="text-2xl font-bold mb-4">
                {t("cards.card1.card2.header2")}
              </h1>
              <p className="mb-4">{t("cards.card1.card2.p2")}</p>
              <h2 className="text-xl font-bold mb-2">
                {t("cards.card1.card2.header3")}
              </h2>
              <ul className="list-disc list-inside">
                <li>{t("cards.card1.card2.p3")}</li>
                <li>{t("cards.card1.card2.p4")}</li>
                <li> {t("cards.card1.card2.p5")}</li>
              </ul>

              <h2 className="text-xl font-bold mb-2">
                {t("cards.card1.card2.header4")}
              </h2>
              <p className="mb-4">{t("cards.card1.card2.p6")}</p>

              <h2 className="text-xl font-bold mb-2">
                {" "}
                {t("cards.card1.card2.header5")}
              </h2>
              <p className="mb-4">{t("cards.card1.card2.p7")}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {t("cards.card1.card2.header6")}
              </h2>
              <ul className="list-disc list-inside">
                <li>{t("cards.card1.card2.p8")}</li>
                <li> {t("cards.card1.card2.p9")}</li>
                <li> {t("cards.card1.card2.p10")}</li>
                <li> {t("cards.card1.card2.p11")}</li>
              </ul>
              <p className="mt-4">{t("cards.card1.card2.p12")}</p>
              <p className="my-2">{t("cards.card1.card2.p13")}</p>
            </div>
            <div className="flex flex-wrap justify-center">
              <Image
                src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/MAN1.jpeg"
                width={200}
                height={200}
                alt="man"
                className="m-1"
              ></Image>
              <Image
                src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/MAN2.jpeg"
                width={200}
                height={200}
                alt="man"
                className="m-1"
              ></Image>
              <Image
                src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/MAN3.jpeg"
                width={200}
                height={200}
                alt="man"
                className="m-1"
              ></Image>
              <Image
                src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/MAN4.jpeg"
                width={200}
                height={200}
                alt="man"
                className="m-1"
              ></Image>
            </div>
          </div>
        </div>
        <hr />

        <div className="flex justify-center py-8">
          <div className="w-9/12">
            <h2 className="text-xl font-bold mb-2">
              {t("cards.card1.card2.header7")}
            </h2>
            <p className="mb-4">{t("cards.card1.card2.p14")}</p>
            <p>{t("cards.card1.card2.p15")}</p>
          </div>
        </div>

        <div className="w-full py-8">
          <div className="w-9/12 mx-auto">
            <h1 className="text-2xl font-semibold">
              {t("cards.card1.card2.header8")}
            </h1>

            <h2 className="text-xl font-normal mb-4">
              {t("cards.card1.card2.header9")}
            </h2>

            <p>{t("cards.card1.card2.p16")}</p>

            <ul className="list-disc ml-6 mb-4">
              <li>{t("cards.card1.card2.p18")}</li>
              <li> {t("cards.card1.card2.p17")}</li>
            </ul>
            <div className="flex justify-between">
              <img
                src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/practical1.jpeg"
                alt="man"
                className="sm:w-[200px] w-[150px] rounded-lg"
              />

              <img
                src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/practical2.jpeg"
                alt="man"
                className="sm:w-[200px] w-[150px] rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="w-full py-10 bg-lightgray">
          <div className="w-9/12 mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              {t("pictureGallery")}
            </h2>
            <div className="flex flex-wrap justify-between">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="max-w-[110px] sm:max-w-[150px] rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>

        {/* {{t("technicalData")}} */}

        <div className="w-full">
          <div className="mx-auto py-8 px-4 flex justify-center">
            <section className="w-9/12">
              <div>
                <h2 className="text-xl font-bold mb-4">{t("technicalData")}</h2>
                <h3 className="text-lg font-bold mb-2">
                  {t("cards.card1.card2.t1")}
                </h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>{t("cards.card1.card2.t2")}</li>
                  <li>{t("cards.card1.card2.t3")}</li>
                </ul>
                <h3 className="text-lg font-bold mb-2">
                  {t("cards.card1.card2.t4")}
                </h3>
                <ul className="list-disc ml-6 mb-4">
                  <li>{t("cards.card1.card2.t5")}</li>
                  <li>{t("cards.card1.card2.t6")}</li>
                </ul>
                <p className="mb-4">{t("cards.card1.card2.t7")}</p>
                <h3 className="text-lg font-bold mb-2">Electrostimulation</h3>
                <p className="mb-4">{t("cards.card1.card2.t8")}</p>
                <h3 className="text-lg font-bold mb-2">
                  {t("cards.card1.card2.t9")}
                </h3>
                <p className="mb-4">{t("cards.card1.card2.t10")}</p>
                <p className="mb-4">{t("cards.card1.card2.t11")}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PhysioLayout>
  );
}

import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";
import PhysioLayout from "@/components/PhysioLayout";

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
