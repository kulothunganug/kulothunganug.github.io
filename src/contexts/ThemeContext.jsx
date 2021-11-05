import React, { useState, useEffect, useContext, createContext } from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../config/theme';
import { useStorage } from '../hooks';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useStorage('theme', 'dark');

  const getThemeObj = () => {
    return theme == 'light' ? lightTheme : darkTheme;
  };

  const toggleTheme = () => {
    setTheme(t => (t == 'dark' ? 'light' : 'dark'));
  };

  const setMetaThemeColor = color => {
    const meta = document.querySelector('meta[name="theme-color"]');
    meta.setAttribute('content', color);
  };

  useEffect(() => {
    let themeObj = getThemeObj();
    setMetaThemeColor(themeObj.backgroundColor);
    document.body.style.background = themeObj.backgroundColor;
    document.body.style.color = themeObj.textColor;
  }, [theme]);

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <SCThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
