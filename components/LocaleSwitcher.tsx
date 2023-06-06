import { useLocale, useTranslations } from "next-intl";

import { useTransition } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();

  function onSelectChange(locale: string) {
    startTransition(() => {
      const currentPathname = router.pathname; // Get the current pathname
      const currentQuery = router.query; // Get the current query parameters

      router.push(
        {
          pathname: currentPathname,
          query: {
            ...currentQuery,
            locale: locale, // Update the 'locale' query parameter
          },
        },
        undefined
      );
    });
  }

  return (
    <div className="relative">
      {locale === "en" ? (
        <Image
          src="/ro.png"
          alt="ro"
          width={44}
          height={44}
          onClick={() => onSelectChange("ro")}
          className="hover:cursor-pointer"
        />
      ) : (
        <Image
          src="/en.png"
          alt="en"
          width={44}
          height={44}
          onClick={() => onSelectChange("en")}
          className="hover:cursor-pointer"
        />
      )}
    </div>
  );
}
