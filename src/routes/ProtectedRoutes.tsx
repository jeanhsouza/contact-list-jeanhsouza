import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const ProtectedRoutes = () => {
	const { loading } = useContext(AuthContext);
	const location = useLocation();
	const token = localStorage.getItem("@contactList:token");

	if (loading) {
		return null;
	}

	return token ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};
