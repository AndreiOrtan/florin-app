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
      <div className="flex lg:justify-center h-[120px] justify-between">
        <div className="flex items-center lg:mr-16 ml-6">
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
            <div className="relative flex flex-col lg:items-center lg:h-12 h-9 min-w-[200px]">
              <p className="text-blue500 lg:text-2xl text-base tracking-wide font-bold ml-1">
                Suhard Biomedical
              </p>
              <p className="text-gray600 lg:text-base text-xs font-normal italic absolute w-full lg:bottom-[3.5px] lg:right-[-5px] bottom-[2px] right-[-4px]">
                HighTech Medical Equipment
              </p>
            </div>
          </Link>
        </div>

        <div
          className={`lg:flex lg:w-min w-full justify-center bg-lightgray items-center lg:ml-24 lg:static absolute bottom-[-178px] ${
            isOpen ? "" : "hidden"
          }`}
        >
          <MenuHeader
            options={[
              `${t("physiotherapy")}`,
              `${t("kineto")}`,
              `${t("aquatizer")}`,
              `${t("mechanotherapy")}`,
            ]}
            locale={locale}
            header={t("header1")}
            collapseDropdown={collapseDropdown}
            routes={["Fizioterapie", "Kineto", "Aquatizer", "Mecanoterapie"]}
          />

          <MenuHeader
            header={`${t("aesthetics")}`}
            self={true}
            locale={locale}
            routes={["aesthetics"]}
          />
          <MenuHeader
            header={t("header2")}
            options={[`${t("about-us")}`, "Cariere"]}
            collapseDropdown={collapseDropdown}
            routes={["Companie", "Companie"]}
            locale={locale}
          />
          <div className="relative flex justify-center">
            <button
              className={`text-gray900 m-0 rounded-lg text-lg font-semibold px-4 hover:text-blue700 py-2.5 text-center flex justify-center items-center`}
              type="button"
            >
              <Link href={`#contact-form`} scroll={false}>
                Contact
              </Link>
            </button>
          </div>
        </div>
        <div className="flex justify-center mr-4">
          <span
            className="flex items-center lg:hidden mx-1"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <MdClose size={50} /> : <MdOutlineMenu size={50} />}
          </span>
          <span className="flex items-center mx-1">
            <LocaleSwitcher />
          </span>
        </div>
      </div>
    </nav>
  );
}
