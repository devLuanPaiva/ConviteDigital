import { Password } from "../utils";
describe("Password", () => {
  it("should generate a password with the default size of 15 characters", () => {
    const password = Password.new();
    expect(password.length).toBe(15);
  });
  it("should generate a password with a custom size", () => {
    const customSize = 20;
    const password = Password.new(customSize);
    expect(password).toHaveLength(customSize);
  });
  it("should generate a password containing only allowed characters", () => {
    const allowedCharacters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|\\:;\"'<>,.?/~`";
    const password = Password.new(50);

    for (const char of password) {
      expect(allowedCharacters).toContain(char);
    }
  });
  it("should generate different passwords on consecutive calls", () => {
    const password1 = Password.new();
    const password2 = Password.new();
    expect(password1).not.toEqual(password2);
  });
  it("should return an empty string if size is zero", () => {
    const password = Password.new(0);
    expect(password).toBe("");
  });
});
