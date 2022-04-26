export interface Account {
  address: string;
  balance: string;
}
export class Wallet implements Account {
  address: string;
  balance: string;

  constructor(address: string, balance: string) {
    this.address = address;
    this.balance = balance;
  }

  setAddress(address: string) {
    this.address = address;
  }
  setBalance(balance: string) {
    this.balance = balance;
  }
}
export enum WalletPath {
  Home = '/wallet',
}

export const WalletTab = {
  route: WalletPath.Home,
  title: 'Wallet',
};
