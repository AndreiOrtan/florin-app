import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R18 Maşină isokinetică pentru coloana toracică
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r18.png"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">GREUTATE TOTALĂ:</h2>
              <p className="font-light">280kg</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">L-150 X L-100 X H-196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">L-150 X W-110 X H-196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">20 X 5 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">COLOANA DORSO – LOMBARĂ</h1>
          <h1 className="font-medium mb-2">
            FLEXIA / EXTENSIA COLOANEI CERVICALE
          </h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <div>
              <p>
                MUŞCHI PRINCIPALI: MUŞCHIUL ERECTOR (M ILEOCOSTAL+ M.
                LONGISSIMUS) MUŞCHIUL SPLENIUS CERVICIS ŞI SPLENIUS CAPITIS
              </p>
              <p>
                MUŞCHII ACCESORI: MUŞCHII INTERSPINALES, MUŞCHII
                INTERTRANSVERSARII
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r18/target1.png"
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
              <p>
                O construcție complet nouă care provoacă o tensiune de bază a
                mușchilor spatelui prin poziția de plecare. În această poziție
                pacientul e aşezat cu partea superioară a corpului aplecata ceea
                ce duce la autostabilizarea imediată a regiunii lombare
                inferioare.
              </p>
              <p>
                Ceea ce este complet nou este faptul că această poziție de
                pornire permite exersarea asistată pe maşinia isokinetică în
                poziție verticală și, astfel, pentru prima dată împotriva
                gravitației.
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r18/use1.png"
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
