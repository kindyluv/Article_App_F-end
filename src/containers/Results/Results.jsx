import React, { useState, useEffect } from 'react';
import ArticleCard from '../../components/Cards';
import BigLogo from '../../assets/BigLogo.png';
import SearchBar from '../../components/SearchBar';
import {
    MainContainer,
    HeaderContainer,
    LogoContainer,
    LogoImage,
    TitleContainer,
    Title,
    ResultsContainer,
    SearchContainer,
    ArticlesContainer,
} from './Styles';
import { handleSearch } from '../../utils';
import ReactPaginate from 'react-paginate';
import './Results.css';

const Results = ({ articles, setArticles }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [originalArticles, setOriginalArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const articlesPerPage = 10;

    useEffect(() => {
        if (Array.isArray(articles)) {
            setOriginalArticles(articles);
        }
    }, [articles]);

    useEffect(() => {
        handleSearch(searchQuery, originalArticles, setArticles);
    }, [searchQuery]);

    const offset = currentPage * articlesPerPage;
    const currentArticles = Array.isArray(articles) ? articles?.slice(offset, offset + articlesPerPage) : [];
    const pageCount = Math.ceil(articles.length / articlesPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <MainContainer>
            <HeaderContainer>
                <LogoContainer>
                    <LogoImage src={BigLogo} alt="BigLogo" />
                </LogoContainer>
                <TitleContainer>
                    <Title>Article Is Life</Title>
                </TitleContainer>
            </HeaderContainer>
            <ResultsContainer>
                <SearchContainer>
                    <SearchBar showButton={true} setSearchString={setSearchQuery} placeholder={'Search article.....'} />
                </SearchContainer>
                <ArticlesContainer>
                    {Array.isArray(currentArticles) &&
                        currentArticles.map((value, i) => (
                            <div key={i}>
                                <ArticleCard
                                    title={value?.title}
                                    body={value?.body}
                                    name={value?.user?.name}
                                    phoneNumber={value?.user?.phone}
                                    email={value?.user?.email}
                                    website={value?.user?.website}
                                />
                            </div>
                        ))}
                </ArticlesContainer>
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </ResultsContainer>
        </MainContainer>
    );
};

export default Results;
