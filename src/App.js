import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';

const RepositoryList = lazy(() => import('./screens/RepositoryList'));
const CommitList = lazy(() => import('./screens/CommitList'));

const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
      <Suspense fallback={<div data-testid="suspense" />}>
        <Switch>
          <Route exact path="/" component={RepositoryList} />
          <Route path="/:repository/commits" component={CommitList} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
