import Image from "next/image";

export default function AboutOverview() {
  return (
    <div className="absolute bottom-37 right-95 z-0">
      <div className="relative w-[800px]">
        <Image
          src="/svgs/about-overview.svg"
          alt="About overview section border image"
          width={800}
          height={600}
          priority
        />

        <div className="text-primary absolute inset-0 pl-14 pr-8 py-6 mt-2 w-[600px] h-131 scrollbar-about">
            <h2 className="font-chakra-petch text-4xl mb-8">Overview</h2>
          <div className="text-primary font-istok-web text-xl wrap-normal overflow-y-auto h-106 custom-scrollbar pr-7">
            <p className="mb-4 ml-4">
              Hi, I'm Paul! I’m a Software Engineer with 3 years of
              focused experience using technology to build products
              and solve problems for nonprofits and startups in the 
              USA and the UK.
            </p>
            <p className="mb-4 ml-4">
              As a 90's kid, the internet has always been my favorite place—my playground, library, and space for creative expression.
            </p>
            <p className="mb-4 ml-4">
              That lifelong love evolved into a passion for web development, where I bring energy, curiosity, and a mission-driven mindset to every project. 
            </p>
            <p className="mb-4 ml-4">
              I thrive when I’m using code to create positive change or inject some creativity and joy back into the online experience.
            </p>
            <p className="mb-4 ml-4">
              When I’m not coding, I enjoy digging into internet nostalgia, taking in nature through the lens of my camera, coexisting with my cats, and reading.
            </p>
            <p className="mb-4 ml-4">
              Here are some of things I currently like to build with:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};