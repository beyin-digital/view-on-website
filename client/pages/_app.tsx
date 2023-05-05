import "../styles/global.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { StateContextProvider } from "@/contexts";

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

export default function MyApp(props: MyAppProps) {
	const {
		Component,
		emotionCache = clientSideEmotionCache,
		pageProps,
	} = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta
					name='viewport'
					content='initial-scale=1, width=device-width'
				/>
			</Head>
			<>
				<QueryClientProvider client={queryClient}>
					<StateContextProvider>
						<ThemeProvider theme={theme}>
							{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
							<CssBaseline />
							<>
								<Component {...pageProps} />
							</>
						</ThemeProvider>
						<ReactQueryDevtools />
					</StateContextProvider>
				</QueryClientProvider>
			</>
		</CacheProvider>
	);
}
