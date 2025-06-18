import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex">
        <div>

        </div>
        <div className="w-90 h-140 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[40px] overflow-hidden">
          <Image
          src="/imgs/water.webp"
          alt="Centered image of water"
          layout="fill"
          objectFit="cover"
          className={"rounded-[inherit]"}
          />
        </div>
        <div>

        </div>
      </main>
    </>
  );
}

/* 
  1. Import Image component
  2. Set up Div layout (Left Div, Right Div, each contains an SVG - svgs/landing-left.svg, svgs/landing-right.svg)
  3. Add Image component, position absolute, centered on screen, src = imgs/water.webp (can adjust left/right divs to line SVG up from there)
*/