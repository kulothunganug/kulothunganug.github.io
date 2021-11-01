import React from 'react';
import { Switch, Route } from 'wouter';

import ThemeProvider from './contexts/ThemeContext';
import Home from './pages/home';
import Blog from './pages/blog';
import Blogs from './pages/blogs';

const App = () => (
  <ThemeProvider>
    <Switch>
      <Route path='/' component={Home}></Route>
      <Route path='/blogs' component={Blogs}></Route>
      <Route path='/blog' component={Blog}></Route>
    </Switch>
  </ThemeProvider>
);

export default App;
