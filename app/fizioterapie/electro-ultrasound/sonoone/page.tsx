import Image from "next/image";

export default function Physys() {
  const images = [
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery1.png",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery2.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery3.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery4.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery5.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery6.jpeg",
    "/fizioterapiePhotos/electro-ultrasound/sonoone/galery7.jpeg",
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-9/12 py-4">
        <div className="flex flex-col items-center">
          <div>
            <header className="py-4">
              <div className="container mx-auto px-4">
                <h1 className="text-blue700 text-3xl font-bold">SonoOne</h1>
              </div>
            </header>
          </div>
          <div className="flex justify-between">
            <Image
              src="/fizioterapiePhotos/electro-ultrasound/sonoone/sonoone-machine.png"
              width={150}
              height={100}
              alt="PhySys"
            />
            <div className="text-container my-auto">
              <h1 className="text-4xl font-semibold mb-4">
                Ultrasound therapy
              </h1>

              <p className="my-auto text-left">
                For many decades, ultrasound therapy has been successfully
                established as treatment for chronic and degenerative diseases
                of the musculoskelettal and support system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* {APPLIANCE} */}
      <div className="w-full bg-lightgray">
        <div className="mx-auto py-8 flex flex-col items-center">
          <div className="w-9/12">
            <h1 className="text-2xl font-bold mb-4">
              Hand-held ultrasound therapy
            </h1>

            <h2 className="text-xl font-bold mb-2">SonoOne – always there</h2>
            <p>
              Ergonomic and high-performance. The small, compact system is ideal
              for mobile use.
            </p>
            <h2 className="text-xl font-bold mb-2">Efficient treatment</h2>
            <p>
              1 and 3 MHz, unpulsed and pulsed emission of ultrasound offers
              every possibility for modern, effective ultrasound therapy.
            </p>
            <h2 className="text-xl font-bold mb-2">Functionality</h2>
            <p>
              Intuitive, clearly arranged and quick to operate. The colour touch
              operation makes treatment an enjoyable experience.
            </p>
            <p className="py-8">Move cart</p>
            <ul className="list-disc list-inside">
              <li>smoothly movable</li>
              <li>modern design</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      {/* {TECHNICAL DATA} */}

      <div className="w-full">
        <div className="mx-auto py-8 px-4 flex justify-center">
          <section className="w-9/12">
            <h2 className="text-2xl font-bold mb-4">Technical data</h2>
            <div>
              <h2 className="text-xl font-bold mb-4">Frequency</h2>
              <p className="mb-4">1 and 3 MHz</p>
              <h3 className="text-lg font-bold mb-2">Ultrasound types</h3>
              <ul className="list-disc ml-6 mb-4">
                <li>Continuous ultrasound</li>
                <li>Pulsed ultrasound, adjustable pulse frequencies</li>
                <li>Pulse Frequencies: 10 Hz, 20 Hz, 50 Hz, 100 Hz</li>
                <li>Duty ratio: 1:1, 1:2, 1:5, 1:10</li>
              </ul>
              <h3 className="text-lg font-bold mb-2">Transducer surface</h3>
              <p className="mb-4">5 cm², AER = 3 cm²</p>
              <h3 className="text-lg font-bold mb-2">Intensity</h3>
              <p className="mb-4">Max. 3 W/cm²</p>
              <h3 className="text-lg font-bold mb-2">Intensity levels</h3>
              <p className="mb-4">
                0.1 W/cm² to 3 W/cm² in intervals of 0.1 W/cm²
              </p>
              <h3 className="text-lg font-bold mb-2">
                Number of ultrasound transducer connections
              </h3>
              <p className="mb-4">1</p>
              <h3 className="text-lg font-bold mb-2">
                Dimensions (LxWxH) / Weight
              </h3>
              <p className="mb-4">23.8 cm x 13.8 cm x 9.5 cm / 1 kg</p>
            </div>
          </section>
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
