import Link from "next/link";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import { useRouter } from "next/router";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "./CarouselItem";

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1 },
    items: 1,
  },
};

const Slider = () => {
  const router = useRouter();
  const content = [
    {
      imgPath: "/carousel_mkb.png",
      url: `/${router.query.locale}/mecanoterapie`,
      header: "O noutate mondială!",
      description:
        "Dinamometrele digitale isokinetice cu inteligenta artificiala pentru recuperare medicală",
      videoSrc: "/mkb_video.mp4",
    },
    {
      imgPath: "/carousel_zimmer.png",
      url: `/${router.query.locale}/fizioterapie`,
      header: "Dispozitive inovatoare de fizioterapie ",
      videoSrc: "/zimmer_video.mp4",
    },
    {
      imgPath: "/carousel_aquatizer.png",
      url: `/${router.query.locale}/aquatizer`,
      header: "Robot de Hidromasaj de ultimă generație",
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
