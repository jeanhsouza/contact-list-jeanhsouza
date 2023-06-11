import styled from "styled-components";

export const StyledAddContactModal = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-color: white;
	gap:20px;
	padding: 10px 30px;
	width: fit-content;
	height: fit-content;
	border-radius: 8px;
	margin-left: 10px;
	margin-right: 10px;


	> div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		>span{
			cursor: pointer;
		}
	}
`;