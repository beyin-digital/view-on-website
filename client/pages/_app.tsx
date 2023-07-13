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
import Pixel from "@/components/Pixels/index";
import Linkedin from "@/components/Pixels/Linkedin";
import TikTokPixelLoader from "@/components/Pixels/tiktokPixel";
import Script from "next/script";
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
			<Head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<title>VIEW ON WEBSITE</title>
				<meta name="description" content={`${t("meta_desc")}`} />
				<meta name="keyword" content={`${t("meta_keyword")}`} />
				<meta name="application-name" content="VIEW ON WEBSITE" />
				<meta name="apple-mobile-web-app-title" content="VIEW ON WEBSITE" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="msapplication-config" content="/pwa/browserconfig.xml" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/pwa/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/pwa/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/pwa/favicon-16x16.png"
				/>
				<link
					rel="mask-icon"
					href="/pwa/safari-pinned-tab.svg"
					color="#171b1c"
				/>
				<meta name="msapplication-TileColor" content="#000000" />
				<meta
					name="msapplication-TileImage"
					content="/pwa/mstile-144x144.png"
				/>
				<meta name="theme-color" content="#ffffff" />
				<link rel="manifest" href="/pwa/manifest.json" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:url" content="https://viewonwebsite.com" />
				<meta name="twitter:title" content="VIEW ON WEBSITE" />
				<meta name="twitter:description" content={`${t("meta_descShort")}`} />
				<meta name="twitter:image" content="https://viewonwebsite.com" />
				<meta name="twitter:creator" content="VIEW ON WEBSITE" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="VIEW ON WEBSITE" />
				<meta property="og:description" content={`${t("meta_descShort")}`} />
				<meta property="og:site_name" content="VIEW ON WEBSITE" />
				<meta property="og:url" content="https://www.viewonwebsite.com" />
				<meta
					property="og:image"
					content="https://www.viewonwebsite.com/images/logo.svg"
				/>
				<link rel="canonical" href="https://www.viewonwebsite.com/subscribe" />

				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: "none" }}
						alt=""
						src="https://px.ads.linkedin.com/collect/?pid=5690257&fmt=gif"
					/>
				</noscript>
				{/* facebook */}

				<noscript>
					<img
						height="1"
						width="1"
						style={{ display: "none" }}
						src="https://www.facebook.com/tr?id=1429998061166129&ev=PageView&noscript=1"
					/>
				</noscript>
				{/* snapchat */}
				{/* <!-- Google tag (gtag.js) --> */}
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-0W0L6BV2WM"
				></script>
			</Head>
			<Script>
				{` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0W0L6BV2WM');`}
			</Script>
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=AW-11246193982"
			/>

			<Script id="google-tag-manager" strategy="afterInteractive">
				{`
        window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                           gtag('config', 'AW-11246193982');
      `}
			</Script>
			<Script type="text/javascript">
				{` _linkedin_partner_id = "5690257"; window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || []; window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}{" "}
			</Script>
			<Script type="text/javascript">
				{` (function(l) { if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]} var s = document.getElementsByTagName("script")[0]; var b = document.createElement("script"); b.type = "text/javascript";b.async = true; b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js"; s.parentNode.insertBefore(b, s);})(window.lintrk);`}{" "}
			</Script>
			<Script
				dangerouslySetInnerHTML={{
					__html: `!function(f,b,e,v,n,t,s)
								{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
								n.callMethod.apply(n,arguments):n.queue.push(arguments)};
								if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
								n.queue=[];t=b.createElement(e);t.async=!0;
								t.src=v;s=b.getElementsByTagName(e)[0];
								s.parentNode.insertBefore(t,s)}(window, document,'script',
								'https://connect.facebook.net/en_US/fbevents.js');
								fbq('init', '1429998061166129');
								fbq('track', 'PageView');
      `,
				}}
			/>
			<Script type="text/javascript">
				{`(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
						{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
						a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
						r.src=n;var u=t.getElementsByTagName(s)[0];
						u.parentNode.insertBefore(r,u);})(window,document,
						'https://sc-static.net/scevent.min.js');

						snaptr('init', 'b63c4e3a-23d7-46d0-9e14-c3d2a152d705', {
						'user_email': 'INSERT_USER_EMAIL'
						});

						snaptr('track', 'PAGE_VIEW');`}
			</Script>

			<div dir={isRTL ? "rtl" : "ltr"}>
				<Layout>
					<Component {...pageProps} />
					<TikTokPixelLoader />
				</Layout>
			</div>
		</CacheProvider>
	);
}
export default appWithTranslation(MyApp);
