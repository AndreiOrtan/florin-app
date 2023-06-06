import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-blue700 text-3xl font-bold">
            R19 Maşină isokinetică pentru umăr /Flexia/Extensia umarului
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r19.png"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16 mt-8 sm:mt-0">
              <h2 className="font-semibold">DIMENSIUNE:</h2>
              <p className="font-light">120 X 130 X 205 CM</p>

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
          <h1 className="font-medium mb-2">CENTURA SCAPULO – HUMERALĂ</h1>
          <h1 className="font-medium mb-2">
            ABDUCŢIA/ADDUCȚIA SCAPULEI & ROTAŢIA EXTERNĂ A UMĂRULUI ÎN ABDUCȚIE
            ORIZONTALĂ LA 90 °
          </h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <div>
              <p>
                MUŞCHI PRINCIPALI:{" "}
                <span className="font-light">
                  SUBSPINOS, DELTOID POSTERIOR, ROTUND MIC/ PECTORAL MARE,
                  MARELE DORSAL, ROTUND MARE.
                </span>
              </p>
              <p>
                MUŞCHI ACCESORI:{" "}
                <span className="font-light">
                  SUBSCAPULAR, DELTOID ANTERIOR.
                </span>
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r19/target1.png"
              alt="r18"
              height={180}
              width={260}
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
                  src="/mecanoterapie/masini-isokinetice/r19/use1.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4 "
                />
                <p className="font-bold">Rotația internă a umărului</p>
              </div>
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r19/use2.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4"
                />
                <p className="font-bold">Rotația externă a umărului</p>
              </div>
            </div>
            <div>
              <p className="py-1">
                Flexia brațului din umăr se poate face de la pre-întindere
                completă până la flexie maximă. Spătarul reglabil şi înălțimea
                scaunului permite o poziționare în linie cu axa de rotație.
              </p>
              <p className="py-1">
                Mişcarea poate fi limitată într-o direcție concentrică și
                excentrică (este posibilă formarea mișcării segmentare).
              </p>
              <p className="py-1">
                Brațul de acționare al mașinii isokinetice se echilibrează prin
                contragreutate. Drept urmare, mişcarea poate fi controlată ușor
                și precis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
