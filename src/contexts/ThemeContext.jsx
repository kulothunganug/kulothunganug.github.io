import React, { useEffect, useContext, createContext } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { darkTheme } from '../config/theme';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const setMetaThemeColor = color => {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', color);
    }
  };

  useEffect(() => {
    setMetaThemeColor(darkTheme.backgroundColor);
  }, []);

  const value = { theme: 'dark', toggleTheme: () => {} };

  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider theme={darkTheme}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
