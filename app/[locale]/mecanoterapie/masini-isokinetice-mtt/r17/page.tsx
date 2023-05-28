import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R17 Maşină isokinetică pentru coloana toracică
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
              <p className="font-light">180 X 140 X 196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">190 X 160 X 196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">10 X 9+5 X 5+5 X 3 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">320 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">COLOANA DORSO – LOMBARĂ</h1>
          <h1 className="font-medium mb-2">ÎNCLINAREA TRUNCHIULUI</h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <div>
              <p>MUŞCHI PRINCIPALI: OBLICII INTERNI ŞI EXTERNI ABDOMINALI</p>
              <p>MUŞCHII ACCESORI: DREPŢII ABDOMINALI</p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r17/target1.png"
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
                Înălțimea scaunului și dimensiunile suportului din spate pot fi
                reglate independent compensând astfel diferențele de norme
                antropometrice în ceea ce privește dimensiunea corpului și
                lungimea picioarelor.
              </p>
              <p className="py-1">
                Conform ultimelor măsurători, poziția de pornire este mai sigură
                ca niciodată, deoarece nu se plasează o sarcină mai mare pe
                discurile intervertebrale decât pe picioare.
              </p>
              <p className="py-1">
                Mașina isokinetică este ușor de folosit de către pacienți.
                Reglajele de control permit pacientului să își găsească singur
                manetele de ajustare.
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r17/use1.png"
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
