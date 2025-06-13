import Image from 'next/image';
export default function NavBar() {
  return (
    <nav>
      <Image
        height={37}
        width={38}
        src="/svgs/music_note.svg"
        alt="Music Note Icon"
      />
    </nav>
  )
}