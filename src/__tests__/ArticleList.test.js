import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ArticleList from "../components/ArticleList"; // Ensure this path is correct

test("renders a list of articles", () => {
  // Sample data to test
  const posts = [
    {
      id: 1,
      title: 'Components 101',
      date: 'December 15, 2020',
      preview: 'Setting up the building blocks of your site',
      minutes: 5
    },
    {
      id: 2,
      title: 'React Data Flow',
      date: 'December 11, 2020',
      preview: 'Passing props is never passé',
      minutes: 15
    },
    {
      id: 3,
      title: 'Function vs Class Components',
      date: 'December 1, 2020',
      preview: 'React, meet OOJS.',
      minutes: 47
    }
  ];

  render(<ArticleList posts={posts} />);

  // Check if articles are rendered
  posts.forEach(post => {
    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.preview)).toBeInTheDocument();
    expect(screen.getByText(post.date)).toBeInTheDocument();
    expect(screen.getByText(`${post.minutes} minutes read`)).toBeInTheDocument();
  });
});

