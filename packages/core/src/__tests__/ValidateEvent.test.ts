import { Event } from "../event";
import validateEvent from "../event/functions/validateEvent";

describe("validate Event", () => {
  it("should return no erros for a valid event", () => {
    const event: Partial<Event> = {
      alias: "sample-alias",
      name: "Sample Event",
      description: "This is a sample event",
      date: new Date(),
      location: "Sample Location",
      expectedAudience: 100,
      image: "image.jpg",
      backgroundImage: "background.jpg",
    };

    const errors = validateEvent(event);
    expect(errors).toEqual([]);
  });
  it("should return errors for missing required fields", () => {
    const event: Partial<Event> = {};
    const errors = validateEvent(event);

    expect(errors).toContain("Alias é obrigatório");
    expect(errors).toContain("Nome é obrigatório");
    expect(errors).toContain("Descrição é obrigatória");
    expect(errors).toContain("Data é obrigatória");
    expect(errors).toContain("Local é obrigatório");
    expect(errors).toContain("Público esperado é obrigatório");
    expect(errors).toContain("Imagem é obrigatória");
    expect(errors).toContain("Imagem de fundo é obrigatória");
  });
});
