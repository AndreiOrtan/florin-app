import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R32 Maşină isokinetică pentru coloana cervicala
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r32.png"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">GREUTATE TOTALĂ:</h2>
              <p className="font-light">150kg</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">L-160 X L-125 X H-170 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">L-180 X L-135 X H-170 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">AJUSTABILĂ</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">COLOANA CERVICALĂ</h1>
          <h1 className="font-medium mb-2">
            FLEXIA / EXTENSIA / ÎNCLINAREA CAPULUI ŞI GÂTULUI
          </h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <div>
              <p>MUŞCHI PRINCIPALI: STERNOCLEIDOMASTOIDIAN, SCALENI</p>
              <p>MUŞCHII ACCESORI: LUNGUL GÂTULUI</p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r32/target1.png"
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
                Această mașină isokinetică inovatoare face mușchii din zona
                coloanei cervicale, foarte greu de lucrat, accesibili
                tratamentului. Aceasta poate fi folosită pe tot parcursul
                procesului de reabilitare, încă din faza incipientă.
              </p>
              <p className="py-1">
                Axa de mișcare a mașinii poate fi reglată la regiunea dorită a
                coloanei vertebrale cervicale. Limitatoarele de mișcare permit
                izolarea tuturor celor 4 direcții de mișcare (extensie, flexie,
                înclinare stânga/ dreapta).
              </p>
              <p className="py-1">
                Rezistența poate fi setată separat pentru fiecare direcție.
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
