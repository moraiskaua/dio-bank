import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
  constructor(accountNumber: number, name: string, balance: number) {
    super(accountNumber, name, balance);
  }
}
