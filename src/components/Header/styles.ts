import styled from "styled-components";

export const StyledHeader = styled.header`
	padding-top: 20px;
	padding-bottom: 20px;
	background-color: var(--gray400);

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;

		.logoHeader {
			width: 158px;
			height: 36px;
		}

		> nav {
			display: flex;
			align-items: center;
			gap: 16px;
			width: fit-content;
			
			>div{
				height: 40px;
			}

			> img {
				cursor: pointer;
			}
		}
	}

	.cartIconBox {
		position: relative;

		cursor: pointer;
		/* position: absolute;
		top: -8px;
		right: -8px; */
		color: var(--white100);
		padding: 5px;
		background-color: var(--brand100);
		border-radius: 7px;
		font-weight: var(--font-weight-1);
		font-size: 14px;
	}

	.exitInputModal {
		background-color: transparent;
		cursor: pointer;
	}

	@media (min-width: 900px) {
		padding-top: 12px;
		padding-bottom: 12px;

		> div {
			> form {
				display: none;
			}
		}

		.searchIcon {
			display: none;
		}
		.cartIconBox {
			> span {
				top: 10px;
			}
		}

		div:nth-child(1) {
			display: flex;
			justify-content: space-between;
		}
	}
`;
