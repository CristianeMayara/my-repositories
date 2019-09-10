import gql from 'graphql-tag';

export const LIST_REPOSITORIES = gql`
  query Repositories {
    user(login: "cristianemayara") {
      repositories(first: 25) {
        pageInfo {
          hasNextPage
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
  query Commits($repoName: String!) {
    repository(name: $repoName, owner: "cristianemayara") {
      ref(qualifiedName: "master") {
        target {
          ... on Commit {
            id
            history(first: 25) {
              pageInfo {
                hasNextPage
              }
              edges {
                node {
                  messageHeadline
                  oid
                  message
                  author {
                    name
                    email
                    date
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
