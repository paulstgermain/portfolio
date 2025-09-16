import Image from 'next/image';
import { Project } from '@/app/types';

export default function ProjectCard({ index, project, handleClick }: { index: number, project: Project, handleClick: (project: Project) => void }) {
  const { imageSrc, imageAlt, title, shortBlurb } = project;

  return (
    <div className={`
      relative
      overflow-hidden
      rounded-[40px]
      cursor-pointer
      ${index === 0 ?
        "w-[340px] h-[190px] sm:w-[280px] sm:h-[180px] md:w-[280px] md:h-[180px] lg:w-[300px] lg:h-[200px] xl:w-[450px] xl:h-[250px]" :
        "w-[340px] h-[190px] sm:w-[280px] sm:h-[180px] md:w-[280px] md:h-[180px] lg:w-[300px] lg:h-[200px] xl:w-[450px] xl:h-[250px]"
      }`}
      onClick={() => handleClick(project)}
      >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover rounded-[40px]"
        sizes="(max-width: 768px) 100vw, 400px"
      />
      <div className="absolute inset-0 bg-projectsnav opacity-0 hover:opacity-95 transition-opacity duration-300 ease-in-out flex items-center justify-center">
        <div className="text-primary text-center select-none pl-2 pr-2">
          <h3 className="
            font-chakra-petch
            xs:text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-3xl
            xl:text-4xl
          ">{title}</h3>
          <p className="
            font-istok-web
            xs:text-[16px]
            sm:text-lg
            md:text-xl
            lg:text-xl
            xl:text-xl
            mt-2
          ">{shortBlurb}</p>
        </div>
      </div>
    </div>
  );
}