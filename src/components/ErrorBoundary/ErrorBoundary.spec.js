import React from 'react';
import { cleanup, render, getByText } from '@testing-library/react';
import ErrorBoundary from '.';

const ErrorChild = () => {
  throw new Error('Error thrown from error child');
};

describe('ErrorBoundary component', () => {
  afterEach(cleanup);

  describe('when there is no error', () => {
    it('should render the children', () => {
      const { container } = render(
        <ErrorBoundary>
          <span>Children with no error</span>
        </ErrorBoundary>
      );
      expect(getByText(container, /Children with no error/i)).toBeTruthy();
    });
  });

  describe('when there is an error', () => {
    it('should render the error message', () => {
      const { container } = render(
        <ErrorBoundary>
          <ErrorChild />
        </ErrorBoundary>
      );
      expect(getByText(container, /Algo deu errado./i)).toBeTruthy();
    });
  });
});
