//entendendo estruturas de repetição e decisão

const num: number = 15; 

if(num >= 15){
    console.log("Num maior ou igual a 15");
}else{
    console.log("Num menor que 15"); 
}

const typeUser = {
    admin: "Seja bem vindo admin",
    student: "Você é estudante", 
    viewer: "Você pode visualizar"
}

function validateUser(user: string){
    console.log(typeUser[user as keyof typeof typeUser]); //essa variável pode ser usada para a chave do tipo do obj 
}

const usuario: string = "admin"; 

validateUser(usuario); 


// Estruturas de Repetição
//for 
for(let i: number = 1; i <= 5; i+=2){
    console.log(i); 
}

//while
let nm: number = 2;
while(nm < 6){
    console.log(nm); 
    nm++; 
}