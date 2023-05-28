import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            C17 Dinamometru Digital Isokinetic pentru coloana dorso-lombară și
            șold
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c17.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNI:</h2>
              <p className="font-light">
                lungime: 120cm / lățime: 130 cm / înălțime: 200 cm
              </p>
              <h2 className="font-semibold">SUPRAFAȚA DE AMPLASARE:</h2>
              <p className="font-light">cca. 2m2</p>
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
              <li> Fixare CVC</li>
              <li> Fixare CVC / Ajustarea înălțimii</li>
              <li> Setare automată a unghiului pentru fixarea corpului</li>
              <li> Pernă ergonomică CVC</li>
              <li> Suport ergonomic pentru CVL</li>
              <li> Ajustare automată pe înălțimea scaunului</li>
              <li> Suport suplimentar pentru picioare</li>
              <li> Ajustare și fixare automată pentru picioare</li>
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
              Pentru coloana dorso-lombară și șold oferă două tipuri de
              proceduri respectiv înclinarea trunchiului și rotația șoldului.
              C17 este primul Dinamometru Isokinetic care realizează o mișcare
              2D astfel combinând două exerciții într-unul singur. Doar în acest
              fel se realizează o contracție musculară concentrică asupra
              mușchiului iliopsoas.
            </p>
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c17/target1.png"
              alt="r18"
              height={210}
              width={300}
              className="rounded-lg "
            />
          </div>
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <p>
              Stabilizarea 2D asigură mobilitatea articulațiilor coloanei
              vertebrale și solicitarea musculaturii în condiții de siguranță.
              Prin mișcarea unidimensională la nivelul musculaturii spatelui se
              realizează doar înclinarea trunchiului fără a realiza mișcarea de
              rotație. Dinamometrul Isokinetic C17 a fost dezvoltat de MKB
              System împreună cu terapeuți și medici experimentați, în mod
              special pentru a realiza în plus și rotația șoldului printr-o
              mișcare complexă 2D.
            </p>
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c17/target2.png"
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
                  PROCEDURA PENTRU COLOANA DORSO-LOBARĂ ȘI ȘOLD
                </h2>
                <p className="py-1 font-light">
                  Procedura 2D poate începe din diferite unghiuri de pornire.
                  Înainte de începerea procedurii, pacientul va fi poziționat cu
                  flexia coapsei pe bazin și flexia gambei pe coapsa la 90°.
                  Pentru a realiza o îndreptare adecvată sau pre-întinderea la
                  pacienții cu lodoză, este necesară o poziție de coordonare
                  optimă. Aceasta asigură o mai mare flexibilitate a coloanei
                  dorso-lombare. Această formă complexă de miscare reprezintă o
                  parte importantă a vietii cotidiene.
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c17/use1.png"
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
