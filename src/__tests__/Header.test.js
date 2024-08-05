import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article"; // Ensure this path is correct

test("renders a <article> element", () => {
  render(<Article />);
  const articleElement = screen.getByRole('article');
  expect(articleElement).toBeInTheDocument();
});
