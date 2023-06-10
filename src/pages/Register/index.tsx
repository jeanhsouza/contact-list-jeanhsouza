import {
	StyledAcessSection,
	StyledCoverSection,
	StyledRegister,
} from "./style";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./registerSchema";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { StyledToastify } from "../../styles/toastify";

export interface iRegisterFormData {
	name: string;
	email: string;
	fone: string;
	password: string;
	samePassword?: string;
}

export function Register() {
	const { loading, submitRegister } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<iRegisterFormData>({
		mode: "onBlur",
		resolver: zodResolver(registerSchema),
	});

	return (
		<StyledRegister>
			<StyledToastify/>
			<StyledCoverSection>
				<h2>Contact List</h2>
				<div className="bagBox">
					<p>
						Salve os seus contatos de forma mais{" "}
						<strong>fácil</strong> e tenha sempre os a mão.
					</p>
				</div>
			</StyledCoverSection>
			<StyledAcessSection>
				<div className="headerAcess">
					<h2>Cadastro</h2>
					<Link to="/login">Retornar para o login</Link>
				</div>
				<Form submit={handleSubmit(submitRegister)}>
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
					<Input
						label="Senha"
						id="password"
						type="password"
						register={register("password")}
						disabled={loading}
					/>
					{errors.password?.message && <span>{errors.password.message}</span>}
					<Input
						label="Confirmar Senha"
						id="samePassword"
						type="password"
						register={register("samePassword")}
						disabled={loading}
					/>
					{errors.samePassword?.message && (
						<span>{errors.samePassword.message}</span>
					)}
					<Button type="submit" buttonSize="medium" buttonStyle="solid1">
					{loading? "Cadastrando..." : "Cadastrar"}
					</Button>
				</Form>
			</StyledAcessSection>
		</StyledRegister>
	);
}
