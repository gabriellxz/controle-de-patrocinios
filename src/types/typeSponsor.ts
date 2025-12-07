export type SponsorshipStatus = 'approved' | 'pending' | 'rejected';

export interface Sponsorship {
  id: string;
  sponsorName: string;
  eventName: string;
  value: number;
  status: SponsorshipStatus;
  conditions: string;
  expectedResults: string;
  startDate: string;
  endDate: string;
  contactEmail: string;
  category: string;
}
