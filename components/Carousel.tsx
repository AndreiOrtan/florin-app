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
      imgPath: "/fizioterapiePhotos/cryotherapy/cryomini/cryomini-machine.png",
      url: `/${router.query.locale}/fizioterapie`,
      header: "Zimmer",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page ",
      videoSrc: "/zimmer_video.mp4",
    },
    {
      imgPath: "/fizioterapiePhotos/cryotherapy/cryo6/cryo6-machine.png",
      url: `/${router.query.locale}/aquatizer`,
      header: "Aquatizer",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      videoSrc: "/aquatizer_video.mp4",
    },
    {
      imgPath: "/fizioterapiePhotos/cryotherapy/cryomini/cryomini-machine.png",
      url: `/${router.query.locale}/mecanoterapie`,
      header: "MKB",
      description: "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum ",
      videoSrc: "/mkb_video.mp4",
    },
  ];

  return (
    <div className="h-auto mb-8 sm:mb-0">
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
              description={img.description}
              header={img.header}
              imgPath={img.imgPath}
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
