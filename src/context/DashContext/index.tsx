import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister,
} from "react-hook-form";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

interface iDashContextValues {
	product: iProductItems[];
	isOpen: boolean;
	cart: iCartItems[];
	filter: iProductItems[];
	inputValue: string;
	inputModal: boolean;
	screen: number;
	openModal: () => void;
	closeModal: () => void;
	addCart: (item: iProductItems) => void;
	removeCart: (elem: iCartItems) => void;
	removeItem: (elem: iCartItems) => void;
	addItem: (elem: iCartItems) => void;
	removeAll: () => void;
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
	fone: number;
}

export interface iInputSearchFormData {
	inputSearchValue: string;
}

export const DashContext = createContext({} as iDashContextValues);

export function DashProvider({ children }: iDashContextProps) {
	const [product, setProduct] = useState<iProductItems[]>([]);
	const [isOpen, setIsOpen] = useState(false);
	const [cart, setCart] = useState<iCartItems[]>([]);
	const [filter, setFilter] = useState<iProductItems[]>([]);
	const [inputValue, setInputValue] = useState("");
	const [inputModal, setInputModal] = useState(false);
	const [screen, setscreen] = useState(900);
	const navigate = useNavigate();
	const { register, handleSubmit, reset } = useForm<iInputSearchFormData>();

	useEffect(() => {
		async function requestAPI() {
			const token = localStorage.getItem("@contactList:token");
			try {
				if (token) {
					const request = await api.get("contacts", {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
					const response = request.data;

					setProduct(response);
					setFilter(response);
				}
			} catch (error) {
				console.log(error);
				localStorage.clear();
				navigate("/login");
			}
		}
		requestAPI();
	}, [navigate]);

	useEffect(() => {
		if (cart.length > 0) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [cart, setIsOpen]);

	useEffect(() => {
		window.addEventListener("resize", () => {
			setscreen(window.innerWidth);
		});

		if (screen >= 900) {
			setInputModal(false);
		}
	}, [screen]);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	function addCart(item: iProductItems) {
		const cartContains = cart.find((elem: iCartItems) => {
			return elem.id === item.id;
		});

		if (cartContains) {
			const updatedCart = cart.map((elem: iCartItems) =>
				elem.id === item.id ? { ...elem, count: elem.count + 1 } : elem
			);
			toast.success("Produto adicionado ao carrinho!", {
				position: toast.POSITION.TOP_LEFT,
			});
			setCart(updatedCart);
		} else {
			toast.success("Produto adicionado ao carrinho!", {
				position: toast.POSITION.TOP_LEFT,
			});
			setCart((oldCart) => [...oldCart]);
		}
	}

	function removeCart(elem: iCartItems) {
		const cardFilter = cart.filter((item) => {
			return item !== elem;
		});

		toast.success("Produto removido do carrinho", {
			position: toast.POSITION.TOP_CENTER,
		});

		setCart(cardFilter);
	}

	function removeItem(elem: iCartItems) {
		const selectedItem = cart.find((item) => item.id === elem.id);

		if (!selectedItem) {
			return;
		}

		if (selectedItem.count <= 1) {
			const updatedCart = cart.filter((item) => item.id !== elem.id);

			setCart(updatedCart);
		} else {
			const updatedCart = cart.map((item) =>
				item.id === elem.id ? { ...item, count: item.count - 1 } : item
			);
			setCart(updatedCart);
		}
	}

	function addItem(elem: iCartItems) {
		const updatedCart = cart.map((item) =>
			item.id === elem.id ? { ...item, count: item.count + 1 } : item
		);
		setCart(updatedCart);
	}

	function removeAll() {
		toast.success("Carrinho limpo com sucesso!", {
			position: toast.POSITION.TOP_CENTER,
		});
		setCart([]);
	}

	const filterProduct: SubmitHandler<iInputSearchFormData> = (data) => {
		const searchValue = data.inputSearchValue;

		setInputValue(searchValue);

		const filterItems = product.filter((elem) => {
			return (
				elem.name.toLowerCase().includes(searchValue.toLowerCase().trim())
			);
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
				isOpen,
				cart,
				filter,
				inputValue,
				inputModal,
				screen,
				openModal,
				closeModal,
				addCart,
				removeCart,
				removeItem,
				addItem,
				removeAll,
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
