import Image from 'next/image';

interface NavBarProps {
  bgClass: string;
  altBgClass: string;
}
// w-15/16 h-22
export default function NavBar({bgClass, altBgClass}: NavBarProps) {
  return (
    <nav className={`w-15/16 h-11 sm:h-16 md:h-20 lg:h-22 ${bgClass} rounded-[40px] mx-auto pl-12 pr-12 relative top-4 flex items-center justify-between shadow-[8px_10px_0_0] ${altBgClass}`}>
      <div className="flex-shrink-0">
      <Image
        src="/svgs/music_note.svg"
        alt="Music Note Icon"
        width={24}
        height={25}
        className="w-[20px] h-[21px] sm:w-[24px] sm:h-[25px] md:w-[38px] md:h-[37px]"
        // Optionally, you can add priority or sizes for further optimization
        // sizes="(min-width: 768px) 48px, (min-width: 640px) 40px, 32px"
      />
      </div>
      <p className="text-primary text-1xl md:text-4xl sm:text-2xl font-bungee select-none">Paul St.Germain</p>
    </nav>
  )
}