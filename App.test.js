import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

console.log(App)
test('renders slide controls and initial slide content', () => {
  render(<App />);

  // Check if the slide controls are rendered
  const previousButton = screen.getByText('Previous');
  const nextButton = screen.getByText('Next');
  const restartButton = screen.getByText('Restart');

  expect(previousButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
  expect(restartButton).toBeInTheDocument();

  // Check if the initial slide content is rendered
  const slideTitle = screen.getByText(/title/i);
  const slideUrl = screen.getByText(/url/i);

  expect(slideTitle).toBeInTheDocument();
  expect(slideUrl).toBeInTheDocument();
});

// Add more test cases as needed to cover different interactions and edge cases.
