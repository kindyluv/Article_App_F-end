import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 100%;
`;

export const Text = styled.p`
    font-size: 30px;
    font-weight: 700;
    margin-top: 10%;

    @media(max-width: 768px){
        margin-top: 15%;
    }
`;

export const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    flex-wrap: wrap;
`;

export const Textarea = styled.textarea`
    max-width: calc(30%);
    min-width: calc(30%);
    height: 150px;
    background-color: #ffffff;
    border: none;
    vertical-align: bottom;
    z-index: 0;
    margin-bottom: 10px;
    border-radius: 4px;
    box-shadow: 1px 1px 2px;

    &:hover {
        background-color: #d9d9d9;
    }

    &:active, &:focus {
        border: none;
        outline: none;
    }

    @media (min-width: 601px) and (max-width: 992px) {
        min-width: calc(50%);
    }

    @media (max-width: 600px) {
        min-width: calc(70%);
    }
`;