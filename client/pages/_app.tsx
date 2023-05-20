import "../styles/global.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";

import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Seo from "@/components/Seo";
import { KeywordProvider } from "@/contexts/keywordContext";
import { UserProvider } from "@/contexts/userContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

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
				<link
					href='https://fonts.googleapis.com/css2?family=Comforter&family=Finlandica:ital,wght@1,400;1,500;1,700&family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Sans+Arabic:wght@200;300;400;500;600;700&family=Inter:wght@200;400;500;600;700;800;900&family=League+Spartan:wght@300;400;500;600&family=Neonderthaw&family=Poppins:wght@100;300;400;500;600;700;900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Seo title='VIEW ON WEBSITE' description='' keyword='' />
			<div dir={isRTL ? "rtl" : "ltr"}>
				<Providers>
					<GoogleOAuthProvider
						clientId={
							process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string
						}
					>
						<ThemeProvider theme={theme}>
							{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
							<CssBaseline />
							<>
								<Component {...pageProps} />
								<ToastContainer />
							</>
						</ThemeProvider>
					</GoogleOAuthProvider>
				</Providers>
			</div>
		</CacheProvider>
	);
}
export default appWithTranslation(MyApp);
