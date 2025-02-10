import React, { useState, useMemo } from 'react';
import { projects } from "@/data/projects.ts";
import {PageContainer} from "@/styles/ProjectsStyle/PageContainer.tsx"
import { Card } from "@/styles/ProjectsStyle/Card.tsx";
import { ProjectTitle } from "@/styles/ProjectsStyle/ProjectTitle.tsx";
import { ProjectDescription } from "@/styles/ProjectsStyle/ProjectDescription.tsx";
import { ProjectImage } from '@ styles/ProjectsStyle/ProjectImage.tsx';
import { ProjectTechnologies } from '@ styles/ProjectsStyle/ProjectTechnologies.tsx';
import { TechnologyItem } from '@ styles/ProjectsStyle/TechnologyItem.tsx';
import { ProjectLink } from '@ styles/ProjectsStyle/ProjectLink.tsx';
import { TechFilter } from '@ styles/ProjectsStyle/TechFilter.tsx';

export const Projects: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState<string>('All');

    const filteredProjects = useMemo(() => {
        return projects.filter((project) =>
            selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
        );
    }, [selectedTech]);

    const uniqueTechnologies = useMemo(() => {
        return Array.from(new Set(projects.flatMap((project) => project.technologies)));
    }, []);

    return (
        <div>
            <TechFilter value={selectedTech} onChange={(e) => setSelectedTech(e.target.value)}>
                <option value="All">Все технологии</option>
                {uniqueTechnologies.map((tech) => (
                    <option key={tech} value={tech}>
                        {tech}
                    </option>
                ))}
            </TechFilter>
            <PageContainer>
                {filteredProjects.map((project) => (
                    <Card key={project.id}>
                        <ProjectImage src={project.imageUrl} alt={project.title} />
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>{project.description}</ProjectDescription>
                        <ProjectTechnologies>
                            {project.technologies.map((tech) => (
                                <TechnologyItem key={tech}>{tech}</TechnologyItem>
                            ))}
                        </ProjectTechnologies>
                        <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                            Ссылка
                        </ProjectLink>
                    </Card>
                ))}
            </PageContainer>
        </div>
    );
};