import {Title} from "@/styles/ProjectsStyle/ProjectStyle.tsx";
import {Card} from "@/styles/ProjectsStyle/ProjectStyle.tsx";
import {Subtitle} from "@/styles/ProjectsStyle/ProjectStyle.tsx";
import {Text} from "@/styles/ProjectsStyle/ProjectStyle.tsx";
import {PageContainer} from "@/styles/ProjectsStyle/ProjectStyle.tsx";

export const Projects: React.FC = () => {
    return (
        <PageContainer>
            <Title>Мои проекты</Title>
            <Card>
                <Subtitle>Проекты:</Subtitle>
                <Text> <span> • </span>Проект 1</Text>
                <Text> <span> • </span>Проект 2</Text>
            </Card>
        </PageContainer>
    );
};
