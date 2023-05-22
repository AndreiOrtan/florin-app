import Link from "next/link";
import Image from "next/image";

export default function Physys() {
  const images = [
    "/fizioterapiePhotos/electro-ultrasound/physys/galery1.png",
    "/fizioterapiePhotos/electro-ultrasound/physys/galery2.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/physys/galery3.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/physys/galery4.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/physys/galery5.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/physys/galery6.jpeg",
  ];
  return (
    <div className="flex flex-col items-center my-4 w-full text-gray600">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">PhySys</h1>
        </div>
      </header>

      <div className="w-9/12 my-8">
        <div className="flex flex-col sm:flex-row items-center">
          <img
            src="/fizioterapiePhotos/electro-ultrasound/physys/physysMachine.png"
            alt="PhySys"
            className="w-[150px]"
          />
          <div className="text-container my-auto">
            <h1 className="text-4xl font-semibold mb-4">
              Physiotherapy at your fingertips
            </h1>

            <p className="my-auto text-left">
              Over 45 years of experience in physiotherapy at your disposal. The
              innovative device for electrostimulation, ultrasound therapy, and
              combined therapy. Up-to-date color touch screen technology that is
              quick, simple, and user-friendly. PhySys provides all features for
              successful treatments in a fantastic design.
            </p>
          </div>
        </div>
      </div>

      {/* {APPLIANCE} */}
      <div className="bg-lightgray w-full">
        <div className="mx-auto py-8 flex flex-col items-center w-9/12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Appliance</h2>
            <ul className="list-disc list-inside">
              <li>Pain Treatment</li>
              <li>Muscle Relaxing Therapy</li>
              <li>Muscle Toning Therapy</li>
              <li>Metabolism Stimulation</li>
            </ul>
            <p className="mt-4">
              PhySys broadens the range of all requested therapies for optimized
              treatments with its electrostimulation and ultrasound therapy
              programs in mono or dual channels.
            </p>
          </div>
          {/* <div className="flex">
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/physys/physysMAN1.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/physys/physysMAN2.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/physys/physysMAN3.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/physys/physysMAN4.jpeg"
              width={200}
              height={200}
              alt="man"
              className="m-1"
            ></Image>
          </div> */}
        </div>
      </div>

      <div className="w-full py-8">
        <div className="w-9/12 mx-auto">
          <h2 className="text-xl font-bold mb-2">
            Combined Treatment & SonoSwing
          </h2>
          <p className="mb-4">
            PhySys provides preset programmes related to effects for quick and
            easy use of the effective combination of ultrasound and
            electrostimulation.
          </p>
          <p>
            Patent SonoSwing: Multifrequency heads provide both frequencies (0.8
            MHz and 2.4 MHz) simultaneously in parallel with a selected ratio.
            The user can therefore determine exactly the desired treatment
            depth. These features enable the therapist to focus the treatment
            precisely on his or her plan for achieving pain reduction, or
            hyperaemia or for improving restoration processes by increased
            metabolism.
          </p>
          <h2 className="text-xl font-bold my-2">
            Practical extensions and accessories
          </h2>
          <p className="mb-4">Vaco: Electrotherapy plus suction massage</p>
          <p>
            Vaco allows you to apply electrodes with ease. Your patients will
            certainly enjoy the therapeutic effects of a suction massage during
            electrotherapy.
          </p>
        </div>
      </div>

      {/* {PICTURE GALLERY} */}
      <div className="w-full bg-lightgray">
        <div className="w-9/12 mx-auto py-8">
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
          <div className="videos flex sm:flex-row flex-col items-center">
            <iframe
              src="https://www.youtube.com/embed/F_pEaofmFOM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/7SIY_sCT9KU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
            ></iframe>
          </div>
        </div>
      </div>

      {/* {TECHNICAL DATA} */}

      <div className="w-full flex justify-center">
        <div className="py-8 flex justify-center w-9/12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Technical Data</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Dimensions (HxWxL)
                </h3>
                <ul className="list-disc list-inside">
                  <li>PhySys with column: 138 cm x 53 cm x 52 cm</li>
                  <li>PhySys: 30 cm x 35 cm x 20 cm</li>
                  <li>Column: 109 cm x 53 cm x 52 cm</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Electrostimulation: Channel selection
                </h3>
                <ul className="list-disc list-inside">
                  <li>MonoStim / 1 program – 1 channel</li>
                  <li>TwinStim / 1 program – 2 channels</li>
                  <li>DuoStim / 2 different programs – 2 channels</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Electrostimulation: Waveforms
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    Galv., DD, LF, biphasic, MF, MF/LF, interferential, etc.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Ultrasound heads</h3>
                <ul className="list-disc list-inside">
                  <li>Multifrequency heads</li>
                  <li>5 cm²</li>
                  <li>1 cm² (optional)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Frequencies</h3>
                <ul className="list-disc list-inside">
                  <li>0.8 MHz: deep effect</li>
                  <li>2.4 MHz: superficial effect</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Maximum power emission Ultrasound
                </h3>
                <ul className="list-disc list-inside">
                  <li>3 W/cm² for 5 cm² head</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Number of programmes Ultrasound
                </h3>
                <ul className="list-disc list-inside">
                  <li>9 programs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Ultrasound Coupling
                </h3>
                <ul className="list-disc list-inside">
                  <li>Audio and 2 colors optical</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Memory / Update</h3>
                <ul className="list-disc list-inside">
                  <li>SD-card (4GB) for indication menu memory</li>
                  <li>
                    Free memory entries: therapy 120 / diagnostic 120 /
                    favorites 120
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Combined Treatment
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    Preset programs for desired effect or individually
                    selectable
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Electrostimulation: Channels
                </h3>
                <ul className="list-disc list-inside">
                  <li>
                    2, completely independent programs (Intensity and
                    Parameters)
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
