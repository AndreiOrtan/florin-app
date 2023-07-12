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
          <h1 className="text-3xl font-bold text-center">Aesthetics</h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 pb-8">
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zcryo`}
          imageUrl="/aesthetics/zcryo.jpeg"
          cardHeader={t("cards.card1.header")}
          cardDescription={t("cards.card1.description")}
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zlipo`}
          imageUrl="/aesthetics/zlipo.jpeg"
          cardHeader={t("cards.card2.header")}
          cardDescription={t("cards.card2.description")}
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zfield-dual`}
          imageUrl="/aesthetics/zfield-dual.jpeg"
          cardHeader={t("cards.card3.header")}
          cardDescription={t("cards.card3.description")}
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/ztone`}
          imageUrl="/aesthetics/ztone.jpeg"
          cardHeader={t("cards.card4.header")}
          cardDescription={t("cards.card4.description")}
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zwave`}
          imageUrl="/aesthetics/zwave.jpeg"
          cardHeader={t("cards.card5.header")}
          cardDescription={t("cards.card5.description")}
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/conti-cure`}
          imageUrl="/aesthetics/conti-cure.jpeg"
          cardHeader={t("cards.card6.header")}
          cardDescription={t("cards.card6.description")}
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zfill`}
          imageUrl="/aesthetics/zfill.jpeg"
          cardHeader={t("cards.card7.header")}
          cardDescription={t("cards.card7.description")}
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/gentlepro`}
          imageUrl="/aesthetics/gentlepro.jpeg"
          cardHeader={t("cards.card8.header")}
          cardDescription={t("cards.card8.description")}
          orange
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
