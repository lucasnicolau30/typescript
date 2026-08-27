// Generics com constraints: <T extends ...>
// A constraint limita QUAL tipo pode entrar no lugar de T, garantindo que
// certas propriedades/operações existam dentro da função.

// 1) T precisa ter a propriedade `length`
function maisComprido<T extends { length: number }>(a: T, b: T): T {
    return a.length >= b.length ? a : b;
}

console.log(maisComprido("banana", "uva"));        // string tem length
console.log(maisComprido([1, 2, 3], [9]));          // array tem length

// 2) K precisa ser uma chave de T (keyof) — acesso seguro a propriedade
function pegar<T, K extends keyof T>(obj: T, chave: K): T[K] {
    return obj[chave];
}

const usuario = { nome: "Lucas", idade: 21 };
console.log(pegar(usuario, "nome"));  // ok: "nome" é chave de usuario
// pegar(usuario, "email");          // erro em tempo de compilação: "email" não é keyof

// 3) T precisa ter um `id` numérico — indexar por id com segurança
interface ComId {
    id: number;
}

function indexarPorId<T extends ComId>(itens: T[]): Map<number, T> {
    const mapa = new Map<number, T>();
    for (const item of itens) {
        mapa.set(item.id, item);
    }
    return mapa;
}

const equipamentos = [
    { id: 1, tipo: "Notebook" },
    { id: 2, tipo: "Monitor" },
];
console.log(indexarPorId(equipamentos).get(2));

// 4) constraint + valor default de tipo (<T extends ... = ...>)
function primeiro<T extends unknown[] = string[]>(arr: T): T[number] | undefined {
    return arr[0];
}

console.log(primeiro(["a", "b"]));
console.log(primeiro([10, 20, 30]));
