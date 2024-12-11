import { Event, complementEvent } from "../event";
import { Id, Password } from "../utils";

jest.mock("../utils", () => ({
  Id: {
    new: jest.fn(() => "mocked-id"),
  },
  Password: {
    new: jest.fn(() => "mocked-password"),
  },
}));

describe("complementEvent", () => {
  it("should complement an event with missing fields", () => {
    const partialEvent: Partial<Event> = {
      alias: "sample-alias",
      name: "Sample Event",
      description: "This is a sample event",
      date: new Date(),
      location: "Sample Location",
      expectedAudience: 100,
      image: "image.jpg",
      backgroundImage: "background.jpg",
    };

    const completedEvent = complementEvent(partialEvent);

    expect(completedEvent.id).toBe("mocked-id");
    expect(completedEvent.password).toBe("mocked-password");
    expect(completedEvent.expectedAudience).toBe(100);
    expect(completedEvent.alias).toBe(partialEvent.alias);
  });
  it("should throw an error if validation fails", () => {
    const partialEvent: Partial<Event> = {};

    expect(() => complementEvent(partialEvent)).toThrow(
      /Alias é obrigatório, Nome é obrigatório, Descrição é obrigatória, Data é obrigatória, Local é obrigatório, Público esperado é obrigatório, Imagem é obrigatória, Imagem de fundo é obrigatória/
    );
  });
});
