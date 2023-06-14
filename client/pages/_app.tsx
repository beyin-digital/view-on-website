import "../styles/global.css";
import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { KeywordProvider } from "@/contexts/keywordContext";
import { UserProvider } from "@/contexts/userContext";
import Seo from "@/components/Seo";
import { useTranslation } from "next-i18next";

const Layout = dynamic(() => import("@/Layout"), {
	ssr: false,
});
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";

	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<Seo
				title={t("meta_title")}
				descLong={`${t("meta_desc")}`}
				descShort={`${t("meta_descShort")}`}
				keyboard={`${t("meta_keyword")}`}
				canonical="https://vow-client.vercel.app/subscribe"
			/>

			<div dir={isRTL ? "rtl" : "ltr"}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
		</CacheProvider>
	);
}
export default appWithTranslation(MyApp);
