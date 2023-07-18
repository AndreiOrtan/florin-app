import AestheticsLayout from "@/components/AestheticsLayout";
import Card from "@/components/Card";
import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import path from "path";

export default function Aesthetic({ locale }: { locale: string }) {
  const t = useTranslations("aesthetics");
  return (
    <AestheticsLayout>
      <div className="flex flex-col items-center mt-4 w-full text-gray600">
        <header className="py-4 w-9/12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">ZCryo</h1>
          </div>
        </header>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12">
          <Card
            minH={320}
            linkUrl={`/${locale}/aesthetics/zcryo/cryo7`}
            imageUrl="/aesthetics/zcryo/cryo7.jpeg"
            cardHeader="Cryo 7"
            cardDescription={t("cards.card1.card1.description")}
            orange
          />
          <Card
            minH={320}
            linkUrl={`/${locale}/aesthetics/zcryo/cryo6`}
            imageUrl="/aesthetics/zcryo/cryo6.jpeg"
            cardHeader="Cryo 6"
            cardDescription={t("cards.card1.card2.description")}
            orange
          />

          <Card
            minH={320}
            linkUrl={`/${locale}/aesthetics/zcryo/cryomini`}
            imageUrl="/aesthetics/zcryo/cryomini.jpeg"
            cardHeader="CryoMini"
            cardDescription={t("cards.card1.card3.p1")}
            orange
          />
        </div>
        <div className="w-full py-10 bg-lightgray mt-8">
          <div className="w-9/12 mx-auto my-8">
            <div className="mb-12">
              <h1 className="text-lg font-semibold">ZCryo – real cold air</h1>
              <p className="mb-4">{t("cards.card1.p2")}</p>
            </div>
            <div className="mb-12">
              <h1 className="text-lg font-semibold">Easy to operate</h1>
              <p className="mb-4">{t("cards.card1.p3")}</p>
              <p className="mb-4">{t("cards.card1.p4")}</p>
            </div>
            <div className="mb-12">
              <h1 className="text-lg font-semibold">{t("cards.card1.p5")}</h1>
              <p className="mb-4">{t("cards.card1.p6")}</p>
              <p className="mb-4">{t("cards.card1.p7")}</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-orange">
          <div className="flex flex-col items-center py-24">
            <div className="videos flex flex-col sm:flex-row">
              <iframe
                src="https://www.youtube.com/embed/UdsU6GMmVYg"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
              <iframe
                src="https://www.youtube.com/embed/eWe77R3ty-U"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </AestheticsLayout>
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
