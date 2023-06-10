import logout from "../../assets/img/logout.svg";
import searchIcon from "../../assets/img/searchIcon.svg";
import { Container } from "../../styles/container";
import { InputSearch } from "../InputSearch";
import { StyledHeader } from "./styles";
import { useContext } from "react";
import { DashContext } from "../../context/DashContext";
import { AuthContext } from "../../context/AuthContext";

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
								src={searchIcon}
								alt=""
								className="searchIcon"
							/>
							<div onClick={openModal} className="cartIconBox">
								Adicionar
							</div>
							<img onClick={Logout} src={logout} alt="" className="logout" />
						</nav>
					</>
				)}
			</Container>
		</StyledHeader>
	);
}
