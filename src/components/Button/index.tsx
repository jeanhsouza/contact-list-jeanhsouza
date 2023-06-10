import { StyledButton } from "./style";

type tButtonType = "button" | "submit" | "reset" | undefined;

interface iButtonProps {
	children: React.ReactNode;
	click?: () => void;
	type?: tButtonType;
	buttonSize: "default" | "medium";
	buttonStyle: "brand1" | "solid1" | "solid2";
}

export function Button({
	children,
	click,
	type,
	buttonStyle,
	buttonSize,
}: iButtonProps) {
	return (
		<StyledButton
			type={type}
			onClick={click}
			buttonSize={buttonSize}
			buttonStyle={buttonStyle}
		>
			{children}
		</StyledButton>
	);
}
