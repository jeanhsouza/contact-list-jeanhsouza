import styled from "styled-components";

export const Container = styled.div`
	width: 1040px;
	max-width: 100%;
	margin: 0 auto;
	padding-left: 16px;
	padding-right: 16px;
`;

export const ContainerMain = styled.main`
	max-width: 100%;
	margin: 0 auto;
	padding-left: 1rem;
	padding-right: 1rem;

	@media (min-width: 900px) {
		width: 65rem;
		padding-left: 0;
		padding-right: 0;
	}
`;
