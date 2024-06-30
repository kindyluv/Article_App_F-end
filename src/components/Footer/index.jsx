import React from 'react';
import { FooterContainer, Address, Section, FooterLink, FooterText } from './Styles';
import './Footer.css';

const Footer = () => {
  return (
    <FooterContainer>
      <Section>
        <Address>About Us</Address>
        <FooterText>Learn more about our company and our mission.</FooterText>
      </Section>
      <Section>
        <Address>Contact Us</Address>
        <FooterText>Email: info@example.com</FooterText>
        <FooterText>Phone: (123) 456-7890</FooterText>
      </Section>
      <Section>
        <Address>Follow Us</Address>
        <FooterText>
          <FooterLink href="#">Facebook</FooterLink> | <FooterLink href="#">Twitter</FooterLink> | <FooterLink href="#">Instagram</FooterLink>
        </FooterText>
      </Section>
    </FooterContainer>
  );
};

export default Footer;
