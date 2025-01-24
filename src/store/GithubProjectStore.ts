import { create } from 'zustand';
import { fetchRepos, GitProject } from '@/services/githubService';

interface GitHubProjectState {
    projects: GitProject[];
    fetchProjects: (username: string, token?: string) => Promise<void>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export const GitHubProjectStore = create<GitHubProjectState>((set) => ({
    projects: [],
    status: 'idle',
    error: null,
    fetchProjects: async (username: string, token?: string) => {
        set({ status: 'loading', error: null });
        try {
            const fetchedGitProjects = await fetchRepos(username, token);
            set({ projects: fetchedGitProjects, status: 'succeeded' });
        } catch (error: unknown) {
            if (error instanceof Error) {
                set({ status: 'failed', error: error.message });
            } else {
                set({ status: 'failed', error: 'An unknown error occurred.' });
            }
        }
    },
}));