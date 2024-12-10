import Guest from '../model/Guests.model';

export default function validateGuest(guest: Partial<Guest>): string[] {
  const errors: string[] = [];

  if (!guest.name) {
    errors.push('Nome é obrigatório');
  }

  if (!guest.email || !/^\S+@\S+\.\S+$/.test(guest.email)) {
    errors.push('Email inválido');
  }

  if (
    guest.hasCompanions &&
    (!guest.numberOfCompanions || guest.numberOfCompanions < 1)
  ) {
    errors.push('Número de acompanhantes inválido');
  }

  return errors;
}
