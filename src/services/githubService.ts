import axios from 'axios';

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
}
export interface Projects {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
}
const GITHUB_API_URL = 'https://api.github.com';
export const fetchRepos = async (username: string, token?: string):
    Promise<Projects[]> => {
    const response = await axios.get<GitHubRepo[]>(`${GITHUB_API_URL}/users/${username}/repos`, {
        headers: token ? { Authorization: `token ${token}` } : {},
    });
    return response.data.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
    }));
};