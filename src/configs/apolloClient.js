import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers }) => {
  const token = window.token;
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const httpLink = createHttpLink({ uri: window.apiBaseUrl });

const cache = new InMemoryCache({
  addTypename: false
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache
});

export default apolloClient;
