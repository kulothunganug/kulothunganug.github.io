import React from 'react';

import ThemeProvider from './contexts/ThemeContext';
import Home from './page';

const App = () => (
  <ThemeProvider>
    <Home />
  </ThemeProvider>
);

export default App;
