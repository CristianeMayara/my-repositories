import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render } from '@testing-library/react';
import wait from 'waait';
import CommitList from '.';
import { commits } from '../../../__mocks__/queries';

describe('CommitList component', () => {
  it('should render the component', async () => {
    const component = createComponent();

    await wait(0);

    expect(component).toBeDefined();
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    history: {},
    match: {},
    ...props
  };

  return render(
    <MockedProvider mocks={[commits]} addTypename={false}>
      <CommitList {...defaultProps} />
    </MockedProvider>
  );
}
