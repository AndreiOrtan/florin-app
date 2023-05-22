import React from "react";

export default function enPuls() {
  const images = [
    "/fizioterapiePhotos/cryotherapy/cryo6/galery1.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo6/galery2.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo6/galery3.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo6/galery4.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo6/galery5.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo6/galery6.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo6/galery7.jpeg",
  ];
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">Cryo6</h1>
        </div>
      </header>
      <div className="flex w-9/12 mb-8">
        <img
          src="/fizioterapiePhotos/cryotherapy/cryo6/cryo6-machine.png"
          alt="PhySys"
          className="w-[270px]"
        />
        <div className="text-container my-8 pr-12">
          <h1 className="text-4xl font-semibold mb-4">
            State of the art cryotherapy with -30°C air
          </h1>

          <div className="my-auto text-justify text-lg">
            <p className="py-1">
              Newest generation cryotherapy system with cooled air for efficient
              pain treatment and swelling reduction, as well as relaxation of
              muscle tone. The system enables cryotherapy with precise placement
              and constant dosage at every time you need it. The high power
              output enables a quick decrease of the superficial skin
              temperature thus provides the desired treatment effects. Working
              without consumables provides all day operation capacity.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            Broad spectrum of applications
          </h1>

          <p>
            Cold air therapy is suitable for brief, fast and intensive cooling
            of the skin as well as for longer periods of moderate cooling in
            order to decrease the temperature to therapeutically relevant levels
            even in deeper layers of tissue.
          </p>
          <p className="pt-4">Cold air therapy has been proven in:</p>
          <ul className="list-disc ml-6 mb-4">
            <li className="pb-1">
              Painful conditions of the musculoskeletal system (acute and
              chronic) such as arthritis, bursitis, tendinitis, tenosynovitis,
              myositis, fibrositis, muscle tension, cervical syndrome,
              post-whiplash disorders, lumbar syndrome or injuries (bruises,
              strains, sprains) of the muscles or joints
            </li>
            <li className="pb-1">
              {" "}
              Pain reduction, improvement in mobility and reduction of joint
              stiffness in rheumatic diseases as well as in the case of
              rheumatoid arthritis (progressively chronic polyarthritis)
            </li>
            <li className="pb-1">
              {" "}
              Neurological diseases for decreasing spasticity (such as multiple
              sclerosis or postapoplectic hemiplegia)
            </li>
          </ul>

          <div className="flex justify-between">
            <img
              src="/fizioterapiePhotos/cryotherapy/cryomini/man1.jpeg" // same photos as mini
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
        <div className="flex flex-col items-center py-24">
          <div className="videos flex">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/UdsU6GMmVYg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8 rounded-lg"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eWe77R3ty-U" //SAME VIDEOUS AS MINI
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8 rounded-lg"
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
              <p className="font-light"> 220-240 V / 50 Hz</p>
              <p className="font-light"> 240 V / 60 Hz</p>
              <p className="font-light"> 100-120 V / 50Hz/60 Hz</p>
            </div>

            <div className="ml-8">
              <h2 className="font-semibold"> Treatment tube length</h2>
              <p className="mb-4 font-light">1,80 m</p>
              <h2 className="font-semibold"> Housing dimensions (LxWxH)</h2>
              <p className="mb-4 font-light">68 cm x 39 cm x 64,5 cm</p>
              <h2 className="font-semibold"> Weight</h2>
              <p className="mb-4 font-light">75 kg</p>
              <h2 className="font-semibold"> Air flow</h2>
              <p className="mb-4 font-light">9 levels, max. 1000 l / min</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="w-full"><div className="w-9/12 mx-auto"></div></div>
