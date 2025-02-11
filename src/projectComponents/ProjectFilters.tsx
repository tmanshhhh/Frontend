import React from "react";
import { TechFilter } from "@/styles/ProjectsStyle/TechFilter.tsx";

interface ProjectFiltersProps {
    selectedTech: string;
    setSelectedTech: (tech: string) => void;
    technologies: string[];
}

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({ selectedTech, setSelectedTech, technologies }) => {
    return (
        <TechFilter value={selectedTech} onChange={(e) => setSelectedTech(e.target.value)}>
            <option value="All">Все технологии</option>
            {technologies.map((tech) => (
                <option key={tech} value={tech}>
                    {tech}
                </option>
            ))}
        </TechFilter>
    );
};
