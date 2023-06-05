"use client";
import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import path from "path";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <div className="mx-auto py-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray800">{t("title")}</h1>
        <p className="mt-4 text-lg text-gray600">
          Your Partner in Rehabilitation and Recovery
        </p>
      </div>
    </div>
  );
}
