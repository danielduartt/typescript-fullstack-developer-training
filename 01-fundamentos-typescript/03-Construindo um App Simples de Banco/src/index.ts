import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { SpecialAccount } from './class/SpecialAccount';

// Pessoa física
const peopleAccount = new PeopleAccount('Daniel', 12345, 11122233344);
peopleAccount.deposit(0); 
peopleAccount.withdraw(50); 
peopleAccount.deposit = (value: number): void => { 
  if (peopleAccount.getStatus()) {
    console.log(`Depósito de ${value} na conta de ${peopleAccount.getName()}`);
    peopleAccount.setBalance(peopleAccount.getBalance() + value);
  }
};
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
console.log('Saldo PF:', peopleAccount.getBalance());

console.log('----------------------------------');

// Conta empresa
const companyAccount = new CompanyAccount('Empresa X', 54321);
companyAccount.deposit(0); 
companyAccount.getLoan(1000);
companyAccount.withdraw(200);
console.log('Saldo Empresa:', companyAccount.getBalance());

console.log('----------------------------------');

// Conta especial
const specialAccount = new SpecialAccount('VIP', 98765);
specialAccount.special_deposit(200);
specialAccount.withdraw(100);
console.log('Saldo Especial:', specialAccount.getBalance());
