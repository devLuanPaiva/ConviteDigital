import { Id } from "../../utils";
import Event from "../model/Event.model";

export function createNullEvent(): Partial<Event>{
    return {
        id: Id.new(),
        alias: "",
        password: "",
        name: "",
        description: "",
        date: new Date(),
        location: "",
        image: "",
        expectedAudience: 1,
    };
}