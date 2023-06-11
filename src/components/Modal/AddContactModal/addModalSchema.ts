import z from "zod";

export const addModalSchema = z
	.object({
		name: z
			.string()
			.nonempty("O campo 'nome' é obrigatório.")
			.min(3, "Nome precisa ter pelo menos 3 caracteres.")
			.max(150, "Nome não pode ter mais 150 caracteres."),
		email: z
			.string()
			.nonempty("O campo 'e-mail' é obrigatório.")
			.email("Preencha um e-mail válido."),
		fone: z
			.string()
			.nonempty("O campo 'telefone' é obrigatório."),
	});