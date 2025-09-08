"use client"
import { useState } from 'react';
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
    <main className="h-full">
      <div className="flex flex-row h-full">
        <div className="flex-6  ml-14 flex flex-col">
          <div className="h-full scrollbar-styles scrollbar-projects overflow-y-scroll">
            <div className="flex flex-col py-10 space-y-10 ">
              {projects && projects.map((project, index) => (
                  <div key={project.id || index} className={`relative rounded-[40px] overflow-hidden w-89 h-53 mx-auto cursor-pointer ${activeProject && activeProject.id === project.id ? "projects-frame" : ""} transition-all duration-300 ease-in-out`} onClick={() => handleClick(project)}>
                    <Image src={project.imageSrc} alt={project.imageAlt} width={356} height={212} />
                  </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`text-primary font-istok-web flex-7 mr-95 scrollbar-styles scrollbar-projects overflow-y-auto ${activeProject ? "projects-content-frame" : ""}`}>
          {/* Projects content goes here, shown to user when they click on a project image */}
          {activeProject && 
          <>
            <div className="text-2xl mt-10 mx-2">
              <p className=" mb-2 px-2 w-fit">{activeProject.title} | {activeProject.year}</p>
              <p className=" text-xl mb-2 px-2">{activeProject.techStack.map((tech, i) => <span key={tech + i}>{tech} <span className="text-projectsnav">| </span></span>)}</p>
            </div>
            <div className="flex flex-col  mx-2 px-2">
              <p className="text-xl">{activeProject.description}</p>
              {(activeProject.links.website || activeProject.links.github.length > 0) &&
              <>
              <p className="text-xl underline mt-3">Links:</p>
                <ul className="mt-3">
                  {activeProject.links.website &&
                    <li key={activeProject.links.website}>Website: <a href={activeProject.links.website} target="_blank" className="hover:underline cursor-pointer">{activeProject.links.website}</a></li>
                  }
                  {activeProject.links.github.length > 0 &&
                    activeProject.links.github.map(url => <li key={url.link}><a href={url.link} target="_blank" className="hover:underline cursor-pointer">{url.text}</a></li>)
                  }
                </ul>
              </>
              }
            </div>
          </>
          }
          {!activeProject &&
          <div className="text-2xl mt-10 mx-2">
            <p className="mb-2 px-2 w-fit">Select a project to view its details</p>
          </div>
          }
        </div>
      </div>
    </main>
  );
}
