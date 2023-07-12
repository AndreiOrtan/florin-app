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
          <h1 className="text-3xl font-bold text-center">ZFill</h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12">
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zfill/zfill-refresh`}
          imageUrl="/aesthetics/zfill/zfill-refresh.jpeg"
          cardHeader="Z Fill refresh²"
          cardDescription={t("cards.card7.card1.description")}
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zfill/zfill-contour`}
          imageUrl="/aesthetics/zfill/zfill-contour.jpeg"
          cardHeader="Z Fill contour² | contour⁺"
          cardDescription={t("cards.card7.card2.description")}
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zfill/zfill-deep`}
          imageUrl="/aesthetics/zfill/zfill-deep.jpeg"
          cardHeader="Z Fill deep² | deep⁺"
          cardDescription={t("cards.card7.card3.description")}
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
