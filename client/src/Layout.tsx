import { GoogleOAuthProvider } from "@react-oauth/google";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import { KeywordProvider } from "@/contexts/keywordContext";
import { UserProvider } from "@/contexts/userContext";
import "react-toastify/dist/ReactToastify.css";
interface Props {
	children: React.ReactNode;
}

const combineProviders = (providers: any[]) =>
	providers.reduce((Combined: any, Provider: any) => ({ children }: any) => (
		<Combined>
			<Provider>{children}</Provider>
		</Combined>
	));

const Providers = combineProviders([UserProvider, KeywordProvider]);

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Providers>
				<GoogleOAuthProvider
					clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string}
				>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						{children}
						<ToastContainer />
					</ThemeProvider>
				</GoogleOAuthProvider>
			</Providers>
		</>
	);
};

export default Layout;
