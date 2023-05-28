import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R16 Maşină isokinetică pentru genunchi
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r16.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">120 X 110 X 196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">160 X 110 X 196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">10 X 10 KG / 5 X 5 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">280 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">ȘOLD</h1>
          <h1 className="font-medium mb-2">Flexia/ Extensia genunchiului</h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <div>
              <div className="my-2">
                <h2>FLEXIA </h2>
                <p>
                  MUŞCHI PRINCIPALI:{" "}
                  <span className="font-light">
                    BICEPS FEMURAL, SEMITENDINOS, SEMIMEMBRANOS.
                  </span>
                </p>
                <p>
                  MUŞCHI ACCESORI:{" "}
                  <span className="font-light">
                    POPLITEU, CROITOR, GASTROCNEMIENI
                  </span>
                </p>
              </div>
              <div className="my-2">
                <h2>EXTENSIA</h2>
                <p>
                  MUŞCHI PRINCIPALI:{" "}
                  <span className="font-light">
                    CVADRICEPSUL (DREPT FEMURAL (ANTERIOR), VAST INTERN,
                    LATERAL, MEDIAL)
                  </span>
                </p>
                <p>
                  MUŞCHI ACCESORI:{" "}
                  <span className="font-light">TENSORUL FASCIA LATA</span>
                </p>
              </div>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r16/target1.png"
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
            <div className="flex sm:flex-row flex-col justify-between items-center w-full my-8 ">
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r16/use1.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4 "
                />
                <p className="font-bold">Flexia genunchiului</p>
              </div>
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r16/use2.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4"
                />
                <p className="font-bold">Extensia genunchiului</p>
              </div>
            </div>
            <div>
              <p className="py-1">
                Prin acest exercițiu se lucrează în principal extensia
                genunchiului.
              </p>
              <p className="py-1">
                Mașina isokinetică are o ajustare graduală a unghiului de
                pornire în exercițiu. Poziția de șezut poate fi ajustată ușor și
                precis la dimensiunile corpului.
              </p>
              <p className="py-1">
                Intervalul de mișcare poate fi limitat la mișcare concentrică și
                excentrică.
              </p>
              <p className="py-1">
                Fără a schimba poziția din șezut, mașina isokinetică îşi poate
                schimba funcția (flexie/extensie) prin simpla mutare a brațului
                de acționare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
