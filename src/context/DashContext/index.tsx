import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { iAddModalFormData } from "../../components/Modal/AddContactModal";
import { iEditModalFormData } from "../../components/Modal/EditContactModal";

interface iDashContextValues {
	product: iProductItems[];
	loading: boolean;
	isOpen: boolean;
	isAdd: boolean;
	isEdit: number;
	isRemove: number;
	profile: iProfileItems | null;
	filter: iProductItems[];
	inputValue: string;
	inputModal: boolean;
	screen: number;
	openModal: (typeModal: string, idCard?: number | undefined) => void;
	closeModal: () => void;
	addContact: (data: iAddModalFormData) => void;
	editContact: (data: iEditModalFormData) => void;
	deleteContact: () => void;
	filterProduct: SubmitHandler<iInputSearchFormData>;
	clearSearch: () => void;
	openInputModal: () => void;
	closeInputModal: () => void;
	register: UseFormRegister<iInputSearchFormData>;
	handleSubmit: UseFormHandleSubmit<iInputSearchFormData>;
}

export interface iDashContextProps {
	children: React.ReactNode;
}

export interface iCartItems {
	id: number;
	name: string;
	category: string;
	price: number;
	img: string;
	count: number;
}

export interface iProductItems {
	id: number;
	name: string;
	email: string;
	fone: string;
}

export interface iProfileItems {
	id: number;
	name: string;
	email: string;
	fone: string;
	createdAt: Date;
	updatedAt: Date;
	deleteAt: Date;
}

export interface iInputSearchFormData {
	inputSearchValue: string;
}

export const DashContext = createContext({} as iDashContextValues);

export function DashProvider({ children }: iDashContextProps) {
	const [product, setProduct] = useState<iProductItems[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isAdd, setIsAdd] = useState(false);
	const [isEdit, setIsEdit] = useState(0);
	const [isRemove, setIsRemove] = useState(0);
	const [profile, setProfile] = useState<iProfileItems | null>(null);
	const [filter, setFilter] = useState<iProductItems[]>([]);
	const [inputValue, setInputValue] = useState("");
	const [inputModal, setInputModal] = useState(false);
	const [screen, setscreen] = useState(900);
	const navigate = useNavigate();
	const { register, handleSubmit, reset } = useForm<iInputSearchFormData>();

	async function requestAPI() {
		const token = localStorage.getItem("@contactList:token");
		try {
			if (token) {
				const request = await api.get("contacts", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				const requestUser = await api.get("users/profile", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				const response = request.data;

				const responseUser = requestUser.data;
				
				setProfile(responseUser);
				setProduct(response);
				setFilter(response);
			}
		} catch (error) {
			console.log(error);
			localStorage.clear();
			navigate("/login");
		}
	}

	useEffect(() => {
		requestAPI();
	}, []);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setscreen(window.innerWidth);
		});

		if (screen >= 900) {
			setInputModal(false);
		}
	}, [screen]);

	function openModal(typeModal: string, idCard: number | undefined) {
		setIsOpen(true);

		if (typeModal === "Add") {
			setIsAdd(true);
			setIsEdit(0);
			setIsRemove(0);
		}

		if (!idCard) {
			return;
		}

		if (typeModal === "Edit") {
			setIsAdd(false);
			setIsRemove(0);
			setIsEdit(idCard);
		} else {
			setIsAdd(false);
			setIsEdit(0);
			setIsRemove(idCard);
		}
	}

	function closeModal() {
		setIsOpen(false);
	}

	async function addContact(data: iAddModalFormData, ) {
		const token = localStorage.getItem("@contactList:token");
		try {
			setLoading(true);
			await api.post("contacts/", data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			toast.success("Contato criado com sucesso!", {
				position: toast.POSITION.TOP_RIGHT,
			});
			requestAPI();
			closeModal()
		} catch (error) {
			toast.error("Ops! Algo deu errado", {
				position: toast.POSITION.TOP_RIGHT,
			});
			console.log(error);
		} finally {
			setLoading(false);
		} 
	}

	async function editContact(data: iEditModalFormData, ) {
		const token = localStorage.getItem("@contactList:token");
		try {
			setLoading(true);
			await api.patch(`contacts/${isEdit}`, data, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			toast.success("Contato editado com sucesso!", {
				position: toast.POSITION.TOP_RIGHT,
			});
			requestAPI();
			closeModal()
		} catch (error) {
			toast.error("Ops! Algo deu errado", {
				position: toast.POSITION.TOP_RIGHT,
			});
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	async function deleteContact() {
		const token = localStorage.getItem("@contactList:token");
		try {
			setLoading(true);
			await api.delete(`contacts/${isRemove}`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			toast.success("Contato deletado com sucesso!", {
				position: toast.POSITION.TOP_RIGHT,
			});
			requestAPI();
			closeModal()
		} catch (error) {
			toast.error("Ops! Algo deu errado", {
				position: toast.POSITION.TOP_RIGHT,
			});
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	const filterProduct: SubmitHandler<iInputSearchFormData> = (data) => {
		const searchValue = data.inputSearchValue;

		setInputValue(searchValue);

		const filterItems = product.filter((elem) => {
			return elem.name.toLowerCase().includes(searchValue.toLowerCase().trim());
		});

		searchValue.length === 0 ? setFilter(product) : setFilter(filterItems);
	};

	function clearSearch() {
		setInputValue("");
		reset();
		setFilter(product);
	}

	function openInputModal() {
		setInputModal(true);
	}

	function closeInputModal() {
		setInputModal(false);
	}

	return (
		<DashContext.Provider
			value={{
				product,
				loading,
				isOpen,
				isAdd,
				isEdit,
				isRemove,
				profile,
				filter,
				inputValue,
				inputModal,
				screen,
				openModal,
				closeModal,
				addContact,
				editContact,
				deleteContact,
				filterProduct,
				clearSearch,
				openInputModal,
				closeInputModal,
				register,
				handleSubmit,
			}}
		>
			{children}
		</DashContext.Provider>
	);
}
