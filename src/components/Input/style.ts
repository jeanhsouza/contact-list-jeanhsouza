import styled from "styled-components";

export const StyledInput = styled.div`
	position: relative;

	> input {
		background-color: var(--white100);
		border: 2px solid var(--gray400);
		border-radius: 5px;
		outline: none;
		min-width: 250px;
		padding: 12px 20px;
		font-size: 16px;
		transition: all 0.1s linear;
		-webkit-transition: all 0.1s linear;
		-moz-transition: all 0.1s linear;
		-webkit-appearance: none;

		&:focus {
			background-color: var(--white100);
			border: 2px solid var(--gray100);
		}

		&::placeholder {
			color: transparent;
		}
	}

	> label {
		pointer-events: none;
		position: absolute;
		top: calc(39% - 8px);
		left: 15px;
		transition: all 0.1s linear;
		-webkit-transition: all 0.1s linear;
		-moz-transition: all 0.1s linear;
		background-color: transparent;
		color: var(--gray200);
		font-weight: var(--font-weight-3);
		font-size: var(--font-size-4);
		line-height: var(--line-height);
		padding: 2px;
		box-sizing: border-box;
	}

	> input:required:invalid + label {
		color: red;
	}

	> input:focus:required:invalid {
		border: 2px;
	}

	> input:required:invalid + label:before {
		content: "*";
	}

	> input:focus + label,
	> input:not(:placeholder-shown) + label {
		font-size: 13px;
		top: -13px;
		color: var(--gray200);
		background-color: var(--white100);
	}
`;
