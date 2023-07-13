import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CarouselItem.module.css";
import Spinner from "./Spinner";

interface CarouselItm {
  videoSrc: string;
  header: string;
  description: string;
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

  function restart() {
    setIsEnd(true);
    setTimeout(() => {
      setIsEnd(false);
    }, 8000);
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
          {/* {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Spinner />
            </div>
          )} */}
          <video
            src={videoSrc}
            autoPlay
            muted
            onEnded={restart}
            onCanPlay={() => console.log("done can play")}
            onLoadedData={() => console.log("done loading data")}
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
            <div className="flex sm:justify-center">
              <div>
                <h1 className="text-2xl font-semibold ">{header}</h1>
                <p className="font-thin">{description}</p>
                <div className="my-2 sm:static absolute bottom-0 w-full mb-8">
                  <Link href={imgUrl}>
                    <button className="p-4 bg-blue500 hover:bg-blue800 rounded-lg text-white font-medium w-full sm:max-w-max">
                      Mode details
                    </button>
                  </Link>
                </div>
              </div>
              <img
                src={`${imgPath}`}
                alt="asd"
                className="sm:max-w-[200px] max-w-[50px] ml-auto "
              />
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
