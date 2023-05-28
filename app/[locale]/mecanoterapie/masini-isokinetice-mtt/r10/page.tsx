import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            R10 Maşină isokinetică pentru coloana sacrală
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/masini-isokinetice/r10.jpeg"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNE SETARE PASIVĂ:</h2>
              <p className="font-light">150 X 80 X 196 CM</p>
              <h2 className="font-semibold">DIMENSIUNE SETARE ACTIVĂ:</h2>
              <p className="font-light">210 X 80 X 196 CM</p>
              <h2 className="font-semibold">SARCINA PE PLĂCI:</h2>
              <p className="font-light">20 X 9 KG</p>
              <h2 className="font-semibold">GREUTATE TOTALĂ</h2>
              <p className="font-light">290 KG</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">COLOANA DORSO – LOMBARĂ</h1>
          <h1 className="font-medium mb-2">
            EXTENSIA TRUNCHIULUI – MIȘCARE COMPLEXĂ
          </h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col justify-center items-center">
            <div>
              <p>
                MUŞCHI PRINCIPALI:{" "}
                <span className="font-light">
                  PARAVERTEBRALII DIN SEGMENTUL TORACIC ŞI LOMBAR, MARELE
                  DORSAL.
                </span>
              </p>
              <p>
                MUŞCHI ACCESORI:{" "}
                <span className="font-light">
                  PERONIER SCURT, PERONIER LUNG, EXTENSOR LUNG AL DEGETELOR.
                </span>
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r10/target1.png"
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
                Maşina isokinetică permite exerciţiul de extensie complexă
                pentru: coloana vertebrală în cele 3 secțiuni ale sale (coloană
                cervicală, toracică și lombară) și articulațiile membrelor
                inferioare.
              </p>
              <p className="py-1">
                Procedura complexă de extensie a coloanei vertebrale și mișcarea
                în combinație cu membrele inferioare, maşina isokinetică este
                unică în această configurație.
              </p>
              <p className="py-1">
                Complet nou – este fixarea dorsală a articulației genunchiului
                pe toată durata efectuării mişcării.
              </p>
            </div>
            <Image
              src="/mecanoterapie/masini-isokinetice/r10/use1.png"
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