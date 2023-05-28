import React from "react";

export default function enPuls() {
  const images = [
    "/fizioterapiePhotos/cryotherapy/cryomini/galery1.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryomini/galery2.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryomini/galery3.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryomini/galery4.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryomini/galery5.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryomini/galery6.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryomini/galery7.jpeg",
  ];
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">CryoMini</h1>
        </div>
      </header>
      <div className="w-full">
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/fizioterapiePhotos/cryotherapy/cryomini/cryomini-machine.png"
            alt="PhySys"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              Simple, easy and quick to use – cryotherapy with -10°C air
            </h1>

            <div className="my-auto text-justify text-lg">
              <p className="py-1">
                With the CryoMini Zimmer MedizinSysteme offers a compact medical
                system to a more compact and flexible cold air system for short
                and less painful treatments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">Appliance</h1>
          <ul className="list-disc ml-6 mb-4">
            <li className="pb-1">
              Acute/chronic diseases of the skeletal and muscular apparatus
            </li>
            <li className="pb-1"> Inflammations</li>
            <li className="pb-1"> Muscular contractures</li>
            <li className="pb-1"> Sports injuries</li>
            <li className="pb-1"> Postoperative conditions</li>
            <li className="pb-1"> Neurological disorders</li>
          </ul>
          <p className="font-light py-4">
            Unlike other cooling methods, such as contact cooling, cryogen spray
            or ice packs, the CryoMini decreases the skin temperature quicker,
            with less risk of skin burns and keeps a constant dosage throughout
            the entire treatment time.
          </p>
          <div className="flex flex-col sm:flex-row justify-between">
            <img
              src="/fizioterapiePhotos/cryotherapy/cryomini/man1.jpeg"
              alt="PhySys"
              className="w-[370px] rounded-lg"
            />
            <img
              src="/fizioterapiePhotos/cryotherapy/cryomini/man2.jpeg"
              alt="PhySys"
              className="w-[370px] rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">Appliance</h1>
          <p className="pb-2">
            en<span className="font-extrabold">Puls</span> 2.0 is ideal as a
            system for radial shockwave therapy, for superficial orthopedic
            problems such as:
          </p>

          <ul className="list-disc ml-6 mb-4">
            <li className="pb-1">Insertion tendinopathy</li>
            <li className="pb-1"> Tendon problems</li>
            <li className="pb-1"> Chronic inflammation</li>
            <li className="pb-1"> Hypertonic muscle systems</li>
            <li className="pb-1"> Myofascial syndromes</li>
            <li className="pb-1"> Hemotoma treatments </li>
          </ul>
          <div className="flex">
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/appliance1.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/appliance2.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg ml-4"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/appliance3.jpeg"
              alt="PhySys"
              className="w-80 rounded-lg ml-4"
            />
          </div>
        </div>
      </div> */}

      <div className="w-full py-10 ">
        <div className="w-9/12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Picture gallery</h2>
          <div className="flex flex-wrap justify-between">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="max-w-[150px] rounded-lg"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-blue700">
        <div className="flex justify-center py-24">
          <div className="videos flex flex-col items-center justify-center sm:flex-row ">
            <iframe
              src="https://www.youtube.com/embed/UdsU6GMmVYg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/eWe77R3ty-U"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h2 className="text-2xl font-semibold mb-4">Technical data</h2>
          <div className="flex">
            <div>
              <h2 className="font-semibold pb-0.5"> Power supply</h2>
              <p className="font-light"> 230-240 V / 50-60 Hz</p>
              <p className="font-light"> 120 V / 50-60 Hz</p>
              <p className="font-light"> 100 V / 50-60 Hz</p>
            </div>

            <div className="ml-8">
              <h2 className="font-semibold"> Treatment tube length</h2>
              <p className="mb-4 font-light">1,80 m</p>
              <h2 className="font-semibold"> Housing dimensions (LxWxH)</h2>
              <p className="mb-4 font-light">60 cm x 33,5 cm x H 65 cm</p>
              <h2 className="font-semibold"> Weight</h2>
              <p className="mb-4 font-light">35,5 kg</p>
              <h2 className="font-semibold"> Air flow</h2>
              <p className="mb-4 font-light">9 Levels, ~ 1300 l / min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="w-full"><div className="w-9/12 mx-auto"></div></div>
