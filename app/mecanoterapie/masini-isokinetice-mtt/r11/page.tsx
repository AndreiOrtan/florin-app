import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R11 Maşină Isokinetică pentru şold
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r11.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">220 X 110 X 196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">220 X 165 X 196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">20 X 9 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">300 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">ȘOLD</h1>
          <h1 className="font-medium mb-2">
            ABDUCŢIA / ADDUCŢIA ŞOLDULUI ROTAŢIA INTERNĂ / EXTERNĂ A ŞOLDULUI
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
                  ILIOPSOAS, ADDUCTORUL LUNG, ADDUCTORUL SCURT, ADDUCTORUL
                  MARE/OBTURATOR EXTERN, OBTURATOR INTERN, PĂTRAT FEMURAL,
                  PIRIFORM, GEMEN SUPERIOR, GEMEN INFERIOR, FESIER MARE.
                </span>
              </p>
              <p>
                MUŞCHI ACCESORI:{" "}
                <span className="font-light">
                  BICEPS FEMURAL ŞI CROITOR, SEMITENDINOS, SEMIMEMBRANOS.
                </span>
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r11/target1.png"
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
                  src="/mecanoterapie/masini-isokinetice/r11/use1.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4 "
                />
                <p className="font-bold">Adducţia/Rotaţia internă şoldului</p>
              </div>
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r11/use2.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4"
                />
                <p className="font-bold">Abducţia/Rotaţia externa şoldului</p>
              </div>
            </div>
            <div>
              <p className="py-1">
                Spătarul poate fi reglat de la poziția culcat la poziția de
                șezut.
              </p>
              <p className="py-1">
                Mașina isokinetică funcționează cu brațele independent unul față
                de celălalt și promovează în mod optim secvența coordonatoare a
                mișcărilor.
              </p>
              <p className="py-1">
                Pentru îmbunătățirea dezechilibrului muscular, exerciţiul se
                poate realiza şi cu un singur picior (membru inferior).
              </p>
              <p className="py-1">
                Datorită ajustării variabile, atât mușchii cu aducție scurtă,
                cât și mușchii cu aducție lungă pot fi abordați.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
