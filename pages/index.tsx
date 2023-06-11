import { useEffect } from "react";
import { useRouter } from "next/router";
import { GetStaticPropsContext } from "next";
import { readFile } from "fs/promises";
import path from "path";

const RedirectToLocale = ({ locale }: { locale: string }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/${locale}`);
  }, []);

  return null;
};

export async function getStaticProps({ params }: GetStaticPropsContext) {
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

export default RedirectToLocale;
