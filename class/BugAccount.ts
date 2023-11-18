import { DioAccount } from "./DioAccount";

export class BugAccount extends DioAccount {
  constructor(accountNumber: number, name: string, balance: number) {
    super(accountNumber, name, balance);
  }

  deposit(amount: number): void {
    this.setBalance(this.getBalance() + (amount + 10));
  }
}
