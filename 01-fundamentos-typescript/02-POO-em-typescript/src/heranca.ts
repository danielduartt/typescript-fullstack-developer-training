import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";

const peopleaccount: PeopleAccount = new PeopleAccount("Joãozinho", 1, 1);
console.log(peopleaccount.getName());
peopleaccount.deposit(); 
const companyaccount: CompanyAccount = new CompanyAccount("DIO", 2); 
companyaccount.deposit(); 