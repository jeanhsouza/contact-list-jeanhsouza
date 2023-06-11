
import { useContext } from "react";
import { StyledModal } from "./style";
import { DashContext } from "../../context/DashContext";
import { AddContactModal } from "./AddContactModal";
import { EditContactModal } from "./EditContactModal";
import { RemoveContactModal } from "./RemoveContactModal";


export function Modal() {
	const {isAdd, isEdit, isRemove} = useContext(DashContext)

	return (
		<StyledModal>
			{isAdd && <AddContactModal/>}
			{isEdit && <EditContactModal/>}
			{isRemove && <RemoveContactModal/>}
		</StyledModal>
	);
}
