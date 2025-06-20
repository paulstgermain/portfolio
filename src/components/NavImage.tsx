import Image from "next/image";

type ImageSettings = {
  src?: string;
  alt: string;
  className: string;
  text?: string;
  textClasses?: string;
  position: string;
  shadow: string;
};

const imageSettingsByPathname: Record<string, ImageSettings> = {
  "/": {
    alt: "Home Image",
    className: "",
    position: "",
    shadow: ""
  },
  "/about": {
    src: "/imgs/trees.webp",
    alt: "About page image",
    className: `
      w-50 h-9
      xs:w-55 xs:h-9
      sm:w-85 sm:h-14
      md:w-90 md:h-60
      lg:w-135 lg:h-90
      md:[clip-path:polygon(46%_0%,100%_0%,100%_100%,-20%_100%)]
    `,
    text: "About Me",
    textClasses: `
      bottom-0.5 right-8
      xs:bottom-0.5 xs:right-10
      sm:bottom-3 sm:right-12
      md:bottom-8 md:right-12
      text-2xl
      sm:text-3xl
      md:text-4xl
    `,
    position: `
      absolute
      bottom-1 right-1
      sm:bottom-1 sm:right-1
      md:bottom-5 md:right-2
      lg:bottom-7 lg:right-2
    `,
    shadow: "md:shadow-aboutnav-alt md:shadow-[8px_10px_0_0]"
  },
  "/projects": {
    src: "/imgs/buildings.webp",
    alt: "Projects page image",
    className: `
      w-50 h-9
      xs:w-55 xs:h-9
      sm:w-50 sm:h-140
      md:w-60 md:h-150
      lg:w-75 lg:h-165
    `,
    text: "Projects",
    textClasses: `
      bottom-0.5 right-8
      xs:bottom-0.5 xs:right-10
      sm:bottom-8 sm:right-4
      md:bottom-8 md:right-6
      lg:bottom-8 lg:right-12
      text-2xl
      sm:text-3xl
      md:text-4xl
    `,
    position: `
      absolute
      bottom-1 right-1
      sm:bottom-4 sm:right-2
      md:bottom-5 md:right-2
      lg:bottom-8 lg:right-2
    `,
    shadow: "sm:shadow-projectsnav-alt sm:shadow-[8px_10px_0_0]"
  },
  "/blog": {
    src: "/imgs/paper.webp",
    alt: "Blog page image",
    className: `
      w-150 h-45
    `,
    text: "Blog",
    textClasses: `
      bottom-8 right-12
      text-4xl
    `,
    position: `
      absolute
      bottom-8 right-2
    `,
    shadow: "shadow-blognav-alt shadow-[8px_10px_0_0]"
  },
  "/contact": {
    src: "/imgs/bust.webp",
    alt: "Contact page image",
    className: `
      w-62 h-54
      sm:w-84 sm:h-72
      md:w-102 md:h-82
      lg:w-130 lg:h-90
    `,
    text: "Contact",
    textClasses: `
      bottom-8 right-12
      text-2xl
      sm:text-3xl
      md:text-4xl
    `,
    position: `
      absolute
      bottom-12 left-2
      sm:bottom-15 sm:left-2
      md:bottom-19 md:left-2
      lg:bottom-20 lg:left-2
    `,
    shadow: "shadow-contactnav-alt shadow-[-8px_10px_0_0]"
  }
};

export default function NavImage({ pathname }: { pathname: string }) {
  const config = imageSettingsByPathname[pathname];
  if (!config) return null;
  const { src, alt, className, text, textClasses, position, shadow } = config;

  return (
    <>
      <div className={`${position} z-2 ${shadow} rounded-[40px] transition-all duration-250 ease-in-out`}>
        <div className={`relative rounded-[40px] ${className} overflow-hidden transition-all duration-250 ease-in-out`}>
          {src &&
            <Image
              src={src}
              alt={alt}
              layout="fill"
              objectFit="cover"
              className={"rounded-[inherit]"}
            />
          }
          <div className={`absolute text-primary font-bungee ${textClasses} select-none transition-all duration-250 ease-in-out`}>{text}</div>
        </div>
      </div>
    </>
  );
}