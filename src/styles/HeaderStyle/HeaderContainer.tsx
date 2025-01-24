import styled from "styled-components";
import { media } from "@ styles/media";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};

    @media ${media.mobile} {
        padding: 10px;
    }

`;