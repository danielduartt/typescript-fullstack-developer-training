# 🧱 Programação Orientada a Objetos (POO) em TypeScript

Este projeto apresenta os conceitos fundamentais de **POO (Programação Orientada a Objetos)** utilizando **TypeScript**, uma linguagem que adiciona tipagem estática ao JavaScript e facilita a organização e escalabilidade de aplicações.

---

## 🚀 Conceitos Fundamentais

### ✅ 1. **Classes e Objetos**
Classes são moldes para criar objetos.

```ts
class Pessoa {
  nome: string;
  
  constructor(nome: string) {
    this.nome = nome;
  }

  falar(): void {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}

const pessoa = new Pessoa("Maria");
pessoa.falar(); // Olá, meu nome é Maria
````

---

### ✅ 2. **Encapsulamento**

Controle de acesso aos atributos e métodos com `public`, `private`, `protected`.

```ts
class ContaBancaria {
  private saldo: number = 0;

  depositar(valor: number): void {
    this.saldo += valor;
  }

  consultarSaldo(): number {
    return this.saldo;
  }
}
```

---

### ✅ 3. **Herança**

Uma classe pode herdar características de outra.

```ts
class Animal {
  mover(): void {
    console.log("Animal se movendo");
  }
}

class Cachorro extends Animal {
  latir(): void {
    console.log("Au au!");
  }
}

const dog = new Cachorro();
dog.mover();
dog.latir();
```

---

### ✅ 4. **Polimorfismo**

Objetos podem se comportar de diferentes formas a partir da mesma interface ou classe base.

```ts
class Forma {
  desenhar(): void {
    console.log("Desenhando forma genérica");
  }
}

class Circulo extends Forma {
  desenhar(): void {
    console.log("Desenhando círculo");
  }
}

function renderizar(f: Forma) {
  f.desenhar();
}

renderizar(new Forma());
renderizar(new Circulo());
```

---

### ✅ 5. **Abstração**

Oculta detalhes complexos, expondo apenas o essencial.

```ts
abstract class Veiculo {
  abstract acelerar(): void;
}

class Carro extends Veiculo {
  acelerar(): void {
    console.log("Acelerando carro");
  }
}

const meuCarro = new Carro();
meuCarro.acelerar();
```

---

## 🧪 Como rodar este projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/projeto-poo-typescript.git
cd projeto-poo-typescript
```

2. Instale as dependências:

```bash
npm install
```

3. Rode os exemplos com:

```bash
npm run dev
```

> Certifique-se de que `ts-node-dev` está instalado no projeto.

---

## 📚 Recursos recomendados

* [Documentação oficial do TypeScript](https://www.typescriptlang.org/docs/)
* [Entendendo POO com exemplos práticos](https://www.devmedia.com.br/programacao-orientada-a-objetos-poo/18816)

---

## 🛠️ Tecnologias usadas

* TypeScript
* Node.js
* ts-node-dev

---

