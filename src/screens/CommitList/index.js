import React, { useState, useEffect } from 'react';
import { Query } from 'react-apollo';
import InfiniteScroll from 'react-infinite-scroller';

import { LIST_COMMITS } from '../../services/repositories';
import { Container } from './styles';
import BaseView from '../../components/BaseView';
import Commit from '../../containers/Commit';

const pageSize = 20;

const CommitList = ({ match, history }) => {
  const [repository, setRepository] = useState(null);
  useEffect(() => {
    setRepository(match.params && match.params.repository);
  }, [match, history]);

  if (repository) {
    return (
      <BaseView>
        <Container>
          <Query
            query={LIST_COMMITS}
            variables={{ repoName: repository, first: pageSize, after: null }}
          >
            {({ data, loading, error, fetchMore }) => {
              if (loading) {
                return <div />;
              }
              if (error || !data) {
                return <div />;
              }

              const commits = data.repository.ref.target.history.edges;
              const pageInfo = data.repository.ref.target.history.pageInfo;

              return (
                <InfiniteScroll
                  pageStart={1}
                  useWindow={false}
                  hasMore={pageInfo.hasNextPage}
                  loadMore={pageNumber =>
                    fetchMore({
                      variables: {
                        repoName: 'marvel-app',
                        first: pageSize,
                        after: pageInfo.endCursor,
                        pageNumber
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (!fetchMoreResult) {
                          return prev;
                        }
                        const newCommits = [
                          ...prev.repository.ref.target.history.edges,
                          ...fetchMoreResult.repository.ref.target.history.edges
                        ];

                        return {
                          repository: {
                            ...prev.repository,
                            ref: {
                              ...prev.repository.ref,
                              target: {
                                ...prev.repository.ref.target,
                                history: {
                                  ...prev.repository.ref.target.history,
                                  edges: newCommits,
                                  pageInfo:
                                    fetchMoreResult.repository.ref.target
                                      .history.pageInfo
                                }
                              }
                            }
                          }
                        };
                      }
                    })
                  }
                >
                  <>
                    <h1>Commits</h1>
                    {commits.map(item => (
                      <Commit key={item.id} data={item} />
                    ))}
                  </>
                </InfiniteScroll>
              );
            }}
          </Query>
        </Container>
      </BaseView>
    );
  }
  return <div />;
};

export default CommitList;
