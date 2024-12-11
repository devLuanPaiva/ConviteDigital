import { complementGuest } from "../guests";

describe("complement guest", () => {
  it("should throw an error if the guest is invalid", () => {
    const invalidGuest = { name: "", email: "" };
    expect(() => complementGuest(invalidGuest)).toThrow(
      "Nome é obrigatório, Email inválido"
    );
  });
  it("should set default values for numberOfCompanions and hasCompanions", () => {
    const partialGuest = {
      name: "John Doe",
      email: "john.doe@example.com",
      confirmed: true,
      hasCompanions: false,
    };
    const guest = complementGuest(partialGuest);
    expect(guest.numberOfCompanions).toBe(0);
    expect(guest.hasCompanions).toBe(false);
  });
});
