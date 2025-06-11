abstract class Account {
    name: string | undefined; 
    accountNumber: number; 
    balance: number = 0; 

    constructor(name: string, accountNumber: number){
        this.name = name; 
        this.accountNumber = accountNumber;
    }

    deposit = () => {
        console.log("Você depositou..."); 
    }

    withdraw = () => {
        console.log("Você sacou..."); 
    }

    getBalance = () => {
        console.log(this.balance); 
    }
}

class PeopleAccount extends Account{
    doc_id: number; 

    constructor(name: string, accountNumber: number, doc_id: number){
        super(name, accountNumber); 
        this.doc_id = doc_id; 
    }

}


