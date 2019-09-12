import React from 'react';
import { render } from '@testing-library/react';
import Divider from '.';

describe('Divider component', () => {
  it('should render the component', () => {
    const component = createComponent();

    expect(component).toBeDefined();
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    ...props
  };

  return render(<Divider {...defaultProps} />);
}
