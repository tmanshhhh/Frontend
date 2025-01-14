import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const Card = styled.div`
    background-color: #f7f5f1;
    display: flex;
    flex-direction: column;
    width: 1021px;
    height: 450px;
    margin-left: 55px;
    margin-right: 55px;
    margin-top: -30px;
    padding: 20px;
    border: 2px solid #302727;
`;

export const Title = styled.p`
    font-size: 3.5rem;
    text-align: center;
    letter-spacing: 0.1rem;
    margin-top: 20px;
    font-weight: bold;
    color: #23181c;
    font-family: Arial Narrow, sans-serif;
`;

export const Subtitle = styled.p`
    font-size: 2.1rem;
    text-align: inherit;
    letter-spacing: 0.1rem;
    font-weight: bold;
    margin-top: -10px;
    color: #302727;
    font-family: Arial Narrow, sans-serif;
`;

export const Text = styled.p`
    font-size: 1.6rem;
    text-align: inherit;
    margin-top: -20px;
    font-family: Arial Narrow, sans-serif;    
`;



