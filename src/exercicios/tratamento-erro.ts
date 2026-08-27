// Item 2 da skill: não checar duplicata antes de salvar — deixar o banco recusar
// Item 5 da skill: `try/catch` só deve capturar o que você sabe tratar

// código SQLSTATE do Postgres para violação de unique constraint
const POSTGRES_UNIQUE_VIOLATION = "23505";

interface PostgresError {
    code: string;
    message: string;
}

// type guard: só reconhecemos como erro do Postgres se tiver a forma esperada
function isPostgresError(error: unknown): error is PostgresError {
    return (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        typeof (error as Record<string, unknown>).code === "string"
    );
}

class ConflictError extends Error {}

// "banco" em memória com uma unique constraint em `codigoPatrimonial`
const tabela = new Set<string>(["PC-0001"]);

function inserirNoBanco(codigo: string): void {
    if (tabela.has(codigo)) {
        // o banco recusa de forma atômica — sem janela de corrida
        const erro: PostgresError = { code: POSTGRES_UNIQUE_VIOLATION, message: "duplicate key value" };
        throw erro;
    }
    tabela.add(codigo);
}

function criarEquipamento(codigo: string): string {
    try {
        // sem findOne prévio: tenta salvar direto
        inserirNoBanco(codigo);
        return `criado: ${codigo}`;
    } catch (error) {
        // só traduz o erro que reconhecemos...
        if (isPostgresError(error) && error.code === POSTGRES_UNIQUE_VIOLATION) {
            throw new ConflictError(`Já existe um equipamento com o código ${codigo}.`);
        }
        // ...qualquer outro erro é re-lançado sem modificação (nunca engolir o desconhecido)
        throw error;
    }
}

for (const codigo of ["PC-0002", "PC-0001"]) {
    try {
        console.log(criarEquipamento(codigo));
    } catch (error) {
        console.log(`falhou (${error instanceof ConflictError ? "conflito" : "desconhecido"}): ${(error as Error).message}`);
    }
}
