import Link from "next/link";
import MenuHeader from "./MenuHeader";

const Nav = () => {
  return (
    <nav className="bg-lightgray fixed top-0 left-0 right-0 z-50">
      <div className="px-4">
        <div className="flex justify-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.png" alt="text" className="h-28 w-auto" />
            </Link>
          </div>
          <div className="flex">
            <div className="ml-6 flex items-center">
              <MenuHeader
                header="Fizioterapie"
                content={[
                  "Electro & Ultrasound",
                  "Laser Therapy",
                  "Shockwave Therapy",
                  "High Energy Inductive Therapy",
                  "Diathermy Therapy",
                  "Aquatizer",
                ]}
              />
              <MenuHeader
                header="Mecanoterapie"
                content={[
                  "Masini Isokinetice - MTT",
                  "Dinamometre Digitale Isokinetice - CTT",
                ]}
              />
              <MenuHeader header="Contact" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
