import Link from "next/link";
import Image from "next/image";

export default function Physys() {
  return (
    <div className="flex flex-col items-center my-4 max-w-5xl px-4">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">PhySys</h1>
        </div>
      </header>
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">
          Physiotherapy at your fingertips
        </h1>
        <div className="flex">
          <Image
            src="/fizioterapiePhotos/electro-ultrasound/physys/physysMachine.png"
            width={150}
            height={100}
            alt="PhySys"
          />
          <p className="my-auto text-left">
            Over 45 years of experience in physiotherapy at your disposal. The
            innovative device for electrostimulation, ultrasound therapy, and
            combined therapy. Up-to-date color touch screen technology that is
            quick, simple, and user-friendly. PhySys provides all features for
            successful treatments in a fantastic design.
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-4">Technical Data</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Dimensions (HxWxL)</h3>
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
              <li>Galv., DD, LF, biphasic, MF, MF/LF, interferential, etc.</li>
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
            <h3 className="text-lg font-semibold mb-2">Ultrasound Coupling</h3>
            <ul className="list-disc list-inside">
              <li>Audio and 2 colors optical</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Memory / Update</h3>
            <ul className="list-disc list-inside">
              <li>SD-card (4GB) for indication menu memory</li>
              <li>
                Free memory entries: therapy 120 / diagnostic 120 / favorites
                120
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Combined Treatment</h3>
            <ul className="list-disc list-inside">
              <li>
                Preset programs for desired effect or individually selectable
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              Electrostimulation: Channels
            </h3>
            <ul className="list-disc list-inside">
              <li>
                2, completely independent programs (Intensity and Parameters)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto py-8 px-4">
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
        <div className="flex justify-center">
          <Image
            src="/fizioterapiePhotos/electro-ultrasound/physys/physysMAN1.jpeg"
            width={150}
            height={150}
            alt="man"
            className="m-1"
          ></Image>
          <Image
            src="/fizioterapiePhotos/electro-ultrasound/physys/physysMAN2.jpeg"
            width={150}
            height={150}
            alt="man"
            className="m-1"
          ></Image>
          <Image
            src="/fizioterapiePhotos/electro-ultrasound/physys/physysMAN3.jpeg"
            width={150}
            height={150}
            alt="man"
            className="m-1"
          ></Image>
          <Image
            src="/fizioterapiePhotos/electro-ultrasound/physys/physysMAN4.jpeg"
            width={150}
            height={150}
            alt="man"
            className="m-1"
          ></Image>
        </div>
      </div>
    </div>
  );
}
