import React from 'react';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  background-color: #f5f5f5;
  text-align: center;
  color: #162836;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1 style={{ fontSize: '100px', margin: 0 }}>404</h1>
      <p>The page you are looking for does not exist.</p>
    </NotFoundContainer>
  );
};
export default NotFound;
