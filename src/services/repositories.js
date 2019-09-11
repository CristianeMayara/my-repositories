import gql from 'graphql-tag';

export const LIST_REPOSITORIES = gql`
  query Repositories(
    $first: Int!
    $after: String
    $orderBy: RepositoryOrderField!
    $orderDirection: OrderDirection!
  ) {
    user(login: "cristianemayara") {
      repositories(
        first: $first
        after: $after
        orderBy: { field: $orderBy, direction: $orderDirection }
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          name
          description
          isPrivate
          forkCount
          updatedAt
          url
          primaryLanguage {
            name
            color
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

export const LIST_COMMITS = gql`
  query Commits($repoName: String!, $first: Int!, $after: String) {
    repository(name: $repoName, owner: "cristianemayara") {
      ref(qualifiedName: "master") {
        target {
          ... on Commit {
            id
            history(first: $first, after: $after) {
              pageInfo {
                hasNextPage
                endCursor
              }
              edges {
                node {
                  messageHeadline
                  oid
                  url
                  message
                  author {
                    name
                    email
                    date
                    avatarUrl
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
