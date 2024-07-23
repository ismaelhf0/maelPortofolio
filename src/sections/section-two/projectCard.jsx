import"./projectCard.scss";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";


const ProjectCard = ({ title, imageSrc,description,skills,demo,source }) => {
    return ( 
        <div className="projectCard-container">
      <div className="project-links">
        <a href={demo} className="project-link" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
        <a href={source} className="project-link" alt="Source Code" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />

          </a>
      </div>
      <img src={`${imageSrc}`} alt={`${title} screenshot`} className="project-image" />
                  <h3 className="projectCard-title" > {title}  </h3>
            <p className="projectCard-desc" >{description}</p>
            <ul className="project-skills">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

        </div>
    
    
    
    
   );
}
 

ProjectCard.propTypes={
    title: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    demo: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    
    

};


export default ProjectCard;