

// Set up object to map pathnames to image src, alt text, unique styles/classes
const imageSettingsByPathname: Record<string, any> = {
  "/": {
    src: "",
    alt: "Home Image",
    className: "",
    position: "",
    shadowColor: ""
  },
  "/about": {
    src: "",
    alt: "About Image",
    className: "",
    position: "",
    shadowColor: ""
  },
  "/projects": {
    src: "",
    alt: "Projects Image",
    className: "",
    position: "",
    shadowColor: ""
  },
  "/blog": {
    src: "",
    alt: "Blog Image",
    className: "",
    position: "",
    shadowColor: ""
  },
  "/contact": {
    src: "",
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
    </>
  );
}