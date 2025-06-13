import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";

const peopleaccount: PeopleAccount = new PeopleAccount("Joãozinho", 1, 1);
console.log(peopleaccount.getName());

const companyaccount: CompanyAccount = new CompanyAccount("David", 2); 
console.log(companyaccount.getName()); 