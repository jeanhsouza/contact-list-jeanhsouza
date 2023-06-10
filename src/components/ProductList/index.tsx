import { useContext } from "react";
import { DashContext } from "../../context/DashContext";
import { Product } from "./ProductItem";
import { StyledUl } from "./styles";

export function ProductList() {
	const { filter } = useContext(DashContext);

	return (
		<StyledUl>

			{filter.map((elem) => {
				return <Product key={elem.id} elem={elem}></Product>;
			})}
		</StyledUl>
	);
}
