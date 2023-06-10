import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./style";

interface iInputProps {
	label: string;
	id: string;
	type: string;
	register?: UseFormRegisterReturn<string>;
	disabled?: boolean;
}

export function Input({ label, id, type, register, disabled }: iInputProps) {
	return (
		<StyledInput>
			<input
				type={type}
				id={id}
				placeholder=" "
				{...register}
				disabled={disabled}
			/>
			<label>{label}</label>
		</StyledInput>
	);
}
