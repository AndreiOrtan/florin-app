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
          cardHeader="ZCryo"
          cardDescription="Cold air for highest patient´s comfort during laser, IPL treatments and injections"
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zlipo`}
          imageUrl="/aesthetics/zlipo.jpeg"
          cardHeader="ZLipo"
          cardDescription="Send a cold message to your fat deposits"
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zfield-dual`}
          imageUrl="/aesthetics/zfield-dual.jpeg"
          cardHeader="ZField Dual"
          cardDescription="Body Shaping with High-Energy Inductive Therapy"
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/ztone`}
          imageUrl="/aesthetics/ztone.jpeg"
          cardHeader="ZTone"
          cardDescription="Thousands of muscle contractions through electromagnetic pulses"
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zwave`}
          imageUrl="/aesthetics/zwave.jpeg"
          cardHeader="ZWave"
          cardDescription="Shockwave for skin tightening and body contouring"
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/conti-cure`}
          imageUrl="/aesthetics/conti-cure.jpeg"
          cardHeader="ContiCure"
          cardDescription="Pelvic floor training – Start your training today and get your laughter back."
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/zfill`}
          imageUrl="/aesthetics/zfill.jpeg"
          cardHeader="ZFill"
          cardDescription="Hyaluronic acid dermal fillers for youthful, wrinkle-free skin"
          orange
        />
        <Card
          minH={320}
          linkUrl={`/${locale}/aesthetics/gentlepro`}
          imageUrl="/aesthetics/gentlepro.jpeg"
          cardHeader="GentlePro"
          cardDescription="Shockwave treatment for erectile dysfunction"
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
