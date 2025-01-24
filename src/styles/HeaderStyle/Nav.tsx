import styled from "styled-components";
import { media } from "@ styles/media";

export const Nav = styled.nav`
    display: flex;
    gap: 3rem;
    width: 60%;
    margin: 0 auto;
    
    @media ${media.mobile} {
        justify-content: center;
        gap: 10px;
    }
`;