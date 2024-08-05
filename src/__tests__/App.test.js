// src/__tests__/App.test.js
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended matchers
import App from '../App'; // Adjust this path based on your project structure

test('renders the App component', () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
})