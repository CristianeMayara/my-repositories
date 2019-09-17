import { LIST_REPOSITORIES, LIST_COMMITS } from '../src/services/repositories';

const repositories = {
  request: {
    query: LIST_REPOSITORIES,
    variables: {
      first: 20,
      after: null,
      orderBy: 'CREATED_AT',
      orderDirection: 'DESC'
    }
  },
  result: {
    data: {
      user: {
        repositories: {
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'Y3Vyc29yOnYyOpK5MjAxOS0wMy0yNFQxNTozNjo1OS0wMzowMM4Kk7uL'
          },
          nodes: [
            {
              id: 'MDEwOlJlcG9zaXRvcnkyMDc0ODYxMDY=',
              name: 'my-repositories',
              description: null,
              isPrivate: false,
              forkCount: 0,
              updatedAt: '2019-09-11T06:53:35Z',
              url: 'https://github.com/CristianeMayara/my-repositories',
              primaryLanguage: {
                name: 'JavaScript',
                color: '#f1e05a'
              },
              licenseInfo: null,
              stargazers: {
                totalCount: 0
              }
            }
          ]
        }
      }
    }
  }
};

const sortedRepositories = {
  request: {
    query: LIST_REPOSITORIES,
    variables: {
      first: 20,
      after: null,
      orderBy: 'STARGAZERS',
      orderDirection: 'DESC'
    }
  },
  result: {
    data: {
      user: {
        repositories: {
          pageInfo: {
            hasNextPage: true,
            endCursor:
              'Y3Vyc29yOnYyOpK5MjAxOS0wMy0yNFQxNTozNjo1OS0wMzowMM4Kk7uL'
          },
          nodes: [
            {
              id: 'MDEwOlJlcG9zaXRvcnkyMDc0ODYxMDY=',
              name: 'my-repositories',
              description: null,
              isPrivate: false,
              forkCount: 0,
              updatedAt: '2019-09-11T06:53:35Z',
              url: 'https://github.com/CristianeMayara/my-repositories',
              primaryLanguage: {
                name: 'JavaScript',
                color: '#f1e05a'
              },
              licenseInfo: null,
              stargazers: {
                totalCount: 0
              }
            }
          ]
        }
      }
    }
  }
};

const commits = {
  request: {
    query: LIST_COMMITS,
    variables: { first: 20, after: null, repoName: 'my-repositories' }
  },
  result: {
    data: {
      repository: {
        ref: {
          target: {
            id:
              'MDY6Q29tbWl0MTU3MTk5MjQxOjEyMzM0YzRkYjBiNTg4ZmVlNTRjYjcwZGRhODA0NmUyOGM0MjczODg=',
            history: {
              pageInfo: {
                hasNextPage: true,
                endCursor: '12334c4db0b588fee54cb70dda8046e28c427388 19'
              },
              edges: [
                {
                  node: {
                    messageHeadline: 'Adding page url to the app',
                    oid: '12334c4db0b588fee54cb70dda8046e28c427388',
                    url:
                      'https://github.com/CristianeMayara/marvel-app/commit/12334c4db0b588fee54cb70dda8046e28c427388',
                    message: 'Adding page url to the app',
                    author: {
                      name: 'Cristiane Mayara',
                      email: 'cris.mayara@gmail.com',
                      date: '2019-04-07T01:48:52.000-03:00',
                      avatarUrl:
                        'https://avatars0.githubusercontent.com/u/7388817?v=4'
                    }
                  }
                },
                {
                  node: {
                    messageHeadline: 'Adding gif on readme file',
                    oid: 'dfc0892c48c839f7141c763e77a755a509bf3d4e',
                    url:
                      'https://github.com/CristianeMayara/marvel-app/commit/dfc0892c48c839f7141c763e77a755a509bf3d4e',
                    message: 'Adding gif on readme file',
                    author: {
                      name: 'Cristiane Mayara',
                      email: 'cris.mayara@gmail.com',
                      date: '2019-04-07T01:19:53.000-03:00',
                      avatarUrl:
                        'https://avatars0.githubusercontent.com/u/7388817?v=4'
                    }
                  }
                }
              ]
            }
          }
        }
      }
    }
  }
};

export { repositories, sortedRepositories, commits };
