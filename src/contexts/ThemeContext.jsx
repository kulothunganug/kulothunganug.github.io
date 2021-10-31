import React, { useState, useContext, createContext } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../config/theme';
import { useStorage } from '../hooks';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useStorage('theme', 'dark');

  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
