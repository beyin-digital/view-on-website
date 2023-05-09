import "../styles/global.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { UserProvider } from "@/contexts";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: 1,
			staleTime: 5 * 1000,
		},
	},
});
export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

const combineProviders = (providers: any[]) =>
	providers.reduce((Combined: any, Provider: any) => ({ children }: any) => (
		<Combined>
			<Provider>{children}</Provider>
		</Combined>
	));

const Providers = combineProviders([UserProvider]);
export default function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;
	return (
		<CacheProvider value={emotionCache}>
			<>
				<QueryClientProvider client={queryClient}>
					<Providers>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							<Component {...pageProps} />
							<ToastContainer />
						</ThemeProvider>
					</Providers>
					<ReactQueryDevtools />
				</QueryClientProvider>
			</>
		</CacheProvider>
	);
}
