import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';
import { CountProvider } from './_contexts/countContext';
import { CustomThemeProvider } from './_contexts/customThemeContext';
import { ViewProvider } from './_contexts/viewContext';

export const App = () => {
  return (
    <CustomThemeProvider>
      <ViewProvider>
        <CountProvider>
          <GlobalStyle />
          <Header />
          <Content />
          <Footer />
        </CountProvider>
      </ViewProvider>
    </CustomThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.background};
    transition-property: background, color, border;
    transition-duration: 250ms;
  }
`;
