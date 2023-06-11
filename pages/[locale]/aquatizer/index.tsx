import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function OptonPro() {
  const t = useTranslations("aquatizer");
  const [selectedContent, setSelectedContent] = useState("1");

  function selectedContentHandle(id: string) {
    setSelectedContent(id);
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-9/12 py-4">
        <div className="flex flex-col items-center ">
          <div>
            <header className="py-4">
              <div className="container mx-auto px-4">
                <h1 className="text-blue700 text-3xl font-bold">Aquatizer</h1>
              </div>
            </header>
          </div>
          <div className="flex justify-center items-center sm:flex-row flex-col">
            <div className="text-container my-8">
              <p className="my-auto text-left">
                {t("p1")} <span className="font-bold">„Aquatizer QZ”</span>{" "}
                {t("p1Rest")}
              </p>
              <p className="my-auto text-left">{t("p2")} </p>
              <p className="my-auto text-left">{t("p3")}</p>
            </div>
            <Image
              src="/aquatizer/aqua.jpeg"
              width={320}
              height={200}
              alt="PhySys"
              className=""
            />
          </div>
        </div>
      </div>

      <div className="w-9/12 flex my-4 border-b">
        <button
          className={`sm:p-8 p-1 border w-full  ${
            selectedContent === "1" ? "bg-blue700 text-white" : ""
          }  text-xl font-semibold  rounded-t-lg`}
          onClick={() => selectedContentHandle("1")}
        >
          {t("p4")}
        </button>
        <button
          className={`sm:p-8 p-1 border w-full mx-1 ${
            selectedContent === "2" ? "bg-blue700 text-white" : ""
          }  text-xl font-semibold rounded-t-lg`}
          onClick={() => selectedContentHandle("2")}
        >
          {t("p5")}
        </button>
        <button
          className={`sm:p-8 p-1 border w-full ${
            selectedContent === "3" ? "bg-blue700 text-white" : ""
          }  text-xl font-semibold rounded-t-lg`}
          onClick={() => selectedContentHandle("3")}
        >
          {t("p6")}
        </button>
      </div>

      {selectedContent === "1" && (
        <>
          <div className="w-full py-10">
            <div className="w-9/12 mx-auto">
              <div className="flex sm:flex-row flex-col py-2">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{t("p7")}</h2>
                  <p className="py-4">{t("p8")}</p>
                </div>
                <Image
                  src="/aquatizer/widejet.jpeg"
                  alt="Any Text"
                  width={420}
                  height={370}
                  blurDataURL="URL"
                  placeholder="blur"
                  className="mr-4 rounded-lg"
                />
              </div>
              <h2 className="text-2xl font-semibold my-8">{t("p9")}</h2>
              <div>
                <h2 className="text-2xl font-semibold mb-2"> {t("p10")}</h2>
                <p className="mb-4"> {t("p11")}</p>

                <h2 className="text-2xl font-semibold mb-2"> {t("p12")}</h2>
                <p className="mb-4"> {t("p13")}</p>

                <h2 className="text-2xl font-semibold mb-2"> {t("p14")}</h2>
                <p className="mb-4"> {t("p15")}</p>
              </div>

              <h2 className="text-2xl font-semibold my-8">{t("p16")}</h2>
            </div>
          </div>

          <div className="w-full py-10 bg-lightgray">
            <div className="w-9/12 mx-auto">
              <div className="flex sm:flex-row flex-col py-2">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">{t("p17")}</h2>
                  <p className="py-4">{t("p18")}</p>
                </div>
                <Image
                  src="/aquatizer/jet4.jpeg"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                  className="mr-4 rounded-lg"
                />
              </div>
              <div className="flex sm:flex-row flex-col py-2">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">{t("p19")}</h2>
                  <p className="py-4">{t("p20")}</p>
                </div>
                <Image
                  src="/aquatizer/airbag1.jpeg"
                  alt="Any Text"
                  width={460}
                  height={380}
                  blurDataURL="URL"
                  placeholder="blur"
                  className="mr-4 rounded-lg"
                />
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">{t("p21")}</h2>
                <p className="py-4">{t("p22")}</p>
                <h2 className="text-2xl font-semibold mb-2">{t("p23")}</h2>
                <p className="py-4">{t("p24")}</p>
              </div>
            </div>
          </div>

          <div className="w-full py-10">
            <div className="w-9/12 mx-auto">
              <div className="flex sm:flex-row flex-col py-2">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{t("p25")}</h2>
                  <p className="py-4">{t("p26")}</p>
                </div>
                <Image
                  src="/aquatizer/option1.jpeg"
                  alt="Any Text"
                  width={420}
                  height={370}
                  blurDataURL="URL"
                  placeholder="blur"
                  className="mr-4 rounded-lg"
                />
              </div>

              <div className="flex sm:flex-row flex-col py-2">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{t("p27")}</h2>
                  <p className="py-4">{t("p28")}</p>
                </div>
                <Image
                  src="/aquatizer/option2.jpeg"
                  alt="Any Text"
                  width={420}
                  height={370}
                  blurDataURL="URL"
                  placeholder="blur"
                  className="mr-4 rounded-lg"
                />
              </div>
            </div>
          </div>
        </>
      )}

      {selectedContent === "2" && (
        <>
          <div className="w-full py-10">
            <div className="w-9/12 mx-auto">
              <header className="my-4 border-l-4 border-blue700">
                <h1 className="text-blue700 text-3xl font-bold pl-4">
                  {t("p29")}
                </h1>
              </header>
              <div>
                <h2 className="text-2xl font-medium mb-2">{t("p30")}</h2>
                <p className="mb-4"> {t("p31")}</p>
                <h2 className="text-2xl font-medium mb-2">{t("p32")}</h2>
                <p className="mb-4">{t("p33")}</p>

                <h2 className="text-2xl font-medium mb-2">{t("p34")}</h2>
                <p className="mb-4">{t("p35")}</p>

                <h2 className="text-2xl font-medium mb-2">{t("p36")}</h2>
                <p className="mb-4">{t("p37")}</p>
              </div>
              <div className="flex sm:flex-row flex-col justify-between items-center">
                <div>
                  <Image
                    src="/aquatizer/easy1.jpeg"
                    alt="Any Text"
                    width={520}
                    height={370}
                    blurDataURL="URL"
                    placeholder="blur"
                    className="mr-4 rounded-lg"
                  />
                  <p>{t("p38")}</p>
                </div>
                <div>
                  <Image
                    src="/aquatizer/easy2.jpeg"
                    alt="Any Text"
                    width={520}
                    height={370}
                    blurDataURL="URL"
                    placeholder="blur"
                    className="mr-4 rounded-lg"
                  />
                  <p>{t("p39")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-10 bg-lightgray">
            <div className="w-9/12 mx-auto">
              <div className="my-4">
                <h2 className="text-2xl font font-semibold mb-2">{t("p40")}</h2>

                <p className="mb-4">{t("p41")}</p>

                <Image
                  src="/aquatizer/futuristic1.jpeg"
                  alt="Any Text"
                  width={520}
                  height={370}
                  blurDataURL="URL"
                  placeholder="blur"
                  className="mr-4 rounded-lg"
                />
              </div>

              <div className="my-4">
                <h2 className="text-2xl font-semibold mb-1">{t("p42")}</h2>
                <p className="mb-4">{t("p43")}</p>
                <h2 className="text-2xl font-semibold mb-1">{t("p44")}</h2>
                <p className="mb-4">{t("p45")}</p>
                <h2 className="text-2xl font-semibold mb-1"> FULL AUTO</h2>
                <p className="mb-4">{t("p46")}</p>
                <h2 className="text-2xl font-semibold mb-1"> COMBINATION</h2>
                <p className="mb-4">{t("p47")}</p>
                <h2 className="text-2xl font-semibold mb-1"> ASSIST</h2>
                <p className="mb-4">{t("p48")}</p>
                <h2 className="text-2xl font-semibold mb-1"> {t("p49")}</h2>
                <p className="mb-4">{t("p50")}</p>
                <h2 className="text-2xl font-semibold mb-1">{t("p51")}</h2>
                <p className="mb-4">{t("p52")}</p>
              </div>
            </div>
          </div>

          <div className="w-full py-10">
            <div className="w-9/12 mx-auto">
              <header className="my-4 border-l-4 border-blue700">
                <h1 className="text-blue700 text-3xl font-bold pl-4">
                  {t("p53")}
                </h1>
              </header>
              <h2 className="text-2xl font-semibold mb-1">{t("p54")}</h2>
              <div className="flex flex-col sm:flex-row justify-center items-center my-8">
                <Image
                  src="/aquatizer/design.jpeg"
                  alt="Any Text"
                  width={520}
                  height={370}
                  blurDataURL="URL"
                  placeholder="blur"
                  className="mr-4 rounded-lg"
                />
                <ol className="sm:ml-12 mb-4">
                  <li className="font-normal py-2 text-xs">
                    <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                      1
                    </span>{" "}
                    {t("p55")}
                  </li>
                  <li className="font-normal py-2 text-xs">
                    <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                      2
                    </span>{" "}
                    {t("p56")}
                  </li>
                  <li className="font-normal py-2 text-xs">
                    <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                      3
                    </span>{" "}
                    {t("p57")}
                  </li>
                  <li className="font-normal py-2 text-xs">
                    <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                      4
                    </span>{" "}
                    {t("p58")}
                  </li>
                  <li className="font-normal py-2 text-xs">
                    <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                      5
                    </span>{" "}
                    {t("p59")}
                  </li>
                  <li className="font-normal py-2 text-xs">
                    <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                      6
                    </span>{" "}
                    {t("p60")}
                  </li>
                  <li className="font-normal py-2 text-xs">
                    <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                      7
                    </span>{" "}
                    {t("p61")}
                  </li>
                  <li className="font-normal py-2 text-xs">
                    <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                      8
                    </span>{" "}
                    {t("p62")}
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="w-full py-10 bg-lightgray">
            <div className="w-9/12 mx-auto">
              <div className="flex sm:flex-row flex-col py-2">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{t("p63")}</h2>
                  <p className="py-4">{t("p64")}</p>
                </div>
                <Image
                  src="/aquatizer/sensor1.jpeg"
                  alt="Any Text"
                  width={420}
                  height={370}
                  blurDataURL="URL"
                  placeholder="blur"
                  className="mr-4 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="w-full py-10">
            <div className="w-9/12 mx-auto">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{t("p65")}</h2>
                <p className="py-4">{t("p66")}</p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2">{t("p67")}</h2>
                <p className="py-4">{t("p68")}</p>
              </div>
            </div>
          </div>
        </>
      )}

      {selectedContent === "3" && (
        <>
          <div className="w-full">
            <div className="w-9/12 mx-auto py-8">
              <h2 className="text-2xl font-semibold mb-4">
                {t("technicalData")}
              </h2>
              <div className="flex">
                <div>
                  <h2 className="font-semibold pb-0.5">Model Number</h2>

                  <p className="mb-4 font-light">Aquatizer QZ-240SG</p>

                  <h2 className="font-semibold text-lg pb-0.5">
                    Classification of protection against electric shock
                  </h2>
                  <p className="mb-4 font-light">Class 1 Type B</p>

                  <h2 className="font-semibold  pb-0.5">Mains Supply</h2>
                  <p className="font-light">single phase 230Vac 50/60Hz</p>

                  <h2 className="font-semibold text-lg pb-0.5">Power input</h2>
                  <p className="mb-4 font-light">4,500VA</p>

                  <h2 className="font-semibold text-lg pb-0.5">
                    Intensity Massage
                  </h2>
                  <p className="mb-4 font-light">6 levels： 530 kPa or less</p>
                  <h2 className="font-semibold text-lg pb-0.5">
                    Treatment timer
                  </h2>
                  <p className="mb-4 font-light">1 to 99 minutes</p>
                </div>

                <div className="ml-8">
                  <h2 className="font-semibold">
                    {" "}
                    Preheating temperature setting
                  </h2>
                  <p className="mb-4 font-light">25 to 40℃</p>
                  <h2 className="font-semibold"> Other function</h2>
                  <p className="mb-4 font-light">
                    Nozzle switching, automatic height detection, feet hold,
                    preheating weekly timer, treatment melody setting, automatic
                    air bleeding, high temperature operation, and air cooling
                    function.
                  </p>
                  <h2 className="font-semibold"> Floor load</h2>
                  <p className="mb-4 font-light">
                    not less than 3.5kPa（350kgf/m2）
                  </p>
                  <h2 className="font-semibold"> Dimensions</h2>
                  <p className="mb-4 font-light">
                    length 2290 × width 820 × height 1075 [mm] Bed height: 500
                    [mm]
                  </p>
                  <h2 className="font-semibold"> Weight</h2>
                  <p className="mb-4 font-light">
                    Approx. 230kg (approx. 450 kg at water filled)
                  </p>
                  <h2 className="font-semibold"> Water tank capacity</h2>
                  <p className="mb-4 font-light">Approx. 220L</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

import { readFile } from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";

export async function getStaticPaths() {
  const paths = ["ro", "en"].map((lang) => ({
    params: {
      locale: lang,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const locale = params?.locale || "en";

  return {
    props: {
      messages: JSON.parse(
        await readFile(path.resolve(`./messages/${locale}.json`), "utf-8")
      ),
      locale,
    },
  };
}
