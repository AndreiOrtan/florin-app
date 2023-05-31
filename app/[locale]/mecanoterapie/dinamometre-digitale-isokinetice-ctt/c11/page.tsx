import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-blue700 text-3xl font-bold">
            C11 Dinamometru Digital Isokinetic pentru șold/picior
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c11.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16 mt-8 sm:mt-0">
              <h2 className="font-semibold">DIMENSIUNI:</h2>
              <p className="font-light">
                lungime: 180cm / lățime: 100 cm / înălțime: 200 cm
              </p>
              <h2 className="font-semibold">SUPRAFAȚA DE AMPLASARE:</h2>
              <p className="font-light">cca. 2m2</p>
              <h2 className="font-semibold">CONSUMUL DE ENERGIE:</h2>
              <p className="font-light">3 euro / lună</p>
              <h2 className="font-semibold">GREUTATE:</h2>
              <p className="font-light">350 kg</p>
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
            DINAMOMETRU ISOKINETIC PENTRU ȘOLD/PICIOR
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
              <li> Monitor rotativ de 17 inch</li>
              <li> Amprentă biometrică</li>
              <li> Suport picioare reglabil și detașabil</li>
              <li>
                {" "}
                Transmisie electronică resetabilă pentru abducție, adducție
              </li>
              <li> Fixarea picioarelor</li>
              <li> Suport reglabil și detașabil</li>
              <li> Pernă pentru ajustarea unghiului piciorului</li>
              <li> Suport suplimentar pentru picioare, sistem închis</li>
              <li> Braț mobil reglabil</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <p>
              Oferă diverse tipuri de proceduri respectiv abducția/adducția &
              rotația internă/externă a șoldului. Procedurile pot fi efectuate
              din diferite unghiuri de pornire. Mișcările se realizează din
              clinostatism în șezut și invers.Pentru facilitarea mișcării pe
              C11, spătarul este adus automat din pozitia șezut în poziția
              culcat și se întoarce automat în poziția șezut pentru ca mișcarea
              să fie confortabilă.
            </p>
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c11/target1.png"
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
                <h2 className="mb-1">PROCEDURA PENTRU ABDUCȚIE/ADDUCȚIE</h2>
                <p className="py-1 font-light">
                  Cu procedura de Adducție are loc procesul de mișcare de la
                  Abducție la Adducție. Aici, sunt acționați mușchii regiunii
                  mediale a coapsei. Spătarul poate fi reglat în mod continuu de
                  la poziție orizontală la cea în șezut. Unghiul reglabil al
                  genunchiului cu sprijin pentru picior determina forța
                  exercitată asupra mușchilor scurți și lungi adductori.
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c11/use1.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg sm:ml-8"
              />
            </div>
            <div className="flex sm:flex-row flex-col items-center">
              <div>
                <h2 className="mb-1">PROCEDURA PENTRU ROTAȚIE</h2>
                <p className="py-1 font-light">
                  Cu C11 se actionează asupra musculaturii fesiere și a
                  coapselor într-o singură procedură. Datorită pozițiilor
                  diferite ale spătarului, accesibilitatea la nivelul grupelor
                  musculare este sporită. Spătarul poate fi reglat în mod
                  continuu de la poziția orizontală la cea verticală. Unghiul
                  reglabil al genunchiului cu sprijin pentru picior determină
                  forța exercitată asupra mușchilor abductori.
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c11/use2.png"
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
