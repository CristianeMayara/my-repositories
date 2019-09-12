import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, cleanup } from '@testing-library/react';
import wait from 'waait';
import RepositoryList from '.';
import { repositories } from '../../../__mocks__/queries';

describe('RepositoryList component', () => {
  afterEach(cleanup);
  it('should render the component', async () => {
    const component = createComponent();

    await wait(0);

    expect(component).toBeDefined();
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
