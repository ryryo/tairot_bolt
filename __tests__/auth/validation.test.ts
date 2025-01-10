import { validateAuthPassword } from "@/lib/auth/utils/validation";
import { AUTH_ERRORS } from "@/lib/auth/constants";

describe("Auth Validation", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...originalEnv };
    process.env.NEXT_PUBLIC_AUTH_PASSWORD = "testpass123";
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("should validate correct password", () => {
    const result = validateAuthPassword("testpass123");
    expect(result.valid).toBe(true);
    expect(result.error).toBeUndefined();
  });

  it("should reject incorrect password", () => {
    const result = validateAuthPassword("wrongpass");
    expect(result.valid).toBe(false);
    expect(result.error).toBe(AUTH_ERRORS.INVALID_PASSWORD);
  });

  it("should handle empty password", () => {
    const result = validateAuthPassword("");
    expect(result.valid).toBe(false);
    expect(result.error).toBe(AUTH_ERRORS.MISSING_PASSWORD);
  });

  it("should handle missing environment variable", () => {
    delete process.env.NEXT_PUBLIC_AUTH_PASSWORD;
    const result = validateAuthPassword("anypass");
    expect(result.valid).toBe(false);
    expect(result.error).toBe(AUTH_ERRORS.NOT_CONFIGURED);
  });
});