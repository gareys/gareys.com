import React, { createContext, ReactNode, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { LIGHT_THEME } from '../_theme/theme';

const CustomThemeContext =
  createContext<React.Dispatch<React.SetStateAction<DefaultTheme>> | undefined>(
    undefined
  );

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  return (
    <CustomThemeContext.Provider value={setTheme}>
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
