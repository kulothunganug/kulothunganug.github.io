import React from 'react';
import { Switch, Route } from 'wouter';

import ThemeProvider from './contexts/ThemeContext';
import Home from './pages/home';
import Blog from './pages/blog';
import Post from './pages/post';
import PageNotFound from './pages/PageNotFound';

const App = () => (
  <ThemeProvider>
    <Switch>
      <Route path='/' component={Home}></Route>
      <Route path='/blog' component={Blog}></Route>
      <Route path='/post/:id' component={Post}></Route>
      <Route component={PageNotFound}></Route>
    </Switch>
  </ThemeProvider>
);

export default App;
