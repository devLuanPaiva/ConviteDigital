import { Guest } from "../../guests";

export default interface Event{
    id: string;
    alias: string;
    password: string;
    name: string;
    description: string;
    date: Date;
    location: string;
    image: string;
    backgroundImage: string;
    expectedAudience: number;
    guests: Guest[]
}