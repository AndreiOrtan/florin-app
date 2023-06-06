import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-blue700 text-3xl font-bold">
            R8 Maşină isokinetică butterfly cu funcţie dublă
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r8.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16 mt-8 sm:mt-0">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">146 X 80 X 209 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">153 X 163 X 209 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">8×10 KG /5×5 KG /5×3 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">320 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">UMĂR</h1>
          <h1 className="font-medium mb-2">
            ABDUCŢIA /ADDUCŢIA ORIZONTALĂ A UMĂRULUI
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
                  DELTOIDUL, SUPRASPINOS/ DELTOID POSTERIOR,SUBSPINOS
                </span>
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r8/target1.png"
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
                  src="/mecanoterapie/masini-isokinetice/r8/use1.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4 "
                />
                <p className="font-bold">
                  Adducţia orizontală / Rotaţia externă
                </p>
              </div>
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r8/use2.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4"
                />
                <p className="font-bold">
                  Adducţia orizontală / Rotaţia internă
                </p>
              </div>
            </div>
            <div>
              <p className="py-1">
                Reglarea scaunului și spătarului permit stabilizarea automată a
                coloanei vertebrale. Reglarea mânerelor permite acționarea
                diferită în execuția mișcării. Reglarea lungimii brațului
                permite diferite puncte de aplicare a forței, ale căror variații
                duc la utilizarea diferitelor grupe musculare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}