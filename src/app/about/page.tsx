import Image from "next/image";

export default function About() {
  return (
    <main className="
      relative 
      w-lvw
    ">
      <div className="
        absolute 
        xs:right-20 xs:top-9
        sm:right-40 sm:top-12
        md:right-5 md:top-12
        lg:right-15 lg:top-13
        xl:right-15 xl:top-13
        z-0
      ">
        <div className="
          relative
          xs:w-70
          sm:w-80
          md:w-103
          lg:w-110
          xl:w-124
        ">
          <Image
            src="/svgs/about-quickstats.svg"
            alt="About quick stats background image"
            width={500}
            height={300}
            priority
            className="xs:block sm:hidden md:block lg:block xl:block"
          />
          <Image
            src="/svgs/about-quickstats-mobile.svg"
            alt="About quick stats background image"
            width={400}
            height={300}
            priority
            className="xs:hidden sm:block md:hidden lg:hidden xl:hidden"
          />
          <div className="text-primary absolute inset-0">
            <h2 className="
              absolute
              xs:right-3
              sm:right-5
              md:right-5
              lg:right-5
              xl:right-5
              xs:top-0
              sm:top-2
              md:top-2
              lg:top-2
              xl:top-2
              font-chakra-petch 
              text-2xl 
              xs:text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-3xl
              xl:text-4xl
            ">
              Quick Stats
            </h2>
            <ul className="
              absolute 
              font-istok-web 
              text-right 
              xs:text-sm
              sm:text-sm
              md:text-md
              lg:text-lg
              xl:text-xl
              xs:top-12 xs:right-2
              sm:top-18 sm:right-6
              md:top-18 md:right-6
              lg:top-25 lg:right-6
              xl:top-25 xl:right-6 
              xs:w-80
              sm:w-80
              md:w-71
              lg:w-115
              xl:w-115
            ">
              <li>
                <span className="font-bold">{"<> "}Full Stack Software Engineer</span>, 
                <span className="italic"> Silicon Society</span>
                <span className="block">2023 - 2024</span>
              </li>
              <li>
                <span className="font-bold">{"<> "}Software Engineer</span>, 
                <span className="italic"> BloomTech</span>
                <span className="block">2023 - 2023</span>
              </li>
              <li>
                <span className="font-bold">{"<> "}Full Stack Team Lead</span>, 
                <span className="italic"> BloomTech</span>
                <span className="block">2021 - 2023</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}