import { StyledForm } from "./style";

interface iFormProps {
	children: React.ReactNode;
	submit: () => void;
}

export function Form({ children, submit }: iFormProps) {
	return (
		<StyledForm onSubmit={submit} noValidate>
			{children}
		</StyledForm>
	);
}
