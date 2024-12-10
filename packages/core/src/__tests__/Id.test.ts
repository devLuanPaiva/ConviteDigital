import { Id } from "../utils";
import { v4 as uuid } from "uuid";

describe("Id", () => {
    it("should generate a valid UUID", () => {
        const id = Id.new();
        expect(Id.valid(id)).toBe(true)
    })
})