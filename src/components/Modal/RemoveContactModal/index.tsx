import { useContext } from "react";
import { StyledRemoveContactModal } from "./style";
import { DashContext } from "../../../context/DashContext";
import { Button } from "../../Button";

export function RemoveContactModal() {
	const { deleteContact, closeModal, loading } = useContext(DashContext);

	return (
		<StyledRemoveContactModal>
			<div>
				<h2>Remover Contato</h2>
				<span onClick={closeModal}>X</span>
			</div>
			<h2>Tem certeza que seja remover esse contato?</h2>
			<Button
				click={deleteContact}
				type="submit"
				buttonSize="medium"
				buttonStyle="solid2"
			>
				{loading? "Removendo..." : "Remover Contato"}
			</Button>
		</StyledRemoveContactModal>
	);
}
