"use client"
import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import data from '../../data/projects.json';

interface Project {
  id: string,
  title: string,
  year: string,
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
        <div className="text-primary font-istok-web flex-7 mr-95 scrollbar-styles scrollbar-projects overflow-y-auto">
          {/* Projects content goes here, shown to user when they click on a project image */}
          {activeProject && 
          <>
            <div className="text-2xl mt-10 mx-2">
              <p className="border-projectsnav border-2 mb-2 px-2 w-fit">{activeProject.title} | {activeProject.year}</p>
              <p className="border-projectsnav border-2 text-xl mb-2 px-2">{activeProject.techStack.map(tech => `${tech} `)}</p>
            </div>
            <div className="border-projectsnav border-2 mx-2 px-2">
              <p className="text-base">{activeProject.description}</p>
            </div>
          </>
          }
        </div>
      </div>
    </main>
  );
}
