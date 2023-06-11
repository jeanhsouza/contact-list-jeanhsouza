import styled from "styled-components";

export const StyledDashboard = styled.div`
	.sectionProducts,
	.sectionUser {
		@media (min-width: 900px) {
			padding: 0px 16px;
		}
	}

	.textUser, .sectionEmpty {
		margin-top: 20px;
		padding: 10px;
		display: flex;
		gap:15px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 2px solid var(--gray300);
		border-radius: 5px;
		overflow: hidden;
	}

	.sectionEmpty{
		padding: 40px;
	}
`;
