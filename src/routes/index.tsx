import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectedRoutes } from "./ProtectedRoutes";

export function RoutesMain() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route element={<ProtectedRoutes />}>
				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
			<Route path="*" element={<Navigate to="/login" />} />
		</Routes>
	);
}
