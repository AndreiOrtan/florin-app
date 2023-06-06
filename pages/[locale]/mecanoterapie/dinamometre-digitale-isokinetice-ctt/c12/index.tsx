import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-blue700 text-3xl font-bold">
            C12 Dinamometru Digital Isokinetic pentru membrele superioare /
            inferioare
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c12.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16 mt-8 sm:mt-0">
              <h2 className="font-semibold">DIMENSIUNI:</h2>
              <p className="font-light">
                lungime: 90cm / lățime: 90cm / înălțime: 200cm
              </p>
              <h2 className="font-semibold">SUPRAFAȚA DE AMPLASARE:</h2>
              <p className="font-light">cca. 1m2</p>
              <h2 className="font-semibold">CONSUMUL DE ENERGIE:</h2>
              <p className="font-light">3 euro / lună</p>
              <h2 className="font-semibold">GREUTATE:</h2>
              <p className="font-light">200 kg</p>
              <h2 className="font-semibold">COMPUTER:</h2>
              <p className="font-light">
                PC integrat, inclusiv software-ul ușor de controlat și monitor
                touchscreen de 17 inch
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">
            DINAMOMETRU ISOKINETIC PENTRU MEMBRELE SUPERIOARE / INFERIOARE
          </h1>
          <div>
            <h1 className="font-bold mb-1">
              Proceduri complet automatizate – reglaje și fixări
            </h1>
            <ul className="list-disc ml-6">
              <li>
                {" "}
                Reglare automată a sarcinii de lucru și dispozitiv de
                pretensionare a greutății patentat MKB-System
              </li>
              <li> Braț reglabil, include monitor touchscreen de 17 inch</li>
              <li> Brațe de antrenament, reglabile automat</li>
              <li> Brațul reglabil se ajustează în poziția dorită</li>
              <li> Amprentă biometrică</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <p>
              Cu scripete dublu pentru membrele superioare şi inferioare C12
              oferă mai mult de 24 de proceduri diferite. Dinamometrul
              Isokinetic înglobeaza toate procedurile care se exercită în mod
              liber respectiv flexia/extensia, abducția/adducția & rotația
              membrelor superioare și inferioare. C12 a fost integrat în
              conceptul de perfecționare a sistemului de antrenament și fiecare
              centru de reabilitare ar trebui sa fie echipat cu un Dinamometrul
              Isokinetic multifuncțional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
