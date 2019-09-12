import React from 'react';
import { render } from '@testing-library/react';
import Repository from '.';

describe('Repository component', () => {
  it('should render the component', () => {
    const component = createComponent();

    expect(component).toBeDefined();
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    data: {},
    history: {},
    ...props
  };

  return render(<Repository {...defaultProps} />);
}
