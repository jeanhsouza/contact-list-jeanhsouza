import styled from "styled-components";

export const StyledSearchContent = styled.div`
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	gap: 10px;

	> span {
		font-weight: 700;
		font-size: 26px;
		line-height: 34px;
		color: var(--gray100);

		> strong {
			color: var(--gray200);
		}
	}

	@media (min-width: 900px) {
		flex-direction: row;
	}
`;
