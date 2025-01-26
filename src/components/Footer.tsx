import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FooterContainer} from "@ styles/FooterStyle/FooterContainer.tsx";
import {IconLinks} from "@ styles/FooterStyle/IconLinks.tsx";
import {IconLink} from "@ styles/FooterStyle/IconLink.tsx";
import {SocialLinks} from "@/config/SocialLinks.ts"

const baseLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
};

export const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <IconLinks>
                {SocialLinks.map(({ href, label, icon }) => (
                    <IconLink key={href} href={href} {...baseLinkProps} aria-label={label}>
                        <FontAwesomeIcon icon={icon} />
                    </IconLink>
                ))}
            </IconLinks>
        </FooterContainer>
    );
};