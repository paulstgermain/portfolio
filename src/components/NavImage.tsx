import Image from "next/image";

// Set up object to map pathnames to image src, alt text, unique styles/classes
const imageSettingsByPathname: Record<string, any> = {
  "/": {
    alt: "Home Image",
    className: "",
    position: "",
    shadowColor: ""
  },
  "/about": {
    src: "/imgs/trees.png",
    alt: "About Image",
    className: "",
    position: "",
    shadowColor: ""
  },
  "/projects": {
    src: "/imgs/buildings.png",
    alt: "Projects Image",
    className: "",
    position: "",
    shadowColor: ""
  },
  "/blog": {
    src: "/imgs/paper.png",
    alt: "Blog Image",
    className: "",
    position: "",
    shadowColor: ""
  },
  "/contact": {
    src: "/imgs/bust.png",
    alt: "Contact Image",
    className: "",
    position: "",
    shadowColor: ""
  },
}

export default function NavImage({ pathname }: { pathname: string }) {
  const config = imageSettingsByPathname[pathname];
  if (!config) return null;
  const { src, alt, className, position, shadowColor } = config;

  return (
    <>
    {src &&
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
      />
    }
    </>
  );
}