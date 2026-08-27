// Item 6 da skill: refactor de legibilidade != otimização de performance
// `for...of` com `await` roda SEQUENCIAL; `Promise.all` dispara tudo em PARALELO.

function buscar(rotulo: string, ms: number): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve(rotulo), ms));
}

// consultas independentes entre si (nenhuma depende do resultado da anterior)
const consultas: [string, number][] = [
    ["empresa", 300],
    ["unidade", 300],
    ["setor", 300],
    ["responsavel", 300],
];

async function sequencial(): Promise<void> {
    const inicio = Date.now();
    const resultados: string[] = [];
    for (const [rotulo, ms] of consultas) {
        resultados.push(await buscar(rotulo, ms));
    }
    console.log(`sequencial (for...of): ${resultados.join(", ")} — ~${Date.now() - inicio}ms`);
}

async function paralelo(): Promise<void> {
    const inicio = Date.now();
    // trade-off: perde o "parar assim que a primeira falhar" — todas rodam antes de checar
    const resultados = await Promise.all(consultas.map(([rotulo, ms]) => buscar(rotulo, ms)));
    console.log(`paralelo (Promise.all): ${resultados.join(", ")} — ~${Date.now() - inicio}ms`);
}

async function main(): Promise<void> {
    await sequencial(); // ~1200ms (300 x 4)
    await paralelo();    // ~300ms (todas ao mesmo tempo)
    console.log("Padrão = legibilidade (sequencial). Promise.all só quando latência/volume justificar.");
}

void main();
