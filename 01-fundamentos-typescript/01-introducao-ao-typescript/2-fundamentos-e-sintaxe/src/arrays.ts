const array: Array<number> = [1,2,3,4]; //um array com apenas valores numéricos
const stringArray: string[] = ['a', 'b', 'c']; 

//tamanho de um array (qnt de elementos): length 
console.log(stringArray.length);


//buscar elemento 
const buscNum = array.find(num => num === 4); 
const buscarNum: Array<number> = array.filter(num => num > 2); 

array.forEach(num => console.log(num)); 

