import React, { createContext, ReactNode, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '../_theme/theme';

const CustomThemeContext =
  createContext<
    | {
        theme: DefaultTheme;
        setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
      }
    | undefined
  >(undefined);

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  const value = { theme, setTheme };
  return (
    <CustomThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export const useCustomThemeContext = () => {
  const context = useContext(CustomThemeContext);
  if (context === undefined) {
    throw new Error('useCustomTheme must be used within a CustomThemeProvider');
  }
  return context;
};
