import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RepositoryList from './screens/RepositoryList';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RepositoryList} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
