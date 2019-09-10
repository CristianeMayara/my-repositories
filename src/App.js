import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RepositoryList from './screens/RepositoryList';
import CommitList from './screens/CommitList';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={RepositoryList} />
        <Route path="/commits" component={CommitList} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
