import React from 'react';
import { FooterContainer, Address, SocialMedia, NavItem, NavItemContainer, FeedbackForm } from './Styles';
import Input from '../Input';
import Button from '../Button';
import './Footer.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FooterContainer>
        <SocialMedia>
            <Address>123 Company St, City, Country</Address>
            <Address>123 Company St, City, Country</Address>
            <Address>123 Company St, City, Country</Address>
        </SocialMedia>
        <NavItemContainer>
            <NavItem>Facebook</NavItem>
            <NavItem>Twitter</NavItem>
            <NavItem>Instagram</NavItem>
        </NavItemContainer>
      <FeedbackForm onSubmit={handleSubmit}>
        <Input className={"footerInput"} type="text" placeholder="Your name" />
        <Input className={"footerInput"}  type="email" placeholder="Your email" />
        <textarea className={"footerTextArea"} placeholder="Your feedback"></textarea>
        <Button className={"footerBtn"} onClick={handleSubmit} type="submit" label='Submit' />
      </FeedbackForm>
    </FooterContainer>
  );
};

export default Footer;
