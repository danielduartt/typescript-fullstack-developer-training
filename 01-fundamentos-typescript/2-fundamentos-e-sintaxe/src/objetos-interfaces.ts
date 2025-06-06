interface Pessoa {
    nome: string, 
    idade: number,
    profissao?: string // a "?" esse tipo torna-se opcional 
}

const pessoa: Pessoa = {
    nome: "Daniel", 
    idade: 22 
}

const pessoa2: Pessoa = {
    nome: "Geovana", 
    idade: 25, 
    profissao: "Desenvolvedor"
}

const arrayPessoa: Array<Pessoa> = [pessoa, pessoa2];
const arrayNum: Array<number> = [1,2,3,4,5];




