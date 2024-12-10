import { Password } from "../utils";
describe("Password", () => {
  it("should generate a password with the default size of 15 characters", () => {
    const password = Password.new();
    expect(password.length).toBe(15);
  });
});
