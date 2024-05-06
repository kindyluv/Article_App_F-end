import React, { useState, useEffect } from "react";
import ArticleCard from "../../components/Cards";
import BigLogo from '../../assets/BigLogo.png';
import SearchBar from "../../components/SearchBar";
import { MainContainer, HeaderContainer, LogoContainer, LogoImage, TitleContainer, Title, ResultsContainer, SearchContainer, ArticleWrapper, ArticlesContainer } from "./Styles";
import { handleSearch } from "../../utils";

const Results = ({articles, setArticles}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [originalArticles, setOriginalArticles] = useState([]);

  useEffect(() => {
      setOriginalArticles(articles);
  }, [articles]);

  useEffect(() => {
    handleSearch(searchQuery, originalArticles, setArticles);
  },[searchQuery])
  
  return (
    <MainContainer>
      <HeaderContainer>
        <LogoContainer>
          <LogoImage src={BigLogo} alt="BigLogo" />
        </LogoContainer>
        <TitleContainer>
          <Title>Article App Article App Article App Article App Article App Article App</Title>
        </TitleContainer>
      </HeaderContainer>
      <ResultsContainer>
        <SearchContainer>
          <SearchBar showButton={true} setSearchString={setSearchQuery} placeholder={"Search article....."} />
        </SearchContainer>
        <ArticlesContainer>
          {Array.isArray(articles) && articles?.map((value,i) => (
            <ArticleCard title={value?.title} body={value?.body} name={value?.user?.name} phoneNumber={value?.user?.phone} email={value?.user?.email} website={value?.user?.website} />
          ))}
        </ArticlesContainer>
      </ResultsContainer>
    </MainContainer>

  );
};

export default Results;
