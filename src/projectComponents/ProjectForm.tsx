import React, { useState } from "react";
import { Project } from "@/types/Project.ts";
import { Filter } from "@/styles/ProjectsStyle/Filter.tsx";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "@/projectComponents/Modal.tsx";
import { INITIAL_PROJECT_STATE, validateUrl } from "@/projectComponents/projectUtils.ts";

interface ProjectFormProps {
    addProject: (project: Project) => void;
}

export const ProjectForm: React.FC<ProjectFormProps> = ({ addProject }) => {
    const [newProject, setNewProject] = useState<Project>({ ...INITIAL_PROJECT_STATE });
    const [modalMessage, setModalMessage] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewProject((prev) => ({
            ...prev,
            [name]: name === "technologies" ? value.split(",").map((tech) => tech.trim()) : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newProject.title || !newProject.link) {
            setModalMessage("Введите название и ссылку");
            return;
        }
        if (!validateUrl(newProject.link)) {
            setModalMessage("Некорректный URL");
            return;
        }
        addProject({ ...newProject, id: uuidv4() });
        setNewProject({ ...INITIAL_PROJECT_STATE });
    };

    return (
        <>
            {modalMessage && <Modal message={modalMessage} onClose={() => setModalMessage(null)} />}
            <form onSubmit={handleSubmit}>
                <Filter>
                    <input type="text" name="title" value={newProject.title} onChange={handleInputChange} placeholder="Название" />
                    <textarea name="description" value={newProject.description} onChange={handleInputChange} placeholder="Описание" />
                    <input type="text" name="link" value={newProject.link} onChange={handleInputChange} placeholder="Ссылка" />
                    <input type="text" name="technologies" value={newProject.technologies.join(",")} onChange={handleInputChange} placeholder="Технологии" />
                    <button type="submit">Добавить проект</button>
                </Filter>
            </form>
        </>
    );
};
