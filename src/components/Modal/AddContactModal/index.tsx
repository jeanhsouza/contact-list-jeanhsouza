import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../Button";
import { Form } from "../../Form";
import { Input } from "../../Input";
import { StyledAddContactModal } from "./style";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { addModalSchema } from "./addModalSchema";

export interface iAddModalFormData {
	name: string;
	email: string;
	fone: string;
}

export function AddContactModal(){
    const { loading } = useContext(AuthContext);

    const {
		register,
		// handleSubmit,
		formState: { errors },
	} = useForm<iAddModalFormData>({
		mode: "onBlur",
		resolver: zodResolver(addModalSchema),
	});

    return(
        <StyledAddContactModal>
            <Form submit={()=>0}>
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
					<Button type="submit" buttonSize="medium" buttonStyle="solid1">
					{loading? "Adicionando..." : "Adicionar Contato"}
					</Button>
				</Form>
        </StyledAddContactModal>
    )
}