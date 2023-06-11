import axios from "axios";

export const api = axios.create({
	baseURL: "https://contact-list-api-lepu.onrender.com/",
	timeout: 10000,
});
