import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './configs/apolloClient';

import App from './App';
import GlobalStyle from './styles/global';

const AppWrapper = () => (
  <ApolloProvider client={apolloClient}>
    <GlobalStyle />
    <App />
  </ApolloProvider>
);

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
