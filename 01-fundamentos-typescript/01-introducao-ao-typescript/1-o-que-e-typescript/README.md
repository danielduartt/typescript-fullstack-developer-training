---
````md
# 📘 O que é TypeScript? | What is TypeScript?

TypeScript é um superconjunto do JavaScript que adiciona tipagem estática opcional à linguagem.  
Ele foi criado para ajudar no desenvolvimento de aplicações maiores e com mais segurança.

TypeScript is a superset of JavaScript that adds optional static typing to the language.  
It was created to help in the development of larger and safer applications.

---

## 🚀 Iniciando um Projeto com TypeScript | Getting Started with TypeScript

### 📁 1. Inicie um novo projeto Node.js  
**(Start a new Node.js project)**

```bash
npm init -y
````

### 📦 2. Instale o TypeScript como dependência de desenvolvimento

**(Install TypeScript as a dev dependency)**

```bash
npm install -D typescript
```

### ⚙️ 3. Crie o arquivo de configuração `tsconfig.json`

**(Generate the `tsconfig.json` config file)**

```bash
npx tsc --init
```

### 🧪 4. (Opcional) Instale `ts-node-dev` para rodar arquivos `.ts`

**(Optional: install `ts-node-dev` to run `.ts` files easily)**

```bash
npm install -D ts-node-dev
```

---

## ▶️ Executando o projeto | Running the project

```bash
npx ts-node-dev src/index.ts
```

> 📌 Crie um arquivo `index.ts` na pasta `src`.

---

## 🗂️ Estrutura sugerida | Suggested Structure

```
📦 meu-projeto
├── 📁 src
│   └── index.ts
├── package.json
├── tsconfig.json
```

---
📚 Saiba mais em: [Documentação Oficial do TypeScript](https://www.typescriptlang.org/)

```
---