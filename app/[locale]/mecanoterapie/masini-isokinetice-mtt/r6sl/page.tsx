import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R6SL Maşină isokinetică multifuncţională pentru picioare
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r6sl.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">L-270 X L-107 X H-196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">L-314 X L-107 X H-196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">20 X 10 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">520 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">GLEZNA, PICIORUL</h1>
          <h1 className="font-medium mb-2">
            FLEXIA /EXTENSIA /EVERSIA/ INVERSIA GLEZNEI, PICIORULUI
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
                  PERONIER SCURT, PERONIER LUNG
                </span>
              </p>
              <p>
                MUŞCHI ACCESORI:{" "}
                <span className="font-light">EXTENSOR LUNG AL DEGETELOR</span>
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r6sl/target1.png"
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
                  src="/mecanoterapie/masini-isokinetice/r6sl/use1.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4 "
                />
              </div>
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r6sl/use2.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4"
                />
              </div>
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r6sl/use2.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4"
                />
              </div>
            </div>
            <div>
              <p className="py-1">
                Exercițiile se pot face din poziția culcat sau din șezut.
              </p>
              <p className="py-1">
                Prin reglarea plăcuței, a accesoriilor, a limitatoarelor de
                mișcare și a înălțimii spătarului, se pot efectua o multitudine
                de exerciții funcționale pentru membrele inferioare.
              </p>
              <p className="py-1">
                Marea varietate a acestor exerciții pot fi abordate nu numai în
                funcție de sfera de aplicare, ci și în funcție de dificultatea
                de coordonare.
              </p>
              <p className="py-1">
                Este o maşină care are o gamă foarte largă de exerciţii.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
