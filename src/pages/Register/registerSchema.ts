import z from "zod";

export const registerSchema = z
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
		password: z
			.string()
			.nonempty("O campo 'senha' é obrigatório.")
			.min(6, "A senha precisa ter pelo menos 6 caracteres"),
		samePassword: z
			.string()
			.nonempty("O campo 'senha' é obrigatório.")
			.min(6, "A senha precisa ter pelo menos 6 caracteres"),
	})
	.refine((data) => data.password === data.samePassword, {
		message: "As senhas devem ser iguais.",
		path: ["samePassword"], // path of error
	});
