import styled from "styled-components";

export const StyledUl = styled.ul`
	margin-top: 30px;
	margin-bottom: 30px;
	display: flex;
	flex-wrap: nowrap;
	overflow: auto;
	gap: 16px;

	@media (min-width: 900px) {
		flex-wrap: wrap;
	}
`;
