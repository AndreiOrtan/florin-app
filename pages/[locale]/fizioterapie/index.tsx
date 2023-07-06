import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next";
import { readFile } from "fs/promises";
import path from "path";
import PhysioLayout from "@/components/PhysioLayout";
import Card from "@/components/Card";

export default function PhysicalTherapy({ locale }: { locale: string }) {
  const t = useTranslations("physiotherapy");

  return (
    <PhysioLayout>
      <div className="flex flex-col items-center mt-4 w-full text-gray600">
        <header className="py-4 w-9/12">
          <div className="container mx-auto px-4">
            <h1 className="text-blue700 text-3xl font-bold text-center">
              {t("mainHeader")}
            </h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12">
          <Card
            linkUrl={`/${locale}/fizioterapie/electro-ultrasound`}
            imageUrl="/fizioterapiePhotos/electro-sound.jpg"
            cardHeader={t("cards.card1.header")}
            cardDescription={t("cards.card1.description")}
            minH={364}
          />

          <Card
            linkUrl={`/${locale}/fizioterapie/laser-therapy`}
            imageUrl="/fizioterapiePhotos/laser-therapy.jpeg"
            cardHeader={t("cards.card2.header")}
            cardDescription={t("cards.card2.description")}
            minH={364}
          />

          <Card
            linkUrl={`/${locale}/fizioterapie/shockwave-therapy`}
            imageUrl="/fizioterapiePhotos/shockwave-therapy.jpg"
            cardHeader={t("cards.card3.header")}
            cardDescription={t("cards.card3.description")}
            minH={364}
          />

          <Card
            linkUrl={`/${locale}/fizioterapie/high-energy-inductive-therapy`}
            imageUrl="/fizioterapiePhotos/high-energy-inductive.jpg"
            cardHeader={t("cards.card4.header")}
            cardDescription={t("cards.card4.description")}
            minH={364}
          />

          <Card
            linkUrl={`/${locale}/fizioterapie/diathermy-therapy`}
            imageUrl="/fizioterapiePhotos/diathermy-therapy.jpg"
            cardHeader={t("cards.card5.header")}
            cardDescription={t("cards.card5.description")}
            minH={364}
          />

          <Card
            linkUrl={`/${locale}/fizioterapie/cryotherapy`}
            imageUrl="/fizioterapiePhotos/cryotherapy.jpeg"
            cardHeader={t("cards.card6.header")}
            cardDescription={t("cards.card6.description")}
            minH={364}
          />
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
    </PhysioLayout>
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
