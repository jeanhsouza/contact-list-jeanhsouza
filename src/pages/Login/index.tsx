import { StyledAcessSection, StyledCoverSection, StyledLogin } from "./style";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginSchema";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { StyledToastify } from "../../styles/toastify";

export interface iLoginFormData {
	email: string;
	password: string;
}

export function Login() {
	const { loading, RegisterLink, submitLogin } = useContext(AuthContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<iLoginFormData>({
		mode: "onBlur",
		resolver: zodResolver(loginSchema),
	});

	return (
		<StyledLogin>
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
				<h2>Login</h2>
				<Form submit={handleSubmit(submitLogin)}>
					<Input
						label="Email"
						id="email"
						type="text"
						register={register("email")}
						disabled={loading}
					/>
					{errors.email?.message && <span>{errors.email.message}</span>}
					<Input
						label="Senha"
						id="password"
						type="password"
						register={register("password")}
						disabled={loading}
					/>
					{errors.password?.message && <span>{errors.password.message}</span>}
					<Button type="submit" buttonSize="medium" buttonStyle="brand1">
						{loading? "Logando..." : "Logar"}
					</Button>
				</Form>
				<span>
					Acesse a sua conta aqui!
				</span>
				<Button
					type="button"
					click={RegisterLink}
					buttonSize="medium"
					buttonStyle="solid1"
				>
					Cadastrar
				</Button>
			</StyledAcessSection>
		</StyledLogin>
	);
}
