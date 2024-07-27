import SkillCard from "./skillCard.jsx";

import "./skills.scss";
import skillsData from "./../../data/skills.json"




const Skills = () => {
    return (
    <section className= "skills-section" >
{Object.keys(skillsData).map(category => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <div className="skills-list">
              {skillsData[category].map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </div>
        ))}
    </section>
      );
}
 
export default Skills;