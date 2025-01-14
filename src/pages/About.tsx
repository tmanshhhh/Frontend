import {PageContainer} from "@ styles/AboutStyle/PageContainer.tsx";
import {Card} from "@ styles/AboutStyle/Card.tsx";
import {Title} from "@ styles/AboutStyle/Title.tsx";
import {Text} from "@ styles/AboutStyle/Text.tsx";
import {Subtitle} from "@ styles/AboutStyle/Subtitle.tsx";

export const About: React.FC = () => {
    return (
        <PageContainer>
            <Title>Обо мне</Title>
            <Card>
                <Subtitle>Образование:</Subtitle>
                <Text> <span> • </span>Я учусь на 3 курсе по направлению "Прикладная математика и информатика. Системное программирование" в ДВФУ </Text>
                <Text> <span> • </span>Обучаюсь на цифровых кафедрах по направлению "Разработка мобильных приложений на Android"</Text>
                <Subtitle>Достижения:</Subtitle>
                <Text> <span> • </span>Окончила художественную школу</Text>
                <Text> <span> • </span>Окончила школу с золотой медалью и со 100 баллами за ЕГЭ по русскому языку</Text>
                <Text> <span> • </span>В 16 лет начала заниматься карате, за два года дошла до зеленого пояса, занимая призовые места в соревнованиях, затем перешла в MMA</Text>
                <Text> <span> • </span>Занимала призовые места в тяжелоатлетических турнирах</Text>
                <Text> <span> • </span>Год работала репетитором по математике</Text>
                <Subtitle>Интересы:</Subtitle>
                <Text> <span> • </span>Занимаюсь силовыми тренировками, веду здоровый образ жизни</Text>
                <Text> <span> • </span>В свободное время путешествую по нашему краю, каждый раз изучая новые места</Text>
                <Text> <span> • </span>Люблю проводить время с семьей и друзьями</Text>
            </Card>
        </PageContainer>
    );
};