import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { Input } from "../../Input";
import { StyledEditContactModal } from "./style";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { editModalSchema } from "./editModalSchema";
import { DashContext } from "../../../context/DashContext";

export interface iEditModalFormData {
	name?: string;
	email?: string;
	fone?: string;
}

export function EditContactModal() {
	const { loading } = useContext(AuthContext);
	const { closeModal, filter, isEdit, editContact } = useContext(DashContext);

	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<iEditModalFormData>({
		mode: "onBlur",
		resolver: zodResolver(editModalSchema),
	});

	useEffect(() => {
		const contactFound = filter.find((contact) => contact.id == isEdit);
        setValue("name",contactFound?.name);
        setValue("email",contactFound?.email);
        setValue("fone",contactFound?.fone);
	}, []);

	return (
		<StyledEditContactModal>
			<div>
				<h2>Editar Contato</h2>
				<span onClick={closeModal}>X</span>
			</div>
			<Form submit={handleSubmit(editContact)}>
				<Input
					label="Nome"
					id="name"
					type="text"
					register={register("name")}
					disabled={loading}
				/>
				{errors.name?.message && <span>{errors.name.message}</span>}
				<Input
					label="Email"
					id="email"
					type="email"
					register={register("email")}
					disabled={loading}
				/>
				{errors.email?.message && <span>{errors.email.message}</span>}
				<Input
					label="Telefone"
					id="fone"
					type="fone"
					register={register("fone")}
					disabled={loading}
				/>
				{errors.fone?.message && <span>{errors.fone.message}</span>}
				<Button type="submit" buttonSize="medium" buttonStyle="solid2">
					{loading ? "Editando..." : "Editar Contato"}
				</Button>
			</Form>
		</StyledEditContactModal>
	);
}
