import Link from "next/link";
import MenuHeader from "./MenuHeader";

const Nav = () => {
  return (
    <nav className="bg-lightgray fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center h-min">
        <div className="flex items-center">
          <Link href="/">
            <img src="/logo2.png" alt="text" className="w-44" />
          </Link>
        </div>
        <div className="flex mx-16">
          <div className="ml-6 flex items-center">
            <MenuHeader
              options={["Fizioterapie", "Mecanoterapie", "Aquatizer"]}
              header="Produse"
            />
            <MenuHeader header="Companie" options={["Despre noi"]} />
            <MenuHeader header="Contact" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
