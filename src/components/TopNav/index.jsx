import React, { useEffect, useState } from 'react';
import SmallLogo from '../../assets/SmallLogo.png';
import Button from '../Button';
import SearchBar from '../SearchBar';
import './TopNav.css';
import {
    NavContainer,
    LogoContainer,
    NavContainerMobile,
    MenuContainer,
    NavItemMobile,
    NavItemContainer,
    NavItem,
    LogoImage,
    SearchContainer,
    ActionContainer,
    Modal,
    ModalContent,
    CloseButton,
    Spacing,
} from './Style';
import { handleSearch } from '../../utils';

const TopNav = ({ articles, setArticles }) => {
    const [scroll, setScroll] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [originalArticles, setOriginalArticles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {};

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setOriginalArticles(articles);
    }, [articles]);

    useEffect(() => {
        handleSearch(searchQuery, originalArticles, setArticles);
    }, [searchQuery]);

    return (
        <>
            <NavContainer scroll={scroll}>
                <LogoContainer>
                    <LogoImage src={SmallLogo} alt="SmallLogo" />
                </LogoContainer>
                <NavItemContainer>
                    <NavItem scroll={scroll}>
                        <a href="/">Home</a>
                    </NavItem>
                    <NavItem scroll={scroll}>
                        <a href="/about">About</a>
                    </NavItem>
                    <NavItem scroll={scroll}>
                        <a href="/post-article">Post Article</a>
                    </NavItem>
                    <NavItem scroll={scroll}>
                        <a href="/contact">Contact</a>
                    </NavItem>
                </NavItemContainer>
                <SearchContainer>
                    <SearchBar showButton={true} setSearchString={setSearchQuery} placeholder={'Search article.....'} />
                </SearchContainer>
                <ActionContainer>
                    <Button className="loginBtn" type="button" onClick={handleClick} label="Login" />
                    <Spacing />
                    <Button className={'signUpBtn'} type="button" onClick={handleClick} label="SignUp" />
                </ActionContainer>
            </NavContainer>
            <NavContainerMobile scroll={scroll}>
                <LogoContainer>
                    <LogoImage src={SmallLogo} alt="SmallLogo" />
                </LogoContainer>
                <MenuContainer scroll={scroll}>
                    <Button className={'menuBtn'} type="button" onClick={toggleModal} label="☰" />
                </MenuContainer>
                <Modal isOpen={isModalOpen}>
                    <ModalContent>
                        <CloseButton onClick={toggleModal}>×</CloseButton>
                        <NavItemContainer>
                            <NavItemMobile scroll={scroll}>
                                <a href="/">Home</a>
                            </NavItemMobile>
                            <NavItemMobile scroll={scroll}>
                                <a href="/about">About</a>
                            </NavItemMobile>
                            <NavItemMobile scroll={scroll}>
                                <a href="/post-article">Post Article</a>
                            </NavItemMobile>
                            <NavItemMobile scroll={scroll}>
                                <a href="/contact">Contact</a>
                            </NavItemMobile>
                        </NavItemContainer>
                        <Spacing />
                        <ActionContainer>
                            <Button className="loginBtn" type="button" onClick={handleClick} label="Login" />
                            <Spacing />
                            <Button className="signUpBtn" type="button" onClick={handleClick} label="SignUp" />
                        </ActionContainer>
                    </ModalContent>
                </Modal>
            </NavContainerMobile>
        </>
    );
};

export default TopNav;
