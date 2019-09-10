import React from 'react';
import { Query } from 'react-apollo';

import { LIST_REPOSITORIES } from '../../services/repositories';
import { Container } from './styles';

const RepositoryList = () => (
  <Query query={LIST_REPOSITORIES}>
    {({ data, loading, error }) => {
      console.log(data);
      return <div>Lista de Repositórios</div>;
    }}
  </Query>
);

export default RepositoryList;
