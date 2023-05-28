import Image from "next/image";
import Link from "next/link";
export default function OptonPro() {
  const images = [
    "/fizioterapiePhotos/laser-therapy/optonpro/galery1.jpeg",
    "/fizioterapiePhotos/laser-therapy/optonpro/galery2.jpeg",
    "/fizioterapiePhotos/laser-therapy/optonpro/galery3.jpeg",
    "/fizioterapiePhotos/laser-therapy/optonpro/galery4.jpeg",
    "/fizioterapiePhotos/laser-therapy/optonpro/galery5.jpeg",
    "/fizioterapiePhotos/laser-therapy/optonpro/galery6.jpeg",
    "/fizioterapiePhotos/laser-therapy/optonpro/galery7.jpeg",
  ];
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-9/12 py-4">
        <div className="flex flex-col items-center ">
          <div>
            <header className="py-4">
              <div className="container mx-auto px-4">
                <h1 className="text-blue700 text-3xl font-bold">OptonPro</h1>
              </div>
            </header>
          </div>
          <div className="flex justify-center items-center sm:flex-row flex-col">
            <Image
              src="/fizioterapiePhotos/laser-therapy/optonpro/optonpro-machine.png"
              width={150}
              height={100}
              alt="PhySys"
            />
            <div className="text-container my-8">
              <h1 className="text-4xl font-semibold mb-4">
                Zimmer MedizinSysteme – Made in Germany
              </h1>

              <p className="my-auto text-left">
                In the field of high-energy laser therapy, Zimmer MedizinSysteme
                is one of the pioneers on the market – the first high-power
                laser was already launched on the market in the 1990s.
              </p>
              <p className="my-auto text-left">
                Since that time, we have been working continuously to further
                develop this form of therapy and the devices – together with
                experts from research and application. As a result, we set new
                standards again and again, whether in output and wavelength, in
                safety during use, or in simplicity of operation.{" "}
              </p>
              <p className="my-auto text-left">
                With over 20 years of experience and more than 10,000 systems
                sold worldwide, Zimmer MedizinSysteme is one of today’s leading
                providers. Hospitals, physiotherapists and physicians throughout
                the world use our high-energy Opton lasers every day and rely on
                their therapeutic effect.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-10 bg-lightgray">
        <div className="w-9/12 mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            Laser therapy – Achieve therapeutic success with the speed of light
          </h2>
          <div className="flex sm:flex-row flex-col">
            <div>
              <p className="py-4">
                Therapy with laser light is a widely used method in physical
                therapy.
              </p>
              <p className="py-4">
                Laser therapy is a treatment with high-energy light which
                introduces large quantities of light into the tissue. As a
                result, healing is stimulated in a sustained manner.
              </p>
              <p className="py-4">
                In particular, high-power laser therapy in which high
                intensities are used is becoming increasingly important.
              </p>
              <p className="py-4">
                With laser therapy systems up to 25 W which are equipped with
                the most modern technology, Zimmer MedizinSysteme is setting new
                standards in the field of laser therapy.
              </p>
            </div>
            <Image
              src="/fizioterapiePhotos/laser-therapy/optonpro/speed-of-light.jpeg"
              alt="Any Text"
              width={500}
              height={500}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <div className="w-9/12 mx-auto flex flex-col mb-16">
          <h1 className="text-2xl font-semibold mb-4">
            Maximum operating convenience
          </h1>
          <div className="mb-4">
            <h2 className="text-xl font-medium">Laser applicator</h2>
            <p>
              The laser light is output via an ergonomically shaped laser
              applicator which is equipped with an adjustable manual switch. By
              double-clicking once, the laser light is now emitted continuously,
              without any further action needed from the user. This ensures
              maximum convenience in handling for the user.
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-medium">Spacers</h2>
            <p>
              2 different spacers which can be quickly and easily exchanged hold
              the laser applicator at a defined distance from the skin.
            </p>
          </div>
          <div className="mb-4 flex sm:flex-row flex-col">
            <div>
              <h2 className="text-xl font-medium">
                Skin temperature measurement
              </h2>
              <p>
                A temperature sensor integrated in the laser applicator enables
                the skin temperature to be monitored during the therapy. In
                particular, this provides more safety during application in the
                case of different skin types and helps avoid undesirably high
                skin temperatures.
              </p>
            </div>
            <Image
              src="/fizioterapiePhotos/laser-therapy/optonpro/measurement.jpeg"
              alt="Any Text"
              width={400}
              height={400}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-medium">Professional screen</h2>
            <p>The screen allows quick, direct access to the therapy screen.</p>
          </div>
        </div>
      </div>

      <div className="w-9/12 mx-auto flex flex-col mb-16">
        <h1 className="text-2xl font-semibold mb-4">
          Individual therapeutic requirements
        </h1>

        <h3 className="text-sm">
          Different combinations of the treatment parameters allow the user to
          adapt the therapy individually to the patient and achieve the best
          possible treatment results.
        </h3>
        <div className="flex my-8 sm:flex-row flex-col">
          <Image
            src="/fizioterapiePhotos/laser-therapy/optonpro/individual.jpeg"
            alt="Any Text"
            width={300}
            height={300}
            blurDataURL="URL"
            placeholder="blur"
            className="mr-4 rounded-lg"
          />
          <div className="sm:ml-12">
            <p className="py-6">OptonPro 25 Watt – 810 nm | 980 nm | 1064 nm</p>
            <p className="py-6">OptonPro 15 Watt – 810 nm | 980 nm | 1064 nm</p>
            <p className="py-6">OptonPro 10 Watt – 810 nm | 980 nm</p>
          </div>
        </div>
      </div>

      <div className="w-9/12 mx-auto flex flex-col mb-16">
        <h1 className="text-2xl font-semibold mb-4">Features</h1>

        <div className="flex my-8 flex-col sm:flex-row">
          <div>
            <h2 className="text-xl font-medium mb-4">
              Skin temperature measurement
            </h2>
            <p>
              Therapy with 3 wavelengths enables stimulation of different target
              sites: Pain receptors at the surface as well as deeper tissue
              structures are stimulated at the same time.
            </p>
            <p>
              In particular, the wavelength of 1064 nm which has the lowest
              scatter in the tissue promotes penetration of the radiation into
              the deep layers of tissue.
            </p>
          </div>
          <Image
            src="/fizioterapiePhotos/laser-therapy/optonpro/feature.jpeg"
            alt="Any Text"
            width={550}
            height={550}
            blurDataURL="URL"
            placeholder="blur"
            className="mr-4 rounded-lg"
          />
        </div>
      </div>

      <div className="w-9/12 mx-auto flex flex-col mb-8">
        <div className="mb-4">
          <h2 className="text-xl font-medium">
            The advantage of laser therapy with high power
          </h2>
          <p>
            More power increases the power density in the tissue and this
            results in an increase in the thermal effect in deeper layers as
            well.
          </p>
          <p>
            As a result of the high power of the OptonPro, the distance to the
            tissue and thus the radius of the treatment area can be greatly
            enlarged. This can mean a significant time savings for the user.
          </p>
        </div>
      </div>

      <div className="w-9/12 mx-auto flex flex-col mb-8">
        <div className="mb-4">
          <h2 className="text-xl font-medium">Broad treatment spectrum</h2>
          <p>
            The simultaneous output of laser light with three wavelengths opens
            up a broad field of therapeutic options for the user.
          </p>
        </div>
      </div>

      <div className="w-full py-10 bg-lightgray">
        <div className="w-9/12 mx-auto my-8">
          <h2 className="text-2xl font-semibold mb-4">
            Most modern user interface
          </h2>

          <div className="mb-12">
            <h1 className="text-lg font-semibold">Visual analogue scale</h1>
            <p className="mb-4">
              The integrated VAS provides information about the patient’s pain
              perception.
            </p>
            <Image
              src="/fizioterapiePhotos/laser-therapy/optonpro/interface1.jpeg"
              alt="Any Text"
              width={400}
              height={400}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
          </div>
          <div className="mb-12">
            <h1 className="text-lg font-semibold">
              Operating philosophy at the highest level
            </h1>
            <p className="mb-4">
              The large, colourful display and the ultramodern operation ensure
              enjoyment and motivation during use.
            </p>
            <Image
              src="/fizioterapiePhotos/laser-therapy/optonpro/interface2.jpeg"
              alt="Any Text"
              width={400}
              height={400}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
          </div>
          <div className="mb-12">
            <h1 className="text-lg font-semibold">Therapy Assistant</h1>
            <p>
              Recommended parameters are automatically saved. The amount of
              energy to be applied is recommended depending on the area to be
              treated, the pain condition and skin type.
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>smoothly movable</li>
              <li>modern design</li>
            </ul>
            <Image
              src="/fizioterapiePhotos/laser-therapy/optonpro/interface1.jpeg"
              alt="Any Text"
              width={400}
              height={400}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
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

      <div className="w-full bg-blue700">
        <div className="flex flex-col items-center py-24">
          <div className="videos flex flex-col sm:flex-row">
            <iframe
              src="https://www.youtube.com/embed/0yzVwaB0KEQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/nMdYbLKdI20"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mx-8 sm:w-[560px] sm:h-[380px] rounded-lg w-9/12 my-4"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full py-10">
        <div className="w-9/12 mx-auto flex justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Technical data</h2>
            <h2 className="text-lg font-semibold mb-1">OptonPro 10 W</h2>
            <p> Laser diodes: 810 nm / 980 nm</p>
            <p> Emitted output: Max. 10 W</p>
            <p>Power consumption: 1,0 A</p>

            <h2 className="text-lg font-semibold mb-1"> OptonPro 15 W</h2>
            <p> Laser diodes: 810 nm / 980 nm / 1064 nm</p>
            <p> Emitted output, max.: Max. 15 W</p>
            <p> Power consumption: 1,2 A</p>

            <h2 className="text-lg font-semibold mb-1">OptonPro 25 W</h2>
            <p> Laser diodes: 810 nm / 980 nm / 1064 nm</p>
            <p> Emitted output, max.: Max. 25 W</p>
            <p> Power consumption: 1,8 A</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              The following data apply to all models:
            </h2>
            <h2 className="text-lg font-semibold mb-1"> Treatment area</h2>
            <p className="mb-2"> Min. Ø 10 mm</p>

            <h2 className="text-lg font-semibold mb-1"> Operating voltage</h2>
            <p className="mb-2"> 100 – 240 V~, 50 Hz / 60 Hz</p>

            <h2 className="text-lg font-semibold mb-1"> Protection class</h2>
            <p className="mb-2"> II</p>

            <h2 className="text-lg font-semibold mb-1"> Applied part</h2>
            <p className="mb-2">Typ B according to EN 60601-1</p>

            <h2 className="text-lg font-semibold mb-1"> Dimensions</h2>
            <p className="mb-2">H 30 cm, B 35 cm, L 20 cm</p>

            <h2 className="text-lg font-semibold mb-1"> Weight</h2>
            <p className="mb-2"> 3,8 kg</p>

            <h2 className="text-lg font-semibold mb-1"> Laser class</h2>
            <p className="mb-2"> 4, observe special regulations</p>
          </div>
        </div>
      </div>
    </div>
  );
}
