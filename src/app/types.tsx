export interface Project {
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

export interface ProjectModalProps {
  activeProject?: Project | null;
  setActiveProject: (project: Project | null) => void
}