import styled from 'styled-components';

export const Filter = styled.div`
    margin-left: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 45rem;
    height: 30px;
    padding: 20px;
    border: 1px solid #130d0f;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #a68a8a;

    input[type="number"],
    input[type="text"],
    textarea {
        margin-right: 10px;
        padding: 10px;
        max-height: 45px;
        border: 1px solid #130d0f;
        border-radius: 5px;
        flex-grow: 1;
        box-sizing: border-box;
        font-family: Arial Narrow, sans-serif;
        color: #151515;
        font-size: 1rem;
        font-weight: bold;
    }

    button[type="submit"] {
        background-color: #130d0f;
        border: none;
        color: #ffffff;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 5px;
    }

    button[type="submit"]:hover {
        background-color: #b10000;
    }
`;