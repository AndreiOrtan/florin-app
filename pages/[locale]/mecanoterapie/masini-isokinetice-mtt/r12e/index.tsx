import { useTranslations } from "next-intl";
import Image from "next/image";

export default function R18() {
  const t = useTranslations("mecanoterapie");
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium w-full">
      <header className="py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-blue700 text-3xl font-bold">
            {t("masiniIso.card12.h")}
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
            <div className="sm:ml-16 mt-8 sm:mt-0">
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
          <h1 className="font-medium mb-2">{t("masiniIso.card12.p1")}</h1>
          <h1 className="font-medium mb-2">{t("masiniIso.card12.p2")}</h1>
          <h1 className="font-medium mb-2">{t("masiniIso.card12.p3")}</h1>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <div className="flex sm:flex-row flex-col-reverse justify-center items-center">
            <div>
              <p>
                MUŞCHI PRINCIPALI:{" "}
                <span className="font-light">{t("masiniIso.card12.p4")}</span>
              </p>
              <p>
                MUŞCHI ACCESORI:{" "}
                <span className="font-light">{t("masiniIso.card12.p5")}</span>
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
              <p className="py-1">{t("masiniIso.card12.p6")}</p>
              <p className="py-1">{t("masiniIso.card12.p7")}</p>
              <p className="py-1">{t("masiniIso.card12.p8")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}