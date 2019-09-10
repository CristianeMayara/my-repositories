import React from 'react';
import { Query } from 'react-apollo';

import { LIST_COMMITS } from '../../services/repositories';
import { Container } from './styles';

const CommitList = () => (
  <Query query={LIST_COMMITS} variables={{ repoName: 'marvel-app' }}>
    {({ data, loading, error }) => {
      console.log(data);
      return <div>Lista de Commits</div>;
    }}
  </Query>
);

export default CommitList;
