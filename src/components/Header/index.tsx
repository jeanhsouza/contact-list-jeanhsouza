import { Container } from "../../styles/container";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./styles";
import { useContext } from "react";
import { DashContext } from "../../context/DashContext";
import { AuthContext } from "../../context/AuthContext";
import { Button } from "../Button";

export function Header() {
	const { openModal, inputModal, openInputModal, closeInputModal } =
		useContext(DashContext);
	const { Logout } = useContext(AuthContext);

	return (
		<StyledHeader>
			<Container>
				{inputModal ? (
					<>
						<InputSearch display="flex" />
						<button onClick={closeInputModal} className="exitInputModal">
							X
						</button>
					</>
				) : (
					<>
						<h2 className="logoHeader">Contact List</h2>
						<nav>
							<InputSearch display="none" />
							<img
								onClick={openInputModal}
								src={"/assets/img/searchIcon.svg"}
								alt=""
								className="searchIcon"
							/>
							{/* <div onClick={() => openModal("Add")} className="cartIconBox">
								Adicionar
							</div> */}
							<Button click={() => openModal("Add")} type="submit" buttonSize="medium" buttonStyle="brand1">
								Adicionar Contato
							</Button>

							<img
								onClick={Logout}
								src={"/assets/img/logout.svg"}
								alt=""
								className="logout"
							/>
						</nav>
					</>
				)}
			</Container>
		</StyledHeader>
	);
}
