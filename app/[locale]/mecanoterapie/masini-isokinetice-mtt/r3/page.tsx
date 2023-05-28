import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R3 Maşină Isokinetică pentru şold
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r3.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">150 X 90 X 205 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">200 X 90 X 1205 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">15X5 – 5X3 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">290 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">ȘOLD</h1>
          <h1 className="font-medium mb-2">FLEXIA / EXTENSIA ȘOLDULUI</h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <div>
              <p>
                MUŞCHI PRINCIPALI:{" "}
                <span className="font-light">ILIOPSOAS.</span>
              </p>
              <p>
                MUŞCHI ACCESORI::{" "}
                <span className="font-light">
                  DREPTUL ANTERIOR, CROITORUL, TENSORUL FASCIEI LATĂ, PECTINEUL,
                  ADDUCTORII (FIBRELE OBLICE), FLECTEAZĂ COAPSA PÂNĂ LA
                  ORIZONTALĂ
                </span>
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r3/target1.png"
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
            <div className="flex sm:flex-row flex-col justify-between items-center w-full my-8">
              <div className="text-center">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r3/use1.png"
                  alt="r18"
                  height={210}
                  width={300}
                  className="rounded-lg my-4"
                />
                <p className="font-bold">Flexia șoldului</p>
              </div>
              <div className="text-center">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r3/use2.png"
                  alt="r18"
                  height={210}
                  width={300}
                  className="rounded-lg my-4"
                />
                <p className="font-bold">Extensia șoldului</p>
              </div>
              <div className="text-center">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r3/use3.png"
                  alt="r18"
                  height={210}
                  width={300}
                  className="rounded-lg my-4"
                />
                <p className="font-bold">Extensia șoldului</p>
              </div>
            </div>
            <div>
              <p className="py-1">
                Extensia șoldului se poate face cu unul sau ambele picioare.
                Această mișcare de extensie antrenează mușchiul iliopsoas și, în
                funcție de poziția genunchiului, accentuează mușchii spatelui.
              </p>
              <p className="py-1">
                Mișcarea poate fi realizată bilateral sau unilateral.
              </p>
              <p className="py-1">
                Într-o versiune bilaterală (ambele picioare se mișcă în extensia
                șoldului), o tensiune musculară pronunțată a spatelui se
                dezvoltă până la tranziția toraco-lombară (tranziție de la
                torace la coloana lombară).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
