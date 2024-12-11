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
});
