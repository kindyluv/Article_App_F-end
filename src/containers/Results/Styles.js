import styled from 'styled-components';

export const MainContainer = styled.div`
    maxheight: 60%;
    width: 100%;
`;

export const HeaderContainer = styled.div`
    background-color: #162836;
    width: 100%;
    max-height: 30%;
    display: flex;

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 30px;
    }
`;

export const LogoContainer = styled.div`
    width: 50%;
`;

export const LogoImage = styled.img`
    width: 100%;
    max-height: 100%;
`;

export const TitleContainer = styled.div`
    max-width: 50%;
    align-items: center;
    display: flex;

    @media(max-width: 768px){
        display: none;
`;

export const Title = styled.p`
    font-size: 40px;
    font-weight: 700;
    color: #fff;
`;

export const ResultsContainer = styled.div`
    padding: 40px 0;
    max-height: 70%;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
`;

export const ArticlesContainer = styled.div`
    padding: 20px 0px;
    max-width: 100%;
    max-height: 95%;
    display: grid;
    margin: 0 20px;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;

    @media (min-width: 2500px){
        grid-template-columns: repeat(8, 1fr);
    }

    @media (min-width: 1200px) and (max-width: 1500px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 961px) and (max-width: 1201px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 631px) and (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 630px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const ArticleWrapper = styled.div`
    width: 18%;

    @media (max-width: 961px) {
        min-width: inherit;
    }
`;
