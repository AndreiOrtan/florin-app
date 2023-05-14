import Link from "next/link";

export default function PhysicalTherapy() {
  return (
    <div className="flex flex-col items-center">
      <div className="cards grid grid-cols-4 max-w-4xl">
        <div className="card-container rounded w-56">
          <Link href="/fizioterapie/electro-ultrasound">
            <div className="w-full rounded hover:shadow-2xl shadow duration-300 bg-transparent">
              <img
                className="w-full object-cover"
                src="/electro-sound.jpg"
                alt="Card Image"
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
          </Link>
        </div>

        <div className="card-container rounded w-56">
          <Link href="/fizioterapie/laser-therapy">
            <div className="w-full rounded hover:shadow-2xl shadow duration-300 bg-transparent">
              <img
                className="w-full object-cover"
                src="/laser-therapy.jpeg"
                alt="Card Image"
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
          </Link>
        </div>

        <div className="card-container rounded w-56">
          <Link href="/fizioterapie/shockwave-therapy">
            <div className="w-full rounded hover:shadow-2xl shadow duration-300 bg-transparent">
              <img
                className="w-full object-cover"
                src="/shockwave-therapy.jpg"
                alt="Card Image"
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
          </Link>
        </div>

        <div className="card-container rounded w-56">
          <Link href="/fizioterapie/high-energy-inductive-therapy">
            <div className="w-full rounded hover:shadow-2xl shadow duration-300 bg-transparent">
              <img
                className="w-full object-cover"
                src="/high-energy-inductive.jpg"
                alt="Card Image"
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
          </Link>
        </div>

        <div className="card-container rounded w-56">
          <Link href="/fizioterapie/diathermy-therapy">
            <div className="w-full rounded hover:shadow-2xl shadow duration-300 bg-transparent">
              <img
                className="w-full object-cover"
                src="/diathermy-therapy.jpg"
                alt="Card Image"
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
          </Link>
        </div>

        <div className="card-container rounded w-56">
          <Link href="/fizioterapie/cryotherapy">
            <div className="w-full rounded hover:shadow-2xl shadow duration-300 bg-transparent">
              <img
                className="w-full object-cover"
                src="/cryotherapy.jpeg"
                alt="Card Image"
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
          </Link>
        </div>

        <div className="card-container rounded w-56">
          <Link href="/fizioterapie/aquatizer">
            <div className="w-full rounded hover:shadow-2xl shadow duration-300 bg-transparent">
              <img
                className="w-full object-cover"
                src="/aquatizer.png"
                alt="Card Image"
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
          </Link>
        </div>
      </div>

      <section className="max-w-4xl">
        <div className="">
          <h1>
            Physical therapy: proven processes with the most modern technology
          </h1>

          <div>
            <img src="/physical-therapy-man.jpeg" alt="" />
            <div>
              <p>
                Therapies that are based on physical methods such as light,
                heat, cold, sound, shock or current, are called physical
                therapies. These forms of therapy have been used for a long time
                for pain therapy, rehabilitation, to support the healing process
                as well as for prevention
              </p>
              <p>
                Zimmer MedizinSysteme consistently works on further advancing
                these processes and establishing new methods of physical
                therapy.
              </p>
              <p>
                Each of our products is designed in strict scientific fashion
                and at the same time related to practice. The close cooperation
                with universities and colleges characterises us as well as how
                we permanently look over user’s shoulders. Thus, for our users,
                scientific studies and practical experience add up to exactly
                the added value that is important in everyday practice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
