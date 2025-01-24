import React, { useEffect } from 'react';
import { GitHubProjectStore } from '@ store/GithubProjectStore.ts';
import { RefreshButton } from '@ styles/GithubStyle/RefreshButton.tsx'
import { ErrorLoading } from '@ styles/GithubStyle/ErrorLoading.tsx';
import { ProjectLanguage } from '@ styles/GithubStyle/ProjectLanguage.tsx';
import { ProjectDescription } from '@ styles/GithubStyle/ProjectDescription.tsx';
import { ProjectTitle } from '@ styles/GithubStyle/ProjectTitle.tsx';
import { ProjectCard } from '@ styles/GithubStyle/ProjectCard.tsx';
import { ProjectList } from '@ styles/GithubStyle/ProjectList.tsx';
import { Container } from '@ styles/GithubStyle/Container.tsx';
import { ProjectLink } from '@ styles/GithubStyle/ProjectLink.tsx';
import { motion } from 'framer-motion';

interface GitHubRepositoriesProps {
    username: string;
}

export const GithubRepositories: React.FC<GitHubRepositoriesProps> = ({ username }) => {
    const { projects: gitProjects, status, error, fetchProjects } = GitHubProjectStore();

    useEffect(() => {
        fetchProjects(username);
    }, [fetchProjects, username]);


    const handleRefresh = () => {
        fetchProjects(username);
    };

    return (
        <Container>
            <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {status === 'loading' && <ErrorLoading>Loading...</ErrorLoading>}
                {status === 'failed' && <ErrorLoading>Error: {error}</ErrorLoading>}
                {status === 'succeeded' && (
                    <>
                        <RefreshButton onClick={handleRefresh}>Обновить</RefreshButton>
                        <ProjectList>
                            {gitProjects.map((project) => (
                                <ProjectCard key={project.id}>
                                    <ProjectTitle href={project.html_url} target="_blank">
                                        {project.name}
                                    </ProjectTitle>
                                    <ProjectDescription>
                                        {project.description || 'Нет описания'}
                                    </ProjectDescription>
                                    <ProjectLink href={project.html_url} target="_blank" rel="noopener noreferrer">
                                        Ссылка на репозиторий
                                    </ProjectLink>
                                    <ProjectLanguage>
                                        {}
                                        Технологии: {project.language ?? 'Нет данных'}
                                    </ProjectLanguage>
                                </ProjectCard>
                            ))}
                        </ProjectList>
                    </>
                )}
                </motion.div>
        </Container>
    );
};
