import styled from "styled-components";
import { media } from "@ styles/media";

export const PagesTemplate = styled.div`
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    min-height: 86vh;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    @media ${media.mobile} {
        padding: 10px;
        font-size: 14px;
    }
    @media ${media.tablet} {
        padding: 15px;
        font-size: 16px;
    }
    @media ${media.desktop} {
        padding: 20px;
        font-size: 18px;
    }
`;