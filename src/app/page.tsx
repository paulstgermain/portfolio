import Image from "next/image";

export default function Home() {
  return (
      <main className="relative w-screen flex justify-center">
        <div
          className="
            relative
            lg:w-90       lg:h-[560px]       lg:mt-20
            md:w-72    md:h-[480px]    md:mt-16
            sm:w-64    sm:h-[416px]    sm:mt-12
            xs:w-52    xs:h-[384px]    xs:mt-10
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
              -top-8
              lg:-left-92
              md:-left-80
              sm:-left-72
              xs:-left-64
              lg:w-[375px]
              md:w-[325px]
              sm:w-[280px]
              xs:w-[240px]
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
              -top-8
              lg:-right-92
              md:-right-80
              sm:-right-72
              xs:-right-64
              lg:w-[375px]
              md:w-[325px]
              sm:w-[280px]
              xs:w-[240px]
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