import { useContext } from "react";
import { DashContext } from "../../context/DashContext";
import { Button } from "../Button";
import { StyledSearchContent } from "./styles";

export function SearchContent() {
	const { clearSearch, inputValue } = useContext(DashContext);

	return (
		<StyledSearchContent>
			<span>
				Resultados para: <strong>"{inputValue.trim()}"</strong>
			</span>
			<Button buttonSize="default" buttonStyle="brand1" click={clearSearch}>
				Limpar busca
			</Button>
		</StyledSearchContent>
	);
}
