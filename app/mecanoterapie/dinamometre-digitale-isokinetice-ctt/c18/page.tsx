import Image from "next/image";

export default function R18() {
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            C18 Dinamometru Digital Isokinetic pentru coloana cervicală /
            toracică
          </h1>
        </div>
      </header>
      <div className="w-full my-8">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8">
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c18.png"
              alt="r18"
              height={300}
              width={380}
              className="rounded-lg"
            />
            <div className="sm:ml-16">
              <h2 className="font-semibold">DIMENSIUNI:</h2>
              <p className="font-light">
                lungime: 120cm / lățime: 100cm / înălțime: 180cm
              </p>
              <h2 className="font-semibold">SUPRAFAȚA DE AMPLASARE:</h2>
              <p className="font-light">cca. 1,5m2</p>
              <h2 className="font-semibold">CONSUMUL DE ENERGIE:</h2>
              <p className="font-light">3 euro / lună</p>
              <h2 className="font-semibold">GREUTATE:</h2>
              <p className="font-light">220 kg</p>
              <h2 className="font-semibold">COMPUTER:</h2>
              <p className="font-light">
                PC integrat, inclusiv software-ul ușor de controlat și monitor
                touchscreen de 17 inch
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-medium mb-4">Descriere</h1>
          <h1 className="font-medium mb-2">
            DINAMOMETRU ISOKINETIC PENTRU COLOANA CERVICALĂ/TORACICĂ
          </h1>
          <div>
            <h1 className="font-bold mb-1">
              Proceduri complet automatizate – reglaje și fixări
            </h1>
            <ul className="list-disc ml-6">
              <li>
                {" "}
                Reglare automată a sarcinii de lucru și dispozitiv de
                pretensionare a greutății patentat MKB-System
              </li>
              <li> Fixare automată a CVC</li>
              <li> Ajustarea pernei pentru umeri</li>
              <li> Ajustarea unghiului de mișcare</li>
              <li> Suport lombar ergonomic</li>
              <li> Cotiere</li>
              <li> Ajustare automatăa înălțimii scaunului</li>
              <li> Suport suplimentar pentru picioare</li>
              <li> Fixare automată a genunchilor</li>
              <li> Ajustarea pe înălțime a pernei pentru picioare</li>
              <li> Monitor rotativ de 17 inch</li>
              <li> Braț mobil reglabil</li>
              <li> Amprentă biometrică</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <p>
              C 18 acționeaza asupra întregului lanț muscular al CVC într-un
              exercițiu 2D Procedura 2D poate începe din diferite unghiuri de
              pornire. Înainte de începerea procedurii pacientul va fi
              pozitionat cu flexia coapsei pe bazin și flexia gambei pe coapsă
              la 90°.
            </p>
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c18/target1.png"
              alt="r18"
              height={210}
              width={300}
              className="rounded-lg "
            />
          </div>
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <p>
              Acest dinamometru isokinetic este caracterizat prin faptul că,
              atât CVC cât și CVT sunt în poziția zero. Doar pozitia zero
              asigură efectuarea corecta a procedurilor, acesta fiind principiul
              de baza al Dinamometrului Isokinetic C18. Mișcarea de flexie și
              extensie sta la baza procedurilor. Se asigură astfel corectarea
              cifozei coloanei toracice și a coloanei cervicale la nivel C6 si
              C7. (mișcare de extensie) În mod automat, segmentele rămase, care
              se extind, intră într-o poziție de flexie, garantând astfel
              libertate de mișcare a CVC.
            </p>
            <Image
              src="/mecanoterapie/dinamometre-isokinetice/c18/target2.png"
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
            <div className="flex sm:flex-row flex-col items-center">
              <div>
                <h2 className="mb-1">
                  PROCEDURA PENTRU FLEXIA/ EXTENSIA CAPULUI ȘI GÂTULUI
                </h2>
                <p className="py-1 font-light">
                  Caracteristica specială a Dinamometrului Isokinetic este că
                  acționează atât asupra CVC cât și asupra CVT iar procedurile
                  pot fi efectuate fiziologic într-o singură procedură.
                </p>
              </div>
              <Image
                src="/mecanoterapie/dinamometre-isokinetice/c18/use1.png"
                alt="r18"
                height={210}
                width={300}
                className="rounded-lg sm:ml-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
