// Item 3 da skill: separar Entity (interno) de DTO de saída (público)
// Item 4 da skill: a diferença do `?` entre Create / Update / Public

// --- Relação: representa um dado interno com campos sensíveis ---
interface ColaboradorEntity {
    id: number;
    nome: string;
    cpf: string;      // sensível: NUNCA deve vazar no JSON de resposta
    telefone: string; // sensível
}

// --- Entity: o que vive no banco, com a relação inteira carregada ---
interface EquipamentoEntity {
    id: number;
    codigoPatrimonial: string;
    tipo: string;
    observacao: string | null;
    responsavel: ColaboradorEntity; // objeto de relação inteiro
    criadoEm: Date;
    atualizadoEm: Date;
}

// --- Create: campos obrigatórios pela regra de negócio ficam SEM `?` ---
interface CreateEquipamentoInput {
    codigoPatrimonial: string;
    tipo: string;
    observacao?: string;   // opcional pela regra de negócio
    responsavelId: number; // id, não o objeto
}

// --- Update: TODOS os campos com `?`, porque a edição altera 1 campo por vez ---
type UpdateEquipamentoInput = Partial<CreateEquipamentoInput>;

// --- Public: Create + campos gerados pelo sistema + campos derivados de relação ---
// (a relação inteira vira só o dado necessário: responsavel -> responsavelNome)
interface PublicEquipamento {
    id: number;
    codigoPatrimonial: string;
    tipo: string;
    observacao: string | null;
    responsavelNome: string; // achatado; sem cpf/telefone
    criadoEm: string;        // serializado como ISO
}

// sanitize(): escolhe campo a campo o que sai da API
function sanitize(entity: EquipamentoEntity): PublicEquipamento {
    return {
        id: entity.id,
        codigoPatrimonial: entity.codigoPatrimonial,
        tipo: entity.tipo,
        observacao: entity.observacao,
        responsavelNome: entity.responsavel.nome,
        criadoEm: entity.criadoEm.toISOString(),
    };
}

const equipamentoDoBanco: EquipamentoEntity = {
    id: 1,
    codigoPatrimonial: "PC-0001",
    tipo: "Notebook",
    observacao: null,
    responsavel: {
        id: 10,
        nome: "Lucas",
        cpf: "000.000.000-00",
        telefone: "(00) 00000-0000",
    },
    criadoEm: new Date("2026-08-27T12:00:00Z"),
    atualizadoEm: new Date("2026-08-27T12:00:00Z"),
};

const novo: CreateEquipamentoInput = {
    codigoPatrimonial: "PC-0002",
    tipo: "Monitor",
    responsavelId: 10,
};

const edicao: UpdateEquipamentoInput = { observacao: "Tela com risco" };

console.log("Create:", novo);
console.log("Update (parcial):", edicao);
console.log("Public (sem cpf/telefone):", sanitize(equipamentoDoBanco));
