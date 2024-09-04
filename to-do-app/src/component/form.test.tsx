import { render, screen } from "@testing-library/react";
import Form from "./Form";

test("renders learn react link", () => {
  render(<Form />);
  const btn = screen.getByRole("button", { name: "Add" });
  expect(btn).toBeInTheDocument();
});
