import React, { useEffect, useCallback } from 'react';
import { useProjectStore } from '@ store/useProjectStore';
import { RefreshButton } from '@ styles/GithubStyle/RefreshButton.tsx'
import { ErrorLoading } from '@ styles/GithubStyle/ErrorLoading.tsx';
import { ProjectLanguage } from '@ styles/GithubStyle/ProjectLanguage.tsx';
import { ProjectDescription } from '@ styles/GithubStyle/ProjectDescription.tsx';
import { ProjectTitle } from '@ styles/GithubStyle/ProjectTitle.tsx';
import { ProjectCard } from '@ styles/GithubStyle/ProjectCard.tsx';
import { ProjectList } from '@ styles/GithubStyle/ProjectList.tsx';
import { Container } from '@ styles/GithubStyle/Container.tsx';
import { ProjectLink } from '@ styles/GithubStyle/ProjectLink.tsx';

const GITHUB_USERNAME = process.env.REACT_APP_GITHUB_USERNAME || 'defaultUsername';

enum FetchStatus {
    LOADING = 'loading',
    FAILED = 'failed',
    SUCCEEDED = 'succeeded',
}

export const GithubRepositories: React.FC = () => {
    const { remoteProjects, status, error, fetchRemoteProjects } = useProjectStore();

    const loadProjects = useCallback(() => {
        fetchRemoteProjects(GITHUB_USERNAME);
    }, [fetchRemoteProjects]);

    useEffect(() => {
        loadProjects();
    }, [loadProjects]);

    return (
        <Container>
            {status === FetchStatus.LOADING && <ErrorLoading>Loading...</ErrorLoading>}
            {status === FetchStatus.FAILED && <ErrorLoading>Error: {error}</ErrorLoading>}
            {status === FetchStatus.SUCCEEDED && (
                <>
                    <RefreshButton onClick={loadProjects}>Обновить</RefreshButton>
                    {remoteProjects.length === 0 ? (
                        <ErrorLoading>Нет доступных репозиториев</ErrorLoading>
                    ) : (
                        <ProjectList>
                            {remoteProjects.map((project) => (
                                <ProjectCard key={project.id}>
                                    <ProjectTitle href={project.html_url} target="_blank">
                                        {project.name}
                                    </ProjectTitle>
                                    <ProjectDescription>
                                        {project.description || 'Нет описания'}
                                    </ProjectDescription>
                                    <ProjectLanguage>
                                        Технологии: {project.language || 'Нет данных'}
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
        </Container>
    );
};
