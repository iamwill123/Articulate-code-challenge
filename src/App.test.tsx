import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a cup of Joe text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/A cup of Joe/i);
  expect(textElement).toBeInTheDocument();
});
