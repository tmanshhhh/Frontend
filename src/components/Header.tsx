import {HeaderContainer} from '@ styles/HeaderStyle/HeaderContainer.tsx';
import {Nav} from '@ styles/HeaderStyle/Nav.tsx';
import {LinkStyle} from '@ styles/HeaderStyle/LinkStyle.tsx';
import {ThemeButton} from "@/styles/HeaderStyle/ThemeButton.tsx";
import { useTheme } from "@/context/ThemeContext";

const THEME_LIGHT = "light";
const THEME_DARK_TEXT = "Dark";
const THEME_LIGHT_TEXT = "Light";

export const Header: React.FC = () => {
    const { toggleTheme, theme } = useTheme();
    const isLightTheme = theme === THEME_LIGHT;

    return (
        <HeaderContainer>
            <ThemeButton onClick={toggleTheme}>
                {isLightTheme ? THEME_DARK_TEXT : THEME_LIGHT_TEXT}
            </ThemeButton>
            <Nav>
                <LinkStyle to="/">Home</LinkStyle>
                <LinkStyle to="/about">About</LinkStyle>
                <LinkStyle to="/skills">Skills</LinkStyle>
                <LinkStyle to="/projects">Projects</LinkStyle>
                <LinkStyle to="/contact">Contacts</LinkStyle>
                <LinkStyle to="/github-repositories">GitHub repositories</LinkStyle>
            </Nav>
        </HeaderContainer>
    );
};