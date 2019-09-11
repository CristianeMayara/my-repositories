import React from 'react';
import { Query } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';

import { LIST_REPOSITORIES } from '../../services/repositories';
import { Container } from './styles';
import BaseView from '../../components/BaseView';
import Divider from '../../components/Divider';
import Repository from '../../containers/Repository';

const pageSize = 25;

const RepositoryList = () => (
  <BaseView>
    <Container>
      <Query
        query={LIST_REPOSITORIES}
        variables={{ first: pageSize, after: null }}
      >
        {({ data, loading, error, fetchMore }) => {
          if (loading) {
            return <div />;
          }
          if (error || !data) {
            return <div />;
          }

          const repos = data.user.repositories.nodes;
          const pageInfo = data.user.repositories.pageInfo;

          return (
            <InfiniteScroll
              pageStart={1}
              useWindow={false}
              hasMore={pageInfo.hasNextPage}
              loadMore={pageNumber =>
                fetchMore({
                  variables: {
                    first: pageSize,
                    after: pageInfo.endCursor,
                    pageNumber
                  },
                  updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) {
                      return prev;
                    }
                    const newRepositories = [
                      ...prev.user.repositories.nodes,
                      ...fetchMoreResult.user.repositories.nodes
                    ];

                    return {
                      user: {
                        ...prev.user,
                        repositories: {
                          ...prev.user.repositories,
                          nodes: newRepositories,
                          pageInfo: fetchMoreResult.user.repositories.pageInfo
                        }
                      }
                    };
                  }
                })
              }
            >
              <>
                <h1>Repositórios</h1>
                {repos.map(item => (
                  <div key={item.id}>
                    <Divider />
                    <Repository data={item} />
                  </div>
                ))}
              </>
            </InfiniteScroll>
          );
        }}
      </Query>
    </Container>
  </BaseView>
);

export default RepositoryList;
