import { ProjectModalProps } from "@/app/types";

export default function ProjectModal({  activeProject, setActiveProject }: ProjectModalProps) {
  const { imageSrc, imageAlt, title, shortBlurb, description } = activeProject || {};
  return (
    activeProject && (
      <div className="absolute top-0 left-0 w-full h-full z-10 projects-modal-bg text-primary">
        <button className="
          absolute
          top-4
          right-4
          text-primary
          cursor-pointer
        "
        onClick={() => setActiveProject(null)}
        >
          Close
        </button>
        <div className="
          flex
          flex-row
          items-center
          justify-center
          h-screen
        ">
          <div className="
            flex-1/2
            h-auto
            px-15
          ">
            <img src={imageSrc} alt={imageAlt} />
          </div>
          <div className="
            flex-1/2
            h-auto
          ">
            <div className={`text-primary font-istok-web mr-10 scrollbar-styles scrollbar-projects overflow-y-auto ${activeProject ? "projects-content-frame" : ""}`}>
              {/* Projects content goes here, shown to user when they click on a project image */}
              {activeProject && 
              <>
                <div className="text-2xl mx-2">
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

        </div>
      </div>
    )
  );
}