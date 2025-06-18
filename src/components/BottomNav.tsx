import Image from "next/image";
import Link from "next/link";
import NavImage from "./NavImage";
interface BottomNavProps {
  bgClass: string;
  pathname: string;
  altBgClass: string;
}

const navItems = [
  { href: "/", src: "/svgs/home.svg", alt: "Home Icon", label: "Home" },
  { href: "/about", src: "/svgs/about.svg", alt: "About Icon", label: "About" },
  { href: "/projects", src: "/svgs/projects.svg", alt: "Projects Icon", label: "Projects" },
  // { href: "/blog", src: "/svgs/blog.svg", alt: "Blog Icon", label: "Blog" },
  { href: "/contact", src: "/svgs/contact.svg", alt: "Contact Icon", label: "Contact" },
]

export default function BottomNav({bgClass, pathname, altBgClass}: BottomNavProps) {
  return (
    <>
    <NavImage pathname={pathname} />
      <nav className={`w-15/16 h-11 sm:h-16 md:h-20 lg:h-22 ${bgClass} rounded-[40px] mx-auto pl-12 pr-12 absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-colors duration-300 ease-in-out`}>
        <div className="flex items-center space-evenly h-full w-2/5 justify-between">
            {navItems.map(({ href, src, alt, label }) => {
              const isActive = pathname === href;

              return (
                <Link
                  key={href}
                  href={href}
                  className="flex flex-col items-center justify-center group"
                >
                  <Image
                    src={src}
                    alt={alt}
                    aria-hidden="true"
                    width={24}
                    height={25}
                    className="w-[20px] h-[21px] sm:w-[24px] sm:h-[25px] md:w-[38px] md:h-[37px]"
                  />
                  {/* Screen reader alt text */}
                  <span className="sr-only">{alt}</span>
                  {/* Visible label on hover */}
                  <span className={`absolute -top-7 text-xs text-primary ${altBgClass} bg-opacity-80 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>{label}</ span>
                  <span className={`mt-1 w-2 h-2 rounded-full bg-primary transform transition-all duration-300 ease-in-out ${isActive ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-60"}`} />
                </Link>
              );
            })}
        </div>
      </nav>
    </>
  );
}