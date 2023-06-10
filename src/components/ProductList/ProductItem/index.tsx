import { useContext } from "react";
import { Button } from "../../Button";
import { StyledLi } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { DashContext, iProductItems } from "../../../context/DashContext";

export function Product({ elem }: { elem: iProductItems }) {
	const { addCart } = useContext(DashContext);

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
						click={() => addCart(elem)}
					>
						Editar
					</Button>
					<Button
						buttonSize="medium"
						buttonStyle="solid2"
						click={() => addCart(elem)}
					>
						Remover
					</Button>
				</div>
			</div>
		</StyledLi>
	);
}
