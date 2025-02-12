import React, { useState, useMemo } from "react";
import { useProjectStore } from "@/store/useProjectStore.ts";
import { ProjectForm } from "@/projectComponents/ProjectForm.tsx";
import { ProjectList } from "@/projectComponents/ProjectList.tsx";
import { ProjectFilters } from "@/projectComponents/ProjectFilters.tsx";
import { ALL_TECH } from "@/projectComponents/projectUtils.ts";

export const ProjectComponent: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState<string>(ALL_TECH);
    const { projects, addProject, deleteProject } = useProjectStore();

    const filteredProjects = useMemo(
        () => projects.filter((project) => selectedTech === ALL_TECH || project.technologies.includes(selectedTech)),
        [projects, selectedTech]
    );

    const uniqueTechnologies = useMemo(
        () => Array.from(new Set(projects.flatMap((project) => project.technologies))),
        [projects]
    );

    return (
        <div>
            <ProjectFilters selectedTech={selectedTech} setSelectedTech={setSelectedTech} technologies={uniqueTechnologies} />
            <ProjectForm addProject={addProject} />
            <ProjectList projects={filteredProjects} deleteProject={deleteProject} />
        </div>
    );
};
