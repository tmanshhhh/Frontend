import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faVk, faTelegram, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FooterContainer} from "@ styles/FooterStyle/FooterContainer.tsx";
import {IconLinks} from "@ styles/FooterStyle/IconLinks.tsx";
import {IconLink} from "@ styles/FooterStyle/IconLink.tsx";

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <IconLinks>
                <IconLink href="https://instagram.com/tmanshhhh" target="_blank" rel="noopener noreferrer" aria-label="VK">
                    <FontAwesomeIcon icon={faInstagram} />
                </IconLink>
                <IconLink href="https://vk.com/tmanshhhh" target="_blank" rel="noopener noreferrer" aria-label="VK">
                    <FontAwesomeIcon icon={faVk} />
                </IconLink>
                <IconLink href="https://t.me/tmanshhhh" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                    <FontAwesomeIcon icon={faTelegram} />
                </IconLink>
            </IconLinks>
        </FooterContainer>
    );
};