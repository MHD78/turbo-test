import { render, screen } from "@testing-library/react";
import SignupForm from "../components/SignupForm";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("SignupForm", () => {
  it("should face error for empty username field", async () => {
    render(<SignupForm />);
    const formSubmit = screen.getByRole("button", { name: "Create Account" });
    await userEvent.click(formSubmit);
    const errorMessage = screen.getByText("First name is required");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should not face error for since username field is filled", async () => {
    render(<SignupForm />);
    const formSubmit = screen.getByRole("button", { name: "Create Account" });
    const usernameInput = screen.getByPlaceholderText("Enter your first name");
    await userEvent.type(usernameInput, "John");
    await userEvent.click(formSubmit);
    const errorMessage = screen.queryByText("First name is required");
    expect(errorMessage).not.toBeInTheDocument();
  });
});
