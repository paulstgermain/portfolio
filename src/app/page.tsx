import Image from "next/image";

export default function Home() {
  return (
      <main className="relative w-screen flex justify-center">
        <div className="relative w-90 h-140 mt-20">
          <div className="absolute inset-0 z-10 rounded-[40px] overflow-hidden">
            <Image
              src="/imgs/water.webp"
              alt="Centered image of water"
              layout="fill"
              objectFit="cover"
              className={"rounded-[inherit]"}
            />
          </div>

          <div className="absolute left-[-370px] -top-8">
            <Image
              src="svgs/landing-left.svg"
              alt=""
              width="375"
              height="375"
            />
          </div>

          <div className="absolute right-[-370px] -top-8">
            <Image
              src="svgs/landing-right.svg"
              alt=""
              width="375"
              height="375"
            />
          </div>
        </div>
      </main>
  );
}