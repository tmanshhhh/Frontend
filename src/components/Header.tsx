import {HeaderContainer} from '@ styles/HeaderStyle/HeaderContainer.tsx';
import {Nav} from '@ styles/HeaderStyle/Nav.tsx';
import {LinkStyle} from '@ styles/HeaderStyle/LinkStyle.tsx';

export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Nav>
                <LinkStyle to="/">Home</LinkStyle>
                <LinkStyle to="/about">About</LinkStyle>
                <LinkStyle to="/skills">Skills</LinkStyle>
                <LinkStyle to="/projects">Projects</LinkStyle>
                <LinkStyle to="/contact">Contacts</LinkStyle>
            </Nav>
        </HeaderContainer>
    );
};