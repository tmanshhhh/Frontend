import MyPhoto from '@/assets/HomePagePhoto.jpg';
import {MyImage} from "@ styles/HomeStyle/MyImage.tsx";
import {Name} from "@ styles/HomeStyle/Name.tsx";
import {Info} from "@ styles/HomeStyle/Info.tsx";
import {PagesTemplate} from "@ styles/HomeStyle/PagesTemplate.tsx";

export const Home: React.FC = () => {
    return (
        <PagesTemplate>
            <div>
                <Name>Привет!</Name>
                <Info>
                    <div>
                        Меня зовут <span style={{color: "#302727", fontWeight: "bold"}}>
                    Маньшина Таисия</span>, мне 20 лет. Больше всего в жизни я люблю <span
                    style={{color: "#302727", fontWeight: "bold"}}>спорт, активный отдых, машины и путешествия</span>.
                    </div>
                    <br/>
                    Я живу во Владивостоке, городе, который дарит море возможностей реализовывать мои интересы. Учусь я в Дальневосточном федеральном университете на специальности <span style={{color: "#302727", fontWeight: "bold"}}>Прикладная математика и информатика</span>.
                    Этот сайт посвещен моему опыту и проектам в сфере IT, реализованным за время обучения в вузе.
                </Info>
            </div>
            <MyImage src={MyPhoto}  />
        </PagesTemplate>
    );
};