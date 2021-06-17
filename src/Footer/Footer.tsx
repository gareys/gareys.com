import React from 'react';
import styled from 'styled-components';
import { Counter } from './Counter/Counter';

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Counter />
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContent = styled.div`
  padding: 10px;
  width: 100%;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  background-color: ${(props) => props.theme.primaryButton};
  bottom: 0;
  height: 80px;
  width: 100%;
`;
