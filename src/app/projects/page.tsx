"use client"
import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import data from '../../data/projects.json';
import { Project } from '../types';
import ProjectModal from '@/components/ProjectModal';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const projects = data.projects;

  const handleClick = (project: Project) => {
    setActiveProject(project);
  }

  return (
    <main className="
      h-full
      w-full
    ">
      <div className="
        flex
        flex-row
        h-full
      ">
        <div className="
          xs:flex-1
          sm:flex-2
          md:flex-2
          lg:flex-3
          xl:flex-5
          ml-7
          mr-2
          sm:ml-10
          md:ml-10 
          lg:ml-14 
          xl:ml-16
        ">
          <div className="
            scrollbar-styles
            scrollbar-projects
            overflow-y-scroll
            h-full
          ">
            <div className="
              flex
              flex-wrap
              gap-5
              py-5
            ">
              {projects && projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  index={index}
                  project={project}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="
        xs:display-none
        sm:flex-1/14
        md:flex-1/14
        lg:flex-2/15
        xl:flex-2/14
        ">
        </div>
      </div>
      <ProjectModal activeProject={activeProject} setActiveProject={setActiveProject} />
    </main>
  );
}
