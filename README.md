# TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)

Read in: [Português](README.pt.md) | English

Collection of TypeScript exercises, covering type system fundamentals, functions,
generics, utility types, and a set of "clean code" pattern drills, plus a minimal
Express server typed with TypeScript.

## Structure

```
.
├── src/
│   ├── tipagem.ts              (primitives, arrays, objects, interface, enum, unknown, generic interface)
│   ├── funcoes.ts               (typed functions, arrow functions, generics, union types, Pick / Omit)
│   ├── index.ts                 (minimal Express server)
│   └── exercicios/              (clean code pattern drills)
│       ├── validacao.ts         (list + for...of instead of repeated if blocks)
│       ├── dtos.ts               (Entity vs Create vs Update vs Public DTOs, sanitize())
│       ├── tratamento-erro.ts    (let the DB reject duplicates; catch only what you can handle)
│       ├── promise-all.ts        (sequential await vs Promise.all — readability vs performance)
│       ├── interface-vs-type.ts  (interface vs type, extends, intersection &)
│       └── generics-constraints.ts (generics with constraints: <T extends ...>)
├── tsconfig.json                (strict config: noUncheckedIndexedAccess, exactOptionalPropertyTypes, verbatimModuleSyntax)
└── package.json
```

## Contents

- **src/tipagem.ts** — primitive and array typing, typed object literals, `interface`,
  string `enum`, `unknown` with type assertion, and a generic `interface<T>`.
- **src/funcoes.ts** — typed function declarations and expressions, arrow functions,
  `void`, default parameters, nullish coalescing, generics (`<T>`), union types,
  `type` aliases, and the `Pick` / `Omit` utility types.
- **src/exercicios/** — six drills that practice personal clean code patterns:
  replacing repeated `if` blocks with a `[value, message][]` list, splitting internal
  entities from public output DTOs, handling errors by translating only the codes you
  recognize, comparing sequential `await` against `Promise.all`, `interface` vs `type`
  with `extends` and `&`, and generic constraints (`<T extends { length: number }>`,
  `<K extends keyof T>`, defaults).
- **src/index.ts** — minimal Express (`^5.2.1`) app with a typed `GET /` route
  returning JSON on port 8000.

## Setup

```
npm install
npm run build        # compiles src/ -> dist/
npm start            # runs dist/index.js (Express server on :8000)
```

Development with live reload:

```
npm run dev          # nodemon + ts-node on src/index.ts
```

Run a single exercise after building:

```
node dist/exercicios/generics-constraints.js
```

## Author

Lucas Nicolau — Software Engineering Student at @UFAM
