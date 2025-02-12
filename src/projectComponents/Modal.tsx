import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 300px;
`;

const CloseButton = styled.button`
    margin-top: 10px;
    padding: 8px 16px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background: #0056b3;
    }
`;

interface ModalProps {
    message: string;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <p>{message}</p>
                <CloseButton onClick={onClose}>Закрыть</CloseButton>
            </ModalContent>
        </ModalOverlay>
    );
};
