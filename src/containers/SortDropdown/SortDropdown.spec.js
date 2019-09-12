import React from 'react';
import { render } from '@testing-library/react';
import SortDropdown from '.';

describe('SortDropdown component', () => {
  it('should render the component', () => {
    const component = createComponent();

    expect(component).toBeDefined();
  });
});

function createComponent(props = {}) {
  const defaultProps = {
    ...props
  };

  return render(<SortDropdown {...defaultProps} />);
}
