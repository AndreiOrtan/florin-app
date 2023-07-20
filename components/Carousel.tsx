import Link from "next/link";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import { useRouter } from "next/router";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";
import { useTranslations } from "next-intl";

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1 },
    items: 1,
  },
};

const Slider = () => {
  const t = useTranslations("carousel");
  const router = useRouter();
  const content = [
    {
      imgPath: "/carousel_mkb.png",
      url: `/${router.query.locale}/mecanoterapie`,
      header: `${t("noutate")}`,
      description: `${t("description")}`,
      videoSrc: "/mkb_video.mp4",
    },
    {
      imgPath: "/carousel_zimmer.png",
      url: `/${router.query.locale}/fizioterapie`,
      header: `${t("zimmer")}`,
      videoSrc: "/zimmer_video.mp4",
    },
    {
      imgPath: "/carousel_aquatizer.png",
      url: `/${router.query.locale}/aquatizer`,
      header: `${t("aqua")}`,
      videoSrc: "/aquatizer_video.mp4",
    },
  ];

  return (
    <div className="h-auto">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {content.map((img, index) => {
          return (
            <CarouselItem
              videoSrc={img.videoSrc}
              header={img.header}
              imgPath={img.imgPath}
              description={img.description}
              imgUrl={img.url}
              key={index}
            />
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
