"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function ShockwaveTherapy() {
  return (
    <div className="flex flex-col items-center mt-4 text-gray600 w-full">
      <header className="py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-blue700 text-3xl font-bold">
            Mașini Isokinetice
          </h1>
        </div>
      </header>
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center w-9/12 mb-8">
        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r18"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r18.png"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R18 Maşină isokinetică pentru coloana toracică
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Extensia trunchiului</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r31"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r31.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R31 Maşină isokinetică pentru coloana toracică
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Flexia trunchiului</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r17"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r17.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R17 Maşină isokinetică pentru coloana toracică
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Înclinarea trunchiului</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r14"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r14.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R14 Maşină isokinetică pentru coloana lombară
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Extensia trunchiului</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r10"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r10.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R10 Maşină isokinetică pentru coloana sacrală
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Extensia trunchiului – mişcare complexă</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r7"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r7.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R7 Maşină isokinetică pentru coloana toracică
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Rotaţia trunchiului</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r3"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r3.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R3 Maşină isokinetică pentru şold
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Flexia / Extensia şoldului</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r27"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r27.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R27 Maşină isokinetică pentru şold
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Flexia / Extensia cu genunchiul extins</li>
                  <li>Abducţia /Adducţia şoldului</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r11"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r11.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R11 Maşină isokinetică pentru şold
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Abducţia / Adducţia şoldului</li>
                  <li>Rotaţia internă / Externă a şoldului</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r16"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r16.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R16 Maşină isokinetică pentru genunchi
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Flexia/Extensia genunchiului</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r6sl"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r6sl.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R6SL Maşină isokinetică multifuncţională pentru picioare
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Mişcare complexă gleznă – genunchi – şold</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r12e"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r12e.png"
                className="w-full h-56"
                alt="Any Text"
                width={150}
                height={100}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R12e Scripete dublu pentru membrele superioare şi inferioare
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li className="text-xs">
                    Flexia/Extensia, Abducția/Adducția, Rotația externă/internă
                  </li>
                  <li className="text-xs">
                    {" "}
                    Ridicarea/Coborarea, Abducția/Adducția scapulei
                  </li>
                  <li className="text-xs"> Supinația/Pronația antebratului</li>
                  <li className="text-xs"> Flexia cotului</li>
                  <li className="text-xs">
                    {" "}
                    Flexia/Extensia, Abductia/Adductia pumnului
                  </li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r32"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r32.png"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R32 Maşină isokinetică pentru coloana cervicală
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Flexia / Extensia / Inclinarea capului şi gâtului</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r8"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r8.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R8 Maşină isokinetică butterfly cu funcţie dublă
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Abducția/Adducția orizontală a umărului</li>
                  <li>Rotația externă/internă a umărului</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r5"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r5.png"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R5 Maşină isokinetică pentru centura scapulo-humerală
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Ridicarea/Coborârea scapulei</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r19"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r19.png"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R19 Maşină isokinetică pentru umăr
                </div>
                <ul className="list-disc ml-4 mb-4">
                  <li>Flexia / Extensia umărului</li>
                </ul>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>

        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r1000"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r1000.png"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R2000 Bancă pentru exerciţii divizată în trei părţi
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>
        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/r1000"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/r1000.png"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  R1000 Masă inclinată kinetoterapie divizată în două părţi
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>
        <div className="card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 hover:opacity-100">
          <NavigationLink
            href="/mecanoterapie/masini-isokinetice-mtt/rr28"
            className="relative"
          >
            <div className="w-full">
              <Image
                src="/mecanoterapie/masini-isokinetice/rr28.jpeg"
                className="w-full h-56"
                alt="Any Text"
                width={500}
                height={500}
                blurDataURL="URL"
                placeholder="blur"
              />
              <div className="py-2 px-2">
                <div className="font-bold text-blue700 text-base mb-1">
                  RR28 - 28 de Proceduri într-un singur dispozitiv cu acţionare
                  din scaunul cu rotile
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
          </NavigationLink>
        </div>
      </div>
    </div>
  );
}
