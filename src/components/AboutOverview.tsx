import Image from "next/image";

const overviewText = `
  xs:mb-2 ml-2
  sm:mb-4 ml-4
  md:mb-4 ml-4
  lg:mb-4 ml-4
  xl:mb-4 ml-4
`;

export default function AboutOverview() {
  return (
    <div className="
      absolute
      xs:bottom-14 xs:right-13
      sm:bottom-20 sm:right-30
      md:bottom-50 md:right-40
      lg:bottom-52 lg:right-90
      xl:bottom-37 xl:right-95 
      z-0
    ">
      <div className="
        relative
        xs:w-70
        sm:w-90
        md:w-140
        lg:w-155
        xl:w-200
      ">
        <Image
          src="/svgs/about-overview.svg"
          alt="About overview section border image"
          width={800}
          height={600}
          priority
          className="xs:hidden sm:hidden md:block lg:block xl:block"
        />
        <Image
          src="/svgs/about-overview-mobile.svg"
          alt="About overview section border image for mobile"
          width={800}
          height={600}
          priority
          className="sm:block md:hidden lg:hidden xl:hidden"
        />

        <div className="
          text-primary 
          absolute 
          inset-0
          xs:pl-10 xs:py-2
          sm:pl-10 sm:py-2
          md:pl-10 md:py-4
          lg:pl-12 lg:py-6 
          mt-2
          xs:w-60
          sm:w-78
          md:w-103
          lg:w-110
          w-150
        ">
            <h2 className="
              font-chakra-petch
              xs:text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-3xl
              xl:text-4xl
              xs:mb-2
              sm:mb-4
              md:mb-6
              lg:mb-8
              xl:mb-8
            ">Overview</h2>
          <div className="
            text-primary font-istok-web
            xs:text-[16px]
            sm:text-lg
            md:text-xl
            lg:text-xl
            xl:text-xl
            xs:h-75
            sm:h-98
            md:h-72
            lg:h-77
            xl:h-106
            pr-4
            scrollbar-styles
            scrollbar-about
          ">
            <p className={`${overviewText}`}>
              Hi, I&apos;m Paul! I&apos;m a Software Engineer with 3 years of
              focused experience using technology to build products
              and solve problems for nonprofits and startups in the 
              USA and the UK.
            </p>
            <p className={`${overviewText}`}>
              As a 90&apos;s kid, the internet has always been my favorite place—my playground, library, and space for creative expression.
            </p>
            <p className={`${overviewText}`}>
              That lifelong love evolved into a passion for web development, where I bring energy, curiosity, and a mission-driven mindset to every project. 
            </p>
            <p className={`${overviewText}`}>
              I thrive when I&apos;m using code to create positive change or inject some creativity and joy back into the online experience.
            </p>
            <p className={`${overviewText}`}>
              When I&apos;m not coding, I enjoy digging into internet nostalgia, taking in nature through the lens of my camera, coexisting with my cats, and reading.
            </p>
            <p className={`${overviewText}`}>
              Here are some of things I currently like to build with:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};