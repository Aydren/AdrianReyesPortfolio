import { projectList } from "./ProjectData";

function Projects() {
  let projectsMap = projectList.map(project => {
    return (
      <div
        key={project.name}
        className="project-list d-flex flex-row justify-content-around align-items-center my-1 border border-start-0 rounded-end flex-wrap"
      >
        <div className="w-25 px-2">
          <h1>{project.name}</h1>
          <div className="d-flex flex-column justify-content-between">
            <p>{project.github}</p>
            <p>{project.site}</p>
          </div>
        </div>
        <p className="w-50 px-2">{project.description}</p>
        <img
          src={project.img}
          alt="project-image"
          className="project-image rounded-3 p-4"
        />
      </div>
    );
  });

  return (
    <div>
      <h1>Projects</h1>
      <div className="d-flex justify-content-around flex-wrap">
        {projectsMap}
      </div>
    </div>
  );
}

export default Projects;
