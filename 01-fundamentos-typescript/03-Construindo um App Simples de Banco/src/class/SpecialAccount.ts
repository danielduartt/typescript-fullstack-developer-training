import { DioAccount } from "./DioAccount";

class SpecialAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber); 
    }
    special_deposit = (value: number) : void => {
        console.log(`Você fez um depósito especial no valor de ${value + 10} (+ 10)`); 
        this.setBalance(this.getBalance() + value + 10); 
    }
}