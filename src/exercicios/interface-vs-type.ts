// interface vs type, extends e interseção (&)

// --- interface: boa para descrever a forma de um objeto; aceita `extends` ---
interface Animal {
    nome: string;
    patas: number;
}

interface Cachorro extends Animal {
    raca: string;
}

const rex: Cachorro = { nome: "Rex", patas: 4, raca: "Vira-lata" };

// --- type: mais flexível; faz o que interface não faz ---
// 1) união de valores (interface não consegue expressar isto)
type Id = number | string;

// 2) alias de primitivo / tupla / função
type Ponto = [x: number, y: number];
type Transform = (entrada: string) => string;

// --- interseção (&): combina vários types num só (o "extends" do mundo `type`) ---
type ComTimestamps = {
    criadoEm: Date;
    atualizadoEm: Date;
};

type UsuarioBase = {
    id: Id;
    nome: string;
};

type Usuario = UsuarioBase & ComTimestamps & { email: string };

const lucas: Usuario = {
    id: 1,
    nome: "Lucas",
    email: "lucas@ex.com",
    criadoEm: new Date("2026-08-27T00:00:00Z"),
    atualizadoEm: new Date("2026-08-27T00:00:00Z"),
};

// interface também pode estender um type (e vice-versa: type pode fazer & de interface)
interface Admin extends Usuario {
    permissoes: string[];
}

const chefe: Admin = { ...lucas, permissoes: ["tudo"] };

// Regra prática: `interface` para contratos de objeto que podem crescer/ser estendidos;
// `type` para uniões, tuplas, funções e composições com `&`.

const dobrar: Transform = (s) => s + s;
const origem: Ponto = [3, 4];

console.log(rex);
console.log(lucas);
console.log(chefe.permissoes);
console.log(dobrar("ab"), origem);
