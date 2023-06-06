import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";
import { readFile } from "fs/promises";
import path from "path";

export default function PhysicalTherapy({ locale }: { locale: string }) {
  const t = useTranslations("physiotherapy");

  return (
    <div className="flex flex-col items-center mt-4 w-full text-gray600">
      <header className="py-4 w-9/12">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold text-center">
            {t("mainHeader")}
          </h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12">
        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <Link
            href={`/${locale}/fizioterapie/electro-ultrasound`}
            className="relative"
          >
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
                  {t("cards.card1.header")}
                </div>
                <p className="text-xs">{t("cards.card1.description")}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2">
          <Link
            href={`/${locale}/fizioterapie/laser-therapy`}
            className="relative"
          >
            <div className="w-full rounded-lg bg-white">
              <Image
                className="w-full h-56"
                src="/fizioterapiePhotos/laser-therapy.jpeg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  {t("cards.card2.header")}
                </div>
                <p className="text-gray-700 text-xs">
                  {t("cards.card2.description")}
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2">
          <Link
            href={`/${locale}/fizioterapie/shockwave-therapy`}
            className="relative"
          >
            <div className="w-full rounded-lg bg-white">
              <Image
                className="w-full h-56"
                src="/fizioterapiePhotos/shockwave-therapy.jpg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  {t("cards.card3.header")}
                </div>
                <p className="text-gray-700 text-xs">
                  {t("cards.card3.description")}
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2">
          <Link
            href={`/${locale}/fizioterapie/high-energy-inductive-therapy`}
            className="relative"
          >
            <div className="w-full rounded-lg bg-white">
              <Image
                className="w-full h-56"
                src="/fizioterapiePhotos/high-energy-inductive.jpg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  {t("cards.card4.header")}
                </div>
                <p className="text-gray-700 text-xs">
                  {t("cards.card4.description")}
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2">
          <Link
            href={`/${locale}/fizioterapie/diathermy-therapy`}
            className="relative"
          >
            <div className="w-full rounded-lg bg-white">
              <Image
                className="w-full h-56"
                src="/fizioterapiePhotos/diathermy-therapy.jpg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  {t("cards.card5.header")}
                </div>
                <p className="text-gray-700 text-xs">
                  {t("cards.card5.description")}
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2">
          <Link
            href={`/${locale}/fizioterapie/cryotherapy`}
            className="relative"
          >
            <div className="w-full rounded-lg bg-white">
              <Image
                className="w-full h-56"
                src="/fizioterapiePhotos/cryotherapy.jpeg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  {t("cards.card6.header")}
                </div>
                <p className="text-gray-700 text-xs">
                  {t("cards.card6.description")}
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>
      </div>

      <section className="mt-16 flex justify-center">
        <div className="w-9/12 py-8">
          <h1 className="mb-8 text-3xl font-semibold leading-none text-center text-gray-900 ">
            {t("secondHeader")}
          </h1>

          <div className="flex sm:flex-row flex-col justify-center mb-4">
            <Image
              src="/fizioterapiePhotos/physical-therapy-man.jpeg"
              alt="Any Text"
              width={500}
              height={500}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
            <div>
              <p className="leading-relaxed mb-8 text-justify">{t("p1")}</p>
              <p className="leading-relaxed text-justify">{t("p2")}</p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-lg leading-relaxed text-justify">
              {t("p3")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

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
