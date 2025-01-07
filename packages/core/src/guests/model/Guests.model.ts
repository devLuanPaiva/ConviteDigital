export default interface Guest {
  id: string;
  guestName: string;
  email: string;
  confirmed: boolean;
  hasCompanions: boolean;
  numberOfCompanions: number;
}
