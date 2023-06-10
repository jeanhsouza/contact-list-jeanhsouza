import styled from "styled-components";

interface iInputSearchPros {
	display: string;
}

export const StyledInputSearch = styled.form<iInputSearchPros>`
	position: relative;
	height: 60px;
	width: 100%;
	background: var(--white100);
	border: 2px solid var(--gray300);
	border-radius: 8px;
	padding: 0px 10px 0px 15px;
	display: ${({ display }) => (display === "flex" ? "flex" : "none")};
	align-items: center;

	
	> input {
		outline: none;
		font-size: 16px;
		width: 100%;
	}

	> button {
		height: 40px;
		position: absolute;
		right: 8px;
		top: 8px;
		width: 53px;
	}

	@media (min-width: 900px) {
		display: flex;
		width: 300px;

		> input {
			width: 100%;
		}

		> button {
			position: absolute;
			top: 8px;
			right: 8px;
			width: 53px;
			padding: 0px;
		}
	}
`;
