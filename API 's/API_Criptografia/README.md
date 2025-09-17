# API - Criptografia

API responsável por gerar **hashes** e realizar **criptografia/descriptografia AES-256-GCM** de forma segura e simples.

## ⚡ Instalação Rápida

```bash
git clone <repo-url>
cd <nome-da-api>
npm install
npm run dev
```

## 📋 Dependências

```
nodejs
typescript
express
zod
vitest
```

## 💻 Endpoints

### GET /ping
Verifica se a API está online.

#### Retorno
```
pong
```

---

### POST /createHash
Gera um hash SHA-512 a partir de um valor.

**Body** (text/plain):
```text
"texto a ser hasheado"
```

**Retorno**:
```json
{
  "result": "hash gerado em SHA-512"
}
```

---

### POST /aes/encrypt
Criptografa um texto usando AES-256-GCM.

**Body** (application/json):
```json
{
  "key": "chave-secreta",
  "data": "texto a ser criptografado"
}
```

**Retorno**:
```json
{
  "result": {
    "encrypted": "hex",
    "iv": "hex",
    "tag": "hex"
  }
}
```

---

### POST /aes/decrypt
Descriptografa um texto criptografado com AES-256-GCM.

**Body** (application/json):
```json
{
  "key": "chave-secreta",
  "encrypted": "hex",
  "iv": "hex",
  "tag": "hex"
}
```

**Retorno**:
```json
{
  "result": "texto original"
}
```

---

## ⚙️ Testes Automatizados (Vitest)

```
✅ /ping - Verifica disponibilidade
✅ /createHash - Gera hash SHA-512
✅ /aes/encrypt + /aes/decrypt - Criptografia simétrica AES-256-GCM
```

---

## 🛠️ Construído com

* [NodeJS](https://nodejs.org/en)
* [TypeScript](https://www.typescriptlang.org/)
* [ExpressJS](https://expressjs.com/pt-br/)
* [Zod](https://zod.dev/)
* [Vitest](https://vitest.dev/)

---

## 📌 Versão

V1.0.0

---

## ✒️ Autores

* **Victor Nikolaus** - *Desenvolvimento & Documentação* - [GitHub](https://github.com/vnikolaus)

