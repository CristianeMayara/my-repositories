import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, cleanup } from '@testing-library/react';
import wait from 'waait';
import App from '../../App';
import { repositories, commits } from '../../../__mocks__/queries';

describe('RepositoryList component', () => {
  afterEach(cleanup);

  describe('when create the component', () => {
    it('should load a list of repositories', async () => {
      const { queryByTestId, getByTestId, getByText } = createComponent();

      await wait(() =>
        expect(queryByTestId('loading-icon')).not.toBeInTheDocument()
      );

      expect(getByTestId('list-title')).toBeInTheDocument();
      expect(getByText('my-repositories')).toBeInTheDocument();
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
