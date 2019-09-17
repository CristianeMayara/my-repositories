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
import { repositories, commits } from '../../../__mocks__/queries';

describe('CommitList component', () => {
  afterEach(cleanup);

  describe('when click on a repository item', () => {
    it('should redirect to repository`screen and load data', async () => {
      const { queryByTestId, getByTestId, getByText } = createComponent();

      await waitForElement(() => getByText('my-repositories'));

      fireEvent.click(getByTestId('repository-title'));

      await waitForElement(() => getByTestId('commit-list-title'));

      expect(queryByTestId('repository-screen')).not.toBeInTheDocument();
      expect(getByTestId('commit-screen')).toBeInTheDocument();
      expect(getByText('Adding page url to the app')).toBeInTheDocument();
      expect(getByText('Adding gif on readme file')).toBeInTheDocument();
    });
  });
});

function createComponent(props = {}) {
  const defaultProps = { ...props };

  return render(
    <MockedProvider mocks={[repositories, commits]} addTypename={false}>
      <Suspense fallback={<div data-testid="suspense" />}>
        <App {...defaultProps} />
      </Suspense>
    </MockedProvider>
  );
}
