import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lightgray rounded-lg shadow">
      <div className="w-full">
        <div className="flex justify-center py-2 text-blue700">
          <div className="flex justify-center flex-col">
            <img src="/logo.png" alt="text" className="h-28" />
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="font-light">General Manager:</h1>
            <h1 className="font-semibold">FLORIN SANGEORZAN</h1>
            <h1 className="font-medium">0744 474 907</h1>
            <h1 className="font-medium">office@suhard-biomedical.com</h1>
          </div>
          <div className="flex justify-center flex-col">
            <h1 className="font-medium">EUID ROONRC. J6/378/2021</h1>
            <h1 className="font-medium">
              Romania, Bistrita-Nasaud, Str. Lupeni Nr.11
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;