// Item 1 da skill: encadeamento de lista em vez de vários `if`s idênticos

const TAMANHO_MINIMO_SENHA = 8;

function isRequired(valor: unknown): boolean {
    return valor !== undefined && valor !== null && valor !== "";
}

interface CreateUsuarioInput {
    nome?: string;
    email?: string;
    senha?: string;
}

// EVITAR: um bloco `if` copiado/colado por campo (é onde bug de copy-paste mora)
// PREFERIR: lista de pares [valor, mensagem] + um único `for...of`
function validarUsuario(input: CreateUsuarioInput): void {
    const camposObrigatorios: [unknown, string][] = [
        [input.nome, "O nome precisa ser preenchido."],
        [input.email, "O email precisa ser preenchido."],
        [input.senha, "A senha precisa ser preenchida."],
    ];

    for (const [valor, mensagem] of camposObrigatorios) {
        if (!isRequired(valor)) {
            throw new Error(mensagem);
        }
    }

    // Checagem com lógica própria NÃO entra na lista (item 1: "mesma forma, conteúdo diferente")
    if (input.senha!.length < TAMANHO_MINIMO_SENHA) {
        throw new Error(`A senha precisa ter no mínimo ${TAMANHO_MINIMO_SENHA} caracteres.`);
    }
}

function tentar(rotulo: string, input: CreateUsuarioInput): void {
    try {
        validarUsuario(input);
        console.log(`${rotulo}: ok`);
    } catch (error) {
        console.log(`${rotulo}: ${(error as Error).message}`);
    }
}

tentar("sem email", { nome: "Lucas", senha: "12345678" });
tentar("senha curta", { nome: "Lucas", email: "lucas@ex.com", senha: "123" });
tentar("válido", { nome: "Lucas", email: "lucas@ex.com", senha: "12345678" });
