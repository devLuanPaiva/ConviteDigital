import { Alias } from "../utils";
describe("Alias", () => {
  it("should replace spaces with hyphens and convert to lowercase", () => {
    const input = 'Hello world!';
    const output = Alias.format(input);
    expect(output).toBe('hello-world!');
  });
});
