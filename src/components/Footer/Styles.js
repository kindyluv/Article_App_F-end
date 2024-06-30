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
`;

export const Address = styled.div`
    color: #fff;
    font-weight: 700;
    font-size: 16px;
`;

export const SocialMedia = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;

export const FeedbackForm = styled.form`
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    min-height: 80%;
    width: 20%;

    @media (max-width: 961px) {
        display: none;
    }
`;

export const NavItemContainer = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    max-width: 35%;
    display: flex;
    flex-direction: column;

    @media (max-width: 961px) {
        min-width: 50%;
        justify-content: center;
        display: flex;
        align-items: center;
    }
`;

export const NavItem = styled.li`
    padding: 10px 20px;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    transition: color 0.3s ease;

    &:hover {
        color: #cf7650;
    }
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