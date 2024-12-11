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
  it("should correctly calculate hasCompanions based on inputs", () => {
    const partialGuest = {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      confirmed: true,
      hasCompanions: true,
      numberOfCompanions: 2,
    };
    const guest = complementGuest(partialGuest);
    expect(guest.hasCompanions).toBe(true);
    expect(guest.numberOfCompanions).toBe(2);
  });
  it("should set numberOfCompanions to 0 if hasCompanions is false", () => {
    const partialGuest = {
      name: "Jack Doe",
      email: "jack.doe@example.com",
      confirmed: true,
      hasCompanions: false,
      numberOfCompanions: 5,
    };
    const guest = complementGuest(partialGuest);
    expect(guest.numberOfCompanions).toBe(0);
  });
});
