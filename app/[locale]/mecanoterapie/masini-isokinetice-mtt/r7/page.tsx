import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R7 Maşină isokinetică pentru coloana toracică
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r7.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">150 X 105 X 196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">150 X 120 X 196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">5X3 + 10X5 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">270 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">COLOANA DORSO – LOMBARĂ</h1>
          <h1 className="font-medium mb-2">ROTAȚIA TRUNCHIULUI</h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <div>
              <p>
                MUŞCHI PRINCIPALI:{" "}
                <span className="font-light">
                  OBLICII INTERNI ŞI EXTERNI ABDOMINALI
                </span>
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r7/target1.png"
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
                Funcția specială a acestei mașini isokinetice este tratarea
                mușchilor profunzi ai spatelui (mușchii statici).
              </p>
              <p className="py-1">
                Până în prezent știința nu a determinat geneza durerilor de
                spate în toată diversitatea și manifestarea lor. Cauzele sunt
                diverse și variază de la o boală genetică până la leziuni
                traumatice.
              </p>
              <p className="py-1">
                Deși exercițiile unidimensionale izolate ale mușchilor spatelui
                duc la o îmbunătățire musculară pe direcțiile de flexie și
                extensie, siguranța articulațiilor coloanei vertebrale este
                determinată în mare măsură de stabilizarea tridimensională
                (flexie, extensie, rotație) a acestora
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r7/use1.png"
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
