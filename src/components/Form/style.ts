import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 15px;
	width: 100%;

	input {
		width: 100%;
	}

	span {
		color: var(--negative100);
		font-weight: var(--font-weight-3);
		font-size: var(--font-size-6);
	}
`;
