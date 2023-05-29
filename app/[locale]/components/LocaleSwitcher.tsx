"use client";

import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";
import Image from "next/image";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  console.log(locale);

  function onSelectChange(locale: string) {
    startTransition(() => {
      router.replace(`/${locale}${pathname}`);
    });
  }

  return (
    <div className="relative">
      {/* <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {["ro", "en"].map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </select> */}
      {/* <span className="pointer-events-none absolute top-[8px]">⌄</span> */}
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
