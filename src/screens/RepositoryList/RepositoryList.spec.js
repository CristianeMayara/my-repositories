import React, { Suspense } from 'react';
import { MockedProvider } from '@apollo/react-testing';
import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from '@testing-library/react';
import wait from 'waait';
import App from '../../App';
import {
  sortedRepositories,
  repositories,
  commits
} from '../../../__mocks__/queries';

describe('RepositoryList component', () => {
  afterEach(cleanup);

  describe('when create the component', () => {
    it('should load a list of repositories', async () => {
      const { queryByTestId, getByText } = createComponent();

      await waitForElement(() => queryByTestId('repository-list-title'));

      expect(getByText('my-repositories')).toBeInTheDocument();
    });
  });

  describe('when click on sort by startgazers button', () => {
    it('should sort the list of repositories', async () => {
      const { queryByTestId, getByTestId, getByText } = createComponent();

      await waitForElement(() => queryByTestId('repository-list-title'));

      fireEvent.click(getByText(/Mais estrelas/i));

      await wait(() =>
        expect(queryByTestId('loading-icon')).not.toBeInTheDocument()
      );

      expect(getByTestId('repository-list-title')).toBeInTheDocument();
      expect(getByText('my-repositories')).toBeInTheDocument();
    });
  });
});

function createComponent(props = {}) {
  const defaultProps = { ...props };

  return render(
    <MockedProvider
      mocks={[repositories, sortedRepositories, commits]}
      addTypename={false}
    >
      <Suspense fallback={<div data-testid="suspense" />}>
        <App {...defaultProps} />
      </Suspense>
    </MockedProvider>
  );
}
