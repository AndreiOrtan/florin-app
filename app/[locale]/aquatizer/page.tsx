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
                <h1 className="text-blue700 text-3xl font-bold">Aquatizer</h1>
              </div>
            </header>
          </div>
          <div className="flex justify-center items-center sm:flex-row flex-col">
            <Image
              src="/aquatizer/aqua.jpeg"
              width={320}
              height={200}
              alt="PhySys"
              className=""
            />
            <div className="text-container my-8">
              <p className="my-auto text-left">
                The “Aquatizer QZ series” provided by Minato Medical Science who
                have always provided advanced devices with original design
                concepts in the dry hydro jet massage bed field. Using these
                results and technology, we have created the new dry hydro jet
                massage bed. This is the "QZ-240", in which advanced functions,
                such as 4 nozzles, foot airbags and an automatic height setting
                function, have been added to a futuristic design. You can find
                here a dry hydro jet massage bed with the most highly evolved
                sense of treatment, comfort and operability.
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
          <div className="flex sm:flex-row flex-col py-2">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                New sense of treatment with the 4 nozzle (wide jet)
              </h2>
              <p className="py-4">
                This has created a sense of treatment not previously found in 4
                base nozzles. By switching the number of nozzles depending on
                the massaged area and pattern, we provide massage with a high
                degree of variation.
              </p>
            </div>
            <Image
              src="/aquatizer/jet4.jpeg"
              alt="Any Text"
              width={500}
              height={500}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
          </div>
          <div className="flex sm:flex-row flex-col py-2">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Holds the feet softly with an airbag
              </h2>
              <p className="py-4">
                The foot airbag prevents you from opening your legs and holds
                the legs in the optimal position. The jet provides precise
                stimulation from your calves to your thighs.
              </p>
            </div>
            <Image
              src="/aquatizer/airbag1.jpeg"
              alt="Any Text"
              width={460}
              height={380}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              The sensors automatically detect your height
            </h2>
            <p className="py-4">
              Equipped with sensor to determine the position of your head. It
              measures your height and automatically sets the optimal massage
              position. There is no need to separately set the height as before
              and this greatly reduces the workload of the staff.
            </p>
            <h2 className="text-2xl font-semibold mb-2">
              All-in-one handrail makes it easy to get on and off
            </h2>
            <p className="py-4">
              The body and all-in-one handrail located from the head to feet
              make it easy to get on and off the bed. Further, its smooth
              streamlined shape give it a really futuristic design.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <div className="w-9/12 mx-auto">
          <div className="flex sm:flex-row flex-col py-2">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                It has 4 nozzles (wide jet) with switching function to expand
                treatment variation[patent under application]
              </h2>
              <p className="py-4">
                By switching between 4 nozzles (wide jet) and 2 nozzles, there
                is a drastic increase in the variations of treatment, such as
                "wide range treatment" and "concentrated treatment on the
                required areas" By combining the nozzle movement speed and
                different jet intensities, it is possible to massage in a varied
                and efficient way. We provide treatment optimized for each and
                every patient.
              </p>
            </div>
            <Image
              src="/aquatizer/widejet.jpeg"
              alt="Any Text"
              width={420}
              height={370}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold my-8">
            Varied massage patterns to suit a diverse array of tastes
          </h2>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              {" "}
              Realizes 7 types of hand techniques
            </h2>
            <p className="mb-4">
              {" "}
              Adopts the 7 massage patterns of “RUB”, “KNEAD”, “WIDE KNEAD”,
              “PRESS”, “PAT”, “SQUEEZE” and “CONTINUOUS”. Through the “variable
              speed nozzle control function” from which you can adjust the
              movement speed of the nozzle, finely-tuned massage can be achieved
              and a broad range of massage from relaxation to dynamic
              stimulation is possible. Further, the variations in stimulation
              are greatly expanded by switching the number of nozzles.
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              {" "}
              Maximum of 28 types of massage mode
            </h2>
            <p className="mb-4">
              {" "}
              It is possible to select, according to your taste, from 28
              varieties of massage mode, by switching between“WIDE” and “SLOW”in
              addition to the 7 types of massage patterns. It can store a
              maximum of 10 types of “user programs” created individually by the
              users. The optimal form of massage can be selected from a rich
              program.
            </p>

            <h2 className="text-2xl font-semibold mb-2">
              {" "}
              Six levels of intensity can be set
            </h2>
            <p className="mb-4">
              {" "}
              The massage intensity can be seen in total of 6 levels from level
              1 to 5 plus “Turbo”. The intensity can be chosen based on the
              state of the patient, from gentle massage to strong massage.
            </p>
          </div>

          <h2 className="text-2xl font-semibold my-8">
            Items that heighten the relaxation environment
          </h2>
        </div>
      </div>

      <div className="w-full py-10 bg-lightgray">
        <div className="w-9/12 mx-auto">
          <div className="flex sm:flex-row flex-col py-2">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Arm rest cushion that makes it easy to adopt the zero position
                (option)
              </h2>
              <p className="py-4">
                Arm rest cushion that makes it easy to adopt a posture (zero
                position) in which the muscles around the shoulder joints can be
                relaxed. By maintaining the relaxed state, the sense of
                stimulation in the upper body is increased.
              </p>
            </div>
            <Image
              src="/aquatizer/option1.jpeg"
              alt="Any Text"
              width={420}
              height={370}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
          </div>

          <div className="flex sm:flex-row flex-col py-2">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Type with a hood for creating a relaxation space (option)
              </h2>
              <p className="py-4">
                Lineup of hood-attached types. By blocking the surroundings from
                the view of the patient, they are enveloped in the relaxation
                space and more comfortable treatment can be performed.
              </p>
            </div>
            <Image
              src="/aquatizer/option2.jpeg"
              alt="Any Text"
              width={420}
              height={370}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <div className="w-9/12 mx-auto">
          <header className="py-4">
            <div className="container mx-auto">
              <h1 className="text-blue700 text-3xl font-bold">
                Merits to patient
              </h1>
            </div>
          </header>
          <div>
            <h2 className="text-2xl font font-semibold mb-2">
              Kind design that allows patients to receive treatment in comfort
            </h2>
            <p className="mb-4"> Foot airbag that softly holds the feet</p>
            <h2 className="text-2xl font font-semibold mb-2">
              Original low noise design that maintains a quiet treatment
              environment
            </h2>
            <p className="mb-4">
              Prevents opening of the legs and holds the legs in the optimal
              position. Greatly improved sense of stimulation from calves to
              thighs.
            </p>

            <h2 className="text-2xl font font-semibold mb-2">
              Reduction in shaking of the head section
            </h2>
            <p className="mb-4">
              By softly holding the feet, the body is stabilized and shaking of
              the head section is reduced.
            </p>

            <h2 className="text-2xl font font-semibold mb-2">
              Easy to understand lie-down position
            </h2>
            <p className="mb-4">
              This is a kind design that enables patients using it for the first
              time when lying on the bed and putting their feet in the foot
              airbag to easily work out where to lie down.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col justify-between items-center">
            <div>
              <Image
                src="/aquatizer/easy1.jpeg"
                alt="Any Text"
                width={520}
                height={370}
                blurDataURL="URL"
                placeholder="blur"
                className="mr-4 rounded-lg"
              />
              <p>
                As your legs will not open, the water flow hits accurately from
                the calves to the thighs
              </p>
            </div>
            <div>
              <Image
                src="/aquatizer/easy2.jpeg"
                alt="Any Text"
                width={520}
                height={370}
                blurDataURL="URL"
                placeholder="blur"
                className="mr-4 rounded-lg"
              />
              <p>
                if you open your legs, you will not receive the main water flow.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-10 bg-lightgray">
        <div className="w-9/12 mx-auto">
          <div className="my-4">
            <h2 className="text-2xl font font-semibold mb-2">
              Futuristic design that is compact and easy to get on and off
            </h2>

            <p className="mb-4">
              The main unit size is 229 cm × 82 cm, which while being compact
              has a wide seat. By saving space, this increases the room in the
              treatment space. Further, in addition to lowering the bed height
              to 50 cm, a smooth shaped all-in-one handrail has been installed
              and a streamlined futuristic design has been adopted. We have
              employed a design that makes it easy for patients to get on and
              off.
            </p>

            <Image
              src="/aquatizer/futuristic1.jpeg"
              alt="Any Text"
              width={520}
              height={370}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
          </div>

          <div className="my-4">
            <h2 className="text-2xl font-semibold mb-1">
              Original quiet design to maintain a quiet treatment environment
            </h2>
            <p className="mb-4">
              Through the adoption of a low noise “Minato Medical Science only”
              pump and new shape nozzle optimized for the dry hydro jet massage
              bed, the pump operation noise and water flow noise have been
              minimized. Further, through an original design and mechanism, the
              mechanical noise of the radiator and radiator fan have been
              reduced. Maintains a quiet treatment environment.
            </p>
            <h2 className="text-2xl font-semibold mb-1">
              Water cooling function that enables comfortable treatment even in
              summer
            </h2>
            <p className="mb-4">
              The dry hydro jet massage bed generates heat from its high energy
              water flow-compatible pump. Normally the radiator fan is operated
              to cool this heat, but the QZ-240 has been equipped with a wide
              variety of cooling modes, from efficient cooling methods to the
              original “FULLAUTO water cooling” in which the cooling fan is not
              run at all. In this way, the bed water temperature will not
              increase even in summer and comfortable treatment is possible.
              (For the water cooling system, a plumbing is required)
            </p>
            <h2 className="text-2xl font-semibold mb-1"> FULL AUTO</h2>
            <p className="mb-4">
              With the water cooling system, it automatically keeps the set
              temperature. As there is no cooling fan running, a quite treatment
              environment can be achieved.
            </p>
            <h2 className="text-2xl font-semibold mb-1"> COMBINATION</h2>
            <p className="mb-4">
              Mode in which water cooling and air cooling are used together.
              Normally this is controlled with air cooling and when used for
              continuous high output and the temperature rises, water cooling is
              also used to control the set temperature.
            </p>
            <h2 className="text-2xl font-semibold mb-1"> ASSIST</h2>
            <p className="mb-4">
              Temperature controlled through air cooling. Water cooling is
              performed to avoid the occurrence of work restrictions.
            </p>
            <h2 className="text-2xl font-semibold mb-1"> Spot water cooling</h2>
            <p className="mb-4">
              Water cooling mode operated manually when the water temperature
              rises or lunch break.
            </p>
            <h2 className="text-2xl font-semibold mb-1">
              Healing sounds create a relaxation space
            </h2>
            <p className="mb-4">
              It is equipped with a stereo system that allows relaxation sounds
              that use natural sounds as their materials to flow into your ears
              during treatment. Both your body and mind are enveloped in a
              healing space that not only treats your body but also calms your
              mind. Further, it also includes a chime function to notify you of
              the completion of treatment. In addition to volume control, you
              can freely choose the melody and chime sound to suit your taste.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-10">
        <div className="w-9/12 mx-auto">
          <header className="py-4">
            <div className="container mx-auto">
              <h1 className="text-blue700 text-3xl font-bold">
                Merits for the medical staff
              </h1>
            </div>
            <h2 className="text-2xl font-semibold mb-1">
              Operability is further improved through the precise design
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center my-8">
              <Image
                src="/aquatizer/design.jpeg"
                alt="Any Text"
                width={520}
                height={370}
                blurDataURL="URL"
                placeholder="blur"
                className="mr-4 rounded-lg"
              />
              <ol className="sm:ml-12 mb-4">
                <li className="font-normal py-2 text-xs">
                  <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                    1
                  </span>{" "}
                  Treatment time setting
                </li>
                <li className="font-normal py-2 text-xs">
                  <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                    2
                  </span>{" "}
                  SLOW mode setting
                </li>
                <li className="font-normal py-2 text-xs">
                  <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                    3
                  </span>{" "}
                  Wide jet setting
                </li>
                <li className="font-normal py-2 text-xs">
                  <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                    4
                  </span>{" "}
                  Massage position setting
                </li>
                <li className="font-normal py-2 text-xs">
                  <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                    5
                  </span>{" "}
                  Massage Intensity setting
                </li>
                <li className="font-normal py-2 text-xs">
                  <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                    6
                  </span>{" "}
                  Program setting
                </li>
                <li className="font-normal py-2 text-xs">
                  <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                    7
                  </span>{" "}
                  Massage Mode setting
                </li>
                <li className="font-normal py-2 text-xs">
                  <span className="border-2 rounded-full border-purple px-[4px] text-xs font-medium text-purple ">
                    8
                  </span>{" "}
                  Airbag Intensity setting
                </li>
              </ol>
            </div>
          </header>
        </div>
      </div>

      <div className="w-full py-10 bg-lightgray">
        <div className="w-9/12 mx-auto">
          <div className="flex sm:flex-row flex-col py-2">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Equipped with sensor to automatically detect the position of
                your head
              </h2>
              <p className="py-4">
                When the patient lies down on the bed, the sensor detects the
                position of your head. It automatically measures your height and
                sets the optimal massage position. There is no need to
                separately set the height as before and this greatly reduces the
                workload of the staff.
              </p>
            </div>
            <Image
              src="/aquatizer/sensor1.jpeg"
              alt="Any Text"
              width={420}
              height={370}
              blurDataURL="URL"
              placeholder="blur"
              className="mr-4 rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Operating panel that is easy to understand and easy to use
            </h2>
            <p className="py-4">
              The diverse range of treatment variations and massage mode of the
              QZ-240 can be set simply from the operating panel with the LED
              display. The treatment time, program and massage intensity can be
              set in detail simply by touching the panel. This enables the
              provision of massages optimized to suit the respective conditions
              of the patients in a smooth way. In addition, the operating panel
              is at a height where it can be used while standing and the angle
              can be adjusted freely within 360° in accordance with the
              installed location.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Timer function to preheat in line with the treatment start time
            </h2>
            <p className="py-4">
              If the treatment start time is set for each day, the preheat
              function will operate in accordance with that time and it will be
              in standby, in an instantly usable state when treatment begins.
              Time is not taken up adjusting the temperature.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-9/12 mx-auto py-8">
          <h2 className="text-2xl font-semibold mb-4">Technical data</h2>
          <div className="flex">
            <div>
              <h2 className="font-semibold pb-0.5">Model Number</h2>

              <p className="mb-4 font-light">Aquatizer QZ-240SG</p>

              <h2 className="font-semibold text-lg pb-0.5">
                Classification of protection against electric shock
              </h2>
              <p className="mb-4 font-light">Class 1 Type B</p>

              <h2 className="font-semibold  pb-0.5">Mains Supply</h2>
              <p className="font-light">single phase 230Vac 50/60Hz</p>

              <h2 className="font-semibold text-lg pb-0.5">Power input</h2>
              <p className="mb-4 font-light">4,500VA</p>

              <h2 className="font-semibold text-lg pb-0.5">
                Intensity Massage
              </h2>
              <p className="mb-4 font-light">6 levels： 530 kPa or less</p>
              <h2 className="font-semibold text-lg pb-0.5">Treatment timer</h2>
              <p className="mb-4 font-light">1 to 99 minutes</p>
            </div>

            <div className="ml-8">
              <h2 className="font-semibold"> Preheating temperature setting</h2>
              <p className="mb-4 font-light">25 to 40℃</p>
              <h2 className="font-semibold"> Other function</h2>
              <p className="mb-4 font-light">
                Nozzle switching, automatic height detection, feet hold,
                preheating weekly timer, treatment melody setting, automatic air
                bleeding, high temperature operation, and air cooling function.
              </p>
              <h2 className="font-semibold"> Floor load</h2>
              <p className="mb-4 font-light">
                not less than 3.5kPa（350kgf/m2）
              </p>
              <h2 className="font-semibold"> Dimensions</h2>
              <p className="mb-4 font-light">
                length 2290 × width 820 × height 1075 [mm] Bed height: 500 [mm]
              </p>
              <h2 className="font-semibold"> Weight</h2>
              <p className="mb-4 font-light">
                Approx. 230kg (approx. 450 kg at water filled)
              </p>
              <h2 className="font-semibold"> Water tank capacity</h2>
              <p className="mb-4 font-light">Approx. 220L</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
