import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R31 Maşină isokinetică pentru coloana toracică
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r31.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">190 X 134 X 196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">250 X 134 X 196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">10 X 3+10 X 5 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">400 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">FLEXIA TRUNCHIULUI</h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <div>
              <p>MUŞCHI PRINCIPALI: DREPŢII ABDOMINALI, TRANSVERSUL</p>
              <p>MUŞCHII ACCESORI: OBLICII ABDOMINALI</p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r31/target1.png"
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
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <div>
              <p className="py-1">
                Această mașină isokinetică le permite chiar și pacienților cu
                probleme la coloana cervicală să lucreze mușchii abdominali fără
                niciun risc deoarece capul este bine sprijinit de pernă pe toată
                durata mișcării.
              </p>
              <p className="py-1">
                Mușchii abdomenului inferior și superior, drepţii abdominali,
                transversul și oblicii abdominali pot fi lucrați la un nivel de
                precizie fără precedent.
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r32/use1.png"
              alt="r18"
              height={210}
              width={300}
              className="rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
