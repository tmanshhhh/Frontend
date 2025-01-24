import axios from 'axios';

interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
}
export interface GitProject {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
}

const apiClient = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchRepos = async (username: string, token?: string): Promise<GitProject[]> => {
    try {
        const response = await apiClient.get<GitHubRepo[]>(`/users/${username}/repos`, {
            headers: token ? { Authorization: `token ${token}` } : {},
        });

        return response.data.map((repo) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            language: repo.language,
        }));
    } catch (error) {
        console.error('Ошибка при получении репозиториев:', error);
        throw new Error('Не удалось загрузить репозитории.');
    }
};