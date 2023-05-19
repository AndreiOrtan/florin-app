"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ElectroAndUltrasound() {
  return (
    <div className="flex flex-col items-center my-4 ">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">Laser Therapy</h1>
        </div>
      </header>
      <div>
        <div className="flex flex-col sm:flex-row">
          <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
            <Link
              href="/fizioterapie/laser-therapy/optonpro"
              className="relative"
            >
              <div className="w-full">
                <Image
                  src="/fizioterapiePhotos/laser-therapy/optonpro.jpeg"
                  className="w-full h-56"
                  alt="Any Text"
                  width={500}
                  height={500}
                  blurDataURL="URL"
                  placeholder="blur"
                />
                <div className="py-2 px-2">
                  <div className="font-bold text-blue700 text-xl mb-1">
                    OptonPro
                  </div>
                  <p className="text-xs">
                    High-Power-Lasertherapy. Up to 25W for deeper treatment
                    areas.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
            </Link>
          </div>
        </div>
      </div>

      <section className="my-16">
        <div className="bg-lightgray flex justify-center">
          <div className="w-9/12 py-4">
            <h1 className="mb-8 text-4xl font-semibold leading-none tracking-wide text-gray-900">
              Lasertherapy: natural healing with the power of light
            </h1>
            <img
              src="/fizioterapiePhotos/laser-therapy/laser-therapy-man.jpeg"
              alt="Laser therapy"
            />
            <p>
              High-power laser therapy with OptonPro offers a very wide range of
              applications: pain therapy with local efficacy directly at the
              site of pain. In addition to the analgesic effect, biostimulation
              achieves accelerated tissue regeneration. Indications primarily
              include musculoskelettal diseases, tendinopathies, neuralgia and
              skin disorders.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-9/12 py-4">
            <h1 className="mb-8 text-4xl font-semibold leading-none tracking-wide text-gray900">
              Lasertherapy: Effect
            </h1>

            <h2 className="text-2xl font-medium">Biostimulation</h2>
            <p>
              Some of the laser energy is converted into chemical reaction
              energy, thereby stimulating molecules directly through the
              transfer of electrons and indirectly through the formation of
              oxygen radicals. Of primary importance are coloured molecules of
              the respiratory chain, such as flavoproteins and cytochromes. The
              result is increased activity of the energy metabolism, called
              “biostimulation”. The stimulation of the energy metabolism in the
              cellular respiratory chain also manifests as faster healing of
              tissue lesions. This effect is independent of the thermal effects
              of laser light.
            </p>
            <h2 className="text-2xl font-medium">Regenerative effects</h2>
            <p>
              The described acceleration of healing processes primarily
              manifests in the form of fibroblast activation. It is important to
              note the non-thermal nature of this activation, meaning that only
              small amounts of laser energy are required. The attenuation of the
              laser light in the tissue depends on the localisation of the
              lesion and determines the laser power required, thus deeper
              structures such as tendons or joint capsules may require the
              application of high doses to the surface.
            </p>
            <h2 className="text-2xl font-medium">Reflexive effects</h2>
            <p>
              Segmental reflexes that are activated by laser light cause muscle
              relaxation as well as inhibiting pain. This requires strong
              thermal stimuli.
            </p>
            <h2 className="text-2xl font-medium">Analgesic effects</h2>
            <p>
              Laser light is scattered and absorbed in the skin and therefore
              largely converted into heat. A mild thermal stimulus to the
              nociceptors of the skin triggers the known segmental
              pain-inhibition reflexes through the first-order and second-order
              neuron as described in the gate-control theory. Strong thermal
              stimuli activate the neural and humoral endorphinergic
              pain‑inhibition system. Both mechanisms are suitable for the
              treatment of pain in the musculoskelettal system.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
