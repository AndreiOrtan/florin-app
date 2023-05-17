"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

interface DropdownI {
  options?: string[];
  header?: string;
}

const MenuHeader = ({ options, header }: DropdownI) => {
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
    <div onClick={() => setIsOpen((prev) => !prev)}>
      <div className="relative" ref={ref}>
        <button
          className={`${
            isOpen && "text-blue700"
          } rounded-lg text-lg font-semibold px-4 hover:text-blue700 py-2.5 text-center flex justify-center items-center`}
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
        {isOpen && (
          <div
            id="dropdownDivider"
            className="menu-container shadow-2xl mt-8 z-10 bg-white divide-y divide-gray-100 rounded-lg w-44 dark:bg-gray-700 dark:divide-gray-600 absolute left-1/2 transform -translate-x-1/2"
          >
            <ul className="py-2 text-sm text-gray-700">
              {options &&
                options.map((item, index) => {
                  return (
                    <li key={index} className="py-1">
                      <Link
                        href={`/${getRoute(item)}`}
                        className="block px-4 py-2 hover:bg-gray100"
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
    </div>
  );
};

export default MenuHeader;
