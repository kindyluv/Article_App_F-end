import React, { useState } from 'react';
import Button from '../Button';
import ArticleImage from '../../assets/SmallLogo.png';
import './ArticleCard.css';
import { CardContainer, SingleArticleTitle, DetailItem, Details, Image, TextContainer, Title, Description, Container, FlexContainer, DetailsContainer, Content, LogoImage, Body } from './Styles';
import BigLogo from '../../assets/BigLogo.png';
import Modal from '../Modal';
import { truncateWords } from '../../utils';

const ArticleCard = ({title, body, name, phoneNumber, email, website }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <>
            <CardContainer>
                <Image src={ArticleImage} alt="Article Image" />
                <TextContainer>
                    <Title>{truncateWords(title, 2)}</Title>
                    <Description>{truncateWords(body, 10)}</Description>
                    <Button className={'cardBtn'} type="button" onClick={handleOpenModal} label="Read Now" />
                </TextContainer>
            </CardContainer>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={handleCloseModal}>
                    <Container>
                        <FlexContainer>
                            <LogoImage src={BigLogo} alt="BigLogo" />
                            <DetailsContainer>
                                <Details>
                                    <DetailItem>Name: {name}</DetailItem>
                                    <DetailItem>Phone number: {phoneNumber}</DetailItem>
                                    <DetailItem>Email: {email}</DetailItem>
                                    <DetailItem>website: {website}</DetailItem>
                                </Details>
                            </DetailsContainer>
                        </FlexContainer>
                        <Content>
                            <SingleArticleTitle>{title}</SingleArticleTitle>
                            <Body>{body}</Body>
                        </Content>
                    </Container>
                </Modal>
            )}
        </>
    );
};

export default ArticleCard;
