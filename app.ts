import { BugAccount } from "./class/BugAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const Joao: PeopleAccount = new PeopleAccount(1, "Joao", 1000);
const DIO: CompanyAccount = new CompanyAccount(1, "DIO", 1000000);
const Jotaro: BugAccount = new BugAccount(1, "Jotaro", 1000);

Joao.deposit(100);
DIO.deposit(100);
Jotaro.deposit(100);

console.log(Joao.getBalance());
console.log(DIO.getBalance());
console.log(Jotaro.getBalance());
