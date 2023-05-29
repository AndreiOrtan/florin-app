"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import NavigationLink from "./NavigationLink";

interface DropdownI {
  options?: string[];
  header?: string;
  collapseDropdown?: () => void;
  routes?: string[];
}

const MenuHeader = ({
  options,
  header,
  collapseDropdown,
  routes,
}: DropdownI) => {
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
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${
          isOpen && "text-blue700"
        } rounded-lg text-lg font-semibold px-4 hover:text-blue700 py-2.5 text-center flex justify-center items-center text-gray900`}
        type="button"
      >
        {header}
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
                    <NavigationLink
                      href={`/${getRoute(routes[index])}`}
                      className="block px-4 py-2 hover:bg-gray100"
                      onClick={() => {
                        setIsOpen((prev) => !prev);

                        {
                          collapseDropdown && collapseDropdown();
                        }
                      }}
                    >
                      {item}
                    </NavigationLink>
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
