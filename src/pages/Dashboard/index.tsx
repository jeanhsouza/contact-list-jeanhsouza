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
	const { isOpen, inputValue } = useContext(DashContext);

	return (
		<StyledDashboard>
			{isOpen && <Modal />}
			<StyledToastify autoClose={3000} />
			<Header />
			<ContainerMain>
				<section className="sectionProducts">
					{inputValue?.trim().length !== 0 && <SearchContent />}
					<ProductList />
				</section>
			</ContainerMain>
		</StyledDashboard>
	);
}
