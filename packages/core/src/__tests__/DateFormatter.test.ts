import { DateFormatter } from "../utils";

describe("DateFormatter", () => {
  it("should format a given Date object correctly", () => {
    const date = new Date(2024, 11, 11, 14, 30);
    const formattedDate = DateFormatter.format(date);
    expect(formattedDate).toBe("2024-12-11T14:30");
  });
  it("should format the current date if no date is provided", () => {
    const mockDate = new Date(2024, 11, 11, 14, 30); 
    jest
      .spyOn(global, "Date")
      .mockImplementation(() => mockDate);

    const formattedDate = DateFormatter.format(undefined as unknown as Date);
    expect(formattedDate).toBe("2024-12-11T14:30");

    jest.restoreAllMocks(); 
  });
});
