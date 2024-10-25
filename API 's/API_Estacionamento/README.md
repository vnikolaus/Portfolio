# API - Estacionamento

API responsável pelo check-in e check-out de veículos em um estacionamento específico, além de armazenar essas informações de forma persistente.

## 📋 Dependências

```
nodejs
typescript
tsx
express
zod
klauz-db 
vitest
```

## 💻 Endpoints

### /checkin
Realiza o checkin de um novo veículo.<br>

Method:
```
POST
```

Body: 
```json
    {
        "plate": "ABC0001"
    }
```

#### Retorno
Dados de entrada do veículo.

#### Exemplo
[Checkin](./imgs/checkin_car.png)
<br><br>

### /checkout
Realiza o checkout de um veículo.<br>

Method:
```
POST
```

Body: 
```json
    {
        "plate": "ABC0001"
    }
```

#### Retorno
Dados de saída do veículo.

#### Exemplo
[Checkout](./imgs/checkout_car.png)
<br><br>

## 📖 Informações Gerais
Preços fictícios utilizados:
```
Primeira hora: R$20
Demais horas: R$7
```

Tempo de tolerância:
```
15 minutos
```

## ⚙️ Testes Automatizados

```
✅ Checkin veículo
✅ Checkout veículo
```


## 🛠️ Construído com

* [NodeJS](https://nodejs.org/en)
* [TypeScript](https://www.typescriptlang.org/)
* [TSX](https://www.npmjs.com/package/tsx)
* [ExpressJS](https://expressjs.com/pt-br/)
* [Zod](https://zod.dev/)
* [KlauzDB](https://www.npmjs.com/package/klauz-db)
* [Vitest](https://vitest.dev/)

## 📌 Versão

V1.0.0

## ✒️ Autores

* **Desenvolvedor** - *Trabalho & Documentação* - [Victor Nikolaus](https://github.com/vnikolaus)