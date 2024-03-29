import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";

interface MenuHeaderI {
  options?: string[];
  header?: string;
  collapseDropdown?: () => void;
  routes?: string[];
  locale?: string;
  self?: boolean;
}

const MenuHeader = ({
  options,
  header,
  collapseDropdown,
  routes,
  locale,
  self,
}: MenuHeaderI) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !(ref.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  function getRoute(str: string) {
    return str.replace(/[\W_]+/g, "-").toLowerCase();
  }

  return (
    <div className="relative flex justify-center" ref={ref}>
      <button
        onClick={self ? undefined : () => setIsOpen((prev) => !prev)}
        className={`${
          isOpen ? "text-blue700" : "text-gray900"
        } rounded-lg text-lg font-semibold px-4 hover:text-blue700 py-2.5 text-center flex justify-center items-center`}
        type="button"
      >
        {self && routes ? (
          <Link
            href={`/${locale}/${routes[0]?.toLocaleLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className={`${locale === "ro" ? "min-w-[192px]" : ""}`}
          >
            {header}
          </Link>
        ) : (
          header
        )}
        {options && (
          <span
            className={`px-2 transition-transform duration-500 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            onClick={(event) => {
              event.stopPropagation(); // Stop event propagation
              setIsOpen((prev) => !prev);
            }}
          >
            <AiFillCaretDown />
          </span>
        )}
      </button>
      {isOpen && options && (
        <div
          id="dropdownDivider"
          className="menu-container shadow-2xl mt-14 z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700 dark:divide-gray-600 absolute left-1/2 transform -translate-x-1/2"
        >
          <ul className="py-2 text-sm text-gray-700">
            {routes &&
              options &&
              options.map((item, index) => {
                return (
                  <li key={index} className="py-1">
                    <Link
                      href={`/${locale}/${getRoute(routes[index])}`}
                      className="block px-4 py-2 hover:bg-gray100"
                      onClick={() => {
                        setIsOpen((prev) => !prev);

                        {
                          collapseDropdown && collapseDropdown();
                        }
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuHeader;
