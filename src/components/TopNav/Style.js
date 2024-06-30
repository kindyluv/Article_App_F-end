import styled from 'styled-components';

export const NavContainer = styled.div`
    z-index: 99999;
    min-width: 100%;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.scroll ? '#162836' : '#fff' };
    position: fixed;
    box-shadow: ${props => props.scroll ? 'inset 0px -5px 5px -5px rgba(0, 0, 0, 0.5)' : '1px 1px 2px' };

    @media (max-width: 960px) {
        display: none;
    }
`;

export const NavItemContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  max-width: 40%;
  align-items: center;

  @media (max-width: 960px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 100%;
}

@media (min-width: 959px) and (max-width: 1440px) {
    max-width: 50%;
}
`;

export const NavItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  color: ${props => props.scroll ? '#fff' : '#162836'};
  font-weight: 700;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #CF7650;
  }

  a {
    color: ${props => props.scroll ? '#fff' : '#162836'};
    text-decoration: none;
  }

  a:hover {
    color: #CF7650;
  }

  @media (max-width: 1440px) {
    font-size: 14px;
    }
`;

export const LogoContainer = styled.div`
    max-width: 10%;
    align-items: center;
    margin-left: 20px;

    @media (max-width: 1440px) {
        max-width: 10%;
    }
`;

export const LogoImage = styled.img`
    max-width: 60%;
    height: 100%;
    border-radius: 50%;

    @media (max-width: 960px) {
        max-width: 100%;
    }
`;

export const SearchContainer = styled.div`
    width: 25%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1440px) {
        display: none;
    }
`;

export const ActionContainer = styled.div`
    min-width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 50px;

    @media (max-width: 960px) {
        display: flex;
        justify-content: center;
        flex-direction: column;
        min-width: 100%;
    }
    @media (min-width: 959px) and (max-width: 1440px) {
        min-width: 40%;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color:  ${props => props.scroll ? '#fff' : '#162836' };

    @media (max-width: 960px) {
        min-width: 50%;
    }
`;

export const Spacing = styled.div`
    width: 20px;

    @media (max-width: 960px) {
        margin-bottom: 20px;
    }
`;


export const Modal = styled.div`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    height: 100%;
    background-color: #fff;
    z-index: 9999;
    overflow-x: hidden;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${props => (props.isOpen ? '0' : '100%')});
`;

export const ModalContent = styled.div`
    padding: 20px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const NavContainerMobile = styled.div`
    z-index: 99999;
    min-width: 100%;
    padding: 10px 0px;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.scroll ? '#162836' : '#fff' };
    position: fixed;
    box-shadow: ${props => props.scroll ? 'inset 0px -5px 5px -5px rgba(0, 0, 0, 0.5)' : '1px 1px 2px' };
    
    @media (min-width: 960px) {
        display: none;
    }
`;

export const NavItemMobile = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  color: #162836;
  font-weight: 700;
  font-size: 16px;
  transition: color 0.3s ease;

  &:hover {
    color: #CF7650;
  }

  a {
    color: #162836;
    text-decoration: none;
  }

  a:hover {
    color: #CF7650;
  }

  @media (max-width: 1440px) {
    font-size: 14px;
    }
`;