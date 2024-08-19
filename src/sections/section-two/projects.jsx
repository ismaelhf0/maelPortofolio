import React, { useState } from "react";
import ProjectCard from "./projectCard";
import "./projects.scss";
import projectsData from "./../../data/projects.json";

const Projects = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    const filteredProjects = selectedFilter === "All" 
        ? projectsData 
        : projectsData.filter(project => project.skills.includes(selectedFilter));

    const uniqueSkills = [...new Set(projectsData.flatMap(project => project.skills))];

    return (
        <section className="projects-section">
            <h2 className="projects-title">Discover My Projects</h2>

            <div className="filters-container">
                <button 
                    className={`filter-button ${selectedFilter === "All" ? "active" : ""}`}
                    onClick={() => handleFilterChange("All")}
                >             
                    All
                </button>
                {uniqueSkills.map((skill, index) => (
                    <button 
                        key={index} 
                        className={`filter-button ${selectedFilter === skill ? "active" : ""}`}
                        onClick={() => handleFilterChange(skill)}
                    >
                        {skill}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
