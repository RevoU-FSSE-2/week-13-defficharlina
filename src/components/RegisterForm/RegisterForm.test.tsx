import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import RegisterForm from ".";

describe("Test register form", () => {
  const mockProps = jest.fn();
  test("Title render correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Register Page");
    expect(title).toBeDefined();
  });

  test("Label name render correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Name");
    expect(title).toBeDefined();
  });

  test("Label email render correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Email");
    expect(title).toBeDefined();
  });

  test("Label password render correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Password");
    expect(title).toBeDefined();
  });

  test("Button submit render correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const title = screen.getByText("Submit");
    expect(title).toBeDefined();
  });

  test("onSubmit for register page works correctly", async () => {
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={mockProps} />
      </BrowserRouter>
    );
    const nameInput = screen.getByPlaceholderText("Input your name");
    const emailInput = screen.getByPlaceholderText("Input your email");
    const passwordInput = screen.getByPlaceholderText("Input your password");
    const submitButton = screen.getByText("Submit");
    expect(nameInput).toBeDefined();
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();

    fireEvent.change(nameInput, { target: { value: "dita" } });
    fireEvent.change(emailInput, { target: { value: "dita@gmail.com" } });
    fireEvent.change(passwordInput, { target: { value: "Dita1234" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockProps).toHaveBeenCalledTimes(1);
      expect(mockProps).toHaveBeenCalledWith({
        name: "dita",
        email: "dita@gmail.com",
        password: "Dita1234",
      });
    });
  });
});