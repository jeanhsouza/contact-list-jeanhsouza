import styled from "styled-components";

export const StyledRegister = styled.main`
	max-width: 400px;
	margin: 0 auto;
	padding-left: 1rem;
	padding-right: 1rem;

	@media (min-width: 900px) {
		max-width: 100%;
		margin-top: 90px;
		margin-bottom: 90px;
		width: 55rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;

export const StyledCoverSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 20px;

	> img {
		margin-top: 40px;
		margin-bottom: 21px;
	}

	.dots {
		display: none;

		@media (min-width: 900px) {
			display: block;
		}
	}

	.bagBox {
		border: 1px solid var(--gray300);
		box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
		border-radius: 5px;
		padding: 14px;

		display: flex;
		align-items: center;
		gap: 18px;

		> img {
			background: var(--brand100-);
			border-radius: 5px;
			padding: 18px;
		}

		> p {
			color: var(--gray200);
			font-weight: var(--font-weight-3);
			font-size: var(--font-size-5);
			line-height: var(--line-height);
		}

		strong {
			color: var(--gray100);
			font-weight: var(--font-weight-1);
		}
	}

	@media (min-width: 900px) {
		width: 400px;
	}
`;

export const StyledAcessSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 25px;
	padding: 30px 20px;
	margin-top: 12px;
	max-width: 400px;

	border: 2px solid var(--gray400);
	box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
	border-radius: 5px;

	.headerAcess {
		display: flex;
		justify-content: space-between;
		align-items: center;

		> h2 {
			color: var(--gray100);
			font-size: var(--font-size-3);
			font-weight: var(--font-weight-1);
			line-height: var(--line-height);
		}

		> a {
			color: var(--gray200);
			font-weight: var(--font-weight-3);
			font-size: var(--font-size-5);
			line-height: var(--line-height);

			&:hover {
				text-decoration: underline;
			}
		}
	}

	@media (min-width: 900px) {
		width: 400px;
	}
`;
