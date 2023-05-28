import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R12E Scripete Dublu pentru membrele superioare şi inferioare
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
              <h2 className="font-semibold">DIMENSIUNE</h2>
              <p className="font-light">30 X 30 X 230 CM</p>

              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">100 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">UMĂR</h1>
          <h1 className="font-medium mb-2">FLEXIA COTULUI</h1>
          <h1 className="font-medium mb-2">
            FLEXIA/ EXTENSIA ABDUCŢIA/ ADDUCŢIA PUMNULUI
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
                  DELTOID ANTERIOR, CORACOBRAHIAL, BICEPS BRAHIAL (CAPUL LUNG).
                </span>
              </p>
              <p>
                MUŞCHI ACCESORI:{" "}
                <span className="font-light">TRAPEZ SUPERIOR</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col justify-center items-center">
            <div className="flex sm:flex-row flex-col justify-between items-center w-full my-8 ">
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r12e/use1.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4 "
                />
              </div>
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r12e/use2.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4"
                />
              </div>
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r12e/use2.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4"
                />
              </div>
              <div className="text-center mx-16">
                <Image
                  src="/mecanoterapie/masini-isokinetice/r12e/use2.png"
                  alt="r18"
                  height={150}
                  width={200}
                  className="rounded-lg mx-auto py-4"
                />
              </div>
            </div>
            <div>
              <p className="py-1">
                Diversitatea opțiunilor de exerciţii este atât de mare încât o
                descriere detaliată a tuturor acestora ar fi prea vastă.
              </p>
              <p className="py-1">
                Toate articulațiile mari ale corpului pot fi lucrate individual
                sau în lanț fiziologic funcțional cu această maşină isokinetică.
              </p>
              <p className="py-1">
                Gama de poziții de pornire include toate pozițiile imaginabile,
                poziția supină, poziția predispusă (cu bancă suplimentară),
                poziția laterală etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
