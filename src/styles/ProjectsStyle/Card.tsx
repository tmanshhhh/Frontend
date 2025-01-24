import styled from "styled-components";

export const Card = styled.div`
    border: 1px solid #130d0f;
    display: flex;
    padding: 10px;
    margin-left: 55px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    box-shadow: 2px 2px 5px rgb(35, 24, 28);
    transition: transform 0.5s, box-shadow 0.5s;
    cursor: pointer;
    background-color: #f7f5f1;

    &:hover {
        transform: scale(1.02);
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
`;