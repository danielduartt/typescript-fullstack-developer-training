import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value_loan: number): void => {
    if (this.getStatus()) {
      console.log(`Você fez um empréstimo de ${value_loan}`);
      this.setBalance(this.getBalance() + value_loan);
    }
  };

  override deposit = (value: number ): void => {
    console.log("A empresa fez um depósito...");
    super.deposit(value);
  };
}
