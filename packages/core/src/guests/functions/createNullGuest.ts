import { Id } from "../../utils";
import Guest from "../model/Guests.model";

export default function createNullGuest(): Partial<Guest>{
    return{
        id: Id.new(),
        name: "",
        email: "",
        confirmed: true,
        hasCompanions: false,
        numberOfCompanions: 0,
    }
}