import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import { useRouter } from "next/router";
import "react-multi-carousel/lib/styles.css";

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
    },
    {
      imgPath: "/fizioterapiePhotos/cryotherapy/cryomini/cryomini-machine.png",
      url: `/${router.query.locale}/fizioterapie/cryotherapy/cryomini`,
      header: "Cryomini",
      description:
        "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremlorem",
    },
    {
      imgPath: "/fizioterapiePhotos/cryotherapy/cryomini/cryomini-machine.png",
      url: `/${router.query.locale}/fizioterapie/cryotherapy/cryomini`,
      header: "Cryomini",
      description:
        "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremloremLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremloremLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremloremLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ",
    },
    {
      imgPath: "/fizioterapiePhotos/cryotherapy/cryomini/cryomini-machine.png",
      url: `/${router.query.locale}/fizioterapie/cryotherapy/cryomini`,
      header: "Cryomini",
      description:
        "Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremloremLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumloremlorem",
    },
  ];

  return (
    <div className="h-auto mb-8 sm:mb-0">
      <Carousel
        responsive={responsive}
        swipeable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        autoPlay
        autoPlaySpeed={3500}
        className="py-8"
      >
        {content.map((img, index) => {
          return (
            <div
              key={index}
              className="w-9/12 mx-auto flex flex-col sm:flex-row"
            >
              <div>
                <div>
                  <h1 className="text-2xl font-semibold">{img.header}</h1>
                  <p className="font-thin">{img.description}</p>
                </div>
                <div className="my-2">
                  <Link href={img.url}>
                    <button className="p-4 bg-blue500 rounded-lg text-white font-medium">
                      Go to product
                    </button>
                  </Link>
                </div>
              </div>
              <img
                src={`${img.imgPath}`}
                alt="asd"
                className="max-w-[200px] ml-auto"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
