import React, { createContext, useState, useEffect, useContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { iLoginFormData } from "../../pages/Login";
import { iRegisterFormData } from "../../pages/Register";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { DashContext } from "../DashContext";

interface iAuthContextProps {
	children: React.ReactNode;
}

interface iAuthContextValue {
	loading: boolean;
	RegisterLink: () => void;
	submitLogin: SubmitHandler<iLoginFormData>;
	submitRegister: SubmitHandler<iRegisterFormData>;
	Logout: () => void;
}

export const AuthContext = createContext({} as iAuthContextValue);

export function AuthProvider({ children }: iAuthContextProps) {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { removeAll } = useContext(DashContext);

	useEffect(() => {
		if (localStorage.getItem("@contactList:token")) {
			navigate("/dashboard");
		}
	}, [navigate]);

	function RegisterLink() {
		navigate("/register");
	}

	const submitLogin: SubmitHandler<iLoginFormData> = async (data) => {
		loginUser(data);
	};

	async function loginUser(data: iLoginFormData) {
		try {
			setLoading(true);
			const request = await api.post("login", data);
			const response = request.data;

			const { token } = response;

			toast.success("Login realizado com sucesso!", {
				position: toast.POSITION.TOP_RIGHT,
			});

			localStorage.setItem("@contactList:token", token);
			setTimeout(() => {
				navigate("/dashboard");
			}, 2000);
		} catch (error) {
			toast.error("Ops! Algo deu errado", {
				position: toast.POSITION.TOP_RIGHT,
			});
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	const submitRegister: SubmitHandler<iRegisterFormData> = async (data) => {
		delete data.samePassword;
		registerUser(data);
	};

	async function registerUser(data: iRegisterFormData) {
		try {
			setLoading(true);
			const request = await api.post("users", data);
			toast.success("Conta criada com sucesso!", {
				position: toast.POSITION.TOP_RIGHT,
			});
			if (request) {
				setTimeout(() => {
					navigate("/login");
				}, 2000);
			}
		} catch (error) {
			toast.error("Ops! Algo deu errado", {
				position: toast.POSITION.TOP_RIGHT,
			});
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	function Logout() {
		removeAll();
		localStorage.clear();
		navigate("/login");
	}

	return (
		<AuthContext.Provider
			value={{ loading, RegisterLink, submitLogin, submitRegister, Logout }}
		>
			{children}
		</AuthContext.Provider>
	);
}
