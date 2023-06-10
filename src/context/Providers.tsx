import { AuthProvider } from "./AuthContext";
import { DashProvider } from "./DashContext";

interface iProviderProps {
	children: React.ReactNode;
}

export function Providers({ children }: iProviderProps) {
	return (
		<DashProvider>
			<AuthProvider>{children}</AuthProvider>
		</DashProvider>
	);
}
