import Image from "next/image";

// Set up object to map pathnames to image src, alt text, unique styles/classes
const imageSettingsByPathname: Record<string, any> = {
  "/": {
    alt: "Home Image",
    className: "",
    position: "",
    shadow: ""
  },
  "/about": {
    src: "/imgs/trees.png",
    alt: "About page image",
    className: "w-135 h-90 [clip-path:polygon(46%_0%,100%_0%,100%_100%,-20%_100%)]",
    text: "About",
    position: "absolute bottom-11 right-12",
    shadow: "shadow-aboutnav-alt shadow-[8px_10px_0_0]"
  },
  "/projects": {
    src: "/imgs/buildings.png",
    alt: "Projects page image",
    className: "w-75 h-165",
    text: "Projects",
    position: "absolute bottom-11 right-12",
    shadow: "shadow-projectsnav-alt shadow-[8px_10px_0_0]"
  },
  "/blog": {
    src: "/imgs/paper.png",
    alt: "Blog page image",
    className: "w-150 h-45",
    text: "Blog",
    position: "absolute bottom-11 right-12",
    shadow: "shadow-blognav-alt shadow-[8px_10px_0_0]"
  },
  "/contact": {
    src: "/imgs/bust.png",
    alt: "Contact page image",
    className: "w-130 h-90",
    text: "Contact",
    position: "absolute bottom-25 left-12",
    shadow: "shadow-contactnav-alt shadow-[-8px_10px_0_0]"
  },
}

export default function NavImage({ pathname }: { pathname: string }) {
  const config = imageSettingsByPathname[pathname];
  if (!config) return null;
  const { src, alt, className, text, position, shadow } = config;

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
          <div className="absolute bottom-8 right-12 text-primary font-bungee text-4xl select-none">{text}</div>
        </div>
      </div>
    </>
  );
}