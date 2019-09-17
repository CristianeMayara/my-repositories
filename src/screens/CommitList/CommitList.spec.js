import React from 'react';
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
      const {
        queryByTestId,
        queryByText,
        getByTestId,
        getByText
      } = createComponent();

      await waitForElement(() => queryByText('my-repositories'));

      fireEvent.click(getByTestId('repository-title'));

      expect(queryByTestId('repository-screen')).not.toBeInTheDocument();
      expect(getByTestId('commit-screen')).toBeInTheDocument();

      await wait(() =>
        expect(queryByTestId('loading-icon')).not.toBeInTheDocument()
      );

      expect(getByTestId('commit-list-title')).toBeInTheDocument();
      expect(getByText('Adding page url to the app')).toBeInTheDocument();
      expect(getByText('Adding gif on readme file')).toBeInTheDocument();
    });
  });
});

function createComponent(props = {}) {
  const defaultProps = { ...props };

  return render(
    <MockedProvider mocks={[repositories, commits]} addTypename={false}>
      <App {...defaultProps} />
    </MockedProvider>
  );
}
