import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Project } from '@ types/Project.ts';
import { projects as initialProjects } from '@ data/projects.ts';
import { fetchRepos, Projects } from '@ services/githubService.ts';

interface ProjectState {
    projects: Project[];
    remoteProjects: Projects[];
    addProject: (project: Project) => void;
    deleteProject: (id: string) => void;
    fetchRemoteProjects: (username: string, token?: string) => Promise<void>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
export const useProjectStore = create(
    persist<ProjectState>(
        (set) => ({
            projects: initialProjects,
            remoteProjects: [],
            status: 'idle',
            error: null,
            addProject: (project) =>
                set((state) => ({ projects: [...state.projects, project] })),
            deleteProject: (id) =>
                set((state) => ({
                    projects: state.projects.filter((project) => project.id !== id),
                })),
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
            name: 'project-store',
        }
    )
);