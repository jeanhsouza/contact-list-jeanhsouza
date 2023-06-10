import styled from "styled-components";

export const StyledLi = styled.li`
	min-width: 240px;
	display: flex;
	flex-direction: column;
	border: 2px solid var(--gray300);
	border-radius: 5px;
	overflow: hidden;

	&:hover {
		border: 2px solid var(--brand100);
	}

	.imgBox {
		width: 100%;
		height: 150px;
		background-color: var(--gray400);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.imgBox img {
		width: 150px;
		height: 150px;
	}

	.textProduct {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 20px;
	}

	.textProduct h3 {
		font-weight: 700;
		font-size: 18px;
		line-height: 24px;
		color: var(--gray100);
	}

	.textProduct p {
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		color: var(--gray200);
	}

	.textProduct span {
		font-weight: 600;
		font-size: 14px;
		line-height: 24px;
		color: var(--brand100);
	}

	.buttonContact {
		display: flex;
		width: 100%;
		justify-content: space-between;
		flex-direction: row;

		> button {
			width: 80px;
			font-weight: 600;
			font-size: 14px;
			line-height: 17px;

			:hover {
				background: var(--brand100);
				color: var(--white100);
			}
		}
	}
`;
