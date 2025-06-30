import Image from 'next/image';
import data from '../../data/projects.json';

export default async function Projects() {
  const projects = data.projects;

  console.log(projects);
  return (
    <main className="h-full flex flex-col">
      <div className="flex flex-row h-full">
        <div className="flex-6  ml-14 flex flex-col">
          <div className="h-full scrollbar-styles scrollbar-projects overflow-y-scroll">
            <div className="flex flex-col py-10 space-y-10">
              {/* Projects images go here */}
              {projects && projects.map((project, index) => (
                <div key={project.title || index} className="rounded-[40px] overflow-hidden w-89 h-53 mx-auto flex-shrink-0">
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
