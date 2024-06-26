import styled from "styled-components";
import TextTruncate from 'react-text-truncate';

export const CardContainer = styled.div`
  max-width: 100%;
  box-shadow: 0 0 0 2px #E3E3E3;
  padding: 12px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 20px;
  height: 350px;
`;

export const Image = styled.img`
  height: 50%;
  border-radius: 8px;
  width: 100%;
`;

export const TextContainer = styled.div`
  padding-top: 10px;
`;

export const Title = styled.p`
  color: #162836;
  font-weight: 700;
  font-size: 18px;
`;

export const Description = styled(TextTruncate)`
  color: #1E1E1E;
`;


export const Container = styled.div`
  padding: 20px;
`;

export const FlexContainer = styled.div`
  display: flex;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const LogoImage = styled.img`
  min-width: 50%;
`;

export const DetailsContainer = styled.div`
  min-width: 50%;
  margin-left: 20px;
`;

export const Details = styled.div`
  margin-top: 10px;
`;

export const DetailItem = styled.p`
  margin: 5px 0;
  font-weight: 700;
`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const SingleArticleTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

export const Body = styled.p`
  color: #555;
`;