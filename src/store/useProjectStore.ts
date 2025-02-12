import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project } from '@ types/Project.ts';
import { projects as initialProjects } from '@ data/projects.ts';
import { fetchRepos, Projects } from '@ services/githubService.ts';
import { validateUrl } from "@/projectComponents/projectUtils.ts";

interface ProjectState {
    projects: Project[];
    remoteProjects: Projects[];
    addProject: (project: Project) => void;
    deleteProject: (id: string) => void;
    updateProject: (updatedProject: Project) => void;
    getProjectById: (id: string) => Project | undefined;
    fetchRemoteProjects: (username: string, token?: string) => Promise<void>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
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
            remoteProjects: [],
            status: 'idle',
            error: null,
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
              
            fetchRemoteProjects: async (username: string, token?: string) => {
                set({ status: 'loading', error: null });
                try {
                    const fetchedProjects = await fetchRepos(username, token);
                    set({ remoteProjects: fetchedProjects, status: 'succeeded' });
                } catch (error: unknown) {
                    if (error instanceof Error) {
                        set({ status: 'failed', error: error.message });
                    } else {
                        set({ status: 'failed', error: 'An unknown error occurred.' });
                    }
                }
            },
        }),
        {
            name: "project-store",
        }
    )
);
