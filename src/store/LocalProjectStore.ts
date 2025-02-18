import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project } from '@ types/Project.ts';
import { projects as initialProjects } from '@ data/projects.ts';

interface LocalProjectState {
    projects: Project[];
    addProject: (project: Project) => void;
    deleteProject: (id: string) => void;
}

export const LocalProjectStore = create(
    persist<LocalProjectState>(
        (set) => ({
            projects: initialProjects,
            addProject: (project: Project) =>
                set((state) => ({ projects: [...state.projects, project] })),
            deleteProject: (id: string) =>
                set((state) => ({
                    projects: state.projects.filter((project) => project.id !== id),
                })),
        }),
        {
            name: 'local-project-store',
        }
    )
);