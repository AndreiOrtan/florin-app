import { useTranslations } from "next-intl";

import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";
import Carrousel from "@/components/Carousel";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <>
      <Carrousel />
      <div className="mx-auto py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray800">{t("title")}</h1>
          <p className="mt-4 text-lg text-gray600">
            Your Partner in Rehabilitation and Recovery
          </p>
        </div>
      </div>
    </>
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
