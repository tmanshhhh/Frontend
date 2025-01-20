import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project } from '@/types/Project.ts';
import { projects as initialProjects } from '@/data/projects.ts';

interface ProjectState {
    projects: Project[];
    addProject: (project: Project) => void;
    deleteProject: (id: string) => void;
}
export const useProjectStore = create(
    persist<ProjectState>(
        (set) => ({
            projects: initialProjects,
            addProject: (project) =>
                set((state) => ({ projects: [...state.projects, project] })),
            deleteProject: (id) =>
                set((state) => ({
                    projects: state.projects.filter((project) => project.id !== id),
                })),
        }),
        {
            name: 'project-store',
        }
    )
);