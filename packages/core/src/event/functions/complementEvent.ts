import { Id, Password } from '../../utils';
import Event from '../model/Event.model';
import validateEvent from './validateEvent';

export default function complementEvent(partialEvent: Partial<Event>): Event {
  const errors = validateEvent(partialEvent);
  if (errors.length > 0) {
    throw new Error(errors.join(', '));
  }

  const event: Event = {
    ...partialEvent,
    id: partialEvent.id ?? Id.new(),
    password: Password.new(20),
    expectedAudience: +(partialEvent.expectedAudience ?? 1),
  } as Event;

  return event;
}
