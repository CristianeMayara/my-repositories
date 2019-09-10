import React from 'react';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './configs/apolloClient';
import ReactDOM from 'react-dom';
import App from './App';

const AppWrapper = () => (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
