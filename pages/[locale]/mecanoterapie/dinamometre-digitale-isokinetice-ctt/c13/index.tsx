import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-blue700 text-3xl font-bold">
            C13 Dinamometru Digital Isokinetic pentru coloana dorso-lombară
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c13.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16 mt-8 sm:mt-0">
              <h2 className="font-semibold">DIMENSIUNI:</h2>
              <p className="font-light">
                lungime: 150 cm / lățime: 170 cm / înălțime: 205 cm
              </p>
              <h2 className="font-semibold">SUPRAFAȚA DE AMPLASARE:</h2>
              <p className="font-light">cca. 3m2</p>
              <h2 className="font-semibold">CONSUMUL DE ENERGIE:</h2>
              <p className="font-light">3 euro / lună</p>
              <h2 className="font-semibold">GREUTATE:</h2>
              <p className="font-light">450kg</p>
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
            DINAMOMETRUL ISOKINETIC PENTRU COLOANA DORSO-LOMBARĂ
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
              <li> Perne suplimentare pentru brațe</li>
              <li> Mânere ergonomice</li>
              <li> Suport lombar rotunjit</li>
              <li> Ajustare automată a suportului lombar</li>
              <li> Ajustare automată a înălțimii scaunului</li>
              <li> Suport suplimentar pentru picioare</li>
              <li> Reglare automată pentru stabilizarea genunchilor</li>
              <li> Setare electronică a unghiului de stări</li>
              <li> Monitor rotativ de 17 inch (touchscreen)</li>
              <li> Amprentă biometrică</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <p>
              Două tipuri de proceduri respectiv flexia/ extensia trunchiului.
              Prin intermediul celor doua funcții diferite ale dinamometrului
              isokinetic este antrenată musculatura abdominală și regiunea
              toracică și lombară.
            </p>
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c13/target1.png"
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
                <h2 className="mb-1">PROCEDURI PENTRU ABDOMEN</h2>
                <p className="py-1 font-light">
                  Pentru a realiza o postura optimă la pacienții cu cifoza, este
                  necesară o poziționare joasă a scaunului și o setare cât mai
                  înaltă a suportului lombar, ceea ce asigură o mobilitate
                  mărită a coloanei vertebrale toracice. În cadrul procedurii se
                  acționează asupra musculaturii abdominale. Dinamometrul
                  Isokinetic se fixează automat într-o poziție de șezut, perna
                  lombara este deplasată în sus. Aceasta mobilizează regiunea
                  medie a coloanei vertebrale toracice, fiind un element
                  indispensabil pentru postura verticală (funcția de susținere).
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c13/use1.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg sm:ml-8"
              />
            </div>
            <div className="flex sm:flex-row flex-col items-center py-8">
              <div>
                <h2 className="mb-1">
                  PROCEDURI PENTRU REGIUNEA TORACICA ȘI LOMBARĂ
                </h2>
                <p className="py-1 font-light">
                  Dinamometrul Isokinetic oferă posibilitatea de acționare
                  asupra regiunilor mediale și laterale ale coloanei lombare.
                  Pentru o postură corectă a coloanei vertebrale cervicale
                  pernele trebuie ajustate astfel încât coloana cervicală să fie
                  în poziția zero. Se evită astfel suprasolicitarea, compresia
                  sau hipermobilitatea la nivelul coloanei vertebrale cervicale.
                  Procedura pentru regiunea lombară acționează asupra mușchilor
                  iliocostal și lungului dorsal. Reglarea unei poziții înalte a
                  scaunului și poziția brațului de acționare orientată în jos
                  acționează în special asupra regiunii inferioare a coloanei
                  lombare. Reglarea unei poziții joase a scaunului și deplasarea
                  suportului lombar în sus acționează asupra regiunii mediane a
                  coloanei vertebrale toracice.
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c13/use2.png"
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
