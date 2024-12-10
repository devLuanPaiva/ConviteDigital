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
});
