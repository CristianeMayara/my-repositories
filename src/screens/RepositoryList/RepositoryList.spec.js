import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, cleanup } from '@testing-library/react';
import wait from 'waait';
import RepositoryList from '.';
import { repositories } from '../../../__mocks__/queries';

describe('RepositoryList component', () => {
  afterEach(cleanup);

  it('should load a list of repositories', async () => {
    const { queryByTestId, getByTestId, getByText } = createComponent();

    await wait(() =>
      expect(queryByTestId('loading-icon')).not.toBeInTheDocument()
    );

    expect(getByTestId('list-title')).toBeInTheDocument();
    expect(getByTestId('repository-screen')).toBeInTheDocument();
    expect(getByText('my-repositories')).toBeInTheDocument();
    expect(getByText('movies-app')).toBeInTheDocument();
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    history: {},
    ...props
  };

  return render(
    <MockedProvider mocks={[repositories]} addTypename={false}>
      <RepositoryList {...defaultProps} />
    </MockedProvider>
  );
}
