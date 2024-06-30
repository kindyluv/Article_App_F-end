import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #162836;
    text-align: start;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 20%;
    min-width: 100vw;
    padding: 40px 0px;
    
    @media (max-width: 600px){
        flex-direction: column;
        margin: 0px;
        justify-content: flex-start;
        align-items: flex-start;
    }
`;

export const Address = styled.div`
    color: #fff;
    font-weight: 700;
    font-size: 16px;
`;

export const Section = styled.div`
  flex: 1;
  padding: 10px;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const FooterText = styled.p`
    color: white;
`;