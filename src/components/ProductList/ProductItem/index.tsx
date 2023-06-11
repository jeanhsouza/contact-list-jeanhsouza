import { Button } from "../../Button";
import { StyledLi } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { DashContext, iProductItems } from "../../../context/DashContext";
import { useContext } from "react";

export function Product({ elem }: { elem: iProductItems }) {
	const { openModal } = useContext(DashContext);

	return (
		<StyledLi>
			<div className="textProduct">
				<h3>{elem.name}</h3>
				<p>{elem.email}</p>
				<p>{elem.fone}</p>
				<div className="buttonContact">
					<Button
						buttonSize="medium"
						buttonStyle="solid2"
						click={()=>openModal("Edit",elem.id)}
					>
						Editar
					</Button>
					<Button
						buttonSize="medium"
						buttonStyle="solid2"
						click={()=>openModal("Remove",elem.id)}
					>
						Remover
					</Button>
				</div>
			</div>
		</StyledLi>
	);
}
