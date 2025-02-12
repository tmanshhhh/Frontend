import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Project } from "@/types/Project.ts";
import { projects as initialProjects } from "@/data/projects.ts";
import { validateUrl } from "@/projectComponents/projectUtils.ts";

interface ProjectState {
    projects: Project[];
    addProject: (project: Project) => void;
    deleteProject: (id: string) => void;
    updateProject: (updatedProject: Project) => void;
    getProjectById: (id: string) => Project | undefined;
}

const isValidProject = (project: Project): boolean => {
    return (
        project.title.trim().length > 0 &&
        project.link.trim().length > 0 &&
        validateUrl(project.link) &&
        Array.isArray(project.technologies) &&
        project.technologies.every((tech) => typeof tech === "string" && tech.trim().length > 0)
    );
};

export const useProjectStore = create(
    persist<ProjectState>(
        (set, get) => ({
            projects: initialProjects,

            addProject: (project: Project): void => {
                if (!isValidProject(project)) {
                    console.error("Ошибка: проект содержит некорректные данные.");
                    return;
                }
                set((state) => ({ projects: [...state.projects, project] }));
            },

            deleteProject: (id: string): void => {
                set((state) => ({
                    projects: state.projects.filter((project) => project.id !== id),
                }));
            },

            updateProject: (updatedProject: Project): void => {
                if (!isValidProject(updatedProject)) {
                    console.error("Ошибка: обновленный проект содержит некорректные данные.");
                    return;
                }
                set((state) => ({
                    projects: state.projects.map((project) =>
                        project.id === updatedProject.id ? updatedProject : project
                    ),
                }));
            },

            getProjectById: (id: string): Project | undefined => {
                return get().projects.find((project) => project.id === id);
            },
        }),
        {
            name: "project-store",
        }
    )
);
