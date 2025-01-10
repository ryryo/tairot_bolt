import { renderHook, act } from "@testing-library/react";
import { useAuth } from "@/lib/auth/hooks/use-auth";

const mockRouter = {
  replace: jest.fn(),
};

jest.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
}));

describe("useAuth Hook", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    process.env.NEXT_PUBLIC_AUTH_PASSWORD = "testpass123";
    mockRouter.replace.mockClear();
    sessionStorage.clear();
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("should handle successful login", () => {
    const { result } = renderHook(() => useAuth());
    
    act(() => {
      const success = result.current.login("testpass123");
      expect(success).toBe(true);
      expect(result.current.isAuthenticated).toBe(true);
    });
  });

  it("should handle failed login", () => {
    const { result } = renderHook(() => useAuth());
    
    act(() => {
      const success = result.current.login("wrongpass");
      expect(success).toBe(false);
      expect(result.current.isAuthenticated).toBe(false);
    });
  });

  it("should handle logout", () => {
    const { result } = renderHook(() => useAuth());
    
    act(() => {
      result.current.login("testpass123");
      result.current.logout();
      expect(result.current.isAuthenticated).toBe(false);
      expect(mockRouter.replace).toHaveBeenCalledWith("/");
    });
  });

  it("should validate password correctly", () => {
    const { result } = renderHook(() => useAuth());
    
    expect(result.current.validatePassword("testpass123")).toBe(true);
    expect(result.current.validatePassword("wrongpass")).toBe(false);
  });
});