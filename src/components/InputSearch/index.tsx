import { Button } from "../Button";
import { StyledInputSearch } from "./styles";
import searchIcon2 from "../../assets/img/searchIcon2.svg";
import { DashContext } from "../../context/DashContext";
import { useContext } from "react";

export function InputSearch({ display }: { display: string }) {
	const { filterProduct, register,handleSubmit } = useContext(DashContext);
	// const { register, handleSubmit, reset } = useForm<iInputSearchFormData>();

	return (
		<StyledInputSearch display={display} onSubmit={handleSubmit(filterProduct)}>
			<input
				type="text"
				placeholder="Digitar Pesquisa..."
				{...register("inputSearchValue")}
			/>
			<Button buttonSize="default" buttonStyle="brand1">
				<img src={searchIcon2} alt="searchIcon2" />
			</Button>
		</StyledInputSearch>
	);
}
