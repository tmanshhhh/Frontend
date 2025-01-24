import pythonImg from '@ assets/python_icon.png';
import jetbrainsImg from '@ assets/jetbrains_icon.png';
import cImg from '@ assets/1c_icon.png';
import cssImg from '@ assets/css_icon.png';
import cppImg from '@ assets/cpp_icon.png';
import sqlImg from '@ assets/sql_icon.png';
import kotlinImg from '@ assets/kotlin_icon.png';
import androidImg from '@ assets/androidstudio_icon.png';
import PSImg from '@ assets/photoshop_icon.png';
import {PageContainer} from "@ styles/SkillsStyle/PageContainer.tsx";
import {SkillItem} from "@ styles/SkillsStyle/SkillItem.tsx";
import {SkillImage} from "@ styles/SkillsStyle/SkillImage.tsx";
import {SkillName} from "@ styles/SkillsStyle/SkillName.tsx";
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
    const skillsData = [
        { name: "Python", image: pythonImg },
        { name: "JetBrains IDE", image: jetbrainsImg },
        { name: "1C", image: cImg },
        { name: "CSS", image: cssImg },
        { name: "C++", image: cppImg },
        { name: "SQL", image: sqlImg },
        { name: "Kotlin", image: kotlinImg },
        { name: "Android Studio", image: androidImg },
        { name: "Photoshop", image: PSImg },
    ];

    return (
        <PageContainer>
            <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {skillsData.map((skill) => (
                    <SkillItem key={skill.name}>
                        <SkillImage src={skill.image} alt={skill.name}/>
                        <SkillName>{skill.name}</SkillName>
                    </SkillItem>
                ))}
            </motion.div>
        </PageContainer>
    );
};