import React from 'react';
import Button from '../Button';
import { Backdrop, Dialog, CloseButton, ModalContainer, ButtonContainer } from './Styles';
import './Modal.css';

const Modal = ({ isOpen, onClose, children}) => {
  if (!isOpen) return null;

  return (
    <ModalContainer>
        <Backdrop>
        <Dialog>
            <CloseButton onClick={onClose}>x</CloseButton>
            {children}
            <ButtonContainer>
                <Button className={'modalBtn'} label='Close' type='button' onClick={onClose} />
            </ButtonContainer>
        </Dialog>
        </Backdrop>
    </ModalContainer>
  );
};

export default Modal;
