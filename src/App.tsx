import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { LIGHT_THEME, Theme } from './theme';
import { Header } from './Header';
import { Counter } from './Counter';

export const App = () => {
  const [theme, setTheme] = useState(LIGHT_THEME);
  const [content, setContent] = useState(<div>Hello</div>);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header setTheme={setTheme} setContent={setContent} content={content} />
        <Content>{content}</Content>
        <Footer>
          <FooterContent>
            <Counter />
          </FooterContent>
        </Footer>
      </div>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
      background-color: ${(props) => props.theme.background};
    }
  * {
    transition-property: background, color, border;
    transition-duration: 250ms;
  }
`;

const Content = styled.div`
  color: ${(props) => props.theme.text};
  height: 100%;
  a {
    color: ${(props) => props.theme.primaryButton};
  }
`;

const FooterContent = styled.div`
  padding: 10px;
  width: 100%;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  background-color: ${(props) => props.theme.primaryButton};
  bottom: 0;
  height: 80px;
  width: 100%;
`;
