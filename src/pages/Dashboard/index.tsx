import { useContext } from "react";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { ProductList } from "../../components/ProductList";
import { SearchContent } from "../../components/SearchContent";
import { DashContext } from "../../context/DashContext";
import { ContainerMain } from "../../styles/container";
import { StyledToastify } from "../../styles/toastify";
import { StyledDashboard } from "./style";

export function Dashboard() {
	const { isOpen, inputValue, profile, filter } = useContext(DashContext);

	if (!profile) {
		return;
	}

	return (
		<StyledDashboard>
			{isOpen && <Modal />}
			<StyledToastify autoClose={3000} />
			<Header />
			<ContainerMain>
				<section className="sectionUser">
					<div className="textUser">
						<h2>
							Seja bem-vindo,{" "}
							{profile.name.charAt(0).toUpperCase() + profile.name.slice(1)}
						</h2>
						<span>Meu Email: {profile.email}</span>
						<span>Meu número: {profile.fone}</span>
					</div>
				</section>
				<section className="sectionProducts">
					{inputValue?.trim().length !== 0 && <SearchContent />}
					{filter.length === 0 ? (
						<div className="sectionEmpty">
							<h2>Você não tem nenhum contato no momento =(</h2>
							<span>Adicione um agora mesmo!</span>
						</div>
					) : (
						<ProductList />
					)}
				</section>
			</ContainerMain>
		</StyledDashboard>
	);
}
