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
    <nav className="bg-lightgray fixed top-0 left-0 right-0 z-50">
      <div className="flex sm:justify-center h-[114px] justify-between">
        <div className="flex items-center ml-8">
          <Link
            href={`/${locale}`}
            className="flex flex-row items-center justify-center"
          >
            {" "}
            <img
              src="/image00001 copy.png"
              alt="text"
              className="h-auto sm:w-[100px] w-[60px] max-w-full"
            />
            <div className="self-end relative sm:h-12 h-9 ml-1 min-w-[161px]">
              <p className="text-blue500 sm:text-lg text-sm sm:text-center tracking-wide font-bold">
                Suhard Biomedical
              </p>

              <p className="text-gray600 sm:text-base text-sm absolute sm:bottom-[7px] sm:right-0 bottom-[3px] right-[37px] font-normal italic">
                Aesthetic
              </p>
            </div>
          </Link>
        </div>

        <div
          className={`sm:flex sm:w-min w-full justify-center bg-lightgray items-center sm:ml-16 sm:static absolute bottom-[-144px] ${
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
          <MenuHeader
            header={t("header2")}
            options={[`${t("about-us")}`, "Cariere"]}
            collapseDropdown={collapseDropdown}
            routes={["Companie", "Companie"]}
            locale={locale}
          />
          <MenuHeader header="Contact" />
        </div>
        <div className="flex justify-center mr-8">
          <span
            className="flex items-center sm:hidden mx-2"
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
