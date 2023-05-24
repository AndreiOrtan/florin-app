import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            C20 Dinamometru Digital Isokinetic pentru piept/spate/umeri
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c20.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNI:</h2>
              <p className="font-light">
                lungime: 170cm / lățime: 160 cm / înălțime: 205 cm
              </p>
              <h2 className="font-semibold">SUPRAFAȚA DE AMPLASARE:</h2>
              <p className="font-light">cca. 3m2</p>
              <h2 className="font-semibold">CONSUMUL DE ENERGIE:</h2>
              <p className="font-light">3 euro / lună</p>
              <h2 className="font-semibold">GREUTATE:</h2>
              <p className="font-light">400 kg</p>
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
            DINAMOMETRU ISOKINETIC PENTRU PIEPT / UMERI – SPATE
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
              <li> Fixare CVC</li>
              <li> Reglare automată a spătarului</li>
              <li> Mânere ergonomice pentru membrele superioare</li>
              <li> Ajustare automată a înălțimii scaunului</li>
              <li> Reglarea pe înălțime a membrelor inferioare</li>
              <li> Suport suplimentar pentru picioare</li>
              <li> Fixare automată a membrelor inferioare</li>
              <li> Braț mobil reglabil</li>
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
              Oferă două tipuri de proceduri respectiv extensia/ rotația
              umărului. Este un exercițiu de bază cu acțiune asupra mușchilor
              pectorali, a musculaturii regiunii superioare a umărului și
              regiunii mediene a spatelui.
            </p>
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c20/target1.png"
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
                <h2 className="mb-1">
                  PROCEDURI PENTRU MUSCULATURA PIEPTULUI (PECTORALI)
                </h2>
                <p className="py-1 font-light">
                  Această procedură este importantă pentru stabilizarea
                  musculaturii pectorale. Cu ajutorul diferitelor mânere de
                  prindere pe lângă musculatura pectorală se acționează asupra
                  mușchilor extensori/ rotatori ai brațului.
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c20/use1.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg sm:ml-8"
              />
            </div>
            <div className="flex sm:flex-row flex-col items-center">
              <div>
                <h2 className="mb-1">
                  PROCEDURA PENTRU MUSCULATURA UMERILOR SI SPATELUI
                </h2>
                <p className="py-1 font-light">
                  Această procedură este importantă pentru stabilizarea coloanei
                  vertebrale. Prin intermediul mânerelor diferite de prindere se
                  acționează asupra centurii scapulo-humerale, regiunii mediene
                  a spatelui și în special asupra mușchilor flexori/ extensori
                  și rotatori ai brațului
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c20/use2.png"
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
