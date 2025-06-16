import { DioAccount } from './DioAccount';

export class PeopleAccount extends DioAccount {
  private readonly doc_id: number;

  constructor(name: string, accountNumber: number, doc_id: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }

  override deposit = (value: number ): void => {
    console.log("Você fez um depósito...");
    super.deposit(value); 
  };
}
