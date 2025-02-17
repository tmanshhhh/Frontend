import React, { useEffect, useCallback } from 'react';
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
import {ANIMATION_SETTINGS} from "@/styles/AnimationSettings/MotionSettings.tsx";

interface GitHubRepositoriesProps {
    username: string;
}

enum FetchStatus {
    LOADING = 'loading',
    FAILED = 'failed',
    SUCCEEDED = 'succeeded',
}

export const GithubRepositories: React.FC<GitHubRepositoriesProps> = ({ username }) => {
    const { projects: gitProjects, status, error, fetchProjects } = GitHubProjectStore();

    const loadProjects = useCallback(() => {
        fetchProjects(username);
    }, [fetchProjects, username]);

    useEffect(() => {
        loadProjects();
    }, [loadProjects]);

    return (
        <Container>
            <motion.div {...ANIMATION_SETTINGS}>
                {status === FetchStatus.LOADING && <ErrorLoading>Loading...</ErrorLoading>}
                {status === FetchStatus.FAILED && <ErrorLoading>Error: {error}</ErrorLoading>}
                {status === FetchStatus.SUCCEEDED && (
                    <>
                        <RefreshButton onClick={loadProjects}>Обновить</RefreshButton>
                        {gitProjects.length === 0 ? (
                            <ErrorLoading>Нет доступных репозиториев</ErrorLoading>
                        ) : (
                            <ProjectList>
                                {gitProjects.map((project) => (
                                    <ProjectCard key={project.id}>
                                        <ProjectTitle href={project.html_url} target="_blank">
                                            {project.name}
                                        </ProjectTitle>
                                        <ProjectDescription>
                                            {project.description || 'Нет описания'}
                                        </ProjectDescription>
                                        <ProjectLanguage>
                                            Технологии: {project.language ?? 'Нет данных'}
                                        </ProjectLanguage>
                                        <ProjectLink href={project.html_url} target="_blank" rel="noopener noreferrer">
                                            Ссылка на репозиторий
                                        </ProjectLink>
                                    </ProjectCard>
                                ))}
                            </ProjectList>
                        )}
                    </>
                )}
            </motion.div>
        </Container>
    );
};
