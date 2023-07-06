import Card from "@/components/Card";
import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import path from "path";

export default function Aesthetic({ locale }: { locale: string }) {
  const t = useTranslations("aesthetics");
  return (
    <div className="flex flex-col items-center mt-4 w-full text-gray600">
      <header className="py-4 w-9/12">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold text-center">
            Aesthetics
          </h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12">
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zcyro`}
          imageUrl="/aesthetics/zcyro.jpeg"
          cardHeader={t("cards.card1.header")}
          cardDescription={t("cards.card1.description")}
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/fizioterapie/electro-ultrasound`}
          imageUrl="/aesthetics/zlipo.jpeg"
          cardHeader={t("cards.card2.header")}
          cardDescription={t("cards.card2.description")}
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/fizioterapie/electro-ultrasound`}
          imageUrl="/aesthetics/zfield-dual.jpeg"
          cardHeader={t("cards.card3.header")}
          cardDescription={t("cards.card3.description")}
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/fizioterapie/electro-ultrasound`}
          imageUrl="/aesthetics/ztone.jpeg"
          cardHeader={t("cards.card4.header")}
          cardDescription={t("cards.card4.description")}
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/fizioterapie/electro-ultrasound`}
          imageUrl="/aesthetics/zwave.jpeg"
          cardHeader={t("cards.card5.header")}
          cardDescription={t("cards.card5.description")}
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/fizioterapie/electro-ultrasound`}
          imageUrl="/aesthetics/conti-cure.jpeg"
          cardHeader={t("cards.card6.header")}
          cardDescription={t("cards.card6.description")}
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zfill`}
          imageUrl="/aesthetics/zfill.jpeg"
          cardHeader={t("cards.card7.header")}
          cardDescription={t("cards.card7.description")}
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/fizioterapie/electro-ultrasound`}
          imageUrl="/aesthetics/gentlepro.jpeg"
          cardHeader={t("cards.card8.header")}
          cardDescription={t("cards.card8.description")}
        />
      </div>
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
