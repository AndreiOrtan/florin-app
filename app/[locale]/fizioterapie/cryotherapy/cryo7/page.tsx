import React from "react";

export default function enPuls() {
  const images = [
    "/fizioterapiePhotos/cryotherapy/cryo7/galery1.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo7/galery2.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo7/galery3.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo7/galery4.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo7/galery5.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo7/galery6.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo7/galery7.jpeg",
    "/fizioterapiePhotos/cryotherapy/cryo7/galery8.jpeg",
  ];
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">Cryo 7</h1>
        </div>
      </header>
      <div className="w-full">
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          {/* <img
          src="/fizioterapiePhotos/cryotherapy/cryo6/cryo6-machine.png"
          alt="PhySys"
          className="w-[270px]"
        /> */}
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              State of the art cryotherapy with -30°C air
            </h1>

            <div className="my-auto text-justify text-lg">
              <p className="py-1">
                Cryo 7 is the perfect system for cooling tissue and skin. An
                important therapeutic characteristic of cold air therapy is
                contact-free cooling.
              </p>
            </div>
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

          <div className="flex flex-col sm:flex-row justify-between">
            <img
              src="/fizioterapiePhotos/cryotherapy/cryomini/man1.jpeg" // same photos as mini
              alt="PhySys"
              className="w-[300px] rounded-lg"
            />
            <img
              src="/fizioterapiePhotos/cryotherapy/cryomini/man2.jpeg"
              alt="PhySys"
              className="w-[300px] rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            Combinations with cold air therapy
          </h1>

          <h2 className="text-2xl font-semibold mb-4">
            Treatment support through combination with cold air
          </h2>
          <p>
            Cryotherapy can be combined with a variety of other treatments, for
            example, to improve movement therapy by prior application of cold
            air (15-20 min). Other combination possibilities include:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li> Combination with compression in cases of acute injuries</li>
            <li>
              Treatment of muscular trigger points in combination with
              stretching
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            Sports medicine and traumatology
          </h2>
          <p>
            Many sports physiotherapists and sports medicine specialists use
            cold air preventively for prophylactic early-stage treatment
            immediately following major exertion during sports before symptoms
            occur, such as after a competitive event.
          </p>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            The new Cryo 7 – Perfected from A to Z
          </h1>
          <img
            src="/fizioterapiePhotos/cryotherapy/cryo7/a-z.png"
            alt="PhySys"
          />
          <h1 className="text-4xl font-semibold mb-4">
            In your practice – User-friendly, ecological & low-maintenance
          </h1>

          <h2 className="text-2xl font-semibold mb-2 mt-4 ">
            {" "}
            Ease of use – Redesigned
          </h2>

          <p className="font-light py-1">
            {" "}
            The Cryo 7 is operated using a brilliant, high-resolution, 10-inch
            touch display. Individual programmes can be stored. All of the
            important operating elements are clearly arranged and easy to reach,
            thanks to the higher, ergonomic design. This allows successful
            operation from the very start.
          </p>

          <p className="font-light py-1">
            {" "}
            The optional supporting arm facilitates hands-free operation,
            especially during long treatment periods. The air stream can be
            easily controlled by the user.
          </p>

          <p className="font-light py-1">
            {" "}
            The practical glass shelf plate is ideally suited for use as a tray
            for additional devices.
          </p>

          <h2 className="text-2xl font-semibold  mt-4 mb-2">
            {" "}
            Energy- and cost-efficient{" "}
          </h2>

          <p className="font-light py-1">
            {" "}
            The operation of the new Cryo 7 does not result in any significant
            consumption costs. The amount of defrost water is monitored and the
            defrosting function ensures smooth operation. The air filter is
            readily accessible and can be easily replaced if soiled.
          </p>

          <p className="font-light py-1">
            {" "}
            The new standby mode further improves the energy efficiency of the
            Cryo 7, which is designed for reliable all-day operation.{" "}
          </p>

          <p className="font-light py-1">
            {" "}
            Through the numerous technical innovations, the Cryo 7 is a
            significant comfort factor for patients and therapists.
          </p>
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
          <div className="videos flex flex-col sm:flex-row items-center justify-center">
            <iframe
              src="https://www.youtube.com/embed/UdsU6GMmVYg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/eWe77R3ty-U" //SAME VIDEOUS AS MINI
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
