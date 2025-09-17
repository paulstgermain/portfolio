import { ProjectModalProps } from "@/app/types";

export default function ProjectModal({  activeProject, setActiveProject }: ProjectModalProps) {
  const { imageSrc, imageAlt, title, links, description, year, techStack } = activeProject || {};
  return (
    activeProject && (
      <div className="
        absolute
        top-0
        left-0
        w-full
        h-full
        z-10
        projects-modal-bg
        text-primary
      ">
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
          flex-col
          lg:flex-row
          xl:flex-row
          items-center
          justify-center
          h-full
        ">
          <div className="
            flex-1/2
            flex
            items-center
            justify-center
            xs:h-5/12
            sm:h-4/12
            md:h-5/12
            lg:h-11/12
            xl:h-11/12
            xs:pt-5
            sm:pt-5
            md:pt-5
            xs:px-10
            sm:px-30
            md:px-50
            lg:px-10
            xl:px-10
            max-h-full
          ">
            <img src={imageSrc} alt={imageAlt} />
          </div>
          <div className="
            flex-1/2
            flex
            items-center
            justify-center
            py-5
            xs:h-7/12
            sm:h-8/12
            md:h-7/12
            lg:h-11/12
            xl:h-11/12
          ">
            <div className={`
              text-primary
              font-istok-web
              xs:mx-5
              sm:mx-5
              md:mx-5
              lg:mr-10
              xl:mr-10
              scrollbar-styles
              scrollbar-projects
              overflow-y-auto
              ${activeProject ? "projects-content-frame" : ""}
              max-h-full
            `}>
              {/* Projects content goes here, shown to user when they click on a project image */}
              {activeProject && 
              <>
                <div className="
                  text-2xl
                ">
                  <h3 className="
                    font-chakra-petch
                    xs:text-xl
                    sm:text-2xl
                    md:text-3xl
                    lg:text-3xl
                    xl:text-4xl
                    mb-2
                    w-fit
                  ">{title} | {year}</h3>
                </div>
                <div className="
                  flex
                  flex-col
                  xs:text-[16px]
                  sm:text-lg
                  md:text-lg
                  lg:text-lg
                  xl:text-xl
                  ">
                  <p className="
                    mb-2
                  ">{techStack?.map((tech, i) => <span key={tech + i}>{tech} <span className="text-projectsnav">| </span></span>)}</p>
                  <p>{description}</p>
                  {(links && (links.website || links.github.length > 0)) &&
                  <>
                  <p className="
                    font-chakra-petch
                    xs:text-xl
                    sm:text-xl
                    md:text-2xl
                    lg:text-2xl
                    xl:text-3xl
                    underline
                    mt-3
                  ">Links:</p>
                    <ul className="mt-3">
                      {links?.website &&
                        <li key={links?.website}>Website: <a href={links?.website} target="_blank" className="hover:underline cursor-pointer">{links?.website}</a></li>
                      }
                      {links && links?.github.length > 0 &&
                        links?.github.map(url => <li key={url.link}><a href={url.link} target="_blank" className="hover:underline cursor-pointer">{url.text}</a></li>)
                      }
                    </ul>
                  </>
                  }
                </div>
              </>
              }
              {!activeProject &&
              <div className="
                text-2xl
                mt-10
                mx-2
              ">
                <p className="
                  mb-2
                  px-2
                  w-fit
                ">Select a project to view its details</p>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  );
}