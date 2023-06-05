import Image from "next/image";
import { Inter } from "next/font/google";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import { readFile } from "fs/promises";
import path from "path";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ locale }: { locale: string }) {
  const t = useTranslations("Index");
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold text-gray800">{t("title")}</h1>
      hello from: test/{locale}
    </main>
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

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ locale: string }>) {
  const locale = params?.locale || "ro";
  return {
    props: {
      messages: JSON.parse(
        await readFile(path.resolve(`./messages/${locale}.json`), "utf-8")
      ),
      locale,
    },
  };
}
