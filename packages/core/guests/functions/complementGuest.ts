import Guest from '../model/Guests.model';
import validateGuest from './validateGuest';

export default function complementGuest(guest: Partial<Guest>): Guest {
  const errors = validateGuest(guest);

  if (errors.length > 0) {
    throw new Error(errors.join(', '));
  }
  const numberOfCompanions = guest.numberOfCompanions ?? 0;
  const hasCompanions =
    guest.hasCompanions && guest.confirmed && numberOfCompanions > 0;
  const guestUpdated = {
    ...guest,
    numberOfCompanions: hasCompanions ? numberOfCompanions : 0,
    hasCompanions: hasCompanions,
  };

  return guestUpdated as Guest;
}
