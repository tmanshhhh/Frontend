import MyPhoto from '@/assets/HomePagePhoto.jpg';
import {MyImage} from "@ styles/HomeStyle/MyImage.tsx";
import {Name} from "@ styles/HomeStyle/Name.tsx";
import {Info} from "@ styles/HomeStyle/Info.tsx";
import {PagesTemplate} from "@ styles/HomeStyle/PagesTemplate.tsx";
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
    return (
        <PagesTemplate>
            <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Name>Привет!</Name>
                <Info>
                    <div>
                        Меня зовут <span style={{color: "#806a6a", fontWeight: "bold"}}>
                    Маньшина Таисия</span>, мне 20 лет. Больше всего в жизни я люблю <span
                    style={{color: "#806a6a", fontWeight: "bold"}}>спорт, активный отдых, машины и путешествия</span>.
                    </div>
                    <br/>
                    Я живу во Владивостоке, городе, который дарит море возможностей реализовывать мои интересы. Учусь я в Дальневосточном федеральном университете на специальности <span style={{color: "#806a6a", fontWeight: "bold"}}>Прикладная математика и информатика</span>.
                    Этот сайт посвещен моему опыту и проектам в сфере IT, реализованным за время обучения в вузе.
                </Info>
            </motion.div>
            <MyImage src={MyPhoto}  />
        </PagesTemplate>
    );
};