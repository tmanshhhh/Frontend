import React from "react";
import { Project } from "@/types/Project.ts";
import { PageContainer } from "@/styles/ProjectsStyle/PageContainer.tsx";
import { Card } from "@/styles/ProjectsStyle/Card.tsx";
import { ProjectTitle } from "@/styles/ProjectsStyle/ProjectTitle.tsx";
import { ProjectDescription } from "@/styles/ProjectsStyle/ProjectDescription.tsx";
import { ProjectImage } from "@/styles/ProjectsStyle/ProjectImage.tsx";
import { ProjectTechnologies } from "@/styles/ProjectsStyle/ProjectTechnologies.tsx";
import { TechnologyItem } from "@/styles/ProjectsStyle/TechnologyItem.tsx";
import { ProjectLink } from "@/styles/ProjectsStyle/ProjectLink.tsx";
import { DeleteButton } from "@/styles/ProjectsStyle/DeleteButton.tsx";

interface ProjectListProps {
    projects: Project[];
    deleteProject: (id: string) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, deleteProject }) => {
    return (
        <PageContainer>
            {projects.map((project) => (
                <Card key={project.id}>
                    <ProjectImage src={project.imageUrl || "/placeholder.jpg"} alt={project.title} />
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
                    <DeleteButton onClick={() => deleteProject(project.id)}>Удалить проект</DeleteButton>
                </Card>
            ))}
        </PageContainer>
    );
};
