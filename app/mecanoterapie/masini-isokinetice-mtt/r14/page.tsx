import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R14 Maşină isokinetică pentru coloana lombară
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r17.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">158 X 100 X 196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">230 X 100 X 196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">15X 5 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">300 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">COLOANA DORSO – LOMBARĂ</h1>
          <h1 className="font-medium mb-2">EXTENSIA TRUNCHIULUI</h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <p>
              MUŞCHI PRINCIPALI: PARAVERTEBRALII DIN SEGMENTUL TORACIC ŞI
              LOMBAR, MARELE DORSAL.
            </p>
            <Image
              src="/mecanoterapie/masini-isokinetice/r14/target1.png"
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
            <div>
              <p className="py-1">
                Această mașină isokinetică este creată pentru imobilizarea
                segmentară a coloanei dorso- lombare permițând astfel atât
                tratarea mușchilor abdominali cât și a mușchilor spatelui.
              </p>
              <p className="py-1">
                Mașina isokinetică poate fi ajustată oricărei dimensiuni
                corporale.
              </p>
              <p className="py-1">
                Coloana dorso-lombară este imobilizată în poziția culcat astfel
                se asigură o poziție optimă de pornire a exercițiului.
              </p>
            </div>
            <div className="flex flex-wrap my-2">
              <Image
                src="/mecanoterapie/masini-isokinetice/r14/use1.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg "
              />
              <Image
                src="/mecanoterapie/masini-isokinetice/r14/use2.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg "
              />
              <Image
                src="/mecanoterapie/masini-isokinetice/r14/use3.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
