import {HeaderContainer} from '@ styles/HeaderStyle/HeaderContainer.tsx';
import {Nav} from '@ styles/HeaderStyle/Nav.tsx';
import {LinkStyle} from '@ styles/HeaderStyle/LinkStyle.tsx';
import {ThemeButton} from "@/styles/HeaderStyle/ThemeButton.tsx";
import { useTheme } from "@/context/ThemeContext";


export const Header: React.FC = () => {
    const { toggleTheme, theme } = useTheme();

    return (
        <HeaderContainer>
            <ThemeButton onClick={toggleTheme}>
                {theme === "light" ? "Dark" : "Light"}
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