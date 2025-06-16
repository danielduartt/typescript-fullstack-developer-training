import {DioAccount} from "./DioAccount"; 
export class CompanyAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber); 
    }
    getLoan = (value_loan: number) : void => {
        if(this.getStatus()){ 
            console.log(`Você fez um empréstimo de ${value_loan}`); 
            this.balance += value_loan; 
        }
    }

    deposit = () : void => {
        console.log("A empresa fez um depósito..."); 
    }
}