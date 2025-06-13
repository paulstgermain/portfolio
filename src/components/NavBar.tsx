import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="w-15/16 h-22 bg-homenav rounded-[40px] mx-auto pl-12 pr-12 relative top-4 flex items-center justify-between shadow-[8px_10px_0_0_#9d3256]">
      <Image
        height={37}
        width={38}
        src="/svgs/music_note.svg"
        alt="Music Note Icon"
      />
      <p className="text-primary text-4xl font-bungee">Paul St.Germain</p>
    </nav>
  )
}