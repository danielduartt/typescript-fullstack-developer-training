export abstract class DioAccount {
    private name: string; 
    accountNumber: number; 
    balance: number = 0; 
    private status: boolean  = true; 

    constructor(name: string, accountNumber: number){
        this.name = name; 
        this.accountNumber = accountNumber;
    }
    deposit = () : void => {
        if(this.validadeStatus()){
            console.log("Você depositou..."); 
        }
    }
    withdraw = () : void => {
        console.log("Você sacou..."); 
    }
    getBalance = () : void => {
        console.log(this.balance); 
    }
    getName = () : string  => {
        return this.name; 
    }
    setName = (name: string) : void => {
        this.name = name; 
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