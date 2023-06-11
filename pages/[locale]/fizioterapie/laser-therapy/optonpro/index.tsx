import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
export default function OptonPro() {
  const t = useTranslations("physiotherapy");
  const images = [
    "/fizioterapiePhotos/laser-therapy/optonpro/galery1.jpeg",
    "/fizioterapiePhotos/laser-therapy/optonpro/galery2.jpeg",
    "/fizioterapiePhotos/laser-therapy/optonpro/galery3.jpeg",
    "/fizioterapiePhotos/laser-therapy/optonpro/galery4.jpeg",
    "/fizioterapiePhotos/laser-therapy/optonpro/galery5.jpeg",
    "/fizioterapiePhotos/laser-therapy/optonpro/galery6.jpeg",
    "/fizioterapiePhotos/laser-therapy/optonpro/galery7.jpeg",
  ];
  return (
    <PhysioLayout>
      <div className="flex flex-col items-center w-full">
        <div className="w-9/12 py-4">
          <div className="flex flex-col items-center ">
            <div>
              <header className="py-4">
                <div className="container mx-auto px-4">
                  <h1 className="text-blue700 text-3xl font-bold">OptonPro</h1>
                </div>
              </header>
            </div>
            <div className="flex justify-center items-center sm:flex-row flex-col">
              <Image
                src="/fizioterapiePhotos/laser-therapy/optonpro/optonpro-machine.png"
                width={150}
                height={100}
                alt="PhySys"
              />
              <div className="text-container my-8">
                <h1 className="text-4xl font-semibold mb-4">
                  {t("cards.card2.card1.p1")}
                </h1>

                <p className="my-auto text-left">{t("cards.card2.card1.p2")}</p>
                <p className="my-auto text-left">{t("cards.card2.card1.p3")}</p>
                <p className="my-auto text-left">{t("cards.card2.card1.p4")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-10 bg-lightgray">
          <div className="w-9/12 mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              {t("cards.card2.card1.p5")}
            </h2>
            <div className="flex sm:flex-row flex-col">
              <div>
                <p className="py-4">{t("cards.card2.card1.p6")}</p>
                <p className="py-4">{t("cards.card2.card1.p7")}</p>
                <p className="py-4">{t("cards.card2.card1.p8")}</p>
                <p className="py-4">{t("cards.card2.card1.p9")}</p>
              </div>
              <Image
                src="/fizioterapiePhotos/laser-therapy/optonpro/speed-of-light.jpeg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
                className="mr-4 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="w-full py-10">
          <div className="w-9/12 mx-auto flex flex-col mb-16">
            <h1 className="text-2xl font-semibold mb-4">
              {t("cards.card2.card1.p10")}
            </h1>
            <div className="mb-4">
              <h2 className="text-xl font-medium">
                {t("cards.card2.card1.p11")}
              </h2>
              <p>{t("cards.card2.card1.p12")}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-medium">
                {t("cards.card2.card1.p13")}
              </h2>
              <p>{t("cards.card2.card1.p14")}</p>
            </div>
            <div className="mb-4 flex sm:flex-row flex-col">
              <div>
                <h2 className="text-xl font-medium">
                  {t("cards.card2.card1.p15")}
                </h2>
                <p>{t("cards.card2.card1.p16")}</p>
              </div>
              <Image
                src="/fizioterapiePhotos/laser-therapy/optonpro/measurement.jpeg"
                alt="Any Text"
                width={400}
                height={400}
                blurDataURL="URL"
                placeholder="blur"
                className="mr-4 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-medium">
                {t("cards.card2.card1.p17")}
              </h2>
              <p>{t("cards.card2.card1.p18")}</p>
            </div>
          </div>
        </div>

        <div className="w-9/12 mx-auto flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-4">
            {t("cards.card2.card1.p19")}
          </h1>

          <h3 className="text-sm">{t("cards.card2.card1.p20")}</h3>
          <div className="flex my-8 sm:flex-row flex-col">
            <Image
              src="/fizioterapiePhotos/laser-therapy/optonpro/individual.jpeg"
              alt="Any Text"
              width={300}
              height={300}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
            <div className="sm:ml-12">
              <p className="py-6">
                OptonPro 25 Watt – 810 nm | 980 nm | 1064 nm
              </p>
              <p className="py-6">
                OptonPro 15 Watt – 810 nm | 980 nm | 1064 nm
              </p>
              <p className="py-6">OptonPro 10 Watt – 810 nm | 980 nm</p>
            </div>
          </div>
        </div>

        <div className="w-9/12 mx-auto flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-4">
            {t("cards.card2.card1.p21")}
          </h1>

          <div className="flex my-8 flex-col sm:flex-row">
            <div>
              <h2 className="text-xl font-medium mb-4">
                {t("cards.card2.card1.p22")}
              </h2>
              <p>{t("cards.card2.card1.p23")}</p>
              <p>{t("cards.card2.card1.p24")}</p>
            </div>
            <Image
              src="/fizioterapiePhotos/laser-therapy/optonpro/feature.jpeg"
              alt="Any Text"
              width={550}
              height={550}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
          </div>
        </div>

        <div className="w-9/12 mx-auto flex flex-col mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-medium">
              {t("cards.card2.card1.p25")}
            </h2>
            <p>{t("cards.card2.card1.p26")}</p>
            <p>{t("cards.card2.card1.p27")}</p>
          </div>
        </div>

        <div className="w-9/12 mx-auto flex flex-col mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-medium">
              {t("cards.card2.card1.p28")}
            </h2>
            <p>{t("cards.card2.card1.p29")}</p>
          </div>
        </div>

        <div className="w-full py-10 bg-lightgray">
          <div className="w-9/12 mx-auto my-8">
            <h2 className="text-2xl font-semibold mb-4">
              {t("cards.card2.card1.p30")}
            </h2>

            <div className="mb-12">
              <h1 className="text-lg font-semibold">
                {t("cards.card2.card1.p31")}
              </h1>
              <p className="mb-4">{t("cards.card2.card1.p32")}</p>
              <Image
                src="/fizioterapiePhotos/laser-therapy/optonpro/interface1.jpeg"
                alt="Any Text"
                width={400}
                height={400}
                blurDataURL="URL"
                placeholder="blur"
                className="mr-4 rounded-lg"
              />
            </div>
            <div className="mb-12">
              <h1 className="text-lg font-semibold">
                {t("cards.card2.card1.p33")}
              </h1>
              <p className="mb-4">{t("cards.card2.card1.p34")}</p>
              <Image
                src="/fizioterapiePhotos/laser-therapy/optonpro/interface2.jpeg"
                alt="Any Text"
                width={400}
                height={400}
                blurDataURL="URL"
                placeholder="blur"
                className="mr-4 rounded-lg"
              />
            </div>
            <div className="mb-12">
              <h1 className="text-lg font-semibold">
                {t("cards.card2.card1.p35")}
              </h1>
              <p>{t("cards.card2.card1.p36")}</p>
              <ul className="list-disc ml-6 mb-4">
                <li>{t("cards.card2.card1.p37")}</li>
                <li>{t("cards.card2.card1.p38")}</li>
              </ul>
              <Image
                src="/fizioterapiePhotos/laser-therapy/optonpro/interface1.jpeg"
                alt="Any Text"
                width={400}
                height={400}
                blurDataURL="URL"
                placeholder="blur"
                className="mr-4 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="w-full py-10">
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
                  className="max-w-[150px]"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full bg-blue700">
          <div className="flex flex-col items-center py-24">
            <div className="videos flex flex-col sm:flex-row">
              <iframe
                src="https://www.youtube.com/embed/0yzVwaB0KEQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/nMdYbLKdI20"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="w-full py-10">
          <div className="w-9/12 mx-auto flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {t("technicalData")}
              </h2>
              <h2 className="text-lg font-semibold mb-1">OptonPro 10 W</h2>
              <p> Laser diodes: 810 nm / 980 nm</p>
              <p> Emitted output: Max. 10 W</p>
              <p>Power consumption: 1,0 A</p>

              <h2 className="text-lg font-semibold mb-1"> OptonPro 15 W</h2>
              <p> Laser diodes: 810 nm / 980 nm / 1064 nm</p>
              <p> Emitted output, max.: Max. 15 W</p>
              <p> Power consumption: 1,2 A</p>

              <h2 className="text-lg font-semibold mb-1">OptonPro 25 W</h2>
              <p> Laser diodes: 810 nm / 980 nm / 1064 nm</p>
              <p> Emitted output, max.: Max. 25 W</p>
              <p> Power consumption: 1,8 A</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                The following data apply to all models:
              </h2>
              <h2 className="text-lg font-semibold mb-1"> Treatment area</h2>
              <p className="mb-2"> Min. Ø 10 mm</p>

              <h2 className="text-lg font-semibold mb-1"> Operating voltage</h2>
              <p className="mb-2"> 100 – 240 V~, 50 Hz / 60 Hz</p>

              <h2 className="text-lg font-semibold mb-1"> Protection class</h2>
              <p className="mb-2"> II</p>

              <h2 className="text-lg font-semibold mb-1"> Applied part</h2>
              <p className="mb-2">Typ B according to EN 60601-1</p>

              <h2 className="text-lg font-semibold mb-1"> Dimensions</h2>
              <p className="mb-2">H 30 cm, B 35 cm, L 20 cm</p>

              <h2 className="text-lg font-semibold mb-1"> Weight</h2>
              <p className="mb-2"> 3,8 kg</p>

              <h2 className="text-lg font-semibold mb-1"> Laser class</h2>
              <p className="mb-2"> 4, observe special regulations</p>
            </div>
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
