import { Alias } from "../utils";
describe("Alias", () => {
  it("should replace spaces with hyphens and convert to lowercase", () => {
    const input = "Hello world";
    const output = Alias.format(input);
    expect(output).toBe("hello-world");
  });
  it("should handle strings with multiple spaces correctly", () => {
    const input = "  Multiple   Spaces   ";
    const output = Alias.format(input);
    expect(output).toBe("--multiple---spaces---");
  });
  it("should return an empty string if input is empty", () => {
    const input = "";
    const output = Alias.format(input);
    expect(output).toBe("");
  });
  it("should not modify strings without spaces and already in lowercase", () => {
    const input = "already-formatted";
    const output = Alias.format(input);
    expect(output).toEqual(input);
  });
  it("should handle strings with special characters", () => {
    const input = "Special #Characters!";
    const output = Alias.format(input);
    expect(output).toBe("special-#characters!");
  });
  it("should handle strings with numbers", () => {
    const input = "String with 123 numbers";
    const output = Alias.format(input);
    expect(output).toBe("string-with-123-numbers");
  });
});
