import "../styles/global.css";

import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { UserProvider } from "@/contexts/userContext";
import "react-toastify/dist/ReactToastify.css";

import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Head from "next/head";
import { KeywordProvider } from "@/contexts/keywordContext";

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

const Providers = combineProviders([UserProvider, KeywordProvider]);

function MyApp(props: MyAppProps) {
	const { locale } = useRouter();
	const isRTL = locale === "ar";

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
				<link rel='preconnect' href='https://fonts.googleapis.com' />
			</Head>
			<div dir={isRTL ? "rtl" : "ltr"}>
				<Providers>
					<QueryClientProvider client={queryClient}>
						<ThemeProvider theme={theme}>
							<CssBaseline />
							<Component {...pageProps} />
							<ToastContainer />
						</ThemeProvider>
						<ReactQueryDevtools />
					</QueryClientProvider>
				</Providers>
			</div>
		</CacheProvider>
	);
}
export default appWithTranslation(MyApp);
