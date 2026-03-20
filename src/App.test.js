import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./router/AppRouter", () => () => (
  <div>EDEN, notre jardin digital</div>
));

test("renders the Eden home content", () => {
  render(<App />);
  expect(screen.getByText(/EDEN, notre jardin digital/i)).toBeInTheDocument();
});
