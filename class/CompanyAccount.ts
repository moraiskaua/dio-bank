import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(accountNumber: number, name: string, balance: number) {
    super(accountNumber, name, balance);
  }

  getLoan(amount: number): void {
    if (this.getStatus()) {
      this.setBalance(this.getBalance() + amount);
    }
  }
}
