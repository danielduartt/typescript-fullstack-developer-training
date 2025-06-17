### ✅ 1. **Crie uma nova pasta para o projeto**

```bash
mkdir meu-projeto-ts
cd meu-projeto-ts
```

---

### ✅ 2. **Inicie o projeto Node.js (cria o `package.json`)**

```bash
npm init -y
```

---

### ✅ 3. **Instale o TypeScript como dependência de desenvolvimento**

```bash
npm install typescript --save-dev
```

---

### ✅ 4. **Crie o arquivo de configuração do TypeScript**

```bash
npx tsc --init
```

Isso cria um `tsconfig.json`. Você pode customizar esse arquivo depois conforme suas necessidades (como ativar `strict`, `outDir`, etc).

---

### ✅ 5. **Crie a estrutura de arquivos**

Crie um diretório para seus arquivos fonte, normalmente chamado `src`:

```bash
mkdir src
```

Depois, crie um arquivo `index.ts` dentro dele:

```bash
echo "console.log('Olá, TypeScript!');" > src/index.ts
```

---

### ✅ 6. **Compile o TypeScript para JavaScript**

```bash
npx tsc
```

Por padrão, isso cria os arquivos `.js` espelhando a estrutura de `src`, na mesma pasta (ou na `outDir` se configurado no `tsconfig.json`).

---

### ✅ 7. **Execute o JavaScript compilado**

```bash
node src/index.js
```

---

### ✅ 8. (Opcional) **Automatize com um script no `package.json`**

Adicione isso na seção `"scripts"` do seu `package.json`:

```json
"scripts": {
  "build": "tsc",
  "start": "node src/index.js"
}
```

Agora você pode usar:

```bash
npm run build
npm run start
```

---

### ✅ 9. (Recomendado) **Ignorar arquivos desnecessários com `.gitignore`**

Crie um `.gitignore` com:

```
node_modules
dist
*.log
```

---

### ✅ 10. (Opcional) **Configurar saída em `dist`**

No `tsconfig.json`, altere ou adicione:

```json
"outDir": "./dist",
"rootDir": "./src"
```

E ajuste o `start` script para rodar a saída:

```json
"start": "node dist/index.js"
```

---

Se quiser, posso gerar um template completo para você colar direto com `tsconfig.json`, `package.json`, e estrutura `src/`. Deseja isso?


Perfeito! Com `ts-node-dev` e `typescript` nas `devDependencies`, você pode configurar um ambiente TypeScript com **hot reload** para desenvolvimento.

Aqui está um passo a passo completo e **atualizado** com essas dependências, e com os arquivos já configurados:

---

### ✅ **1. Criação e navegação para a pasta do projeto**

```bash
mkdir meu-projeto-ts
cd meu-projeto-ts
```

---

### ✅ **2. Inicialize o `package.json`**

```bash
npm init -y
```

---

### ✅ **3. Instale as dependências de desenvolvimento**

```bash
npm install typescript ts-node-dev --save-dev
```

---

### ✅ **4. Crie o `tsconfig.json`**

```bash
npx tsc --init
```

Edite o `tsconfig.json` com as seguintes opções recomendadas:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

---

### ✅ **5. Estrutura de pastas e arquivo de entrada**

```bash
mkdir src
echo "console.log('Projeto TypeScript iniciado!');" > src/index.ts
```

---

### ✅ **6. Adicione os scripts ao `package.json`**

Edite o seu `package.json` para incluir:

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}
```

* `dev`: roda com recarregamento automático (ideal para desenvolvimento)
* `build`: compila o TypeScript para a pasta `dist/`
* `start`: roda a versão compilada em produção

---

### ✅ **7. Adicione um `.gitignore` (opcional, mas recomendado)**

```bash
echo "node_modules\n/dist\n" > .gitignore
```

---

### ✅ **8. Teste o projeto**

Para rodar com hot reload:

```bash
npm run dev
```

Para compilar:

```bash
npm run build
```

Para executar a versão compilada:

```bash
npm start
```

---
