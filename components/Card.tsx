import Link from "next/link";
import Image from "next/image";
import AnimatedContent from "./AnimatedContent";

interface CardInterface {
  linkUrl: string;
  imageUrl: string;
  cardHeader: string;
  cardDescription?: string;
  minH?: number;
  orange?: boolean;
}

export default function Card({
  cardDescription,
  cardHeader,
  imageUrl,
  linkUrl,
  minH,
  orange,
}: CardInterface) {
  return (
    <AnimatedContent direction="XL">
      <div
        className={`card-container rounded-lg shadow-lg w-full sm:w-56 sm:mx-2 overflow-hidden my-2 ${
          orange ? "text-orange" : "text-blue700"
        } hover:text-gray900  hover:opacity-100`}
      >
        <Link href={linkUrl} className="relative">
          <div className="w-full" style={{ minHeight: minH }}>
            <Image
              src={imageUrl}
              className="w-full h-56"
              alt="Any Text"
              width={500}
              height={500}
              blurDataURL="URL"
              placeholder="blur"
            />

            <div className="py-2 px-2">
              <div className="font-bold text-xl mb-1">{cardHeader}</div>
              <p className=" text-gray900 text-xs">{cardDescription}</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 hover:shadow-2xl"></div>
        </Link>
      </div>
    </AnimatedContent>
  );
}
