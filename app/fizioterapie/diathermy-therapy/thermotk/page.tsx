import React from "react";

export default function enPuls() {
  const images = [
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery1.png",
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery2.png",
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery3.png",
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery4.jpeg",
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery5.jpeg",
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery6.jpeg",
    "/fizioterapiePhotos/diathermy-therapy/thermotk/galery7.png",
  ];
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">ThermoTk</h1>
        </div>
      </header>
      <div className="flex w-9/12 mb-8">
        <img
          src="/fizioterapiePhotos/diathermy-therapy/thermotk/thermotk-machine.png"
          alt="PhySys"
          className="w-[270px]"
        />
        <div className="text-container my-8 pr-12">
          <h1 className="text-4xl font-semibold mb-4">
            Deep heat through high-frequency electrotherapy
          </h1>

          <div className="my-auto text-justify text-lg">
            <p className="py-1">
              Deep heat through high-frequency electrotherapy is an
              internationally widely used and proven method in physical therapy.
              We work continuously along with experts to further develop this
              form of therapy. As a result, we are able to set new standards
              again and again, whether in performance, safety during use, or
              simplicity of operation
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            Inspired by the highest standards
          </h1>

          <div className="flex">
            <div className="text-justify">
              <p className="py-1">
                ThermoTK generates adjustable, deeply penetrating heat.
              </p>
              <p className="py-1">
                The deep heat which develops in the tissue causes a local
                increase in circulation and dilation of blood vessels. Treatment
                techniques specific to the therapist can have a positive effect
                on the elasticity of the connective tissue.
              </p>
              <p className="py-1">
                Through the effect of heat alone, the tone in the muscles
                decreases, which has a positive effect on pain relief for the
                patient.
              </p>
            </div>
            <img
              src="/fizioterapiePhotos/diathermy-therapy/thermotk/inspired1.jpeg"
              alt="PhySys"
              className="w-[350px] rounded-lg ml-8"
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

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4 py-4">
            Working together with your patient
          </h1>
          <p className="mb-2">
            Therapist-specific motions during the therapy can help additionally
            relax tissue. ThermoTK has a broad spectrum of indications and can
            be used for acute as well as chronic conditions. Deep heat therapy
            combined with the use of manual therapy offer you outstanding
            treatment options. Expand your range of services and treat your
            patients even more effectively.
          </p>

          <div className="text-justify mb-4">
            <h2 className="font-bold ">Areas of application</h2>
            <p className="font-light">
              Traditional physiotherapy practice, rehabilitation, and
              competitive sports. ThermoTK is used for all acute and chronic
              musculoskeletal conditions.
            </p>
          </div>

          <div className="text-justify mb-4">
            <h2 className="font-bold">Application options</h2>
            <p className="font-light">
              A variety of application options – passive, active, and assistive
              – enable therapy for the patient which is individually adapted to
              the condition.
            </p>
          </div>
          <div className="text-justify mb-4">
            <h2 className="font-bold mb-1">Application options</h2>
            <p className="font-light">
              A variety of application options – passive, active, and assistive
              – enable therapy for the patient which is individually adapted to
              the condition.
            </p>
          </div>
          <div className="text-justify mb-4">
            <h2 className="font-bold">
              ThermoTK – a part of your therapeutic concept
            </h2>
            <p className="font-light">
              Unique possibility to combine the therapeutic effect of active
              therapy with the circulation-stimulating and analgesic effect of
              current and the feel-good factor of a massage.
            </p>
          </div>

          <div className="flex justify-between">
            <img
              src="/fizioterapiePhotos/diathermy-therapy/thermotk/working2.jpeg"
              alt=""
              className="w-[250px] rounded-lg"
            />
            <img
              src="/fizioterapiePhotos/diathermy-therapy/thermotk/working1.jpeg"
              alt=""
              className="w-[250px] rounded-lg"
            />
            <img
              src="/fizioterapiePhotos/diathermy-therapy/thermotk/working3.jpeg"
              alt=""
              className="w-[250px] rounded-lg"
            />
            <img
              src="/fizioterapiePhotos/diathermy-therapy/thermotk/working4.jpeg"
              alt=""
              className="w-[250px] rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto">
          <h1 className="text-4xl font-semibold my-4">
            Quality in every detail
          </h1>
          <img
            src="/fizioterapiePhotos/diathermy-therapy/thermotk/quality1.png"
            alt="Recomandations"
          />
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            Practical extensions and accessories
          </h1>
          <h2 className="font-bold mb-2">Move cart</h2>

          <ul className="list-disc ml-6 mb-4">
            <li>smoothly movable</li>
            <li>modern design</li>
          </ul>
          <img
            src="/fizioterapiePhotos/shockwave-therapy/enPuls/practical1.jpeg"
            alt="PhySys"
            className="w-80 rounded-lg"
          />
        </div>
      </div>

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
              <h2 className="font-semibold pb-0.5"> Mains voltage</h2>
              <p className="font-light">100-240V ~ /50/60 Hz</p>

              <h2 className="font-semibold text-lg pb-0.5">
                Power consumption
              </h2>
              <p className="mb-4 font-light">300 VA max</p>

              <h2 className="font-semibold  pb-0.5">Output power</h2>
              <p className="font-light">
                150 W effective at 500 Ω in resistive mode
              </p>
              <p className="font-light">
                250 VA effective at 500 Ω in capacitive mode
              </p>
              <p className="font-light mb-4">
                60 W effective at 500 Ω in hands-free mode
              </p>

              <h2 className="font-semibold text-lg pb-0.5">Frequenzy</h2>
              <p className="font-light">460 kHz / 540 kHz</p>
              <h2 className="font-semibold text-lg pb-0.5">Accuracy</h2>
              <p className="font-light">± 20 %</p>
            </div>

            <div className="ml-8">
              <h2 className="font-semibold"> Protection class</h2>
              <p className="mb-4 font-light">I</p>
              <h2 className="font-semibold"> Operating modes</h2>
              <p className="mb-4 font-light">Continuous / pulsed</p>
              <h2 className="font-semibold"> Modes</h2>
              <p className="mb-4 font-light">Resistive / capacitive</p>
              <h2 className="font-semibold"> Housing dimensions</h2>
              <p className="mb-4 font-light">W 322 mm / D 234 mm / H 135 mm</p>
              <h2 className="font-semibold"> Weight</h2>
              <p className="mb-4 font-light">3.5 kg without accessories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="w-full"><div className="w-9/12 mx-auto"></div></div>
