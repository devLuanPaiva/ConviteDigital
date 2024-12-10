import { Password } from "../utils";
describe("Password", () => {
  it("should generate a password with the default size of 15 characters", () => {
    const password = Password.new();
    expect(password.length).toBe(15);
  });
  it('should generate a password with a custom size', () => {
    const customSize = 20;
    const password = Password.new(customSize);
    expect(password).toHaveLength(customSize);
  });
  it('should generate a password containing only allowed characters', () => {
    const allowedCharacters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|\\:;"\'<>,.?/~`';
    const password = Password.new(50); 

    for (const char of password) {
      expect(allowedCharacters).toContain(char);
    }
  });
});
