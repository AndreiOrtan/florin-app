import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-lightgray rounded-lg shadow">
      <div className="w-full">
        <div className="w-9/12 mx-auto text-blue700 py-8">
          <div className="flex">
            <div className="my-auto">
              <img
                src="/logo.png"
                alt="text"
                className="h-auto w-44 max-w-full mx-auto"
              />
              <h1 className="font-medium">EUID ROONRC. J6/378/2021</h1>
              <h1 className="font-medium">
                Romania, Bistrita-Nasaud, Str. Lupeni Nr.11
              </h1>
            </div>
            <div className="ml-auto my-auto">
              <div className="flex">
                <Link href="https://www.minato-med.co.jp/en/" target="_blank">
                  <img
                    src="/minatologo.png"
                    alt="text"
                    className="h-auto w-[140px] max-w-full mx-4"
                  />
                </Link>
                <Link href="https://www.zimmer.de/en/" target="_blank">
                  <img
                    src="/zimmer-logo.png"
                    alt="text"
                    className="h-auto w-[140px] max-w-full mx-4"
                  />
                </Link>
                <Link href="https://mkb-system.ro/" target="_blank">
                  <img
                    src="/mkb-logo.png"
                    alt="text"
                    className="h-auto w-[140px] max-w-full mx-4"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
