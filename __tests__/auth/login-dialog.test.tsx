import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LoginDialog } from "@/components/auth/login-dialog";

const mockRouter = {
  push: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
}));

describe("LoginDialog", () => {
  const mockOnClose = jest.fn();
  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    redirectPath: "/tarot/reading",
    initialQuestion: "test question",
  };

  beforeEach(() => {
    jest.resetModules();
    process.env.NEXT_PUBLIC_AUTH_PASSWORD = "testpass123";
    mockRouter.push.mockClear();
    mockOnClose.mockClear();
  });

  it("should render login dialog", () => {
    render(<LoginDialog {...defaultProps} />);
    expect(screen.getByPlaceholderText(/パスワード/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ログイン/i })).toBeInTheDocument();
  });

  it("should handle successful login", async () => {
    render(<LoginDialog {...defaultProps} />);
    
    const input = screen.getByPlaceholderText(/パスワード/i);
    fireEvent.change(input, { target: { value: "testpass123" } });
    
    const submitButton = screen.getByRole("button", { name: /ログイン/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockOnClose).toHaveBeenCalled();
      expect(mockRouter.push).toHaveBeenCalledWith("/tarot/reading?q=test%20question");
    });
  });

  it("should show error message for incorrect password", async () => {
    render(<LoginDialog {...defaultProps} />);
    
    const input = screen.getByPlaceholderText(/パスワード/i);
    fireEvent.change(input, { target: { value: "wrongpass" } });
    
    const submitButton = screen.getByRole("button", { name: /ログイン/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/パスワードが正しくありません/i)).toBeInTheDocument();
    });
  });
});