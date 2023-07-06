import Link from "next/link";
import MenuHeader from "./MenuHeader";
import { MdClose } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Nav({ locale }: { locale: string }) {
  const t = useTranslations("navbar");
  const [isOpen, setIsOpen] = useState(false);

  function collapseDropdown() {
    setIsOpen(false);
  }
  return (
    <nav className="bg-lightgray fixed top-0 left-0 right-0 z-[9999]">
      <div className="flex lg:justify-center h-[114px] justify-between">
        <div className="flex items-center lg:mr-16 ml-4">
          <Link
            href={`/${locale}`}
            className="flex flex-row items-center justify-center"
          >
            {" "}
            <img
              src="/image00001 copy.png"
              alt="text"
              className="h-auto lg:w-[100px] w-[60px] max-w-full"
            />
            <div className="relative flex flex-col lg:items-center lg:h-12 h-9 min-w-[214px]">
              <p className="text-blue500 lg:text-2xl text-lg tracking-wide font-bold">
                Suhard Biomedical
              </p>
              <p className="text-gray600 lg:text-base text-xs font-normal italic absolute lg:bottom-[4.5px] lg:right-0 bottom-[2px] right-[55px]">
                HighTech Medical Devices
              </p>
            </div>
          </Link>
        </div>

        <div
          className={`lg:flex lg:w-min w-full justify-center bg-lightgray items-center lg:ml-24 lg:static absolute bottom-[-144px] ${
            isOpen ? "" : "hidden"
          }`}
        >
          <MenuHeader
            options={[
              `${t("physiotherapy")}`,
              "Aquatizer",
              `${t("mechanotherapy")}`,
            ]}
            locale={locale}
            header={t("header1")}
            collapseDropdown={collapseDropdown}
            routes={["Fizioterapie", "Aquatizer", "Mecanoterapie"]}
          />
          <MenuHeader header="Aesthetics" self locale={locale} />
          <MenuHeader
            header={t("header2")}
            options={[`${t("about-us")}`, "Cariere"]}
            collapseDropdown={collapseDropdown}
            routes={["Companie", "Companie"]}
            locale={locale}
          />
          <MenuHeader header="Contact" />
        </div>
        <div className="flex justify-center mr-4">
          <span
            className="flex items-center lg:hidden mx-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <MdClose size={50} /> : <MdOutlineMenu size={50} />}
          </span>
          <span className="flex items-center mx-2">
            <LocaleSwitcher />
          </span>
        </div>
      </div>
    </nav>
  );
}
