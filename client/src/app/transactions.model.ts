export interface User {
  name: string;
  iban: string;
}

export interface Transaction {
  id: number;
  timestamp: string;
  amount: number;
  currencyCode: string;
  currencyRate?: number;
  description: string;
  otherParty?: User
}

export interface Day {
  id: string;
  transactions: Transaction[]
}

export type Days = Day[];

export interface TransactionData {
  days: Days
}
