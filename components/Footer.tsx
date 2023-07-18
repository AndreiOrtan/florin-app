import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ locale }: { locale: string }) => {
  return (
    <footer className="bg-lightgray rounded-lg shadow">
      <div className="w-full">
        <div className="w-9/12 mx-auto text-blue700 py-4">
          <div className="flex justify-center sm:justify-start">
            <div className="my-auto">
              <Link href={`/${locale}`} className="flex flex-col items-center">
                {" "}
                <img
                  src="/image00001 copy.png"
                  alt="text"
                  className="h-auto w-[60px] max-w-full"
                />
                <div className="relative flex flex-col h-12 min-w-[254px] text-center">
                  <p className="text-blue500 text-2xl tracking-wide font-bold">
                    Suhard Biomedical
                  </p>
                  <p className="text-gray600 lg:text-base font-normal italic absolute bottom-[4.5px] right-1">
                    HighTech Medical Equipment
                  </p>
                </div>
              </Link>
              <h1 className="font-medium text-sm">EUID ROONRC. J6/378/2021</h1>
              <h1 className="font-medium text-sm">
                Romania, Bistrita-Nasaud, Str. Lupeni Nr.11
              </h1>
            </div>
            {/* <div className="ml-auto my-auto">
              <div className="flex sm:flex-row flex-col">
                <Link href="https://www.minato-med.co.jp/en/" target="_blank">
                  <img
                    src="/minatologo.png"
                    alt="text"
                    className="h-auto w-[140px] max-w-full mx-4 my-4"
                  />
                </Link>
                <Link href="https://www.zimmer.de/en/" target="_blank">
                  <img
                    src="/zimmer-logo2.jpg"
                    alt="text"
                    className="h-auto w-[140px] max-w-full mx-4 my-4"
                  />
                </Link>
                <Link href="https://mkb-system.ro/" target="_blank">
                  <img
                    src="/mkb-logo.png"
                    alt="text"
                    className="h-auto w-[140px] max-w-full mx-4 my-4"
                  />
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
