import ContactForm from "@/components/ContactForm"
import Image from "next/image"

export default function Contact() {
  return (
    <main className="font-istok-web flex xs:flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row h-full text-primary">
      <div className="
          flex
          justify-center
          items-center
          xs:flex-2/5
          sm:flex-3/5
          md:flex-3/5
          lg:flex-4/5
          xl:flex-1/5
          sm:h-6/11
          md:h-5/11
          h-4/9
          sm:ml-10
          md:ml-10 
          lg:ml-14 
          xl:ml-16
        ">
        <ul className="
          xs:text-[16px]
          sm:text-lg
          md:text-lg
          lg:text-lg
          xl:text-xl
        ">
          <li className="mb-2">
            <Image
              src="/svgs/InBug-White.svg"
              alt="Music Note Icon"
              width={24}
              height={25}
              className="inline w-[20px] h-[21px] sm:w-[24px] sm:h-[25px] md:w-[38px] md:h-[37px]"
              />
            {': '}
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline"
            >
              {`${process.env.NEXT_PUBLIC_LINKEDIN}`}
            </a>
          </li>
          <li className="mb-2">
            <Image
              src="/svgs/github-mark-white.svg"
              alt="Music Note Icon"
              width={24}
              height={25}
              className="inline w-[20px] h-[21px] sm:w-[24px] sm:h-[25px] md:w-[38px] md:h-[37px]"
              />
            {': '}
            <a
              href={process.env.NEXT_PUBLIC_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:underline"
            >
              {`${process.env.NEXT_PUBLIC_GITHUB}`}
            </a>
          </li>
        </ul>

      </div>
      <div className="
        flex
        justify-center
        items-center
        xs:flex-3/5
        sm:flex-2/5
        md:flex-2/5
        lg:flex-1/5
        xl:flex-2/5
        h-full
      ">
        <ContactForm />
      </div>
    </main>
  )
}