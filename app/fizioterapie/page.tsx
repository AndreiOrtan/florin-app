import Image from "next/image";
import Link from "next/link";
export default function PhysicalTherapy() {
  return (
    <div className="flex flex-col items-center my-4 max-w-4xl px-4">
      <div className="flex flex-col sm:flex-row flex-wrap w-full items-center justify-center">
        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <Link href="/fizioterapie/electro-ultrasound" className="relative">
            <div className="w-full">
              <Image
                src="/electro-sound.jpg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  Electro & Ultrasound
                </div>
                <p className="text-xs">
                  Highly efficient treatment by combined use of ultrasound and
                  electrical stimulation
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2">
          <Link href="/fizioterapie/laser-therapy" className="relative">
            <div className="w-full rounded-lg bg-white">
              <Image
                className="w-full h-56"
                src="/laser-therapy.jpeg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  Laser Therapy
                </div>
                <p className="text-gray-700 text-xs">
                  Natural healing with the power of light:
                  High-Power-Lasertherapy with up to 25W
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2">
          <Link href="/fizioterapie/shockwave-therapy" className="relative">
            <div className="w-full rounded-lg bg-white">
              <Image
                className="w-full h-56"
                src="/shockwave-therapy.jpg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  Shockwave Therapy
                </div>
                <p className="text-gray-700 text-xs">
                  Focused and Radial Shockwave Therapy – mobile and comfortable
                  with state of the art User Interface
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2">
          <Link
            href="/fizioterapie/high-energy-inductive-therapy"
            className="relative"
          >
            <div className="w-full rounded-lg bg-white">
              <Image
                className="w-full h-56"
                src="/high-energy-inductive.jpg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  High Energy Inductive Therapy
                </div>
                <p className="text-gray-700 text-xs">
                  Experience the power of a magnetic field up to 3 Tesla
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2">
          <Link href="/fizioterapie/diathermy-therapy" className="relative">
            <div className="w-full rounded-lg bg-white">
              <Image
                className="w-full h-56"
                src="/diathermy-therapy.jpg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  Diathermy Therapy
                </div>
                <p className="text-gray-700 text-xs">
                  Healing heat through shortwave, microwave or high-frequency
                  electrotherapy
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2">
          <Link href="/fizioterapie/cryotherapy" className="relative">
            <div className="w-full rounded-lg bg-white">
              <Image
                className="w-full h-56"
                src="/cryotherapy.jpeg"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  Cryotherapy
                </div>
                <p className="text-gray-700 text-xs">
                  State of the art cryotherapy: Cryo6 with −30 °C cold air and
                  Whole Body Cold Chamber icelab −110 °C
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2">
          <Link href="/fizioterapie/aquatizer" className="relative">
            <div className="w-full rounded-lg bg-white">
              <Image
                className="w-full h-56"
                src="/aquatizer.png"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-xl mb-1">
                  Aquatizer
                </div>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, nesciunt.
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </Link>
        </div>
      </div>

      <section className="my-16">
        <h1 className="mb-8 text-4xl font-semibold leading-none tracking-tight text-gray900">
          Physical therapy: proven processes with the most modern technology
        </h1>

        <div>
          <Image
            src="/physical-therapy-man.jpeg"
            alt="Any Text"
            width={500}
            height={500}
            blurDataURL="URL"
            placeholder="blur"
            className="mb-8"
          />
          <div>
            <p>
              Therapies that are based on physical methods such as light, heat,
              cold, sound, shock or current, are called physical therapies.
              These forms of therapy have been used for a long time for pain
              therapy, rehabilitation, to support the healing process as well as
              for prevention
            </p>
            <p>
              Zimmer MedizinSysteme consistently works on further advancing
              these processes and establishing new methods of physical therapy.
            </p>
            <p>
              Each of our products is designed in strict scientific fashion and
              at the same time related to practice. The close cooperation with
              universities and colleges characterises us as well as how we
              permanently look over user’s shoulders. Thus, for our users,
              scientific studies and practical experience add up to exactly the
              added value that is important in everyday practice.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
