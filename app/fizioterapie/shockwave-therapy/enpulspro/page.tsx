import React from "react";

export default function enPulsPro() {
  const images = [
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery1.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery2.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery3.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery4.jpeg",
    "/fizioterapiePhotos/shockwave-therapy/enPulsPro/galery5.jpeg",
  ];
  return (
    <div className="flex flex-col items-center my-4 text-gray600 font-medium">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">enPulsPro</h1>
        </div>
      </header>
      <div className="flex w-9/12 mb-8">
        <img
          src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/en-puls-pro-machine.png"
          alt="PhySys"
          className="w-[150px]"
        />
        <div className="text-container my-8 pr-12">
          <h1 className="text-4xl font-semibold mb-4">
            Progressive therapy system with comfortable housing for all needed
            accessories
          </h1>

          <p className="my-auto text-left text-lg">
            enPulsPro – a Radial Shockwave Therapy System with ballistic, high
            energy pulses. For treatment of biological tissues and structures in
            various pathologies and medical conditions. An unique, easy-to-use
            system offering shockwave therapy access to all therapists.
          </p>
        </div>
      </div>

      <div className="bg-lightgray w-full py-8">
        <div className="w-9/12 mx-auto">
          <h1 className="text-4xl font-semibold mb-4">
            Modern technology, innovatively designed
          </h1>
          <h2 className="py-1">
            The new enPuls user interface is highly intuitive and easy-to-use.
            All parameters are optimally designed for a clear layout. Ready for
            your therapy.
          </h2>
          <h2 className="py-1">
            Zimmer MedizinSysteme has created something really special with this
            new generation of enPuls products. An entire new user experience.
            New capacitive touch screen technology provides even simpler
            operation and application.
          </h2>
          <h2 className="py-1">
            Higher treatment comfort and time saving by the opportunity to
            connect two handpieces with different applicators at the same time.
          </h2>
          <div className="flex py-4">
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/modern1.jpeg"
              alt="PhySys"
              className="rounded-lg w-[350px]"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/modern2.jpeg"
              alt="PhySys"
              className="rounded-lg w-[350px] ml-16"
            />
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/modern3.jpeg"
              alt="PhySys"
              className="rounded-lg w-[350px] ml-16"
            />
          </div>
        </div>
      </div>

      <div className=" w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            Radial Shockwaves – Unique and powerful technology
          </h1>

          <div className="flex">
            <div className="text-justify">
              <p className="py-1">
                Radial shockwave therapy (RSWT) is a method for the treatment of
                superficial orthopedic disorders developed over the past 20
                years. A projectile accelerated in the handpiece generates a
                mechanical pressure wave, which is transferred to the human body
                by an applicator head and which radiates out in the tissue.
              </p>
              <p className="py-1">
                The mechanical energy is absorbed by the tissue and decreases as
                the distance from the application site increases. The mechanical
                stress triggers reactions in the tissue that have a positive
                influence on a wide range of orthopedic and neurological
                conditions.
              </p>
              <p className="py-1">
                The method is used by therapists all over the world with great
                success. With the enPulsPro, Zimmer MedizinSysteme now offers a
                system that bundles all the advantages of the application in a
                compact form with the lowest downstream and operating costs that
                is easy to operate and apply with maximum flexibility and
                mobility.
              </p>
            </div>
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/radial1.jpeg" // same photo as enPuls
              alt="PhySys"
              className="w-[350px] rounded-lg ml-8"
            />
          </div>
        </div>
      </div>

      {/* below is the same as enPuls with first <p> changed */}
      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">Appliance</h1>
          <p className="pb-2">
            enPulsPro is ideal as a system for radial shockwave therapy, for
            superficial orthopedic problems such as:
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
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4 py-4">softshot – pulse</h1>

          <div className="flex">
            <div className="text-justify">
              <p className="py-1">
                enPulsPro generates a special form of shockwave with a
                relatively heavy projectile and a comparatively low impact
                speed—the enPulsPro softshot shockwave.
              </p>
              <p className="py-1">
                The energy is primarily generated by the volume of the pulse and
                not by the high amplitude and the extremely short rise
                characteristic of comparable compressed-air devices.
              </p>
              <p className="py-1">
                This requires that the shockwaves with rise times of approx. 3.5
                µs and the typical energy settings also generated by
                compressed-air devices pass through the tissue without any
                change in the form of the wave, because the stress is within the
                moment of inertia and the module of elasticity of the tissue.
              </p>
              <p className="py-1">
                Different from focused shockwaves, which have rise times less
                than 100 ns and which results in a desired gradation of the wave
                in the tissue causing cavitation and tissue destruction, with
                radial shockwaves it is not the exponential effect but simply
                the amount of energy that triggers the reactive processes.
              </p>
            </div>
            <img
              src="/fizioterapiePhotos/shockwave-therapy/enPuls/pulse1.jpeg" //same photo as enPuls
              alt="PhySys"
              className="w-[350px] rounded-lg ml-8"
            />
          </div>
          <p>
            The slower rise of the wave (approx. 13.5 µs) and the significantly
            lower peak amplitude mean that enPulsPro does not generate the
            typical whiplash effect of the shockwave, make it easier for the
            patient to tolerate.
          </p>
        </div>
      </div>

      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
          <h1 className="text-4xl font-semibold mb-4">
            Energy applied—pressure comparison
          </h1>
          <p>
            Comprehensive comparative tests in the laboratory have demonstrated
            that enPulsPro with equivalent energy settings releases kinetic
            energy via the applicator comparable to that of a
            compressed-air-driven system, in which the air pressure applied to
            accelerate the projectile is the dosage.
          </p>
          <p>The similarity is shown in the following table</p>
          <div className="flex my-4">
            <div>
              <h2 className="font-bold mb-2">enPuls 2.0</h2>
              <p className="py-0.5">60 mJ</p>
              <p className="py-0.5">90 mJ</p>
              <p className="py-0.5">120 mJ</p>
              <p className="py-0.5">185 mJ</p>
            </div>
            <div className="ml-8">
              <h2 className="font-bold mb-2">Compressed-air RSWT-System</h2>
              <p className="py-0.5">1 bar</p>
              <p className="py-0.5">2 bar</p>
              <p className="py-0.5">3 bar</p>
              <p className="py-0.5">5 bar</p>
            </div>
          </div>
          <p>
            Because the kinetic energy is applied to the tissue with
            similar-sized applicators, the standard units such as mJ/mm² (energy
            density) can be used because that closely related.
          </p>
          <p>
            Dosage information from treatment protocols can thus be used 1:1.
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto my-8">
          <h1 className="text-4xl font-semibold mb-4">
            Low maintenance and long life
          </h1>
          <p>
            The special technology of the enPulsPro and the softshot shock
            source result in low maintenance costs of the system as well as the
            longest handpiece and shockwave generator service life compared to
            compressed-air systems.
          </p>
          <p>
            Zimmer MedizinSysteme offers a minimum guarantee of 2.000.000 shocks
            per generator, corresponding to about 1.000 treatments. The
            generator should be replaced if there is a significant reduction in
            performance (shock power is reduced, misfire, etc.). This is
            generally noticed long after the minimum guarantee period has
            expired.
          </p>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto my-8">
          <h1 className="text-4xl font-semibold mb-5">VAS-Scale</h1>
          <p>
            The assessment of pain intensity with the integrated VAS scale
            provides a precise and traceable view on the progress of the therapy
            to both therapist and patient.
          </p>
          <img
            src="/fizioterapiePhotos/shockwave-therapy/enPulsPro/vas1.jpeg"
            alt="PhySys"
            className="w-[350px] rounded-lg my-4"
          />
        </div>
      </div>

      <div className="w-full py-10 bg-lightgray">
        <div className="w-9/12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Picture gallery</h2>
          <div className="flex flex-wrap justify-between">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-[150px] rounded-lg m-2"
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
              src="https://www.youtube.com/embed/rpnrDzWU6yk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8"
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Qvb4XzCUcwo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h2 className="text-2xl font-semibold mb-4">Technical data</h2>
          <div className="flex">
            <div>
              <h2 className="font-semibold text-lg pb-0.5"> Technology</h2>
              <p className="mb-4">
                Compressor free ballistic radial shockwave therapy-system with
                electromagnetic generator as projectile accelerator
              </p>
              <h2 className="font-semibold text-lg pb-0.5">
                Power Levels / Energy
              </h2>
              <ul className="list-disc ml-6 mb-4">
                <li>60 to 185 mJ (equivalent to 1-5 bar)</li>
                <li>
                  Can be precisely set in 10 mJ intervals (depending on the
                  frequency of 60 mJ to max. 185 mJ)
                </li>
              </ul>
              <h2 className="font-semibold text-lg pb-0.5">Modes</h2>
              <ul className="list-disc ml-6 mb-4">
                <li>Frequencies from 1 to 22 Hz</li>
                <li>3 Burst modes (4 / 8 / 12 pulses)</li>
              </ul>
              <h2 className="font-semibold text-lg pb-0.5">Programmes</h2>
              <p className="mb-4">7 preset programmes, adjustable</p>
              <h2 className="font-semibold text-lg pb-0.5">Protocols</h2>
              <p className="mb-4">
                More than 25 illustrated preset treatment recommendations
              </p>
              <h2 className="font-semibold text-lg pb-0.5">Controls</h2>
              <ul className="list-disc ml-6 mb-4">
                <li> 12” Colour touch-screen for all software operations</li>
                <li>Rotary control for Energy level and for frequency</li>
                <li>Handpiece operation with multi-directional footswitch</li>
              </ul>
              <h2 className="font-semibold text-lg pb-0.5">Memory / Update</h2>
              <ul className="list-disc ml-6 mb-4">
                <li> SD-card for indication menu memory</li>
                <li> Favourites and adapted programmes (120 places).</li>
                <li> Error log / Firmware-Update</li>
              </ul>
            </div>
            <div className="ml-8">
              <h2 className="font-semibold text-lg pb-0.5"> Dimensions</h2>
              <p className="mb-4"> 20 x 35 x 30 cm (L/W/H) </p>
              <h2 className="font-semibold text-lg pb-0.5"> Weight</h2>
              <p className="mb-4"> 3.8 kg (without handpiece) </p>
              <h2 className="font-semibold text-lg pb-0.5">
                Shockwave Applicator Hand Piece
              </h2>

              <ul className="list-disc ml-6 mb-4">
                <li>
                  Ergonomic, with anodized aluminium casing and fan cooling
                </li>

                <li> Dimensions 23 cm length, 5 cm diameter (max.)</li>
                <li> Weight 0.85 kg (without cable)</li>
                <li> Lifetime Minimum warranty for 2.000.000 shocks</li>
                <li>
                  Maintenance Only necessary when performance drops, not
                  obligatory at a certain amount of shocks. Exchange of
                  generator by service
                </li>
                <li>Applicator heads Diameters of 6 / 15 (2 pieces) / 25 mm</li>
                <li> Tool free exchange possibility</li>
                <li> Minimum warranty of 150.000 shocks per applicator head</li>
              </ul>

              <h2 className="font-semibold text-lg pb-0.5">
                Power Consumption
              </h2>
              <p className="py-1">100 – 240 V / 50/60 Hz, max. 250 VA </p>
              <p className="mb-4">220 V / 60 Hz </p>

              <h2 className="font-semibold text-lg pb-0.5">Optional</h2>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  Trolley SysCart incl. holder for 2 handpieces and lotion
                </li>

                <li> Tray for applicators</li>
                <li> 2nd Handpiece</li>
                <li> Swivel base</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="w-full"><div className="w-9/12 mx-auto"></div></div>
