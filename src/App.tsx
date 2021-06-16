import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { LIGHT_THEME, Theme } from './theme';
import { Header } from './Header';

export const App = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(LIGHT_THEME);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <Header setTheme={setTheme} />
        <Content>
          <p>Hello Vite + React!</p>
          <p>
            <button
              type="button"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="App-link"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </Content>
      </div>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  body {
      background-color: ${(props) => props.theme.background};
    }
  * {
    transition-property: background, color, border;
    transition-duration: 250ms;
  }
`;

const Content = styled.div`
  padding: 10px;
  color: ${(props) => props.theme.text};
  height: 100%;
  a {
    color: ${(props) => props.theme.primaryButton};
  }
`;
