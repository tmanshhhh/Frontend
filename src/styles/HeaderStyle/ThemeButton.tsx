import styled from "styled-components";

export const ThemeButton = styled.button`
    background: none;
    background-color: #806969;
    border: 1px solid ${(props) => props.theme.color};
    color: ${(props) => props.theme.color};
    padding: 5px 10px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.5s, color 0.5s;

    &:hover {
        background-color: ${(props) => props.theme.color};
        color: ${(props) => props.theme.background};
    }
`;
