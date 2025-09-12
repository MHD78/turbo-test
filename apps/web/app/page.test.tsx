import React from "react";

import { render, screen } from "@testing-library/react";
import Home from "./page";

test("renders heading", () => {
  render(<Home />);
  const buttom = screen.getByRole("button");
  expect(buttom).toBeInTheDocument();
  expect(buttom).toHaveTextContent("Open alert");
});
