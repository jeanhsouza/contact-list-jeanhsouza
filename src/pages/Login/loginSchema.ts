import z from "zod";

export const loginSchema = z.object({
	email: z
		.string()
		.nonempty("O campo 'e-mail' é obrigatório")
		.email("Preencha um e-mail válido"),
	password: z.string().nonempty("O campo 'senha' é obrigatório"),
});
