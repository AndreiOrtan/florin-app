import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-blue700 text-3xl font-bold">
            C6 Dinamometru Digital Isokinetic multifuncțional pentru gleznă,
            picior, șold
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c6.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16 mt-8 sm:mt-0">
              <h2 className="font-semibold">DIMENSIUNI:</h2>
              <p className="font-light">
                lungime: 240 cm / lățime: 135 cm / înălțime: 205 cm
              </p>
              <h2 className="font-semibold">SUPRAFAȚA DE AMPLASARE:</h2>
              <p className="font-light">cca. 4m2</p>
              <h2 className="font-semibold">CONSUMUL DE ENERGIE:</h2>
              <p className="font-light">3 euro / lună</p>
              <h2 className="font-semibold">GREUTATE:</h2>
              <p className="font-light">545 kg</p>
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
            DINAMOMETRUL ISOKINETIC MULTIFUNCȚIONAL
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
              <li> Mânere ergonomice</li>
              <li> Reglarea și fixarea pernelor pentru umeri</li>
              <li> Perne ergonomice pentru membre superioare și umeri</li>
              <li> Reglare automată a spătarului</li>
              <li>
                {" "}
                Mânere și perne suplimentare pentru susținerea membrelor
                superioare
              </li>
              <li>
                {" "}
                Platformă ajutătoare de intrare (pentru identificare pacient)
              </li>
              <li> Platformă suplimentară pentru zona genunchiului</li>
              <li> Suprafață reglabilă 35 grade pozitiv și negativ</li>
              <li> Platformă pentru un grad mare de extensie/flexie</li>
              <li> Braț mobil reglabil</li>
              <li> Amprentă biometrică</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <p>
              Pentru picioare oferă trei tipuri de proceduri respectiv flexia/
              extensia/ inversia gleznei, piciorului. Procedurile pot fi
              efectuate de către pacienți la unghiuri de la 90 grade sezut la
              180 grade culcat.
            </p>
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c6/target1.png"
              alt="r18"
              height={210}
              width={300}
              className="rounded-lg "
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col justify-center items-center">
            <div className="flex sm:flex-row flex-col items-center">
              <div>
                <h2 className="mb-1">PROCEDURA DIN POZIȚIA ȘEZUT</h2>
                <p className="py-1 font-light">
                  Efectuând procedura în poziția șezut, este antrenata
                  musculatura regiunii ventrale și a membrelor inferioare, în
                  același timp asigurându-se o stabilizare a coloanei vertebrale
                  printr-o posturare corecta. Este antrenat cvadricepsul și
                  musculatura gambelor.
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c6/use1.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg sm:ml-8"
              />
            </div>
            <div className="flex sm:flex-row flex-col items-center py-8">
              <div>
                <h2 className="mb-1">PROCEDURA DIN POZIȚIA CULCAT</h2>
                <p className="py-1 font-light">
                  În poziția culcat sunt antrenți mușchii regiunii dorsale a
                  membrelor inferioare și se obține relaxarea musculaturii
                  coloanei vertebrale. Printr-o posturare corectă, este antrenat
                  bicepsul femural, musculatura feselor și a gambelor .
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c6/use2.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg sm:ml-8"
              />
            </div>
            <div className="flex sm:flex-row flex-col items-center py-8">
              <div>
                <h2 className="mb-1">PROCEDURA DE COORDONARE</h2>
                <p className="py-1 font-light">
                  Pentru punctul culminant coordinativ puteți face exerciții de
                  sărituri ușoare cu Dinamometrul Isokinetic C6. Cu platforma
                  pentru picioare adaugată se facilitează o flexie mărită a
                  genunchilor permițând apropierea lor de trunchi.
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c6/use3.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg sm:ml-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
