import { Id } from "../utils";
import { v4 as uuid } from "uuid";

describe("Id", () => {
  it("should generate a valid UUID", () => {
    const id = Id.new();
    expect(Id.valid(id)).toBe(true);
  });
  it("should generate a different UUID on consecutive calls", () => {
    const id1 = Id.new();
    const id2 = Id.new();
    expect(id1).not.toEqual(id2);
  });
  it("should return false for an invalid UUID", () => {
    const invalidId = "invalid-uuid";
    expect(Id.valid(invalidId)).toBe(false);
  });
});
