import Image from "next/image";
interface BottomNavProps {
  bgClass: string;
}

const navItems = [
  { href: "/", src: "/svgs/home.svg", alt: "Home Icon" },
  { href: "/about", src: "/svgs/about.svg", alt: "About Icon" },
  { href: "/projects", src: "/svgs/projects.svg", alt: "Projects Icon" },
  // { href: "/blog", src: "/svgs/blog.svg", alt: "Blog Icon" },
  { href: "/contact", src: "/svgs/contact.svg", alt: "Contact Icon" },
]

export default function BottomNav({bgClass}: BottomNavProps) {
  return (
    <nav className={`w-15/16 h-11 sm:h-16 md:h-20 lg:h-22 ${bgClass} rounded-[40px] mx-auto pl-12 pr-12 absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-colors duration-300 ease-in-out`}>
      <div className="flex items-center space-evenly h-full w-2/5 justify-between">
          {navItems.map(({ href, src, alt }) => {
            return (
              <a
                key={href}
                href={href}
                className="flex items-center justify-center w-full h-full"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={24}
                  height={25}
                  className="w-[20px] h-[21px] sm:w-[24px] sm:h-[25px] md:w-[38px] md:h-[37px]"
                />
              </a>
            );
          })}
      </div>
    </nav>
  );
}