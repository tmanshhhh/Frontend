import styled from "styled-components";
import {Link} from "react-router-dom";

export const LinkStyle= styled(Link)`
    color: #806969;
    font-family: Arial Narrow, sans-serif;
    font-weight: normal;
    transition: color 0.5s;
    text-decoration: none;
    font-size: 1.3rem;

    &:hover {
        color: #130d0f;
    }
`;