class User {
    name: string;
    age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    showName = () => {
        console.log(this.name);
    }
}

const user1 = new User("João", 22); 

user1.showName(); 