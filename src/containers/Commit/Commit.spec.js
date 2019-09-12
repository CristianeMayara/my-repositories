import React from 'react';
import { render } from '@testing-library/react';
import Commit from '.';

describe('Commit component', () => {
  it('should render the component', () => {
    const component = createComponent();

    expect(component).toBeDefined();
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    data: { node: {} },
    ...props
  };

  return render(<Commit {...defaultProps} />);
}
