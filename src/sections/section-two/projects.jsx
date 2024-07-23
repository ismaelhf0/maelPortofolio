import ProjectCard from "./projectCard";

import "./projects.scss";
import projectsData from "./../../data/projects.json"




const Projects = () => {
    return (
    <section className= "projects-section" >

        <h2 className= "projects-title">Discover my project</h2>
        <div className="projects-grid">

        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} /> ))}



        </div>
    
    
    </section>
      );
}
 
export default Projects;