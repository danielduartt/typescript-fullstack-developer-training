export abstract class DioAccount {
    private readonly name: string; 
    //readonly siginifica que o att pode ser apenas lido 
    private readonly accountNumber: number; 
    private  balance: number = 0; 
    private status: boolean  = true; 

    constructor(name: string, accountNumber: number){
        this.name = name; 
        this.accountNumber = accountNumber;
    }

    deposit = (value: number) : void => {
        if(this.status){
            console.log(`Foi feito um depósito de ${value}`); 
            this.balance += value; 
        }
    }
    withdraw = (value: number) : void => {
        if(this.status && this.balance > value){
            console.log(`Foi feito um saque no valor de ${value}`); 
            this.balance -= value; 
        }
    }

    getBalance = () : number => {
        return this.balance
    }
    setBalance = (value: number) : void => {
        this.balance = value; 
    }

    getName = () : string  => {
        return this.name; 
    }
    getStatus = (): boolean => {
        return this.status; 
    }

    // private pois acontece apenas de forma interna a classe e o obj instanciado
    private validadeStatus = (): boolean=> {
        if(this.status){
            return this.status; 
        }else{
            throw new Error("Conta inválida"); 
        }
    }
}