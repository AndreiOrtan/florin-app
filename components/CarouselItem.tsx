import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./CarouselItem.module.css";

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

  function restart() {
    setIsEnd(true);
    setTimeout(() => {
      setIsEnd(false);
    }, 10000);
  }

  console.log(isEnd);
  return (
    <div className="relative h-full">
      {" "}
      {!isEnd ? (
        <div
          className={`max-w-full h-[480px] overflow-hidden transition-opacity duration-500 ${
            isEnd ? "opacity-0" : "opacity-100"
          }`}
        >
          <video
            src={videoSrc}
            autoPlay
            muted
            onEnded={restart}
            className={`w-full ${styles.fadeeVideo}`}
            // poster={videoSrc}
            playsInline
          ></video>
        </div>
      ) : (
        <div className="h-full">
          <div
            className={`w-9/12 h-full mx-auto flex flex-col sm:flex-row items-center justify-center z-50 ${styles.fadee}`}
          >
            <div>
              <div>
                <h1 className="text-2xl font-semibold">{header}</h1>
                <p className="font-thin">{description}</p>
              </div>
              <div className="my-2">
                <Link href={imgUrl}>
                  <button className="p-4 bg-blue500 rounded-lg text-white font-medium">
                    Go to product
                  </button>
                </Link>
              </div>
            </div>
            <img
              src={`${imgPath}`}
              alt="asd"
              className="max-w-[200px] ml-auto"
            />
          </div>
        </div>
      )}
      <Image
        src="asx5.jpg"
        alt=""
        width={"100"}
        height={"100"}
        className={`h-[480px] w-full opacity-10 absolute top-0 left-0 -z-10`}
      />
    </div>
  );
}
