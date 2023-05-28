import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            C16 Dinamometru Digital Isokinetic pentru genunchi
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c16.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNI:</h2>
              <p className="font-light">
                lungime: 130cm / lățime: 130 cm / înălțime: 205 cm
              </p>
              <h2 className="font-semibold">SUPRAFAȚA DE AMPLASARE:</h2>
              <p className="font-light">cca. 2m2</p>
              <h2 className="font-semibold">CONSUMUL DE ENERGIE:</h2>
              <p className="font-light">3 euro / lună</p>
              <h2 className="font-semibold">GREUTATE:</h2>
              <p className="font-light">435 kg</p>
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
            DINAMOMETRU ISOKINETIC PENTRU GENUNCHI
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
              <li> Mânere suplimentare</li>
              <li> Fixare CVC</li>
              <li> Spătar ergonomic</li>
              <li> Ajustare automată a spătarului</li>
              <li> Cilindru ergonomic pentru picioare</li>
              <li> Setare automată a unghiului de start</li>
              <li> Fixare automată a picioarelor</li>
              <li> Ajustare automată a picioarelor</li>
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
              Oferă două proceduri diferite de antrenament respectiv extensia /
              flexia genunchiului.
            </p>
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c16/target1.png"
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
                <h2 className="mb-1">PROCEDURI PENTRU EXTENSIA GENUNCHIULUI</h2>
                <p className="py-1 font-light">
                  Comutarea automată a brațului în sens ascendent, permite
                  extensia genunchiului fără schimbarea poziției de pornire.
                  Datorită poziției de șezut, se acționează asupra musculaturii
                  ischiocrurale cu flexia soldului la 90°.
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c16/use1.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg sm:ml-8"
              />
            </div>
            <div className="flex sm:flex-row flex-col items-center">
              <div>
                <h2 className="mb-1">PROCEDURA PENTRU FLEXIA GENUNCHIULUI</h2>
                <p className="py-1 font-light">
                  Procedura acționează asupra musculaturii posterioare a
                  coapsei. Cilindrul pentru picioare poate fi reglat automat în
                  funcție de particularitățile pacientului pentru o rezistență
                  distală sau proximală. Mecanismul uniaxial acționează în
                  special musculatura adiacentă a genunchiului.
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c16/use2.png"
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
