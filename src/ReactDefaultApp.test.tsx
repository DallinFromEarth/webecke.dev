import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDefaultApp from './ReactDefaultApp';

test('renders learn react link', () => {
  render(<ReactDefaultApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
