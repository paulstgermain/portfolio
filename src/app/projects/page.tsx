"use client"
import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import data from '../../data/projects.json';

interface Project {
  id: string,
  title: string,
  techStack: string[],
  description: string,
  shortBlurb: string,
  links: {
    website: string | null,
    github: {
      text: string,
      link: string
    }[]
  },
  imageSrc: string,
  imageAlt: string
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const projects = data.projects;

  const handleClick = (project: Project) => {
    setActiveProject(project);
  }

  return (
    <main className="h-full flex flex-col">
      <div className="flex flex-row h-full">
        <div className="flex-6  ml-14 flex flex-col">
          <div className="h-full scrollbar-styles scrollbar-projects overflow-y-scroll">
            <div className="flex flex-col py-10 space-y-10">
              {projects && projects.map((project, index) => (
                <div key={project.title || index} className="rounded-[40px] overflow-hidden w-89 h-53 mx-auto flex-shrink-0 cursor-pointer" onClick={() => handleClick(project)}>
                  <Image src={project.imageSrc} alt={project.imageAlt} width={386} height={217} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-primary font-istok-web flex-7 border-projectsnav border-2 mr-95">
          {/* Projects content goes here, shown to user when they click on a project image */}
        </div>
      </div>
    </main>
  );
}
