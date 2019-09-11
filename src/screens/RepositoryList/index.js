import React from 'react';
import { Query } from 'react-apollo';

import { LIST_REPOSITORIES } from '../../services/repositories';
import { Container } from './styles';
import BaseView from '../../components/BaseView';
import Divider from '../../components/Divider';
import Repository from '../../containers/Repository';

const RepositoryList = () => (
  <BaseView>
    <Container>
      <Query query={LIST_REPOSITORIES}>
        {({ data, loading, error }) => {
          console.log(data);
          if (loading) {
            return <div />;
          }
          if (error || !data) {
            return <div />;
          }
          const repos = data.user.repositories.nodes;
          return (
            <>
              <h1>Repositórios</h1>
              {repos.map(item => (
                <>
                  <Divider />
                  <Repository key={item.id} data={item} />
                </>
              ))}
            </>
          );
        }}
      </Query>
    </Container>
  </BaseView>
);

export default RepositoryList;
