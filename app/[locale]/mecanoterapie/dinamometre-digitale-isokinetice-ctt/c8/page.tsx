import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            C8 Dinamometru Digital Isokinetic butterfly cu funcție dublă
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c8.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNI:</h2>
              <p className="font-light">
                lungime: 150cm / lățime: 170 cm / înălțime: 205 cm
              </p>
              <h2 className="font-semibold">SUPRAFAȚA DE AMPLASARE:</h2>
              <p className="font-light">cca. 3m2</p>
              <h2 className="font-semibold">CONSUMUL DE ENERGIE:</h2>
              <p className="font-light">3 euro / lună</p>
              <h2 className="font-semibold">GREUTATE:</h2>
              <p className="font-light">300 kg</p>
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
          <h1 className="font-medium mb-2">DINAMOMETRUL ISOKINETIC</h1>
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
              <li>
                {" "}
                Mânere ergonomice și cilindri pentru brațe, pentru tonifierea
                diverselor grupe musculare
              </li>
              <li> Fixare CVC</li>
              <li> Ajustarea automată a spătarului</li>
              <li> Brațe ergonomice reglabile cu pornire automată</li>
              <li> Suport suplimentar pentru picioare</li>
              <li> Ajustare automată pe înălțimea scaunului</li>
              <li> Suport suplimentar pentru picioare</li>
              <li> Ajustare și fixare automată pentru picioare</li>
              <li> Monitor rotativ de 17 inch</li>
              <li> Amprentă biometrică</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <p>
              Cu funcție dublă cu spatar/stabilizator oferă posibilitatea de a
              efectua două proceduri respectiv abducția & adducția orizontală a
              umărului.Inainte de inceperea procedurii pacientul va fi
              pozitionat cu flexia coapsei pe bazin si flexia gambei pe coapsa
              la 90°.
            </p>
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c8/target1.png"
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
                <h2 className="mb-1">PROCEDURA PENTRU MUSCULATURA UMERILOR</h2>
                <p className="py-1 font-light">
                  Pentru a realiza o îndreptare optima sau o pre-întindere la
                  pacienții cu cifoza, este necesară o poziție optima și
                  coordonată de pornire, ceea ce asigură o mai mare
                  flexibilitate a coloanei vertebrale toracice. Musculatura
                  umerilor poate fi acționată individual, în mod diferit la C8
                  datorită diferitelor poziții de prindere a brațului pe
                  Dinamometrul Isokinetic.
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c8/use1.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg sm:ml-8"
              />
            </div>
            <div className="flex sm:flex-row flex-col items-center">
              <div>
                <h2 className="mb-1">PROCEDURA PENTRU MUSCULATURA SPATELUI</h2>
                <p className="py-1 font-light">
                  Se acționează asupra musculaturii regiunii mediale și laterale
                  a spatelui. Un factor important este postura corectă a
                  coloanei vertebrale cervicale. Pernele sunt ajustate complet
                  automat astfel încât coloana vertebrală cervicală să fie în
                  poziția neutră pentru a preveni suprasolicitarea, compresia și
                  hipermobilitatea. Astfel se stabilizează musculatura dorsală a
                  umărului.{" "}
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c8/use2.png"
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
