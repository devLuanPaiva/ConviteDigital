import { DateFormatter } from "../utils";

describe("DateFormatter", () => {
  it("should format a given Date object correctly", () => {
    const date = new Date(2024, 11, 11, 14, 30);
    const formattedDate = DateFormatter.format(date);
    expect(formattedDate).toBe('2024-12-11T14:30');
  });
});
