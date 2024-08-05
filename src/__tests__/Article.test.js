import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Article from "../components/Article"; // Ensure path is correct

test("renders the article with correct content", () => {
  const article = {
    title: 'Components 101',
    date: 'December 15, 2020',
    preview: 'Setting up the building blocks of your site',
    minutes: 5
  };

  render(<Article {...article} />);

  expect(screen.getByText(article.title)).toBeInTheDocument();
  expect(screen.getByText(article.preview)).toBeInTheDocument();
  expect(screen.getByText(article.date)).toBeInTheDocument();
  expect(screen.getByText(`${article.minutes} minutes read`)).toBeInTheDocument();
});
