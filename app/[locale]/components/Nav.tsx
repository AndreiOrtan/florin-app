"use client";
import Link from "next/link";
import MenuHeader from "./MenuHeader";
import { MdClose } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { usePathname } from "next-intl/client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Nav() {
  const pathname = usePathname();
  const t = useTranslations("navbar");

  const [isOpen, setIsOpen] = useState(false);

  function collapseDropdown() {
    setIsOpen((prev) => !prev);
  }
  return (
    <nav className="bg-lightgray fixed top-0 left-0 right-0 z-50">
      <div className="flex sm:justify-center h-[114px] justify-between">
        <div className="flex items-center ml-8">
          <Link href="/">
            <img
              src="/logo.png"
              alt="text"
              className="h-auto w-44 max-w-full"
            />
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
            header={t("header1")}
            collapseDropdown={collapseDropdown}
            routes={["Fizioterapie", "Aquatizer", "Mecanoterapie"]}
          />
          <MenuHeader
            header={t("header2")}
            options={[`${t("about-us")}`]}
            collapseDropdown={collapseDropdown}
            routes={["Despre noi"]}
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