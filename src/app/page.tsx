import Image from "next/image";

export default function Home() {
  return (
      <main className="relative w-screen flex justify-center">
        <div
          className="
            relative
            lg:w-86 lg:h-[540px] lg:mt-22
            md:w-62 md:h-[440px] md:mt-32
            sm:w-54 sm:h-[480px] sm:mt-36
            w-30 h-[500px] mt-20
          "
        >
          <div className="absolute inset-0 z-10 rounded-[40px] overflow-hidden">
            <Image
              src="/imgs/water.webp"
              alt="Centered image of water"
              layout="fill"
              objectFit="cover"
              className={"rounded-[inherit]"}
            />
          </div>

          <div
            className="
              absolute
              top-25
              lg:-top-8
              md:-top-8
              sm:-top-0
              lg:-left-88 lg:w-[355px]
              md:-left-70 md:w-[300px]
              sm:-left-55 sm:w-[260px]
              -left-30 w-[200px]
            "
          >
            <Image
              src="svgs/landing-left.svg"
              alt=""
              width="375"
              height="375"
            />
          </div>

          <div
            className="
              absolute
              top-25
              lg:-top-8
              md:-top-8
              sm:-top-0
              lg:-right-88 lg:w-[355px]
              md:-right-70 md:w-[300px]
              sm:-right-55 sm:w-[260px]
              -right-30 w-[200px]
            "
          >
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