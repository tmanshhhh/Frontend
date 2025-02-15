import axios from 'axios';
import { z } from 'zod';

const GitHubRepoSchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string().nullable(),
    html_url: z.string().url(),
    language: z.string().nullable(),
});

type GitHubRepo = z.infer<typeof GitHubRepoSchema>;

const GITHUB_API_URL = 'https://api.github.com';

const apiClient = axios.create({
    baseURL: GITHUB_API_URL,
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 403) {
            console.error('GitHub API rate limit exceeded. Please try again later.');
        }
        return Promise.reject(error);
    }
);

export const fetchRepos = async (username: string, token?: string): Promise<GitHubRepo[]> => {
    const response = await apiClient.get(`/users/${username}/repos`, {
        headers: token ? { Authorization: `token ${token}` } : {},
    });

    const parsedData = z.array(GitHubRepoSchema).safeParse(response.data);

    if (!parsedData.success) {
        console.error('Invalid API response format:', parsedData.error.format());
        throw new Error('Invalid API response format');
    }

    return parsedData.data;
};
