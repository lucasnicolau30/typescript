# TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)

Leia em: Português | [English](README.md)

Coleção de exercícios de TypeScript, cobrindo fundamentos do sistema de tipos,
funções, generics, utility types e uma série de exercícios de padrões de "código
limpo", além de um servidor Express mínimo tipado com TypeScript.

## Estrutura

```
.
├── src/
│   ├── tipagem.ts              (primitivos, arrays, objetos, interface, enum, unknown, interface genérica)
│   ├── funcoes.ts               (funções tipadas, arrow functions, generics, union types, Pick / Omit)
│   ├── index.ts                 (servidor Express mínimo)
│   └── exercicios/              (exercícios de padrões de código limpo)
│       ├── validacao.ts         (lista + for...of no lugar de blocos if repetidos)
│       ├── dtos.ts               (Entity vs Create vs Update vs DTO Público, sanitize())
│       ├── tratamento-erro.ts    (deixar o banco recusar duplicatas; capturar só o que se sabe tratar)
│       ├── promise-all.ts        (await sequencial vs Promise.all — legibilidade vs performance)
│       ├── interface-vs-type.ts  (interface vs type, extends, interseção &)
│       └── generics-constraints.ts (generics com constraints: <T extends ...>)
├── tsconfig.json                (config estrita: noUncheckedIndexedAccess, exactOptionalPropertyTypes, verbatimModuleSyntax)
└── package.json
```

## Conteúdo

- **src/tipagem.ts** — tipagem de primitivos e arrays, objetos literais tipados,
  `interface`, `enum` de string, `unknown` com type assertion e uma `interface<T>`
  genérica.
- **src/funcoes.ts** — declarações e expressões de função tipadas, arrow functions,
  `void`, parâmetros default, nullish coalescing, generics (`<T>`), union types,
  aliases com `type` e os utility types `Pick` / `Omit`.
- **src/exercicios/** — seis exercícios que praticam padrões pessoais de código limpo:
  trocar blocos `if` repetidos por uma lista `[valor, mensagem][]`, separar entidades
  internas de DTOs públicos de saída, tratar erros traduzindo só os códigos que se
  reconhece, comparar `await` sequencial com `Promise.all`, `interface` vs `type` com
  `extends` e `&`, e constraints em generics (`<T extends { length: number }>`,
  `<K extends keyof T>`, defaults).
- **src/index.ts** — app Express (`^5.2.1`) mínimo com uma rota `GET /` tipada
  retornando JSON na porta 8000.

## Setup

```
npm install
npm run build        # compila src/ -> dist/
npm start            # roda dist/index.js (servidor Express na :8000)
```

Desenvolvimento com live reload:

```
npm run dev          # nodemon + ts-node em src/index.ts
```

Rodar um exercício isolado após o build:

```
node dist/exercicios/generics-constraints.js
```

## Autor

Lucas Nicolau — Estudante de Engenharia de Software na @UFAM
