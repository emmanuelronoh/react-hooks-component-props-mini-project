import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About"; // Ensure this path is correct

test("renders a <aside> element", () => {
  render(<About />);
  const asideElement = screen.getByRole('complementary');
  expect(asideElement).toBeInTheDocument();
});
