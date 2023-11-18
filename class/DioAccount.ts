export abstract class DioAccount {
  private readonly accountNumber: number;
  private readonly name: string;
  private balance: number;
  private status: boolean = true;

  constructor(accountNumber: number, name: string, balance: number) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.balance = balance;
  }

  getAccountNumber(): number {
    return this.accountNumber;
  }

  getName(): string {
    return this.name;
  }

  getBalance(): number {
    return this.balance;
  }

  setBalance(balance: number): void {
    this.balance = balance;
  }

  getStatus(): boolean {
    return this.status;
  }

  setStatus(status: boolean): void {
    this.status = status;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (this.status || this.balance >= amount) {
      this.balance -= amount;
    } else {
      throw new Error("Account is inactive or balance is insufficient");
    }
  }
}
