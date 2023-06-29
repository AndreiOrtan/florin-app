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
      imgPath: "/fizioterapiePhotos/cryotherapy/cryo6/cryo6-machine.png",
      url: `/${router.query.locale}/fizioterapie/cryotherapy/cryo6`,
      header: "Cryo6",
      description:
        "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremlorem, Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremlorem,Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremlorem",
      videoSrc: "/aquatizer_video_cut.mp4",
    },
    {
      imgPath: "/fizioterapiePhotos/cryotherapy/cryomini/cryomini-machine.png",
      url: `/${router.query.locale}/fizioterapie/cryotherapy/cryomini`,
      header: "Cryomini",
      description:
        "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremlorem",
      videoSrc: "/aquatizer_video_cut.mp4",
    },
    {
      imgPath: "/fizioterapiePhotos/cryotherapy/cryomini/cryomini-machine.png",
      url: `/${router.query.locale}/fizioterapie/cryotherapy/cryomini`,
      header: "Cryomini",
      description:
        "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremloremLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremloremLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremloremLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ",
      videoSrc: "/aquatizer_video_cut.mp4",
    },
    {
      imgPath: "/fizioterapiePhotos/cryotherapy/cryomini/cryomini-machine.png",
      url: `/${router.query.locale}/fizioterapie/cryotherapy/cryomini`,
      header: "Cryomini",
      description:
        "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremloremLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremlorem",
      videoSrc: "/aquatizer_video_cut.mp4",
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
