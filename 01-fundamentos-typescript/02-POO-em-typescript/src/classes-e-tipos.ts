class User {
    name: string = "Daniel"; 
    age: number = 32; 

    constructor(name: string, age: number){
        this.name = name;         this.age = age; 
    }

    showName = () => {
        console.log(this.name); }
    } 
    
const user: User = new User("Daniel", 22); 
//user.showName(); 

const otherUser = new User("Maria", 32); 
//otherUser.showName(); 

// Dio Bank 
class Account {
    name: string | undefined; 
    accountNumber: number; 

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
}