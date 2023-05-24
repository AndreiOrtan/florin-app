import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R5 Maşină Isokinetică pentru ridicarea / coborârea centurii
            scapulohumerale
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r5.png"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">200 X 1130 X 196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">200 X 1150 X 196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">10 X 10 KG / 5 X 5 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">380 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">CENTURA SCAPULO – HUMERALĂ</h1>
          <h1 className="font-medium mb-2">
            RIDICAREA ȘI COBORÂREA SCAPULO – HUMERALĂ
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
                  TRAPEZUL SUPERIOR,ANGULARUL (RIDICĂTORUL SCAPULEI)/TRAPEZUL
                  INFERIOR
                </span>
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r5/target1.png"
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
                  src="/mecanoterapie/masini-isokinetice/r5/use1.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4 "
                />
                <p className="font-bold">Ridicarea scapulei</p>
              </div>
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r5/use2.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4"
                />
                <p className="font-bold">Coborârea scapulei</p>
              </div>
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r5/use3.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4"
                />
                <p className="font-bold">Extensia brațelor / triceps</p>
              </div>
            </div>
            <div>
              <p className="py-1">
                Secvența de mișcare de pe această maşină isokinetică se bazează
                pe ridicare/coborâre.
              </p>
              <p className="py-1">
                Este un exercițiu de tragere complex, care ameliorează coloana
                vertebrală și întărește mușchii trunchiului.
              </p>
              <p className="py-1">
                Presiunea asupra articulațiilor vertebrale este mult redusă.
              </p>
              <p className="py-1">
                Controlul poziției fiziologice individuale a coloanei vertebrale
                este sigur, la acest lucru contribuie poziția de șezut și
                unghiul special al spătarului. Poziționarea în siguranță a
                pacientului asigură simplificarea exercițiului.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
