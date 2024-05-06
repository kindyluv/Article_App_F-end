import styled from "styled-components";

export const Backdrop = styled.div`
  width: 40%;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (min-width: 769px) and (max-width: 960px) {
    width: 60%;
  }
`;

export const Dialog = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #333;
`;

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5); 
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;