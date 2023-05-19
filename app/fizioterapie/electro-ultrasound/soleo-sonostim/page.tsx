import Image from "next/image";

export default function Physys() {
  const images = [
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery1.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery2.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery3.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery4.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery5.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery6.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery7.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/galery8.jpeg",
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-9/12 py-4">
        <div className="flex flex-col items-center ">
          <div>
            <header className="py-4">
              <div className="container mx-auto px-4">
                <h1 className="text-blue700 text-3xl font-bold">
                  Soleo SonoStim
                </h1>
              </div>
            </header>
          </div>
          <div className="flex justify-between">
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/soleo-sonostim-machine.png"
              width={150}
              height={100}
              alt="PhySys"
            />
            <div className="text-container my-8">
              <h1 className="text-4xl font-semibold mb-4">
                Ultrasound, electrotherapy & combined therapy – all in one
                device
              </h1>

              <p className="my-auto text-left">
                A subtle combination of high-tech and over 45 years experience,
                Soleo SonoStim meets all the demands of modern physiotherapy:
                Compact. Ergonomic. High-performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* {APPLIANCE} */}
      <div className="w-full bg-lightgray">
        <div className="mx-auto py-8 flex flex-col items-center w-9/12">
          <div className="w-full py-4">
            <h1 className="text-2xl font-bold mb-4">
              Intelligent design – sets new standards
            </h1>
            <p className="mb-4">
              Expertise for any medical problem Clearly presented, recommended
              treatments for various therapies available at all times.
            </p>
            <h2 className="text-xl font-bold mb-2">
              Tailored to your practice
            </h2>
            <ul className="list-disc list-inside">
              <li>
                The programme‘s customised start settings save you precious
                treatment time.
              </li>
              <li>
                Change pre-set programmes and save them to fit your patients.
              </li>
              <li>Your custom settings are saved to an SD card.</li>
            </ul>
            <h2 className="text-xl font-bold mb-2">Simply beautiful.</h2>
            <p className="mb-4">
              A sleek case and an attractive, capacitive glass touchscreen
              ensure that Soleo Sono, Soleo Galva und Soleo SonoStim really
              stand out in your practice.
            </p>
            <h2 className="text-xl font-bold mb-2">Beautifully simple.</h2>
            <p className="mb-4">
              The user interface of the new Soleoline generation has been
              redesigned to be clear and self-explanatory. It’s even fun to use
              with every application.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Appliance</h2>
            <ul className="list-disc list-inside">
              <li>Pain Therapy</li>
              <li>Muscle Rehabilitation</li>
              <li>Metabolic Increase</li>
              <li>Encouraging of circulation</li>
            </ul>
            <p className="mt-4">
              Soleo SonoStim does everything that Soleo Sono and Soleo Galva do,
              and it also allows you to combine ultrasound therapy with
              electrotherapy. With its innovative technology, more than 300
              indications, this mobile and high-tech device has a huge range of
              applications.
            </p>
            <p className="my-2">
              Multifarious possibilities of combination with 2 channels enlarge
              the range of application.
            </p>
          </div>
          <div className="flex">
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/MAN1.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/MAN2.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/MAN3.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/MAN4.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
          </div>
        </div>
      </div>
      <hr />

      <div className="flex justify-center py-8">
        <div className="w-9/12">
          <h2 className="text-xl font-bold mb-2">
            Combined Treatment & SonoSwing
          </h2>
          <p className="mb-4">
            Soleo SonoStim provides preset programmes related to effects for
            quick and easy use of the effective combination of ultrasound and
            electrostimulation.
          </p>
          <p>
            Patent SonoSwing: Multifrequency heads provide both frequencies (0.8
            MHz and 2.4 MHz) simultaneously with a selected ratio. The user can
            therefore determine the treatment depth desired. These features
            enable the therapist to focus the treatment on his or her plan for
            achieving pain reduction, or hyperaemia, or for improving
            restoration processes by increased metabolism.
          </p>
        </div>
      </div>

      {/* {TECHNICAL DATA} */}

      <div className="w-full bg-lightgray">
        <div className="mx-auto py-8 px-4 flex justify-center">
          <section className="w-9/12">
            <div>
              <h2 className="text-xl font-bold mb-4">Technical data</h2>
              <h3 className="text-lg font-bold mb-2">Ultrasound</h3>
              <ul className="list-disc ml-6 mb-4">
                <li>1 socket for one 5 cm² multi-frequency watertight head</li>
                <li>1 cm² as an optional extra</li>
              </ul>
              <h3 className="text-lg font-bold mb-2">Frequencies</h3>
              <ul className="list-disc ml-6 mb-4">
                <li>0.8 MHz: deep effect</li>
                <li>2.4 MHz: superficial effect</li>
              </ul>
              <p className="mb-4">Maximum power emission: 3 W / cm²</p>
              <h3 className="text-lg font-bold mb-2">Electrostimulation</h3>
              <p className="mb-4">
                Channels: 2 independent channels (programmes, intensities,
                parameters)
              </p>
              <h3 className="text-lg font-bold mb-2">SD memory card</h3>
              <p className="mb-4">Dimensions: 32.2 cm x 23.4 cm x 13 cm</p>
              <p className="mb-4">Weight: ~3 kg</p>
            </div>
          </section>
        </div>
      </div>

      <div className="w-full py-8">
        <div className="w-9/12 mx-auto">
          <h1 className="text-2xl font-semibold">
            Practical extensions and accessories
          </h1>

          <h2 className="text-xl font-normal mb-4">
            Vaco: Electrotherapy plus suction massage
          </h2>

          <p>
            Vaco allows you to apply electrodes with ease. Your patients will
            certainly enjoy the therapeutic effects of a suction massage during
            electrotherapy.
          </p>

          <h2 className="text-xl font-medium mt-4">Move cart</h2>

          <ul className="list-disc ml-6 mb-4">
            <li>smoothly movable</li>
            <li>modern design</li>
          </ul>
          <div className="flex justify-between">
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/practical1.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>

            <Image
              src="/fizioterapiePhotos/electro-ultrasound/soleo-sonostim/practical2.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
          </div>
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
    </div>
  );
}
