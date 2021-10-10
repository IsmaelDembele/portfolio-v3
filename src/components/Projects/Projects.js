import Card from "./Card";
import { projectData } from "./data";

const Projects = () => {
  return (
    <section id="projects" className="project">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="project__list">
        {projectData.map((data, index) => {
          return <Card key={index} {...data} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
