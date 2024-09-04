import { screen, render } from "@testing-library/react";
import App from "./App";

test("React app case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);
  const title = screen.getByTitle(/cute panda/i);
  expect(text).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("Testing input box", () => {
  render(<App />);
  const checkInput = screen.getByRole("textbox");
  const checkPlaceholder = screen.getByPlaceholderText("Enter UserName");
  expect(checkInput).toBeInTheDocument();
  expect(checkPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "userName");
  expect(checkInput).toHaveAttribute("id", "userId");
});
