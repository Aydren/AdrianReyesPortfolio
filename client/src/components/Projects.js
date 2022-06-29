import { projectList } from "./ProjectData";

function Projects() {
  let projectsMap = projectList.map(project => {
    return (
      <div
        key={project.name}
        className="project-list d-flex flex-row justify-content-around align-items-center my-1 border border-start-0 rounded-end"
      >
        <div className="w-25 px-2">
          <h1>{project.name}</h1>
          <div className="d-flex justify-content-between">
            <p>{project.github}</p>
            <p>{project.site}</p>
          </div>
        </div>
        <p className="w-50 px-2">{project.description}</p>
        <img src={project.img} alt="logo" className="h-75 rounded" />
      </div>
    );
  });

  return (
    <div>
      <h1>Projects</h1>
      <div>{projectsMap}</div>
    </div>
  );
}

export default Projects;
