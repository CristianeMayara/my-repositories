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
