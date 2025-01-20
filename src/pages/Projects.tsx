import React, { useState } from 'react';
import { Project } from "@/types/Project.ts";
import { PageContainer } from "@/styles/ProjectsStyle/PageContainer.tsx"
import { Card } from "@/styles/ProjectsStyle/Card.tsx";
import { ProjectTitle } from "@/styles/ProjectsStyle/ProjectTitle.tsx";
import { ProjectDescription } from "@/styles/ProjectsStyle/ProjectDescription.tsx";
import { ProjectImage } from '@ styles/ProjectsStyle/ProjectImage.tsx';
import { ProjectTechnologies } from '@ styles/ProjectsStyle/ProjectTechnologies.tsx';
import { TechnologyItem } from '@ styles/ProjectsStyle/TechnologyItem.tsx';
import { ProjectLink } from '@ styles/ProjectsStyle/ProjectLink.tsx';
import { TechFilter } from '@ styles/ProjectsStyle/TechFilter.tsx';
import { useProjectStore } from "@/store/useProjectStore.ts";
import { DeleteButton } from '@ styles/ProjectsStyle/DeleteButton.tsx';
import { Filter } from '@ styles/ProjectsStyle/Filter.tsx';
import { v4 as uuidv4 } from 'uuid';

export const ProjectComponent: React.FC = () => {
    const [selectedTech, setSelectedTech] = useState<string>('All');
    const { projects, addProject, deleteProject: deleteProject } = useProjectStore();

    const [newProject, setNewProject] = useState<Project>({
        id: '',
        title: '',
        description: '',
        technologies: [],
        link: '',
        imageUrl: '',
    });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProject((prevProject) => ({
            ...prevProject,
            [name]: name === 'technologies' ? value.split(',').map((tech) => tech.trim()) : value,
        }));
    };

    const validateUrl = (url: string): boolean => {
        const pattern = new RegExp(
            '^(https?:\\/\\/)' +
            '((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|' +
            '((\\d{1,3}\\.){3}\\d{1,3}))' +
            '(\\:\\d+)?(\\/[-a-zA-Z\\d%_.~+]*)*' +
            '(\\?[;&a-zA-Z\\d%_.~+=-]*)?' +
            '(\\#[-a-zA-Z\\d_]*)?$',
            'i'
        );
        return pattern.test(url);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newProject.title || !newProject.link) {
            alert('Введите название и ссылку');
            return;
        }
        if (!validateUrl(newProject.link)) {
            alert('Некорректный URL');
            return;
        }
        const newProjectToAdd: Project = {
            ...newProject,
            id: uuidv4(),
        };
        addProject(newProjectToAdd);
        setNewProject({ id: '', title: '', description: '', technologies: [], link: '', imageUrl: '' });
    };

    const filteredProjects = projects.filter((project) =>
        selectedTech === 'All' ? true : project.technologies.includes(selectedTech)
    );
    return (
        <div>
            <TechFilter value={selectedTech} onChange={(e) => setSelectedTech(e.target.value)}>
                <option value="All">Все технологии</option>
                {Array.from(new Set(projects.flatMap((project) => project.technologies))).map((tech) => (
                    <option key={tech} value={tech}>
                        {tech}
                    </option>
                ))}
            </TechFilter>
            <form onSubmit={handleSubmit}>
                <Filter>
                    <input
                        type="text"
                        name="title"
                        value={newProject.title}
                        onChange={handleInputChange}
                        placeholder="Название"
                    />
                    <textarea
                        name="description"
                        value={newProject.description}
                        onChange={handleInputChange}
                        placeholder="Описание"
                    />
                    <input
                        type="text"
                        name="link"
                        value={newProject.link}
                        onChange={handleInputChange}
                        placeholder="Ссылка"
                    />
                    <input
                        type="text"
                        name="technologies"
                        value={newProject.technologies.join(',')}
                        onChange={handleInputChange}
                        placeholder="Технологии"
                    />
                    <button type="submit">Добавить проект</button>
                </Filter>
            </form>
            <PageContainer>
                {filteredProjects.map((project) => (
                    <Card key={project.id}>
                        <ProjectImage src={project.imageUrl || '/placeholder.jpg'} alt={project.title}/>
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
                        <DeleteButton onClick={() =>
                            deleteProject(project.id)}>Удалить проект</DeleteButton>
                    </Card>
                ))}
            </PageContainer>
        </div>
    );
};