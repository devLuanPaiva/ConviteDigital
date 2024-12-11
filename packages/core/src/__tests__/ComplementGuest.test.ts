import { complementGuest } from "../guests";

describe("complement guest", () => {
  it("should throw an error if the guest is invalid", () => {
    const invalidGuest = { name: "", email: "" };
    expect(() => complementGuest(invalidGuest)).toThrow(
      "Nome é obrigatório, Email inválido"
    );
  });
});
