import React from 'react';
import { render } from '@testing-library/react';
import BaseView from '.';

describe('BaseView component', () => {
  it('should render the component', () => {
    const component = createComponent();

    expect(component).toBeDefined();
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    children: <div />,
    ...props
  };

  return render(<BaseView {...defaultProps} />);
}
