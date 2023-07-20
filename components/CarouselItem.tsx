import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CarouselItem.module.css";
import Spinner from "./Spinner";
import AnimatedContent from "./AnimatedContent";
import { useTranslations } from "next-intl";

interface CarouselItm {
  videoSrc: string;
  header?: string;
  description?: string;
  imgUrl: string;
  imgPath: string;
}

export default function CarouselItem({
  videoSrc,
  description,
  header,
  imgUrl,
  imgPath,
}: CarouselItm) {
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations("carousel");

  function restart() {
    setIsEnd(true);
    // setTimeout(() => {
    //   setIsEnd(false);
    // }, 16000);
  }

  return (
    <div className="h-full">
      {" "}
      {!isEnd ? (
        <div
          className={`overflow-hidden relative transition-opacity duration-500 ${
            isEnd ? "opacity-0" : "opacity-100"
          }`}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner />
            </div>
          )}
          <video
            src={videoSrc}
            autoPlay
            muted
            onEnded={restart}
            onCanPlay={() => setIsLoading(false)}
            className={`w-full sm:h-[520px] h-[280px] ${styles.fadeeVideo} object-cover`}
            // poster={videoSrc}
            playsInline
          ></video>
        </div>
      ) : (
        <div className="h-full">
          <div
            className={`w-9/12 h-full relative mx-auto flex flex-col justify-start sm:justify-center pt-4 z-50 ${styles.fadee}`}
          >
            <div className="flex sm:justify-between">
              <div>
                <AnimatedContent direction="XL">
                  <h1 className="sm:text-2xl text-lg font-semibold">
                    {header}
                  </h1>
                  {description && (
                    <h2 className="text-sm sm:text-base">{description}</h2>
                  )}
                </AnimatedContent>

                <div className="my-2  absolute sm:bottom-11 bottom-0 w-full mb-8">
                  <Link href={imgUrl}>
                    <button className="py-5 px-10 bg-blue500 hover:bg-blue800 rounded-lg text-white text-lg font-medium w-full sm:max-w-max">
                      {t("details")}
                    </button>
                  </Link>
                </div>
              </div>
              <AnimatedContent direction="XR">
                <img
                  src={`${imgPath}`}
                  alt="asd"
                  className="sm:max-w-[380px] max-w-[120px] ml-auto "
                />
              </AnimatedContent>
            </div>
          </div>
        </div>
      )}
      <Image
        src="ORJ58B0.jpg"
        alt=""
        width={"100"}
        height={"100"}
        className={`h-full w-full opacity-5 absolute top-0 left-0 -z-10`}
      />
    </div>
  );
}
