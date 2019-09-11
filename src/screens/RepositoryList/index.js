import React, { useState } from 'react';
import { Query } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';

import { LIST_REPOSITORIES } from '../../services/repositories';
import { Container, Title } from './styles';
import BaseView from '../../components/BaseView';
import Divider from '../../components/Divider';
import Repository from '../../containers/Repository';
import SortDropdown from '../../containers/SortDropdown';

const pageSize = 20;

const RepositoryList = ({ history }) => {
  const [sort, setSort] = useState({
    sortBy: 'CREATED_AT',
    orderDirection: 'DESC'
  });
  const handleSort = newFields => {
    return setSort({ ...sort, ...newFields });
  };

  return (
    <BaseView>
      <Container>
        <Query
          query={LIST_REPOSITORIES}
          variables={{
            first: pageSize,
            after: null,
            orderBy: sort.sortBy,
            orderDirection: sort.orderDirection
          }}
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
                      orderBy: sort.sortBy,
                      orderDirection: sort.orderDirection,
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
                  <Title>
                    <h1>Repositórios</h1>
                    <div style={{ flexGrow: 1 }} />
                    <SortDropdown handleSort={handleSort} />
                  </Title>
                  {repos.map(item => (
                    <div key={item.id}>
                      <Divider />
                      <Repository history={history} data={item} />
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
};

export default RepositoryList;
