import React from "react";

export default function enPuls() {
  const images = [
    "/fizioterapiePhotos/diathermy-therapy/micropro/galery1.jpeg",
    "/fizioterapiePhotos/diathermy-therapy/micropro/galery2.jpeg",
    "/fizioterapiePhotos/diathermy-therapy/micropro/galery3.jpeg",
  ];
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">MicroPro</h1>
        </div>
      </header>
      <div className="w-full">
        <div className="flex flex-col sm:flex-row mx-auto justify-center items-center w-9/12 mb-8">
          <img
            src="/fizioterapiePhotos/diathermy-therapy/micropro/micropro-machine.png"
            alt="PhySys"
            className="w-[270px]"
          />
          <div className="text-container my-8 sm:pr-12">
            <h1 className="text-4xl font-semibold mb-4 text-center">
              Microwave Therapy – the gentle heat therapy
            </h1>

            <div className="my-auto text-justify text-lg">
              <p className="py-1">
                The therapy with MicroPro leads to a mild warming of muscles and
                skin. This results in a relaxing and soothing feeling of warmth.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            The safe microwave therapy
          </h1>
          <p className="font-light py-2">
            {" "}
            With the MicroPro you have a powerful microwave therapy device at
            your disposal, the functional principle of which has proven itself
            in everyday practice for many years.
          </p>

          <p className="font-light py-2">
            {" "}
            The microwave energy is transferred to the tissue with the help of a
            radiator and is then converted into heat. Depending on the type of
            treatment, the user can choose between different types of radiator:
            large-area, round, trough-shaped or point-type. A freely adjustable
            swivel arm is provided to focus the radiator on the body part to be
            treated.
          </p>

          <p className="font-light py-2">
            {" "}
            To guarantee ease of use as well as convenient and efficient
            operation and adjustment of parameters, the unit features a
            12“-display with capacitive touch-screen.
          </p>

          <p className="font-light py-2">
            {" "}
            The treatment time can be set digitally between 1and 30 minutes. At
            the end of the treatment, the set power is automatically switched
            off and the end of the treatment is signalled visually and
            acoustically. By means of the heat-effective output power value that
            is constantly displayed, the user can exactly adjust parameters and
            has full visual control over the therapy.{" "}
          </p>

          <p className="font-light py-2">
            {" "}
            In addition to the continuous operating mode, the MicroPro offers a
            pulse function for the treatment of deeper tissue layers with
            simultaneous low thermal surface exposure. Thus MicroPro can be used
            across a broad range of applications. As a result, MicroPro has a
            wide range of applications in hospitals, among doctors and
            physiotherapists.
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">Additional features</h1>
          <ul className="list-disc ml-6 mb-4">
            <li className="pb-1"> Regulated fans</li>
            <li className="pb-1"> Modern user interface</li>
            <li className="pb-1"> Modern housing </li>
            <li className="pb-1"> Favourites can be saved</li>
            <li className="pb-1">
              Favourites can be exported via USB and SD-card
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">Radiators</h1>
          <div className="flex flex-col sm:flex-row mx-auto items-center justify-between">
            <div className="flex flex-col items-center">
              <img
                src="/fizioterapiePhotos/diathermy-therapy/micropro/radiator1.png"
                alt="PhySys"
                className="w-[200px]"
              />
              <p>Longitudinal-field radiator</p>
            </div>
            <div className="flex flex-col text-center">
              <img
                src="/fizioterapiePhotos/diathermy-therapy/micropro/radiator2.png"
                alt="PhySys"
                className="w-[200px]"
              />
              <p>Circular-field radiator</p>
            </div>
            <div className="flex flex-col text-center">
              <img
                src="/fizioterapiePhotos/diathermy-therapy/micropro/radiator3.png"
                alt="PhySys"
                className="w-[200px]"
              />
              <p>Cradle radiator</p>
            </div>
            <div className="flex flex-col text-center">
              <img
                src="/fizioterapiePhotos/diathermy-therapy/micropro/radiator4.png"
                alt="PhySys"
                className="w-[200px]"
              />
              <p>Focus radiator</p>
            </div>
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

      <div className="w-full py-10">
        <div className="w-9/12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Picture gallery</h2>
          <div className="flex flex-wrap justify-between">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="max-w-[150px]"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h2 className="text-2xl font-semibold mb-4">Technical data</h2>
          <div className="flex">
            <div>
              <h2 className="font-semibold pb-0.5"> Medical device</h2>
              <p className="font-light">IIa</p>

              <h2 className="font-semibold text-lg pb-0.5">HF nominal power</h2>
              <p className="mb-4 font-light">200/200 W (CW/pulse)</p>

              <h2 className="font-semibold  pb-0.5">Operating frequency</h2>

              <p className="font-light mb-4">2.45 GHz ± 1.5 %</p>

              <h2 className="font-semibold text-lg pb-0.5">Power indication</h2>
              <p className="font-light">Effective power</p>
            </div>

            <div className="ml-16">
              <h2 className="font-semibold"> Timer</h2>
              <p className="mb-4 font-light">1–30 min. (1 min steps)</p>

              <h2 className="font-semibold"> Dimensions </h2>
              <p className="mb-4 font-light">450 x 1110 x 530 mm (B x H x T)</p>
              <h2 className="font-semibold"> Weight</h2>
              <p className="mb-4 font-light">44 kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="w-full"><div className="w-9/12 mx-auto"></div></div>
